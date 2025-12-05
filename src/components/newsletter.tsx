"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Sparkles, Check, Loader2 } from "lucide-react";

/**
 * Newsletter - The Weekly Elixir
 * 
 * This component represents the promise of ongoing enlightenment.
 * Each week, a carefully curated collection of sonic wisdom arrives
 * in the inbox of those who have chosen to receive it. The design
 * must convey both exclusivity and accessibility.
 */

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus("success");

        setTimeout(() => {
            setStatus("idle");
            setEmail("");
        }, 3000);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
                    style={{
                        background: "radial-gradient(circle at center, hsl(270 60% 30% / 0.2), transparent 60%)",
                    }}
                />
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="relative max-w-4xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-900/80 border border-white/10 p-8 md:p-12 lg:p-16">
                        {/* Decorative gradient orbs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

                        <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                            {/* Icon */}
                            <motion.div
                                className="flex-shrink-0"
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className="relative">
                                    <div
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(185 100% 45%))",
                                        }}
                                    >
                                        <Mail className="w-10 h-10 md:w-12 md:h-12 text-white" />
                                    </div>
                                    {/* Pulse ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl border-2 border-purple-400/50"
                                        animate={{
                                            scale: [1, 1.3, 1.3],
                                            opacity: [0.5, 0, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1 text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                                        Podchemy Weekly
                                    </h2>
                                    <p className="text-neutral-400 text-lg mb-6 max-w-lg">
                                        Save hours every week! Get hand-picked podcast insights delivered
                                        straight to your inbox every Sunday.
                                    </p>
                                </motion.div>

                                {/* Form */}
                                <motion.form
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-col sm:flex-row gap-3"
                                >
                                    <div className="relative flex-1">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                            disabled={status === "loading" || status === "success"}
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        disabled={status === "loading" || status === "success"}
                                        className="relative px-6 py-4 rounded-xl font-medium text-white overflow-hidden disabled:opacity-80"
                                        style={{
                                            background: status === "success"
                                                ? "linear-gradient(135deg, hsl(142 76% 45%), hsl(160 80% 40%))"
                                                : "linear-gradient(135deg, hsl(270 75% 55%), hsl(200 90% 50%))",
                                        }}
                                        whileHover={status === "idle" ? { scale: 1.02 } : {}}
                                        whileTap={status === "idle" ? { scale: 0.98 } : {}}
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                                            {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                                            {status === "success" && <Check className="w-5 h-5" />}
                                            {status === "idle" && <Sparkles className="w-5 h-5" />}
                                            {status === "idle" && "Subscribe"}
                                            {status === "loading" && "Subscribing..."}
                                            {status === "success" && "Subscribed!"}
                                        </span>
                                    </motion.button>
                                </motion.form>

                                {/* Social proof */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-4 text-sm text-neutral-500"
                                >
                                    Join 12,000+ curious minds. No spam, unsubscribe anytime.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
