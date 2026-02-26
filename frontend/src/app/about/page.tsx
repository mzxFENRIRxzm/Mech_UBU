import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about MECH UBU — Formula SAE team from Ubon Ratchathani University. Our identity, history, and 8 seasons of competition.",
};

export default function AboutPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#060B18]" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,86,232,0.1)_0%,transparent_60%)]" />
                <div className="container-xl relative text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-blue-500" />
                        <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>Who We Are</span>
                        <div className="w-8 h-[2px] bg-blue-500" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                        ABOUT <span className="gradient-text">US</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">From the classroom to the racetrack — our story of engineering, teamwork, and passion.</p>
                </div>
            </section>
            <div className="section-divider" />
            <section id="identity" className="py-24">
                <div className="container-xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-[2px] bg-blue-500" />
                                <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium">Our Identity</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                                MECH UBU <span className="gradient-text">Identity</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 text-lg">MECH UBU is a Formula SAE team from the Faculty of Engineering at Ubon Ratchathani University, Thailand. Established in 2013, we blend engineering knowledge with a passion for motorsports and design.</p>
                            <p className="text-gray-500 leading-relaxed mb-6">Our team represents the spirit of innovation and hands-on learning. We believe that the best engineers are made not just in classrooms, but on the track — solving real problems, under real pressure, with real consequences.</p>
                            <div className="flex flex-wrap gap-3">
                                {["Engineering", "Design", "Innovation", "Teamwork", "Competition"].map((tag) => (
                                    <span key={tag} className="px-4 py-2 rounded-full text-sm text-gray-300 bg-blue-500/5 border border-blue-500/15">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-[#111936] to-[#060B18] flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-7xl font-black gradient-text mb-4" style={{ fontFamily: "var(--font-display)" }}>M</div>
                                    <div className="text-amber-400/70 text-sm tracking-[0.3em] uppercase">Mechanical Engineering Club</div>
                                    <div className="text-gray-500 text-xs mt-2">Since 2013</div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/40 rounded-tl-2xl" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-500/40 rounded-br-2xl" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-divider" />
            <section id="history" className="py-24">
                <div className="container-xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>OUR <span className="gradient-text">SEASONS</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Eight seasons of growth, innovation, and competition excellence.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }, (_, i) => i + 1).map((season) => (
                            <div key={season} className="glass-card p-6 text-center group cursor-pointer hover:border-blue-500/30">
                                <div className="text-4xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform" style={{ fontFamily: "var(--font-display)" }}>S{season}</div>
                                <h3 className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>Season {season}</h3>
                                <p className="text-amber-400/50 text-sm">{2012 + season} — {2013 + season}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
