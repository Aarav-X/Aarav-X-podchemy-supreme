"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
    ArrowLeft,
    Clock,
    Eye,
    Share2,
    Bookmark,
    Copy,
    Check,
    Play,
    Pause,
    ChevronDown,
    ChevronUp,
    ExternalLink,
    Twitter,
    Linkedin,
    Link as LinkIcon
} from "lucide-react";
import { episodes } from "@/data/episodes";

/**
 * Episode Detail Page - The Sanctuary of Sound
 * 
 * This is where the seeker becomes the learner. Each episode page
 * is a complete world unto itself—a carefully crafted environment
 * that transforms raw information into digestible wisdom.
 */

export default function EpisodePage() {
    const { id } = useParams();
    const [isPlaying, setIsPlaying] = useState(false);
    const [copied, setCopied] = useState(false);
    const [expandedSection, setExpandedSection] = useState<string | null>("takeaways");
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const episode = episodes.find(ep => ep.id === id);

    if (!episode) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Episode Not Found</h1>
                    <p className="text-neutral-400 mb-8">The episode you're looking for doesn't exist.</p>
                    <Link href="/" className="btn btn-primary">
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    // Mock transcript sections
    const transcriptSections = [
        {
            id: "intro",
            title: "Introduction",
            time: "00:00:00",
            content: "Welcome to another episode where we dive deep into fascinating conversations with remarkable minds. Today's guest brings a unique perspective that will challenge how you think about success, creativity, and personal growth."
        },
        {
            id: "background",
            title: "Guest Background",
            time: "00:05:30",
            content: "Our guest shares their journey from humble beginnings to becoming a thought leader in their field. The path wasn't linear—it was filled with pivots, failures, and unexpected opportunities that shaped their worldview."
        },
        {
            id: "key-insights",
            title: "Key Insights & Frameworks",
            time: "00:18:45",
            content: "We explore the mental models and frameworks that have been most impactful. From first-principles thinking to the power of inversion, these tools can be applied across domains to solve complex problems."
        },
        {
            id: "rapid-fire",
            title: "Rapid Fire Questions",
            time: "00:45:20",
            content: "In this segment, we cover books that changed their life, daily habits that compound over time, and advice they'd give to their younger self. Some surprising answers emerge."
        },
        {
            id: "closing",
            title: "Closing Thoughts",
            time: "00:58:00",
            content: "We wrap up with actionable takeaways listeners can implement today. The guest shares resources for going deeper and how to connect with their work."
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                {/* Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link href="/">
                        <motion.span
                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                            whileHover={{ x: -4 }}
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Episodes
                        </motion.span>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Episode Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-8"
                        >
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {episode.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Podcast Info */}
                            <div className="flex items-center gap-4 mb-4">
                                <motion.img
                                    src={episode.podcastLogo}
                                    alt={episode.podcastName}
                                    className="w-14 h-14 rounded-xl object-cover"
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                />
                                <div>
                                    <p className="text-purple-400 font-medium">{episode.podcastName}</p>
                                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                                        <span>{episode.date}</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {episode.readTime} min read
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h1
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                                style={{ fontFamily: "var(--font-outfit)" }}
                            >
                                {episode.title}
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                {episode.description}
                            </p>
                        </motion.div>

                        {/* Action Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center gap-3 mb-10 pb-8 border-b border-white/10"
                        >
                            {/* Play Button */}
                            <motion.button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-white"
                                style={{
                                    background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(200 90% 50%))",
                                }}
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(270 75% 55% / 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <motion.div
                                    animate={{ rotate: isPlaying ? 0 : 0 }}
                                >
                                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                                </motion.div>
                                {isPlaying ? "Pause" : "Play Episode"}
                            </motion.button>

                            {/* Share Button */}
                            <div className="relative">
                                <motion.button
                                    onClick={() => setIsShareOpen(!isShareOpen)}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Share2 className="w-4 h-4" />
                                    Share
                                </motion.button>

                                <AnimatePresence>
                                    {isShareOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full mt-2 left-0 w-48 bg-neutral-900 rounded-xl border border-white/10 shadow-xl overflow-hidden z-10"
                                        >
                                            <button
                                                onClick={handleCopyLink}
                                                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 hover:bg-white/5 hover:text-white transition-colors"
                                            >
                                                {copied ? <Check className="w-4 h-4 text-green-400" /> : <LinkIcon className="w-4 h-4" />}
                                                {copied ? "Copied!" : "Copy Link"}
                                            </button>
                                            <a
                                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(episode.title)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 hover:bg-white/5 hover:text-white transition-colors"
                                            >
                                                <Twitter className="w-4 h-4" />
                                                Share on Twitter
                                            </a>
                                            <a
                                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 hover:bg-white/5 hover:text-white transition-colors"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                                Share on LinkedIn
                                            </a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Bookmark Button */}
                            <motion.button
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all ${isBookmarked
                                        ? "bg-purple-500/20 border-purple-500/30 text-purple-300"
                                        : "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                                {isBookmarked ? "Saved" : "Save"}
                            </motion.button>
                        </motion.div>

                        {/* Key Takeaways */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-10"
                        >
                            <button
                                onClick={() => toggleSection("takeaways")}
                                className="w-full flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/5 border border-purple-500/20 hover:border-purple-500/30 transition-all"
                            >
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                        ✨
                                    </span>
                                    Key Takeaways
                                </h2>
                                {expandedSection === "takeaways" ? (
                                    <ChevronUp className="w-5 h-5 text-purple-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-purple-400" />
                                )}
                            </button>

                            <AnimatePresence>
                                {expandedSection === "takeaways" && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="p-5 space-y-4">
                                            {episode.keyTakeaways.map((takeaway, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-sm flex items-center justify-center font-medium">
                                                        {index + 1}
                                                    </span>
                                                    <span className="text-neutral-300 leading-relaxed">
                                                        {takeaway}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Transcript Sections */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4"
                        >
                            <h2 className="text-xl font-semibold text-white mb-6">Episode Notes</h2>

                            {transcriptSections.map((section, index) => (
                                <motion.div
                                    key={section.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="group"
                                >
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className="w-full flex items-center justify-between p-4 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-purple-400 font-mono bg-purple-500/10 px-2 py-1 rounded">
                                                {section.time}
                                            </span>
                                            <h3 className="text-white font-medium text-left">{section.title}</h3>
                                        </div>
                                        {expandedSection === section.id ? (
                                            <ChevronUp className="w-4 h-4 text-neutral-400" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-neutral-400" />
                                        )}
                                    </button>

                                    <AnimatePresence>
                                        {expandedSection === section.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-4 pl-20 text-neutral-400 leading-relaxed">
                                                    {section.content}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-28 space-y-6">
                            {/* In This Episode */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">In This Episode</h3>
                                <nav className="space-y-2">
                                    {transcriptSections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => toggleSection(section.id)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${expandedSection === section.id
                                                    ? "bg-purple-500/10 text-purple-300 border-l-2 border-purple-500"
                                                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-neutral-400 text-sm">Views</span>
                                        <span className="text-white font-medium flex items-center gap-1">
                                            <Eye className="w-4 h-4 text-purple-400" />
                                            {episode.views?.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-neutral-400 text-sm">Read Time</span>
                                        <span className="text-white font-medium flex items-center gap-1">
                                            <Clock className="w-4 h-4 text-purple-400" />
                                            {episode.readTime} min
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Listen on */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">Listen On</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {["Spotify", "Apple", "YouTube", "Website"].map((platform) => (
                                        <motion.a
                                            key={platform}
                                            href="#"
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-neutral-400 text-sm hover:bg-white/10 hover:text-white transition-all"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <ExternalLink className="w-3 h-3" />
                                            {platform}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Click outside to close share menu */}
            {isShareOpen && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setIsShareOpen(false)}
                />
            )}
        </div>
    );
}
