"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Eye, Play, ArrowRight } from "lucide-react";
import type { Episode } from "@/data/episodes";

/**
 * EpisodeCard - The Content Vessel
 * 
 * Each card is a gateway to enlightenment, a crystallized moment
 * of human conversation waiting to be explored. The card breathes,
 * responds, and invites with the warmth of a trusted curator.
 */

interface EpisodeCardProps {
    episode: Episode;
    index?: number;
    variant?: "default" | "featured" | "compact";
}

export function EpisodeCard({ episode, index = 0, variant = "default" }: EpisodeCardProps) {
    const formatViews = (views?: number) => {
        if (!views) return null;
        if (views >= 1000) return `${(views / 1000).toFixed(1)}k`;
        return views.toString();
    };

    if (variant === "featured") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
                className="group relative"
            >
                <Link href={`/episode/${episode.id}`}>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/10 hover:border-purple-500/30 transition-all duration-500">
                        {/* Glow effect on hover */}
                        <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(270 70% 50% / 0.1), transparent 40%)",
                            }}
                        />

                        <div className="p-8 lg:p-10">
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                {/* Podcast Logo */}
                                <motion.div
                                    className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden flex-shrink-0"
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <img
                                        src={episode.podcastLogo}
                                        alt={episode.podcastName}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        whileHover={{ scale: 1 }}
                                    >
                                        <motion.div
                                            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                        </motion.div>
                                    </motion.div>
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {episode.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {episode.featured && (
                                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30">
                                                ✨ Featured
                                            </span>
                                        )}
                                    </div>

                                    {/* Podcast Name */}
                                    <p className="text-sm text-purple-400 font-medium mb-2">
                                        {episode.podcastName}
                                    </p>

                                    {/* Title */}
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                                        {episode.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-neutral-400 mb-5 line-clamp-2 lg:line-clamp-3 leading-relaxed">
                                        {episode.description}
                                    </p>

                                    {/* Key Takeaways Preview */}
                                    <div className="mb-6">
                                        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                                            Key Takeaways
                                        </p>
                                        <ul className="space-y-1">
                                            {episode.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                                                <li key={i} className="text-sm text-neutral-300 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                                    {takeaway}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Meta & CTA */}
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                                            <span>{episode.date}</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {episode.readTime} min read
                                            </span>
                                            {episode.views && (
                                                <span className="flex items-center gap-1">
                                                    <Eye className="w-4 h-4" />
                                                    {formatViews(episode.views)} views
                                                </span>
                                            )}
                                        </div>
                                        <motion.span
                                            className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 group-hover:text-purple-300"
                                            whileHover={{ x: 5 }}
                                        >
                                            Read Notes
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom gradient accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </Link>
            </motion.div>
        );
    }

    if (variant === "compact") {
        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
            >
                <Link href={`/episode/${episode.id}`}>
                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                        <span className="text-2xl font-bold text-neutral-700 w-8">
                            {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                                src={episode.podcastLogo}
                                alt={episode.podcastName}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-purple-400 mb-0.5">{episode.podcastName}</p>
                            <h4 className="text-sm font-medium text-white truncate group-hover:text-purple-200 transition-colors">
                                {episode.title}
                            </h4>
                        </div>
                        <div className="text-xs text-neutral-500 flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {formatViews(episode.views)}
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    }

    // Default variant
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.08,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            className="group"
        >
            <Link href={`/episode/${episode.id}`}>
                <div className="relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-purple-500/10">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-purple-500/5 to-transparent" />

                    <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                            {/* Podcast Logo */}
                            <motion.div
                                className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={episode.podcastLogo}
                                    alt={episode.podcastName}
                                    className="w-full h-full object-cover"
                                />
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <Play className="w-5 h-5 text-white" fill="currentColor" />
                                </motion.div>
                            </motion.div>

                            {/* Podcast Name & Tags */}
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-purple-400 font-medium mb-1">
                                    {episode.podcastName}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                    {episode.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/5 text-neutral-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-200 transition-colors duration-300">
                            {episode.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
                            {episode.description}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-neutral-500">
                            <span>{episode.date}</span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {episode.readTime} min
                            </span>
                        </div>
                    </div>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
            </Link>
        </motion.div>
    );
}
