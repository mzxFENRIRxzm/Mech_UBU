import Link from "next/link";
import { Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#040810] border-t border-white/5">
            <div className="section-divider" />
            <div className="container-xl py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-blue-400 flex items-center justify-center font-bold text-white text-lg"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                M
                            </div>
                            <div>
                                <span
                                    className="text-xl font-bold gradient-text block"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    MECH UBU
                                </span>
                                <span className="text-[10px] tracking-[0.15em] text-amber-400/60 uppercase">
                                    Formula TSAE Team
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Formula SAE team from the Faculty of Engineering, Ubon Ratchathani
                            University. Established in 2013.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com/MechUBUTeamofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/10 transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-300 hover:border-blue-300/30 hover:bg-blue-300/10 transition-all"
                                aria-label="Youtube"
                            >
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-5 text-sm tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
                            QUICK LINKS
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Our Projects", href: "/projects" },
                                { name: "Our Cars", href: "/cars" },
                                { name: "Gallery", href: "/gallery" },
                                { name: "Join Us", href: "/join" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects */}
                    <div>
                        <h3 className="text-white font-semibold mb-5 text-sm tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
                            MECH PROJECTS
                        </h3>
                        <ul className="space-y-3">
                            {["Structure System", "Drivetrain System", "Steering System", "Impact Attenuator", "Fuel Tank System"].map((name) => (
                                <li key={name}>
                                    <Link href="/projects" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-5 text-sm tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
                            CONTACT US
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                <a href="mailto:mech.ubu.ice@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    mech.ubu.ice@gmail.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Department of Mechanical Engineering<br />
                                    Faculty of Engineering<br />
                                    Ubon Ratchathani University<br />
                                    85 Mueang Si Khai, Warin Chamrap<br />
                                    Ubon Ratchathani 34190
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} MECH UBU TEAM. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        UBU Formula Student — Ubon Ratchathani University
                    </p>
                </div>
            </div>
        </footer>
    );
}
