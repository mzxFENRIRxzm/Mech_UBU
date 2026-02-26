"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Trophy, Users, Calendar, Flag } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background */}
            <div className="absolute inset-0 bg-[#060B18]" />
            <div className="absolute inset-0 grid-bg opacity-40" />

            {/* Radial gradients — Blue & Gold */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(30,86,232,0.15)_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(232,168,23,0.08)_0%,transparent_60%)]" />

            {/* Animated orbs */}
            <motion.div
                animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10 container-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Column - Text Content */}
                <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass mb-10 border-blue-500/20"
                    >
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(232,168,23,0.6)]" />
                        <span className="text-xs text-blue-200/90 font-medium tracking-wider uppercase">
                            TSAE Auto Challenge 2025
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        <span className="block text-white mb-2">MECH</span>
                        <span className="block gradient-text">UBU TEAM</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-12"
                    >
                        <p
                            className="text-amber-400/80 font-medium tracking-[0.2em] uppercase text-xs mb-5"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Formula Student Team
                        </p>
                        <p className="text-base text-gray-400 max-w-lg mx-auto lg:mx-0 leading-[1.9]"
                            style={{ fontFamily: "var(--font-body)" }}>
                            Engineering excellence from Ubon Ratchathani University.
                            We design, build, and race high-performance formula-style vehicles.
                        </p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                    >
                        <Link href="/about" className="btn-primary text-sm">
                            Discover Our Story
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                        <Link href="/projects" className="btn-outline text-sm">
                            View Projects
                        </Link>
                    </motion.div>
                </div>

                {/* Right Column - Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex-1 w-full max-w-lg lg:max-w-none relative"
                >
                    {/* Decorative abstract elements behind stats */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-blue-500/5 rounded-full blur-3xl -z-10" />

                    <div className="grid grid-cols-2 gap-5">
                        {/* Stat Card 1 */}
                        <div className="glass-card p-6 flex flex-col items-center justify-center text-center transform translate-y-3 hover:-translate-y-1 transition-transform duration-500">
                            <Trophy className="w-6 h-6 text-amber-400 mb-3 opacity-70" />
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1.5" style={{ fontFamily: "var(--font-display)" }}>8</div>
                            <div className="text-[11px] text-gray-500 tracking-widest uppercase font-medium">Seasons</div>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="glass-card p-6 flex flex-col items-center justify-center text-center transform -translate-y-3 hover:-translate-y-7 transition-transform duration-500">
                            <Users className="w-6 h-6 text-blue-400 mb-3 opacity-70" />
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1.5" style={{ fontFamily: "var(--font-display)" }}>50+</div>
                            <div className="text-[11px] text-gray-500 tracking-widest uppercase font-medium">Members</div>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="glass-card p-6 flex flex-col items-center justify-center text-center transform translate-y-3 hover:-translate-y-1 transition-transform duration-500">
                            <Calendar className="w-6 h-6 text-blue-400 mb-3 opacity-70" />
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1.5" style={{ fontFamily: "var(--font-display)" }}>2013</div>
                            <div className="text-[11px] text-gray-500 tracking-widest uppercase font-medium">Founded</div>
                        </div>

                        {/* Stat Card 4 */}
                        <div className="glass-card p-6 flex flex-col items-center justify-center text-center transform -translate-y-3 hover:-translate-y-7 transition-transform duration-500">
                            <Flag className="w-6 h-6 text-amber-400 mb-3 opacity-70" />
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1.5" style={{ fontFamily: "var(--font-display)" }}>TSAE</div>
                            <div className="text-[11px] text-gray-500 tracking-widest uppercase font-medium">Competition</div>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-blue-500/50">Scroll Down</span>
                    <ChevronDown className="w-5 h-5 text-blue-500/50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
