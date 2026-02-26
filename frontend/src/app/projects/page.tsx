import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Engineering projects by MECH UBU — Structure, Drivetrain, Steering, Impact Attenuator, Fuel Tank, and Suspension systems.",
};

const allProjects = [
    { id: "structure", icon: "🏗️", title: "Structure System — S8 Model", category: "Chassis", description: "Advanced tubular space frame chassis designed using finite element analysis for optimal rigidity-to-weight ratio. The S8 model features improved torsional stiffness and meets all FSAE safety requirements.", specs: ["Material: AISI 4130 Chromoly Steel", "Weight: Optimized for competition", "Design: FEA validated", "Compliance: FSAE 2024 Rules"] },
    { id: "drivetrain", icon: "⚡", title: "Drivetrain System", category: "Powertrain", description: "Efficient powertrain system optimized for acceleration, fuel economy, and reliability. Features a single-cylinder engine with custom intake and exhaust manifold design.", specs: ["Engine: Single Cylinder", "Transmission: Custom gearing", "Differential: Limited-slip", "ECU: Tuned for performance"] },
    { id: "steering", icon: "🎯", title: "Steering System", category: "Control", description: "Lightweight rack-and-pinion steering system engineered for responsive handling and maximum driver feedback with adjustable geometry.", specs: ["Type: Rack and Pinion", "Ackermann: Adjusted geometry", "Weight: Minimized design", "Feedback: Direct and responsive"] },
    { id: "attenuator", icon: "🛡️", title: "Impact Attenuator System", category: "Safety", description: "Energy-absorbing impact attenuator designed and tested using both simulation and physical testing to protect drivers.", specs: ["Material: Aluminum honeycomb", "Testing: Physical & FEA", "Standards: FSAE compliant", "Absorption: Progressive crush"] },
    { id: "fuel-tank", icon: "⛽", title: "Fuel Tank System", category: "Storage", description: "Custom fuel system with optimized capacity and strategic placement for ideal weight distribution.", specs: ["Capacity: Competition optimized", "Position: CG-balanced", "Material: FIA approved", "Safety: Multi-layer protection"] },
    { id: "suspension", icon: "🔧", title: "Suspension System", category: "Dynamics", description: "Double wishbone suspension with adjustable damping, optimized through simulation for track performance.", specs: ["Type: Double Wishbone", "Damping: Adjustable", "Springs: Rate-tunable", "Simulation: Validated design"] },
];

export default function ProjectsPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#060B18]" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,86,232,0.1)_0%,transparent_60%)]" />
                <div className="container-xl relative text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-blue-500" />
                        <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>Engineering Excellence</span>
                        <div className="w-8 h-[2px] bg-blue-500" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>MECH <span className="gradient-text">PROJECTS</span></h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Every component is designed, simulated, tested, and built by our students.</p>
                </div>
            </section>
            <div className="section-divider" />
            <section className="py-24">
                <div className="container-xl">
                    <div className="space-y-8">
                        {allProjects.map((project, i) => (
                            <div key={project.id} id={project.id} className="glass-card p-8 md:p-10 group hover:border-blue-500/20">
                                <div className="grid md:grid-cols-[1fr,auto] gap-8">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/15 mb-4">
                                            <span className="text-base">{project.icon}</span>
                                            <span className="text-xs text-amber-400/60 tracking-wider uppercase">{project.category}</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors" style={{ fontFamily: "var(--font-heading)" }}>{project.title}</h2>
                                        <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">{project.description}</p>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {project.specs.map((spec) => (
                                                <div key={spec} className="flex items-center gap-2 text-sm text-gray-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />{spec}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center justify-center">
                                        <div className="text-6xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors" style={{ fontFamily: "var(--font-display)" }}>0{i + 1}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
