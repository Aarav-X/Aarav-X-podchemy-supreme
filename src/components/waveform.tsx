"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Waveform - The Heartbeat of Sound
 * 
 * This component visualizes the rhythm of audio, transforming
 * invisible sound waves into mesmerizing visual poetry. Each
 * bar pulses with life, breathing in sync with the content.
 */

interface WaveformProps {
    isPlaying?: boolean;
    barCount?: number;
    height?: number;
    color?: "primary" | "accent" | "neutral";
    className?: string;
}

export function Waveform({
    isPlaying = false,
    barCount = 32,
    height = 40,
    color = "primary",
    className = "",
}: WaveformProps) {
    // Generate random heights for static display
    const staticHeights = useMemo(
        () => Array.from({ length: barCount }, () => 0.2 + Math.random() * 0.8),
        [barCount]
    );

    const colorClasses = {
        primary: "bg-gradient-to-t from-purple-500 to-purple-400",
        accent: "bg-gradient-to-t from-cyan-500 to-cyan-400",
        neutral: "bg-gradient-to-t from-neutral-500 to-neutral-400",
    };

    return (
        <div
            className={`flex items-end justify-center gap-[2px] ${className}`}
            style={{ height }}
        >
            {Array.from({ length: barCount }).map((_, i) => {
                // Create multiple animation patterns for variety
                const animationVariant = i % 5;
                const baseDelay = (i * 0.03) % 0.5;

                return (
                    <motion.div
                        key={i}
                        className={`w-1 rounded-full ${colorClasses[color]}`}
                        style={{
                            originY: 1,
                        }}
                        initial={{
                            scaleY: staticHeights[i],
                            opacity: 0.7,
                        }}
                        animate={
                            isPlaying
                                ? {
                                    scaleY: [
                                        staticHeights[i],
                                        0.3 + Math.random() * 0.7,
                                        staticHeights[i] * 0.5,
                                        0.5 + Math.random() * 0.5,
                                        staticHeights[i],
                                    ],
                                    opacity: [0.7, 1, 0.8, 1, 0.7],
                                }
                                : {
                                    scaleY: staticHeights[i],
                                    opacity: 0.5,
                                }
                        }
                        transition={
                            isPlaying
                                ? {
                                    duration: 0.8 + animationVariant * 0.1,
                                    repeat: Infinity,
                                    delay: baseDelay,
                                    ease: "easeInOut",
                                }
                                : {
                                    duration: 0.3,
                                }
                        }
                    />
                );
            })}
        </div>
    );
}

/**
 * MiniWaveform - Compact Version
 * 
 * A smaller, simpler waveform for inline displays and
 * compact player controls.
 */
export function MiniWaveform({ isPlaying = false }: { isPlaying?: boolean }) {
    return (
        <div className="flex items-center gap-[2px] h-4">
            {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                    key={i}
                    className="w-[3px] bg-purple-400 rounded-full"
                    animate={
                        isPlaying
                            ? {
                                height: ["30%", "100%", "50%", "80%", "30%"],
                            }
                            : {
                                height: "30%",
                            }
                    }
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

/**
 * WaveformProgress - Interactive Progress Bar
 * 
 * A waveform that doubles as a progress indicator,
 * showing playback position through color changes.
 */
interface WaveformProgressProps {
    progress: number; // 0-100
    duration?: number;
    onSeek?: (progress: number) => void;
    isPlaying?: boolean;
    className?: string;
}

export function WaveformProgress({
    progress,
    duration = 60,
    onSeek,
    isPlaying = false,
    className = "",
}: WaveformProgressProps) {
    const barCount = 64;
    const staticHeights = useMemo(
        () => Array.from({ length: barCount }, () => 0.2 + Math.random() * 0.8),
        []
    );

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!onSeek) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const newProgress = (x / rect.width) * 100;
        onSeek(Math.min(100, Math.max(0, newProgress)));
    };

    return (
        <div
            className={`relative flex items-end gap-[1px] h-12 cursor-pointer group ${className}`}
            onClick={handleClick}
        >
            {Array.from({ length: barCount }).map((_, i) => {
                const barProgress = (i / barCount) * 100;
                const isPast = barProgress <= progress;

                return (
                    <motion.div
                        key={i}
                        className="flex-1 rounded-sm transition-colors duration-200"
                        style={{
                            height: `${staticHeights[i] * 100}%`,
                            background: isPast
                                ? "linear-gradient(to top, hsl(270 75% 55%), hsl(200 90% 50%))"
                                : "hsl(240 10% 30%)",
                        }}
                        whileHover={{
                            scaleY: 1.2,
                            background: isPast
                                ? "linear-gradient(to top, hsl(270 75% 60%), hsl(200 90% 55%))"
                                : "hsl(240 10% 40%)",
                        }}
                        animate={
                            isPlaying && isPast
                                ? {
                                    opacity: [0.8, 1, 0.9, 1, 0.8],
                                }
                                : {}
                        }
                        transition={{
                            duration: 0.5,
                            repeat: isPlaying && isPast ? Infinity : 0,
                            delay: (i % 10) * 0.05,
                        }}
                    />
                );
            })}

            {/* Hover tooltip would go here */}
            <div
                className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
            >
                <div className="px-2 py-1 rounded bg-neutral-800 text-xs text-white whitespace-nowrap">
                    {formatTime((progress / 100) * duration)}
                </div>
            </div>
        </div>
    );
}

function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
}
