"use client";

import React from "react";

const TECH_LOGOS = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟩" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "MongoDB", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Git", icon: "🔀" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "TypeScript", icon: "🔷" },
];

export default function InfiniteLogoSlider() {
    const doubledLogos = [...TECH_LOGOS, ...TECH_LOGOS];

    return (
        <div className="relative py-8 overflow-hidden">
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

            <div className="slider-track gap-6">
                {doubledLogos.map((tech, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border border-border/50 hover:border-primary/60 hover:shadow-[0_0_14px_rgba(59,130,246,0.3)] transition-all duration-200 cursor-default select-none"
                    >
                        <span className="text-xl leading-none">{tech.icon}</span>
                        <span className="text-sm font-semibold whitespace-nowrap">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
