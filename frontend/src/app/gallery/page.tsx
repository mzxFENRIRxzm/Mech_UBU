import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Photo gallery of MECH UBU team — competition photos, workshop shots, and team moments.",
};

const galleryItems = [
    { title: "Competition Day", category: "TSAE Auto Challenge", aspect: "aspect-4/3" },
    { title: "Workshop Build", category: "Manufacturing", aspect: "aspect-square" },
    { title: "Team Photo", category: "Team", aspect: "aspect-4/3" },
    { title: "Car Reveal", category: "Event", aspect: "aspect-16/10" },
    { title: "Engine Assembly", category: "Powertrain", aspect: "aspect-square" },
    { title: "Testing Day", category: "Testing", aspect: "aspect-4/3" },
    { title: "Design Review", category: "Engineering", aspect: "aspect-16/10" },
    { title: "Podium Finish", category: "Competition", aspect: "aspect-square" },
    { title: "Sponsors Event", category: "Partnership", aspect: "aspect-4/3" },
];

export default function GalleryPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#060B18]" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,86,232,0.08)_0%,transparent_60%)]" />
                <div className="container-xl relative text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-blue-500" />
                        <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>Our Moments</span>
                        <div className="w-8 h-[2px] bg-blue-500" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}><span className="gradient-text">GALLERY</span></h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Capturing our journey — from the workshop to the competition track.</p>
                </div>
            </section>
            <div className="section-divider" />
            <section className="py-24">
                <div className="container-xl">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {galleryItems.map((item, i) => (
                            <div key={i} className="glass-card overflow-hidden group cursor-pointer break-inside-avoid hover:border-blue-500/20">
                                <div className={`${item.aspect} bg-linear-to-br from-[#111936] via-[#0C1225] to-[#060B18] flex items-center justify-center relative`}>
                                    <div className="text-center p-6">
                                        <div className="text-4xl font-bold text-white/10 group-hover:text-blue-400/20 transition-colors mb-2" style={{ fontFamily: "var(--font-display)" }}>{String(i + 1).padStart(2, "0")}</div>
                                        <span className="text-gray-500 text-sm">{item.title}</span>
                                    </div>
                                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                                    <p className="text-amber-400/50 text-xs mt-1">{item.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <div className="glass-card inline-block px-8 py-4">
                            <p className="text-gray-400 text-sm">
                                📸 More photos on our{" "}
                                <a href="https://facebook.com/MechUBUTeamofficial" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors underline">Facebook Page</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
