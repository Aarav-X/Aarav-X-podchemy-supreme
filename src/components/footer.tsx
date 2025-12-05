"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Headphones, Twitter, Mail, Heart } from "lucide-react";

/**
 * Footer - The Eternal Foundation
 * 
 * Like the roots of Yggdrasil, this component anchors the experience.
 * It provides grounding while hinting at the infinite possibilities
 * that await those who venture deeper into the sanctuary.
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Product",
            links: [
                { label: "Episodes", href: "/episodes" },
                { label: "Popular", href: "/popular" },
                { label: "Weekly Digest", href: "/weekly" },
                { label: "Subscribe", href: "/subscribe" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Cookies", href: "/cookies" },
            ],
        },
    ];

    const socialLinks = [
        { icon: Twitter, href: "https://twitter.com/podchemy", label: "Twitter" },
        { icon: Mail, href: "mailto:hello@podchemy.com", label: "Email" },
    ];

    return (
        <footer className="relative mt-32 border-t border-white/5">
            {/* Gradient fade at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <motion.div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(185 100% 45%))",
                                }}
                                whileHover={{ scale: 1.05, rotate: 5 }}
                            >
                                <Headphones className="w-5 h-5 text-white" />
                            </motion.div>
                            <span className="text-xl font-semibold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                                Podchemy
                            </span>
                        </Link>
                        <p className="text-neutral-400 max-w-sm leading-relaxed mb-6">
                            Transform your podcast listening experience. Get beautifully curated notes,
                            key insights, and transcripts from the world's best podcasts.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section, sectionIndex) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                                        viewport={{ once: true }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                                Get weekly podcast insights
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Hand-picked notes delivered to your inbox every Sunday.
                            </p>
                        </div>
                        <form className="flex gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                            />
                            <motion.button
                                type="submit"
                                className="px-6 py-3 rounded-xl text-sm font-medium text-white whitespace-nowrap"
                                style={{
                                    background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(200 90% 50%))",
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 0 25px hsl(270 75% 55% / 0.4)",
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-500 text-sm">
                        © {currentYear} Podchemy. All rights reserved.
                    </p>
                    <p className="text-neutral-500 text-sm flex items-center gap-1">
                        Crafted with <Heart className="w-3 h-3 text-red-400" /> for podcast lovers
                    </p>
                </div>
            </div>
        </footer>
    );
}
