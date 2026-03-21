"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 140,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-[9999] h-[3px] origin-left"
            style={{
                scaleX,
                background: "linear-gradient(90deg, #3b82f6 0%, #38bdf8 100%)",
            }}
        />
    );
}
