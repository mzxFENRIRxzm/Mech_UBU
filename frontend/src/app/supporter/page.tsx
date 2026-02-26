import type { Metadata } from "next";
import { Heart, Star, Gem } from "lucide-react";

export const metadata: Metadata = {
    title: "Supporters & Sponsors",
    description: "Support MECH UBU team — become a sponsor and help develop future engineers.",
};

const sponsorTiers = [
    { name: "Platinum Sponsor", icon: <Gem className="w-6 h-6" />, color: "from-blue-500 to-blue-700", borderColor: "border-blue-500/30 hover:border-blue-500/50", benefits: ["Logo on car (premium placement)", "Logo on team uniforms", "Logo on all marketing materials", "Social media feature posts", "Invitation to all team events", "Annual performance report"] },
    { name: "Gold Sponsor", icon: <Star className="w-6 h-6" />, color: "from-amber-500 to-yellow-600", borderColor: "border-amber-500/30 hover:border-amber-500/50", benefits: ["Logo on car (secondary placement)", "Logo on team uniforms", "Social media mentions", "Invitation to key events", "Annual progress update"] },
    { name: "Supporter", icon: <Heart className="w-6 h-6" />, color: "from-sky-500 to-blue-500", borderColor: "border-sky-500/30 hover:border-sky-500/50", benefits: ["Name on supporter wall", "Social media thank you", "Event invitation", "Team progress updates"] },
];

export default function SupporterPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#060B18]" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,168,23,0.08)_0%,transparent_60%)]" />
                <div className="container-xl relative text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-amber-500" />
                        <span className="text-amber-400 text-sm tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "var(--font-heading)" }}>Support Our Mission</span>
                        <div className="w-8 h-[2px] bg-amber-500" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}><span className="gradient-text">SUPPORTERS</span></h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Join us in driving and empowering students to become national leaders. Become a sponsor of MECH UBU!</p>
                </div>
            </section>
            <div className="section-divider" />
            <section className="py-24">
                <div className="container-xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>SPONSORSHIP <span className="gradient-text">TIERS</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Choose a sponsorship level that works for you.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {sponsorTiers.map((tier) => (
                            <div key={tier.name} className={`glass-card p-8 border ${tier.borderColor} transition-all duration-300 text-center`}>
                                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${tier.color} flex items-center justify-center mx-auto mb-4 text-white`}>{tier.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>{tier.name}</h3>
                                <ul className="space-y-3 text-left">
                                    {tier.benefits.map((b) => (
                                        <li key={b} className="flex items-start gap-2 text-sm text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />{b}
                                        </li>
                                    ))}
                                </ul>
                                <a href="mailto:mech.ubu.ice@gmail.com" className="btn-primary w-full justify-center mt-8 text-sm">Contact Us</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="section-divider" />
            <section className="py-24">
                <div className="container-xl">
                    <div className="glass-card max-w-3xl mx-auto p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Why <span className="gradient-text">Sponsor Us?</span></h2>
                        <div className="grid sm:grid-cols-3 gap-8 mb-8">
                            {[{ num: "50+", label: "Student Engineers" }, { num: "8", label: "Seasons of Excellence" }, { num: "1000+", label: "Hours of Engineering" }].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-bold gradient-text mb-1" style={{ fontFamily: "var(--font-display)" }}>{stat.num}</div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 leading-relaxed">Your support directly impacts the education and development of future engineers.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
