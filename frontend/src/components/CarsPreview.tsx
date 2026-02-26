"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cars = [
    { season: "S8", year: "2024-2025", name: "Season 8 Build", type: "Latest Generation", status: "active", specs: ["Tubular Space Frame", "Single Cylinder Engine", "FSAE Compliant"] },
    { season: "S7", year: "2023-2024", name: "Season 7 Build", type: "Competition Car", status: "completed", specs: ["Revised Chassis", "Improved Aero", "Weight Optimized"] },
    { season: "S3", year: "2017-2018", name: "Rebuild & Custom", type: "Heritage Car", status: "legacy", specs: ["Custom Design", "Rebuilt Platform", "Project Special"] },
];

export default function CarsPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
            <div className="container-xl relative">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-blue-500" />
                        <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>Generations of Innovation</span>
                        <div className="w-8 h-[2px] bg-blue-500" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        OUR <span className="gradient-text">CARS</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-[15px] leading-[1.8]">Internal combustion engine & electric engine — each season brings new innovations.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {cars.map((car, i) => (
                        <motion.div key={car.season} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.15 }} className="glass-card overflow-hidden group">
                            <div className="relative aspect-16/10 bg-linear-to-br from-[#111936] via-[#0C1225] to-[#060B18] flex items-center justify-center border-b border-white/5">
                                <div className="text-center">
                                    <motion.div whileHover={{ scale: 1.1 }} className="text-5xl md:text-7xl font-black gradient-text" style={{ fontFamily: "var(--font-display)" }}>
                                        {car.season}
                                    </motion.div>
                                    <div className="text-gray-500 text-xs mt-2 tracking-widest">{car.year}</div>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${car.status === "active" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" :
                                        car.status === "completed" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                                            "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                                        }`}>
                                        {car.status === "active" ? "● Current" : car.status === "completed" ? "Completed" : "Legacy"}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>{car.name}</h3>
                                <p className="text-amber-400/60 text-sm mb-4">{car.type}</p>
                                <div className="flex flex-wrap gap-2">
                                    {car.specs.map((spec) => (
                                        <span key={spec} className="px-3 py-1 rounded-md text-xs text-gray-400 bg-blue-500/5 border border-blue-500/10">{spec}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-12">
                    <Link href="/cars" className="btn-outline">View All Cars<ArrowRight className="w-4 h-4" /></Link>
                </motion.div>
            </div>
        </section>
    );
}
