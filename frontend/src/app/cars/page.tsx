import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Cars",
    description: "All cars built by MECH UBU team from Season 1 to Season 8 — ICE and Electric powertrains.",
};

const allCars = [
    { season: "S8", year: "2024-2025", name: "Season 8 — Current Build", type: "Internal Combustion", status: "active", highlights: ["Completely redesigned chassis", "Improved aerodynamics package", "New suspension geometry", "Weight reduction program"] },
    { season: "S7", year: "2023-2024", name: "Season 7", type: "Internal Combustion", status: "completed", highlights: ["Revised frame design", "Improved powertrain", "Better weight distribution", "Competition tested"] },
    { season: "S6", year: "2021-2022", name: "Season 6", type: "Internal Combustion", status: "completed", highlights: ["Post-COVID return", "Updated safety features", "New team structure", "Technical improvements"] },
    { season: "S5", year: "2019-2020", name: "Season 5", type: "Internal Combustion", status: "completed", highlights: ["Matured design philosophy", "Reliability focused", "Endurance optimized", "Driver comfort improved"] },
    { season: "S4", year: "2018-2019", name: "Season 4", type: "Internal Combustion", status: "completed", highlights: ["Major redesign effort", "Performance improvements", "Competition experience", "Design lessons learned"] },
    { season: "S3", year: "2017-2018", name: "Season 3 — Rebuild & Custom", type: "Internal Combustion", status: "legacy", highlights: ["Custom rebuild project", "Innovative solutions", "Team growth period", "Foundation for future"] },
    { season: "S2", year: "2015-2016", name: "Season 2", type: "Internal Combustion", status: "legacy", highlights: ["Second generation car", "Lessons from S1 applied", "Improved manufacture", "Competition debut"] },
    { season: "S1", year: "2013-2014", name: "Season 1 — The Original", type: "Internal Combustion", status: "legacy", highlights: ["First ever MECH UBU car", "Founding season", "Learning experience", "Beginning of a legacy"] },
];

export default function CarsPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#060B18]" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,168,23,0.08)_0%,transparent_60%)]" />
                <div className="container-xl relative text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-amber-500" />
                        <span className="text-amber-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>Generations of Innovation</span>
                        <div className="w-8 h-[2px] bg-amber-500" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>OUR <span className="gradient-text">CARS</span></h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Eight seasons. Eight cars. Each one better than the last.</p>
                </div>
            </section>
            <div className="section-divider" />
            <section className="py-24">
                <div className="container-xl">
                    <div className="grid md:grid-cols-2 gap-6">
                        {allCars.map((car) => (
                            <div key={car.season} className="glass-card overflow-hidden group hover:border-blue-500/20">
                                <div className="relative aspect-video bg-linear-to-br from-[#111936] via-[#0C1225] to-[#060B18] flex items-center justify-center border-b border-white/5">
                                    <div className="text-center">
                                        <div className="text-6xl md:text-8xl font-black gradient-text group-hover:scale-110 transition-transform duration-500" style={{ fontFamily: "var(--font-display)" }}>{car.season}</div>
                                        <div className="text-gray-500 text-sm mt-2 tracking-widest">{car.year}</div>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${car.status === "active" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : car.status === "completed" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "bg-gray-500/20 text-gray-400 border border-gray-500/30"}`}>
                                            {car.status === "active" ? "● Current" : car.status === "completed" ? "Completed" : "Legacy"}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-400 border border-white/10">{car.type}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors" style={{ fontFamily: "var(--font-heading)" }}>{car.name}</h3>
                                    <div className="space-y-2">
                                        {car.highlights.map((h) => (
                                            <div key={h} className="flex items-center gap-2 text-sm text-gray-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />{h}
                                            </div>
                                        ))}
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
