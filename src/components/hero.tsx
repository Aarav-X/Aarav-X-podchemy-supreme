"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowDown, Headphones, Zap, BookOpen } from "lucide-react";

/**
 * Hero - The Singularity
 * 
 * This is the moment of first contact. The user arrives, uncertain,
 * and is greeted with a visual symphony that whispers: "You've found
 * the sanctuary you didn't know you needed." The hero doesn't just
 * display—it embraces, it welcomes, it transforms.
 */

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    const stats = [
        { label: "Episodes", value: "500+", icon: Headphones },
        { label: "Podcasts", value: "150+", icon: Zap },
        { label: "Minutes Saved", value: "50k+", icon: BookOpen },
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Radial gradient glow */}
                <div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
                    style={{
                        background: "radial-gradient(circle at center, hsl(270 70% 40% / 0.15), transparent 70%)",
                    }}
                />
            </div>

            <motion.div
                style={{ y, opacity, scale }}
                className="relative container mx-auto px-6 text-center"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-300">Your Podcast Knowledge Companion</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    style={{ fontFamily: "var(--font-outfit)" }}
                >
                    <span className="text-white">Insightful notes from</span>
                    <br />
                    <span
                        className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient"
                        style={{ backgroundSize: "200% 200%" }}
                    >
                        podcasts you love
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Skip the filler, get to the wisdom. We transform hours of podcast content
                    into beautifully curated notes, key takeaways, and actionable insights.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <motion.button
                        className="group relative px-8 py-4 rounded-2xl font-medium text-white overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(200 90% 50%))",
                        }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 0 40px hsl(270 75% 55% / 0.5)",
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Explore Episodes
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                        />
                    </motion.button>

                    <motion.button
                        className="px-8 py-4 rounded-2xl font-medium text-neutral-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Subscribe to Weekly
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                        >
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <stat.icon className="w-5 h-5 text-purple-400" />
                                <span className="text-3xl md:text-4xl font-bold text-white">
                                    {stat.value}
                                </span>
                            </div>
                            <p className="text-sm text-neutral-500">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.div
                        className="flex flex-col items-center gap-2 text-neutral-500"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <span className="text-xs uppercase tracking-wider">Scroll</span>
                        <ArrowDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Wave decoration at bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
                        fill="hsl(240 20% 4%)"
                        fillOpacity="0.5"
                    />
                </svg>
            </div>
        </section>
    );
}
