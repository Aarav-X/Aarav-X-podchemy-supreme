"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { EpisodeCard } from "@/components/episode-card";
import { episodes } from "@/data/episodes";

/**
 * Episodes Page - The Archive of Wisdom
 * 
 * Every conversation ever captured, organized and searchable.
 * This is where seekers become researchers, diving deep into
 * the accumulated wisdom of countless hours of dialogue.
 */

const allTags = Array.from(new Set(episodes.flatMap(ep => ep.tags)));

export default function EpisodesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const filteredEpisodes = episodes.filter(episode => {
        const matchesSearch =
            episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            episode.podcastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            episode.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesTags =
            selectedTags.length === 0 ||
            selectedTags.some(tag => episode.tags.includes(tag));

        return matchesSearch && matchesTags;
    });

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    return (
        <div className="min-h-screen pt-28 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        All Episodes
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Explore our complete collection of podcast notes and insights.
                        Search, filter, and discover wisdom from the world's best conversations.
                    </p>
                </motion.div>

                {/* Search & Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 space-y-6"
                >
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search episodes, podcasts, or topics..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-neutral-900/50 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            />
                        </div>
                    </div>

                    {/* Tags & View Toggle */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-2">
                            <Filter className="w-4 h-4 text-neutral-500" />
                            {allTags.map((tag) => (
                                <motion.button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-3 py-1.5 text-sm rounded-full transition-all ${selectedTags.includes(tag)
                                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                            : "bg-white/5 text-neutral-400 border border-white/10 hover:bg-white/10 hover:text-white"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tag}
                                </motion.button>
                            ))}
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center gap-1 p-1 rounded-lg bg-neutral-900/50 border border-white/10">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-md transition-all ${viewMode === "grid"
                                        ? "bg-white/10 text-white"
                                        : "text-neutral-500 hover:text-white"
                                    }`}
                            >
                                <Grid className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded-md transition-all ${viewMode === "list"
                                        ? "bg-white/10 text-white"
                                        : "text-neutral-500 hover:text-white"
                                    }`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Results Count */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm text-neutral-500 mb-6"
                >
                    Showing {filteredEpisodes.length} of {episodes.length} episodes
                </motion.p>

                {/* Episodes Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={
                        viewMode === "grid"
                            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            : "space-y-4"
                    }
                >
                    {filteredEpisodes.map((episode, index) => (
                        <EpisodeCard
                            key={episode.id}
                            episode={episode}
                            index={index}
                            variant={viewMode === "list" ? "featured" : "default"}
                        />
                    ))}
                </motion.div>

                {/* No Results */}
                {filteredEpisodes.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                    >
                        <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-neutral-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">No episodes found</h3>
                        <p className="text-neutral-400">
                            Try adjusting your search or filters
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
