"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Users, Rocket, GraduationCap, Heart } from "lucide-react";

export default function JoinCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/2 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(30,86,232,0.06)_0%,transparent_60%)]" />

            <div className="container-xl relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="grid grid-cols-2 gap-4">
                        {[
                            { icon: <Rocket className="w-5 h-5" />, title: "Hands-On Experience", desc: "Build real race cars from scratch", color: "text-blue-400" },
                            { icon: <GraduationCap className="w-5 h-5" />, title: "Learn & Grow", desc: "Apply classroom knowledge", color: "text-amber-400" },
                            { icon: <Users className="w-5 h-5" />, title: "Team Spirit", desc: "Work with passionate engineers", color: "text-sky-400" },
                            { icon: <Heart className="w-5 h-5" />, title: "Passion & Fun", desc: "Love what you do every day", color: "text-emerald-400" },
                        ].map((item, i) => (
                            <motion.div key={item.title} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2 + i * 0.1 }} className="glass-card p-5 text-center">
                                <div className={`${item.color} mb-3 flex justify-center`}>{item.icon}</div>
                                <h4 className="text-white text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h4>
                                <p className="text-gray-500 text-xs">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[2px] bg-amber-500" />
                            <span className="text-amber-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>Be Part of Something Great</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                            Join <span className="gradient-text">MECH UBU</span>
                        </h2>
                        <p className="text-gray-400 text-[15px] leading-[1.9] mb-6">
                            Join us and become a part of the team, working alongside enthusiasts in the fields of automotive and technology. Be a part of MECH UBU!
                        </p>
                        <p className="text-gray-500 mb-8 leading-[1.9] text-sm">
                            Whether you&#39;re interested in mechanical design, electrical systems, marketing, or project management — there&#39;s a place for you on our team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/join" className="btn-primary">Join the Club<ArrowRight className="w-4 h-4" /></Link>
                            <Link href="/supporter" className="btn-outline">Become a Sponsor</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
