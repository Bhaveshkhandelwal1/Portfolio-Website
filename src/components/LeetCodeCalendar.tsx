"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LeetCodeData {
    userCalendar: { submissionCalendar: string };
    submitStatsGlobal: { acSubmissionNum: { difficulty: string; count: number }[] };
}

type DayMap = Record<string, number>; // timestamp -> count

const COLS = 53;
const LEVELS = ["#1a1a2e", "#0e3a6e", "#1a5fb4", "#3584e4", "#62a0ea"];

function getLevel(count: number) {
    if (count === 0) return 0;
    if (count <= 1) return 1;
    if (count <= 3) return 2;
    if (count <= 6) return 3;
    return 4;
}

function buildGrid(dayMap: DayMap) {
    const grid: { date: Date; count: number }[][] = [];

    // Compute today in UTC
    const nowUtc = new Date();
    const todayUtc = Date.UTC(nowUtc.getUTCFullYear(), nowUtc.getUTCMonth(), nowUtc.getUTCDate());

    // Start from 52 weeks ago (Sunday-aligned), in UTC
    let startUtc = todayUtc - (COLS * 7 - 1) * 86400 * 1000;
    // Align to Sunday (day 0)
    const startDay = new Date(startUtc).getUTCDay();
    startUtc -= startDay * 86400 * 1000;

    for (let col = 0; col < COLS; col++) {
        const week: { date: Date; count: number }[] = [];
        for (let row = 0; row < 7; row++) {
            const dayUtcMs = startUtc + (col * 7 + row) * 86400 * 1000;
            const date = new Date(dayUtcMs);
            // LeetCode stores UTC midnight as unix seconds
            const ts = String(dayUtcMs / 1000);
            week.push({ date, count: dayMap[ts] ?? 0 });
        }
        grid.push(week);
    }
    return grid;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function LeetCodeCalendar() {
    const [data, setData] = useState<LeetCodeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

    useEffect(() => {
        fetch("/api/leetcode")
            .then((r) => r.json())
            .then((d) => { setData(d); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return <div className="h-40 animate-pulse rounded-xl bg-muted" />;
    }

    if (!data) {
        return (
            <div className="text-center text-muted-foreground py-8 text-sm">
                Could not load LeetCode data. Check back later.
            </div>
        );
    }

    const dayMap: DayMap = JSON.parse(data.userCalendar.submissionCalendar);
    const grid = buildGrid(dayMap);

    const stats = data.submitStatsGlobal.acSubmissionNum;
    const easy = stats.find((s) => s.difficulty === "Easy")?.count ?? 0;
    const medium = stats.find((s) => s.difficulty === "Medium")?.count ?? 0;
    const hard = stats.find((s) => s.difficulty === "Hard")?.count ?? 0;
    const total = easy + medium + hard;

    // Month labels: find first column of each month
    const monthLabels: { label: string; col: number }[] = [];
    let lastMonth = -1;
    grid.forEach((week, ci) => {
        const m = week[0].date.getMonth();
        if (m !== lastMonth) { monthLabels.push({ label: MONTHS[m], col: ci }); lastMonth = m; }
    });

    const BLOCK = 13; // px per block (including gap)

    return (
        <div className="space-y-6">
            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
                <StatPill label="Total Solved" value={total} color="text-primary" />
                <StatPill label="Easy" value={easy} color="text-green-400" />
                <StatPill label="Medium" value={medium} color="text-yellow-400" />
                <StatPill label="Hard" value={hard} color="text-red-400" />
            </div>

            {/* Heatmap */}
            <div className="overflow-x-auto">
                <div className="relative" style={{ minWidth: COLS * BLOCK + 32 }}>
                    {/* Month labels */}
                    <div className="flex text-xs text-muted-foreground mb-1 ml-8">
                        {monthLabels.map(({ label, col }) => (
                            <div key={col} className="absolute text-xs text-muted-foreground" style={{ left: col * BLOCK + 32 }}>
                                {label}
                            </div>
                        ))}
                    </div>

                    <div className="flex mt-4 gap-0.5">
                        {/* Day labels */}
                        <div className="flex flex-col gap-0.5 text-[10px] text-muted-foreground mr-1">
                            {DAYS.map((d, i) => (
                                <div key={d} className="h-[11px] leading-[11px]" style={{ visibility: i % 2 === 0 ? "hidden" : "visible" }}>
                                    {d}
                                </div>
                            ))}
                        </div>

                        {/* Heatmap grid */}
                        {grid.map((week, ci) => (
                            <div key={ci} className="flex flex-col gap-0.5">
                                {week.map(({ date, count }, ri) => {
                                    const level = getLevel(count);
                                    const isFuture = date.getTime() > Date.now();
                                    return (
                                        <motion.div
                                            key={ri}
                                            className="rounded-[3px] cursor-pointer transition-transform hover:scale-110"
                                            style={{
                                                width: 11, height: 11,
                                                background: isFuture ? LEVELS[0] : LEVELS[level],
                                                opacity: isFuture ? 0.3 : 1,
                                            }}
                                            onMouseEnter={(e) => {
                                                const rect = (e.target as HTMLElement).getBoundingClientRect();
                                                setTooltip({
                                                    text: `${count} submission${count !== 1 ? "s" : ""} on ${date.toDateString()}`,
                                                    x: rect.left,
                                                    y: rect.top - 32,
                                                });
                                            }}
                                            onMouseLeave={() => setTooltip(null)}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                        <span>Less</span>
                        {LEVELS.map((c, i) => (
                            <div key={i} className="rounded-[3px]" style={{ width: 11, height: 11, background: c }} />
                        ))}
                        <span>More</span>
                    </div>
                </div>
            </div>

            {/* Floating tooltip */}
            {tooltip && (
                <div
                    className="fixed z-50 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-popover border border-border shadow-lg pointer-events-none"
                    style={{ left: tooltip.x, top: tooltip.y }}
                >
                    {tooltip.text}
                </div>
            )}
        </div>
    );
}

function StatPill({ label, value, color }: { label: string; value: number; color: string }) {
    return (
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-border/60">
            <span className={`text-xl font-bold tabular-nums ${color}`}>{value}</span>
            <span className="text-xs text-muted-foreground font-medium">{label}</span>
        </div>
    );
}
