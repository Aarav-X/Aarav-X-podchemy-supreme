"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Flame } from "lucide-react";
import Link from "next/link";
import { EpisodeCard } from "./episode-card";
import type { Episode } from "@/data/episodes";

/**
 * EpisodesSection - The Content Cathedral
 * 
 * A sacred space where knowledge is displayed in its most
 * beautiful form. Each episode section breathes with purpose,
 * guiding seekers to the insights they didn't know they needed.
 */

interface EpisodesSectionProps {
    title: string;
    subtitle?: string;
    episodes: Episode[];
    icon?: React.ReactNode;
    variant?: "grid" | "featured" | "list";
    showViewAll?: boolean;
    viewAllLink?: string;
}

export function EpisodesSection({
    title,
    subtitle,
    episodes,
    icon,
    variant = "grid",
    showViewAll = true,
    viewAllLink = "/episodes",
}: EpisodesSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            {icon && (
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                    {icon}
                                </div>
                            )}
                            <h2
                                className="text-3xl md:text-4xl font-bold text-white"
                                style={{ fontFamily: "var(--font-outfit)" }}
                            >
                                {title}
                            </h2>
                        </div>
                        {subtitle && (
                            <p className="text-neutral-400 text-lg max-w-xl">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {showViewAll && (
                        <Link href={viewAllLink}>
                            <motion.div
                                className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group"
                                whileHover={{ x: 4 }}
                            >
                                View all episodes
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                    )}
                </motion.div>

                {/* Episodes Grid */}
                {variant === "grid" && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {episodes.map((episode, index) => (
                            <EpisodeCard
                                key={episode.id}
                                episode={episode}
                                index={index}
                                variant="default"
                            />
                        ))}
                    </motion.div>
                )}

                {/* Featured Layout */}
                {variant === "featured" && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-6"
                    >
                        {episodes.map((episode, index) => (
                            <EpisodeCard
                                key={episode.id}
                                episode={episode}
                                index={index}
                                variant="featured"
                            />
                        ))}
                    </motion.div>
                )}

                {/* List Layout (for popular) */}
                {variant === "list" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-2 bg-neutral-900/30 rounded-2xl border border-white/5 p-4"
                        >
                            {episodes.slice(0, Math.ceil(episodes.length / 2)).map((episode, index) => (
                                <EpisodeCard
                                    key={episode.id}
                                    episode={episode}
                                    index={index}
                                    variant="compact"
                                />
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-2 bg-neutral-900/30 rounded-2xl border border-white/5 p-4"
                        >
                            {episodes.slice(Math.ceil(episodes.length / 2)).map((episode, index) => (
                                <EpisodeCard
                                    key={episode.id}
                                    episode={episode}
                                    index={index + Math.ceil(episodes.length / 2)}
                                    variant="compact"
                                />
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}

// Pre-configured popular episodes section
export function PopularEpisodesSection({ episodes }: { episodes: Episode[] }) {
    return (
        <EpisodesSection
            title="Most Popular"
            subtitle="The episodes our community can't stop reading"
            episodes={episodes}
            icon={<TrendingUp className="w-5 h-5" />}
            variant="list"
            viewAllLink="/popular"
        />
    );
}

// Pre-configured recent episodes section
export function RecentEpisodesSection({ episodes }: { episodes: Episode[] }) {
    return (
        <EpisodesSection
            title="Recent Episodes"
            subtitle="Fresh insights from this week's best conversations"
            episodes={episodes}
            icon={<Clock className="w-5 h-5" />}
            variant="grid"
            viewAllLink="/episodes"
        />
    );
}

// Pre-configured featured episodes section
export function FeaturedEpisodesSection({ episodes }: { episodes: Episode[] }) {
    return (
        <EpisodesSection
            title="Featured"
            subtitle="Hand-picked episodes that defined conversations"
            episodes={episodes}
            icon={<Flame className="w-5 h-5" />}
            variant="featured"
            showViewAll={false}
        />
    );
}
