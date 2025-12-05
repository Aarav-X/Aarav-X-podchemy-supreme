"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";
import Link from "next/link";

/**
 * Error Boundary - The Graceful Recovery
 * 
 * When things go wrong, this component catches the fall
 * with dignity and offers a path forward. Errors are
 * opportunities for grace.
 */

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application error:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                {/* Animated Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative mb-8"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="w-48 h-48 bg-red-500/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    <motion.div
                        className="relative w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/20 flex items-center justify-center"
                        animate={{
                            y: [0, -5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <AlertTriangle className="w-12 h-12 text-red-400" />
                    </motion.div>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                        Something went wrong
                    </h2>
                    <p className="text-lg text-neutral-400 mb-8 max-w-md mx-auto">
                        We apologize for the inconvenience. Our team has been notified
                        and we're working to fix this.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        onClick={reset}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white"
                        style={{
                            background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(200 90% 50%))",
                        }}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(270 75% 55% / 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <RefreshCw className="w-5 h-5" />
                        Try Again
                    </motion.button>

                    <Link href="/">
                        <motion.button
                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-neutral-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Home className="w-5 h-5" />
                            Go Home
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Error Details (dev only) */}
                {process.env.NODE_ENV === "development" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 p-4 rounded-xl bg-neutral-900/50 border border-white/10 text-left"
                    >
                        <p className="text-sm text-neutral-500 mb-2">Error details (dev only):</p>
                        <pre className="text-xs text-red-400 overflow-auto max-h-32">
                            {error.message}
                        </pre>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
