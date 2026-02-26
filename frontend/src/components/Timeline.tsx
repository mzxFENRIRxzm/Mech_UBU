"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Calendar, Flag, Star, Award, Users } from "lucide-react";

const timelineItems = [
    { year: "2013", season: "S1", title: "The Beginning", description: "MECH UBU was founded at the Faculty of Engineering, Ubon Ratchathani University.", icon: <Star className="w-4 h-4" /> },
    { year: "2015", season: "S2-3", title: "Early Competitions", description: "First entries into TSAE Auto Challenge, gaining valuable competition experience.", icon: <Flag className="w-4 h-4" /> },
    { year: "2018", season: "S4-5", title: "Growth & Evolution", description: "Team expansion with improved designs and better competition results each year.", icon: <Users className="w-4 h-4" /> },
    { year: "2021", season: "S6-7", title: "Technical Excellence", description: "Major redesigns with advanced simulation, testing, and manufacturing processes.", icon: <Award className="w-4 h-4" /> },
    { year: "2024", season: "S8", title: "Current Season", description: "Our latest car with cutting-edge engineering — ready to compete at the highest level.", icon: <Trophy className="w-4 h-4" /> },
];

export default function Timeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-24 md:py-32">
            <div className="absolute inset-0 bg-linear-to-b from-[#080E1E] via-transparent to-[#080E1E]" />
            <div className="container-xl relative">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-amber-500" />
                        <span className="text-amber-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>Our Journey</span>
                        <div className="w-8 h-[2px] bg-amber-500" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        SEASONS <span className="gradient-text">TIMELINE</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-blue-500/50 via-amber-500/30 to-transparent" />
                    {timelineItems.map((item, i) => (
                        <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.15 }} className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#060B18] z-10 shadow-lg shadow-blue-500/30" />
                            <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                                <div className="glass-card p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-blue-400">{item.icon}</span>
                                        <span className="text-xs text-amber-400/60 tracking-widest" style={{ fontFamily: "var(--font-display)" }}>{item.season}</span>
                                    </div>
                                    <div className="text-2xl font-bold gradient-text mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.year}</div>
                                    <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-[1.8]">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
