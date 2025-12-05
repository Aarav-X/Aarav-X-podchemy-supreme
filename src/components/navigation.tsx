"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Menu, X, Sparkles, Headphones } from "lucide-react";

/**
 * Navigation - The Omni-Bar
 * 
 * Not merely a navigation component, but the nervous system of the entire
 * organism. It anticipates desire, responds with grace, and guides users
 * through the sonic sanctuary with the gentleness of a trusted friend.
 */
export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { scrollY } = useScroll();

    const navBackground = useTransform(
        scrollY,
        [0, 100],
        ["hsl(240 20% 4% / 0)", "hsl(240 20% 6% / 0.9)"]
    );

    const navBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(20px)"]
    );

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Keyboard shortcut for search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsSearchOpen(true);
            }
            if (e.key === "Escape") {
                setIsSearchOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/episodes", label: "Episodes" },
        { href: "/popular", label: "Popular" },
        { href: "/about", label: "About" },
    ];

    const socialLinks = [
        { href: "https://twitter.com/podchemy", label: "Twitter", icon: "𝕏" },
        { href: "mailto:hello@podchemy.com", label: "Email", icon: "✉" },
    ];

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
                style={{
                    backgroundColor: navBackground,
                    backdropFilter: navBlur,
                    WebkitBackdropFilter: navBlur,
                }}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="group flex items-center gap-3">
                            <motion.div
                                className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(185 100% 45%))",
                                }}
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Headphones className="w-5 h-5 text-white" />
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    initial={{ x: "-100%", opacity: 0 }}
                                    whileHover={{ x: "100%", opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                            <motion.span
                                className="text-xl font-semibold text-white tracking-tight"
                                style={{ fontFamily: "var(--font-outfit)" }}
                            >
                                Podchemy
                            </motion.span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="relative px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 group"
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        <motion.div
                                            className="absolute inset-0 rounded-lg bg-white/5"
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileHover={{ scale: 1, opacity: 1 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-3">
                            {/* Search Button */}
                            <motion.button
                                onClick={() => setIsSearchOpen(true)}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Search className="w-4 h-4" />
                                <span className="hidden sm:inline text-sm">Search</span>
                                <kbd className="hidden sm:inline text-xs px-1.5 py-0.5 rounded bg-white/10 text-neutral-500">
                                    ⌘K
                                </kbd>
                            </motion.button>

                            {/* Social Links */}
                            <div className="hidden md:flex items-center gap-2">
                                {socialLinks.map((link) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={link.label}
                                    >
                                        <span className="text-lg">{link.icon}</span>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Subscribe Button */}
                            <motion.button
                                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white"
                                style={{
                                    background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(200 90% 50%))",
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 30px hsl(270 75% 55% / 0.4)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Sparkles className="w-4 h-4" />
                                Subscribe
                            </motion.button>

                            {/* Mobile Menu Button */}
                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                                whileTap={{ scale: 0.9 }}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            className="absolute top-20 left-4 right-4 bg-neutral-900/95 rounded-2xl border border-white/10 overflow-hidden"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="p-4 space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-3 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="p-4 border-t border-white/10">
                                <motion.button
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-white"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(200 90% 50%))",
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Subscribe to Weekly Insights
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Modal */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-black/70 backdrop-blur-md"
                            onClick={() => setIsSearchOpen(false)}
                        />
                        <motion.div
                            className="relative w-full max-w-2xl mx-4 bg-neutral-900/95 rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, y: -50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="flex items-center gap-3 p-4 border-b border-white/10">
                                <Search className="w-5 h-5 text-neutral-500" />
                                <input
                                    type="text"
                                    placeholder="Search episodes, transcripts, insights..."
                                    className="flex-1 bg-transparent text-white placeholder-neutral-500 outline-none text-lg"
                                    autoFocus
                                />
                                <kbd className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-500">
                                    ESC
                                </kbd>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-neutral-500 text-center py-8">
                                    Start typing to search across all episodes...
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
