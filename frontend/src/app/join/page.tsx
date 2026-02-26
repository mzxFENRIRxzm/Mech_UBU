import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Join Us",
    description: "Join MECH UBU team — mechanical design, electrical systems, marketing, or project management.",
};

const roles = [
    { title: "Mechanical Engineer", description: "Design and manufacture chassis, suspension, and structural components.", skills: ["SolidWorks", "FEA Analysis", "Manufacturing", "GD&T"], color: "border-blue-500/20 hover:border-blue-500/40" },
    { title: "Powertrain Engineer", description: "Engine tuning, drivetrain design, exhaust systems, and ECU programming.", skills: ["Engine Dynamics", "Thermodynamics", "ECU Tuning", "Dyno Testing"], color: "border-amber-500/20 hover:border-amber-500/40" },
    { title: "Vehicle Dynamics", description: "Design and tune suspension, brakes, and tire setups for optimal handling.", skills: ["Suspension Design", "Tire Modeling", "Data Analysis", "Simulation"], color: "border-sky-500/20 hover:border-sky-500/40" },
    { title: "Electronics & Controls", description: "Wiring harnesses, sensor systems, data acquisition, and control algorithms.", skills: ["Arduino/STM32", "PCB Design", "Data Acquisition", "Wiring"], color: "border-emerald-500/20 hover:border-emerald-500/40" },
    { title: "Business & Marketing", description: "Sponsorships, social media, event planning, and business presentations.", skills: ["Sponsorship", "Social Media", "Presentations", "Budgeting"], color: "border-violet-500/20 hover:border-violet-500/40" },
    { title: "Design & Media", description: "Team livery, merchandise, photos, videos, and brand identity.", skills: ["Graphic Design", "Photography", "Video Editing", "Branding"], color: "border-pink-500/20 hover:border-pink-500/40" },
];

export default function JoinPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#060B18]" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,86,232,0.12)_0%,transparent_60%)]" />
                <div className="container-xl relative text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-amber-500" />
                        <span className="text-amber-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>Be Part of Something Great</span>
                        <div className="w-8 h-[2px] bg-amber-500" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>JOIN <span className="gradient-text">US</span></h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">Whether you&#39;re a first-year student or a seasoned engineer — if you have passion, we have a place for you.</p>
                    <a href="mailto:mech.ubu.ice@gmail.com" className="btn-primary">Apply Now<ArrowRight className="w-4 h-4" /></a>
                </div>
            </section>
            <div className="section-divider" />
            <section className="py-24">
                <div className="container-xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>OPEN <span className="gradient-text">ROLES</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Find the role that matches your skills and interests.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {roles.map((role) => (
                            <div key={role.title} className={`glass-card p-6 border ${role.color} transition-all duration-300`}>
                                <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>{role.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{role.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {role.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1 rounded-md text-xs text-gray-400 bg-blue-500/5 border border-blue-500/10">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="section-divider" />
            <section className="py-24">
                <div className="container-xl text-center">
                    <div className="glass-card max-w-2xl mx-auto p-12">
                        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ready to <span className="gradient-text">Join?</span></h2>
                        <p className="text-gray-400 mb-8">Send us an email or reach out on Facebook.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:mech.ubu.ice@gmail.com" className="btn-primary">Email Us</a>
                            <a href="https://facebook.com/MechUBUTeamofficial" target="_blank" rel="noopener noreferrer" className="btn-outline">Facebook Page</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
