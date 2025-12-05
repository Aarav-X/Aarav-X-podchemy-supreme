"use client";

import { motion } from "framer-motion";
import { Headphones, Sparkles, Users, Zap, Heart, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * About Page - The Origin Story
 * 
 * This is where we reveal the heart behind the technology,
 * the passion behind the pixels. Every great platform has
 * a story, and this is ours.
 */

const values = [
    {
        icon: Target,
        title: "Curated Excellence",
        description: "We don't just summarize—we distill. Every note is carefully crafted to capture the essence of hours of conversation."
    },
    {
        icon: Zap,
        title: "Save Your Time",
        description: "Get the insights in minutes that would take hours to listen. Perfect for busy professionals who value efficiency."
    },
    {
        icon: Users,
        title: "Community First",
        description: "Built by podcast lovers, for podcast lovers. We understand what makes a great insight because we live it."
    },
    {
        icon: Heart,
        title: "Passion Driven",
        description: "This isn't just a business—it's a mission to democratize knowledge and make wisdom accessible to all."
    }
];

const stats = [
    { value: "500+", label: "Episodes Covered" },
    { value: "150+", label: "Podcasts Featured" },
    { value: "50k+", label: "Minutes Saved" },
    { value: "12k+", label: "Weekly Readers" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-28 pb-20">
            <div className="container mx-auto px-6">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
                        style={{
                            background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(185 100% 45%))",
                        }}
                    >
                        <Headphones className="w-10 h-10 text-white" />
                    </motion.div>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        About Podchemy
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        We transform hours of podcast conversations into beautifully crafted notes
                        and actionable insights. Because wisdom should be accessible, not time-consuming.
                    </p>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative max-w-4xl mx-auto mb-24"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 rounded-3xl blur-2xl" />
                    <div className="relative p-8 md:p-12 rounded-3xl bg-neutral-900/50 border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="w-6 h-6 text-purple-400" />
                            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
                        </div>
                        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                            In a world overflowing with content, finding signal in the noise has become
                            increasingly difficult. Podcasts are one of the richest sources of wisdom,
                            featuring conversations with world-class thinkers, entrepreneurs, and experts.
                        </p>
                        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                            But who has 3 hours to listen to every episode? That's where Podchemy comes in.
                            We believe that everyone deserves access to the best ideas, regardless of how
                            much time they have.
                        </p>
                        <p className="text-lg text-neutral-300 leading-relaxed">
                            Our team meticulously listens, analyzes, and distills each episode into
                            comprehensive notes that capture not just the facts, but the nuances,
                            the surprising insights, and the actionable takeaways.
                        </p>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-neutral-900/30 border border-white/5"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-neutral-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: "var(--font-outfit)" }}>
                        What We Stand For
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-purple-500/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <value.icon className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to dive in?</h2>
                    <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                        Start exploring our collection of podcast notes and join thousands
                        of curious minds who learn something new every week.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/episodes">
                            <motion.button
                                className="flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white"
                                style={{
                                    background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(200 90% 50%))",
                                }}
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(270 75% 55% / 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Browse Episodes
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <Link href="/">
                            <motion.button
                                className="px-8 py-4 rounded-xl font-medium text-neutral-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Back to Home
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
