"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(30,86,232,0.06)_0%,transparent_70%)]" />

            <div className="container-xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[2px] bg-blue-500" />
                            <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                                Who We Are
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                            Passion for{" "}
                            <span className="gradient-text-blue">Engineering</span> &{" "}
                            <span className="gradient-text-gold">Motorsport</span>
                        </h2>
                        <p className="text-gray-400 leading-[1.9] mb-6 text-[15px]">
                            MECH UBU is a Formula SAE team from the Faculty of Engineering at
                            Ubon Ratchathani University, Thailand. Established in 2013, we
                            blend the engineering knowledge gained in the classroom with a
                            passion for motorsports and a love for design.
                        </p>
                        <p className="text-gray-500 leading-[1.9] mb-8 text-sm">
                            Since our founding, we have competed annually in the TSAE Auto
                            Challenge Student Formula. Supporting our team helps develop
                            students&#39; abilities by providing opportunities for eager
                            learners to push themselves and apply what they&#39;ve learned in a
                            real-world context.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["Formula SAE", "TSAE Auto Challenge", "Vehicle Design", "Innovation", "Teamwork"].map((tag) => (
                                <span key={tag} className="px-4 py-2 rounded-full text-sm text-gray-300 bg-blue-500/5 border border-blue-500/15">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-linear-to-br from-[#111936] via-[#0C1225] to-[#060B18]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-5xl md:text-7xl font-black gradient-text mb-3" style={{ fontFamily: "var(--font-display)" }}>
                                        S8
                                    </div>
                                    <div className="text-amber-400/70 text-sm tracking-widest uppercase">
                                        Season 8 — Latest Build
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/40 rounded-tl-2xl" />
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-500/40 rounded-br-2xl" />
                        </div>

                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 glass-card px-6 py-4"
                        >
                            <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                                8 Seasons
                            </div>
                            <div className="text-amber-400/60 text-sm">of competition</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
