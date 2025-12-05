"use client";

import { motion } from "framer-motion";

/**
 * Loading - The Pause Between Thoughts
 * 
 * This is not dead time—it's anticipation made visual.
 * The loading state should feel like a deep breath before
 * something wonderful happens.
 */

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                {/* Animated Logo */}
                <motion.div
                    className="relative w-20 h-20 mx-auto mb-8"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Outer ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.2, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Inner gradient circle */}
                    <div
                        className="absolute inset-2 rounded-full"
                        style={{
                            background: "conic-gradient(from 0deg, hsl(270 75% 55%), hsl(185 100% 45%), hsl(270 75% 55%))",
                            mask: "radial-gradient(transparent 60%, black 60%)",
                            WebkitMask: "radial-gradient(transparent 60%, black 60%)",
                        }}
                    />

                    {/* Center dot */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                        animate={{
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                {/* Text */}
                <motion.p
                    className="text-neutral-400"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    Loading insights...
                </motion.p>
            </div>
        </div>
    );
}
