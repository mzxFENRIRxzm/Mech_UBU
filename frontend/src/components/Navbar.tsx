"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
    { name: "HOME", href: "/" },
    {
        name: "ABOUT US",
        href: "/about",
        children: [
            { name: "Identity", href: "/about#identity" },
            { name: "History", href: "/about#history" },
        ],
    },
    {
        name: "PROJECTS",
        href: "/projects",
        children: [
            { name: "Structure System", href: "/projects#structure" },
            { name: "Drivetrain", href: "/projects#drivetrain" },
            { name: "Steering System", href: "/projects#steering" },
            { name: "Impact Attenuator", href: "/projects#attenuator" },
        ],
    },
    { name: "OUR CARS", href: "/cars" },
    { name: "GALLERY", href: "/gallery" },
    { name: "SUPPORTER", href: "/supporter" },
    { name: "JOIN US", href: "/join" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "glass shadow-lg shadow-black/20"
                : "bg-transparent"
                }`}
        >
            <nav className="container-xl flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-blue-400 flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:shadow-blue-500/30 transition-shadow"
                        style={{ fontFamily: "var(--font-display)" }}>
                        M
                    </div>
                    <div className="flex flex-col">
                        <span
                            className="text-lg font-bold gradient-text"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            MECH UBU
                        </span>
                        <span className="text-[10px] tracking-[0.2em] text-amber-400/70 uppercase font-medium">
                            Formula TSAE Team
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group/nav"
                            onMouseEnter={() =>
                                link.children && setActiveDropdown(link.name)
                            }
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className="racing-stripe flex items-center gap-1.5 px-1 py-2 text-[13px] font-medium tracking-widest text-gray-300 hover:text-white transition-colors uppercase"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {link.name}
                                {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                            </Link>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {link.children && activeDropdown === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-4 w-52 glass rounded-xl p-2.5 shadow-2xl"
                                    >
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-[13px] text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all font-medium tracking-wide"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Link href="/join" className="btn-primary text-sm">
                        JOIN TEAM
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden glass overflow-hidden"
                    >
                        <div className="container-xl py-6 flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="pt-4 px-4">
                                <Link
                                    href="/join"
                                    className="btn-primary w-full justify-center text-sm"
                                    onClick={() => setIsOpen(false)}
                                >
                                    JOIN TEAM
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
