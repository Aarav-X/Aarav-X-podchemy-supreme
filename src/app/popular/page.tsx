"use client";

import { motion } from "framer-motion";
import { TrendingUp, Flame, Crown, Medal } from "lucide-react";
import { EpisodeCard } from "@/components/episode-card";
import { popularEpisodes, episodes } from "@/data/episodes";

/**
 * Popular Page - The Hall of Fame
 * 
 * Where the most beloved wisdom resides. These are the episodes
 * that have captured the hearts and minds of our community,
 * the conversations that keep giving.
 */

const sortedByViews = [...episodes].sort((a, b) => (b.views || 0) - (a.views || 0));
const topEpisode = sortedByViews[0];
const runnerUps = sortedByViews.slice(1, 4);
const restOfPopular = sortedByViews.slice(4);

export default function PopularPage() {
    return (
        <div className="min-h-screen pt-28 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 mb-6"
                    >
                        <TrendingUp className="w-8 h-8 text-amber-400" />
                    </motion.div>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        Most Popular
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        The episodes our community can't stop reading. These conversations
                        have resonated deeply with thousands of curious minds.
                    </p>
                </motion.div>

                {/* Featured #1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30">
                            <Crown className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-white">#1 Most Popular</h2>
                            <p className="text-sm text-neutral-400">The crown jewel of our collection</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-[2rem] blur-xl opacity-50" />
                        <div className="relative">
                            <EpisodeCard episode={topEpisode} variant="featured" index={0} />
                        </div>
                    </div>
                </motion.div>

                {/* Top 3 Runner-ups */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-800 border border-white/10">
                            <Medal className="w-5 h-5 text-neutral-400" />
                        </div>
                        <h2 className="text-lg font-semibold text-white">Runner-ups</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {runnerUps.map((episode, index) => (
                            <motion.div
                                key={episode.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-sm font-bold text-white z-10">
                                    #{index + 2}
                                </div>
                                <EpisodeCard episode={episode} index={index} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Rest of Popular */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-800 border border-white/10">
                            <Flame className="w-5 h-5 text-orange-400" />
                        </div>
                        <h2 className="text-lg font-semibold text-white">Trending Episodes</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {restOfPopular.map((episode, index) => (
                            <EpisodeCard
                                key={episode.id}
                                episode={episode}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
