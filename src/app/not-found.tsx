"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search, ArrowLeft, Headphones } from "lucide-react";

/**
 * Not Found - The Unexpected Detour
 * 
 * Getting lost shouldn't feel bad. This page transforms a
 * potential frustration into a moment of delight, offering
 * a gentle hand back to the path of discovery.
 */

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                {/* Animated 404 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative mb-8"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    {/* 404 Text */}
                    <motion.h1
                        className="relative text-[150px] md:text-[200px] font-bold leading-none text-transparent"
                        style={{
                            WebkitTextStroke: "2px hsl(270 50% 30%)",
                            fontFamily: "var(--font-outfit)",
                        }}
                        animate={{
                            textShadow: [
                                "0 0 20px hsl(270 70% 50% / 0.3)",
                                "0 0 40px hsl(270 70% 50% / 0.5)",
                                "0 0 20px hsl(270 70% 50% / 0.3)",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        404
                    </motion.h1>

                    {/* Floating headphones */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div
                            className="w-24 h-24 rounded-2xl flex items-center justify-center"
                            style={{
                                background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(185 100% 45%))",
                            }}
                        >
                            <Headphones className="w-12 h-12 text-white" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                        Episode Not Found
                    </h2>
                    <p className="text-lg text-neutral-400 mb-8 max-w-md mx-auto">
                        Looks like this episode wandered off into the void.
                        Don't worry—there are plenty more insights waiting for you.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/">
                        <motion.button
                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white"
                            style={{
                                background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(200 90% 50%))",
                            }}
                            whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(270 75% 55% / 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Home className="w-5 h-5" />
                            Go Home
                        </motion.button>
                    </Link>

                    <Link href="/episodes">
                        <motion.button
                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-neutral-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Search className="w-5 h-5" />
                            Browse Episodes
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Fun easter egg */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-sm text-neutral-600"
                >
                    Psst... press{" "}
                    <kbd className="px-2 py-1 rounded bg-neutral-800 text-neutral-400">⌘ K</kbd>
                    {" "}to search from anywhere
                </motion.p>
            </div>
        </div>
    );
}
