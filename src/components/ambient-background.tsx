"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * AmbientBackground - The Living Canvas
 * 
 * This component creates a sentient background that responds to the cosmic
 * rhythm of the universe. It breathes, pulses, and shifts with the energy
 * of those who gaze upon it. Three orbs of pure light dance in eternal harmony,
 * painting the void with hues of transcendence.
 */
export function AmbientBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
            {/* Base gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, 
              hsl(270 60% 12% / 0.5) 0%,
              transparent 50%
            ),
            linear-gradient(180deg, 
              hsl(240 20% 4%) 0%,
              hsl(270 25% 6%) 50%,
              hsl(240 20% 4%) 100%
            )
          `,
                }}
            />

            {/* Primary cosmic orb */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: "radial-gradient(circle at center, hsl(270 80% 50% / 0.3), transparent 70%)",
                    filter: "blur(80px)",
                    top: "-10%",
                    right: "-10%",
                }}
                animate={{
                    x: [0, 30, -20, 0],
                    y: [0, -20, 30, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary accent orb */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full"
                style={{
                    background: "radial-gradient(circle at center, hsl(185 100% 45% / 0.2), transparent 70%)",
                    filter: "blur(60px)",
                    bottom: "10%",
                    left: "-5%",
                }}
                animate={{
                    x: [0, -40, 20, 0],
                    y: [0, 30, -25, 0],
                    scale: [1, 0.9, 1.15, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Tertiary subtle orb */}
            <motion.div
                className="absolute w-[350px] h-[350px] rounded-full"
                style={{
                    background: "radial-gradient(circle at center, hsl(200 90% 50% / 0.15), transparent 70%)",
                    filter: "blur(70px)",
                    top: "40%",
                    left: "50%",
                }}
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 20, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(hsl(270 50% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(270 50% 50%) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Noise texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
