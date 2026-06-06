"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "glass shadow-lg shadow-primary/10" : "bg-transparent"
                }`}
        >
            <div className="flex w-full items-center justify-between px-6 py-3 gap-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="relative group flex items-center gap-2 text-xl font-extrabold tracking-tight shrink-0"
                >
                    <span className="relative z-10 px-2 py-1 rounded-lg bg-primary text-primary-foreground transition-all duration-300 group-hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.5)]">
                        BK
                    </span>
                    <span className="hidden sm:block text-sm font-semibold text-muted-foreground">
                        Bhavesh Khandelwal
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                                    }`}
                            >
                                {link.label}
                                {active && (
                                    <motion.span
                                        layoutId="navbar-underline"
                                        className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-3/4 rounded-full bg-primary"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Side: CTA + Social + Theme */}
                <div className="hidden md:flex items-center gap-2 ml-auto">
                    {/* Availability badge */}
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500 border border-green-500/20">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        Open to Work
                    </span>

                    {/* Social icons */}
                    <a href="https://github.com/Bhaveshkhandelwal1" target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        aria-label="GitHub">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/bhavesh-khandelwal-b9b27b27b/" target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        aria-label="LinkedIn">
                        <LinkedinIcon />
                    </a>
                    <a href="https://leetcode.com/bhaveshkhandelwal_/" target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        aria-label="LeetCode">
                        <LeetcodeIcon />
                    </a>
                    <a href="https://instagram.com/_bhavesh._10" target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-md text-muted-foreground hover:text-[#E1306C] hover:bg-accent transition-colors"
                        aria-label="Instagram">
                        <InstagramIcon />
                    </a>

                    {/* Resume button */}
                    <a
                        href="https://drive.google.com/file/d/1EeDIOij_XLIu7Xc2UPCLYIuGwTUYZ8Oj/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-border hover:border-primary hover:text-primary transition-all duration-200">
                            Resume
                        </button>
                    </a>

                    {/* Hire Me button */}
                    <a href="/contact">
                        <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 hover:shadow-[0_0_14px_rgba(59,130,246,0.5)] transition-all duration-200">
                            Contact Me
                        </button>
                    </a>

                    <ThemeToggle />
                </div>

                {/* Mobile: Theme + Hamburger */}
                <div className="flex md:hidden items-center gap-2 ml-auto">
                    <ThemeToggle />
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="p-2 rounded-md hover:bg-accent transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-border/50 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${isActive(link.href)
                                        ? "text-primary bg-primary/10"
                                        : "text-foreground/70 hover:text-foreground hover:bg-accent"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                                <a href="https://github.com/Bhaveshkhandelwal1" target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" aria-label="GitHub">
                                    <GithubIcon />
                                </a>
                                <a href="https://www.linkedin.com/in/bhavesh-khandelwal-b9b27b27b/" target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" aria-label="LinkedIn">
                                    <LinkedinIcon />
                                </a>
                                <a href="https://leetcode.com/bhaveshkhandelwal_/" target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" aria-label="LeetCode">
                                    <LeetcodeIcon />
                                </a>
                                <a href="https://instagram.com/_bhavesh._10" target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-md text-muted-foreground hover:text-[#E1306C] hover:bg-accent transition-colors" aria-label="Instagram">
                                    <InstagramIcon />
                                </a>
                                <a href="/contact" className="ml-auto">
                                    <button className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground">
                                        Contact Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

/* ── Inline SVG icons ── */
function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    );
}

function LinkedinIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function LeetcodeIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    );
}