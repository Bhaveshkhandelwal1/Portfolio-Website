"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";

interface Stat {
    value: number;
    suffix: string;
    label: string;
    emoji: string;
    color: string;
}

const stats: Stat[] = [
    { value: 200, suffix: "+", label: "DSA Problems Solved", emoji: "🧠", color: "from-blue-500/20 to-blue-600/5" },
    { value: 5, suffix: "+", label: "Projects Built", emoji: "🚀", color: "from-purple-500/20 to-purple-600/5" },
    { value: 1, suffix: "", label: "Internship @ Samsung", emoji: "💼", color: "from-green-500/20 to-green-600/5" },
    { value: 8.66, suffix: "", label: "CGPA / 10", emoji: "🎓", color: "from-amber-500/20 to-amber-600/5" },
];

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
    const motionVal = useMotionValue(0);
    const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
    const displayRef = useRef<HTMLSpanElement>(null);
    const triggered = useRef(false);

    // Trigger spring when in view
    if (inView && !triggered.current) {
        triggered.current = true;
        motionVal.set(target);
    }

    useAnimationFrame(() => {
        if (!displayRef.current) return;
        const v = spring.get();
        displayRef.current.textContent =
            target % 1 !== 0 ? v.toFixed(2) + suffix : Math.floor(v) + suffix;
    });

    return <span ref={displayRef}>0{suffix}</span>;
}

export default function StatsCounter() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="text-center mb-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    By the numbers
                </span>
                <h2 className="text-3xl font-bold tracking-tight mt-1">Stats &amp; Impact</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                        className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${stat.color} p-6 flex flex-col items-center text-center gap-2 group hover:border-primary/40 hover:shadow-[0_4px_24px_rgba(59,130,246,0.15)] transition-all duration-300`}
                    >
                        <span className="text-3xl">{stat.emoji}</span>
                        <span className="text-4xl font-black gradient-text">
                            <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground leading-snug">{stat.label}</span>
                        {/* Subtle corner glow */}
                        <div className="pointer-events-none absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
