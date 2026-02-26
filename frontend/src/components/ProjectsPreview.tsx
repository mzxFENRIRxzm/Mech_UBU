"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Cog, Zap, Shield, Gauge, Wrench, Fuel } from "lucide-react";

const projects = [
    {
        icon: <Cog className="w-6 h-6" />,
        title: "Structure System",
        subtitle: "S8 Model — Latest Generation",
        description: "Advanced tubular space frame chassis designed for optimal rigidity-to-weight ratio, meeting all FSAE safety requirements.",
        color: "from-blue-500/20 to-blue-700/20",
        borderColor: "hover:border-blue-500/30",
        iconColor: "text-blue-400",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Drivetrain System",
        subtitle: "Power Delivery Unit",
        description: "Efficient powertrain system optimized for acceleration, fuel economy, and reliability in competition conditions.",
        color: "from-amber-500/20 to-yellow-600/20",
        borderColor: "hover:border-amber-500/30",
        iconColor: "text-amber-400",
    },
    {
        icon: <Gauge className="w-6 h-6" />,
        title: "Steering System",
        subtitle: "Precision Control",
        description: "Lightweight steering system engineered for responsive handling and driver feedback with adjustable geometry.",
        color: "from-sky-500/20 to-cyan-500/20",
        borderColor: "hover:border-sky-500/30",
        iconColor: "text-sky-400",
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Impact Attenuator",
        subtitle: "Safety First",
        description: "Energy-absorbing impact attenuator designed and tested to protect drivers, exceeding FSAE safety standards.",
        color: "from-emerald-500/20 to-green-600/20",
        borderColor: "hover:border-emerald-500/30",
        iconColor: "text-emerald-400",
    },
    {
        icon: <Fuel className="w-6 h-6" />,
        title: "Fuel Tank System",
        subtitle: "Optimized Capacity",
        description: "Custom fuel system with optimized capacity placement for ideal weight distribution and gravity center.",
        color: "from-violet-500/20 to-purple-600/20",
        borderColor: "hover:border-violet-500/30",
        iconColor: "text-violet-400",
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        title: "Suspension System",
        subtitle: "Dynamic Performance",
        description: "Double wishbone suspension with adjustable damping, optimized through simulation for track performance.",
        color: "from-indigo-500/20 to-blue-600/20",
        borderColor: "hover:border-indigo-500/30",
        iconColor: "text-indigo-400",
    },
];

export default function ProjectsPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-24 md:py-32">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#080E1E] to-transparent" />
            <div className="container-xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-blue-500" />
                        <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                            Engineering Excellence
                        </span>
                        <div className="w-8 h-[2px] bg-blue-500" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        MECH <span className="gradient-text">PROJECTS</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-[15px] leading-[1.8]">
                        Every component is designed, tested, and built by our students — from concept to competition.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`glass-card p-7 group cursor-pointer ${project.borderColor}`}
                        >
                            <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${project.color} flex items-center justify-center ${project.iconColor} mb-4`}>
                                {project.icon}
                            </div>
                            <h3 className="text-base font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                                {project.title}
                            </h3>
                            <p className="text-xs text-amber-400/60 mb-3 tracking-wider uppercase">{project.subtitle}</p>
                            <p className="text-gray-400 text-sm leading-[1.8]">{project.description}</p>
                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 group-hover:text-blue-400 transition-colors">
                                <span>Learn more</span>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <Link href="/projects" className="btn-outline">
                        View All Projects
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
