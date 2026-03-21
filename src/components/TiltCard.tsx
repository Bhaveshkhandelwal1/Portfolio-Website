"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -8;
        const rotY = ((x - cx) / cx) * 8;
        setRotate({ x: rotX, y: rotY });
        setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: rotate.x,
                rotateY: rotate.y,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 25 }}
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            className={`relative overflow-hidden rounded-2xl transition-shadow duration-300 ${hovered ? "shadow-[0_8px_30px_rgba(59,130,246,0.35)]" : ""
                } ${className}`}
        >
            {/* Dynamic glow highlight */}
            {hovered && (
                <div
                    className="pointer-events-none absolute inset-0 z-10 opacity-20 rounded-2xl transition-opacity duration-200"
                    style={{
                        background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(59,130,246,0.6) 0%, transparent 65%)`,
                    }}
                />
            )}
            {children}
        </motion.div>
    );
}
