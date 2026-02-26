"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ExternalLink, MapPin } from "lucide-react";

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-24 md:py-32">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#040810]" />
            <div className="container-xl relative">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-blue-500" />
                        <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>Get In Touch</span>
                        <div className="w-8 h-[2px] bg-blue-500" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        CONTACT <span className="gradient-text">US</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <motion.a href="mailto:mech.ubu.ice@gmail.com" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="glass-card p-8 text-center group">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                            <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Email Us</h3>
                        <p className="text-gray-400 text-sm">mech.ubu.ice@gmail.com</p>
                    </motion.a>

                    <motion.a href="https://facebook.com/MechUBUTeamofficial" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="glass-card p-8 text-center group">
                        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                            <ExternalLink className="w-6 h-6 text-amber-400" />
                        </div>
                        <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Facebook</h3>
                        <p className="text-gray-400 text-sm">MechUBUTeamofficial</p>
                    </motion.a>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="glass-card p-8 text-center group">
                        <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500/20 transition-colors">
                            <MapPin className="w-6 h-6 text-sky-400" />
                        </div>
                        <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Visit Us</h3>
                        <p className="text-gray-400 text-sm">Dept. of Mechanical Engineering<br />Ubon Ratchathani University</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
