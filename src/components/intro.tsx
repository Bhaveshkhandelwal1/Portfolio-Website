"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { BorderMagicButton } from "@/components/ui/border-magic-button";
import { MapPin, Mail, Phone, Download, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Typed from "typed.js";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const skills = ["React", "Node.js", "AI / ML"];

export default function Intro() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [photoOpen, setPhotoOpen] = useState(false);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "I build scalable apps",
        "Java Expert",
        "I solve DSA problems",
        "AI Enthusiast",
        "I love AI &amp; ML",
        "Cloud &amp; DevOps Engineer",
        "Problem Solver",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      loop: true,
      backDelay: 1200,
    });
    return () => typed.destroy();
  }, []);

  return (
    <>
      <motion.div
        id="about"
        className="relative py-16 md:py-24"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Ambient glow orbs */}
        <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[130px] opacity-15 bg-primary" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 right-0 w-[350px] h-[350px] rounded-full blur-[110px] opacity-10 bg-sky-400" />

        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">

          {/* ─── LEFT: Text Content ─── */}
          <div className="space-y-6">

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="inline-block h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Welcome — I&#39;m glad you&#39;re here
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.1]"
            >
              Hi, I&#39;m{" "}
              <span className="gradient-text">Bhavesh Khandelwal</span>{" "}
              <span className="inline-block animate-wave">👋</span>
            </motion.h1>

            {/* Role tagline — typing */}
            <motion.div variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              I&#39;m a{" "}
              <span ref={typedRef} className="text-primary font-bold" />
            </motion.div>

            {/* Skills highlight */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
              {skills.map((s, i) => (
                <React.Fragment key={s}>
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                    {s}
                  </span>
                  {i < skills.length - 1 && (
                    <span className="text-muted-foreground text-sm">•</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-500/10 text-green-500 border border-green-500/20">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Open to Internships &amp; Full-time Roles
              </span>
            </motion.div>

            {/* Contact badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 text-sm">
                <MapPin className="w-3.5 h-3.5" /> Bengaluru, India
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 text-sm">
                <Mail className="w-3.5 h-3.5" /> bhaveshkhandelwal1232@gmail.com
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 text-sm">
                <Phone className="w-3.5 h-3.5" /> +91 9351337249
              </Badge>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-2">
              <a href="/contact">
                <button className="px-6 py-3 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 hover:shadow-[0_0_22px_rgba(59,130,246,0.5)] transition-all duration-200">
                  Contact Me
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1EeDIOij_XLIu7Xc2UPCLYIuGwTUYZ8Oj/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BorderMagicButton>
                  <Download className="h-4 w-4 mr-2" /> Download Resume
                </BorderMagicButton>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 pt-1">
              <SocialLink href="https://github.com/Bhaveshkhandelwal1" label="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/bhavesh-khandelwal-b9b27b27b/" label="LinkedIn">
                <LinkedinIcon />
              </SocialLink>
              <SocialLink href="https://leetcode.com/bhaveshkhandelwal_/" label="LeetCode">
                <LeetcodeIcon />
              </SocialLink>
            </motion.div>
          </div>

          {/* ─── RIGHT: Profile Photo ─── */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.3 } },
            }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group cursor-pointer" onClick={() => setPhotoOpen(true)} title="Click to view full photo">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-sky-400 to-primary opacity-30 blur-xl animate-spin-slow group-hover:opacity-60 transition-opacity duration-500" />
              {/* Spinning border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-sky-400 opacity-60 animate-spin-slow" />
              {/* Photo container */}
              <div className="relative h-44 w-44 md:h-56 md:w-56 rounded-full border-4 border-background overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                <Image
                  src="/profile.png"
                  alt="Bhavesh Khandelwal profile photo"
                  fill
                  sizes="(max-width: 768px) 176px, 224px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
              {/* Hover hint */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-semibold text-primary bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-primary/20 whitespace-nowrap">
                  View photo
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ─── Full-photo modal ─── */}
      <AnimatePresence>
        {photoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPhotoOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
            {/* Photo card */}
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-sm w-full"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 22 } }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/profile.png"
                alt="Bhavesh Khandelwal profile photo"
                width={480}
                height={640}
                className="w-full h-auto object-cover"
              />
              {/* Close button */}
              <button
                onClick={() => setPhotoOpen(false)}
                aria-label="Close photo"
                className="absolute top-3 right-3 flex items-center justify-center h-8 w-8 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-semibold">Bhavesh Khandelwal</p>
                <p className="text-white/70 text-xs">Full Stack Developer · AI Enthusiast</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Social link wrapper ── */
function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center h-10 w-10 rounded-xl border border-border hover:border-primary hover:text-primary hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] text-muted-foreground transition-all duration-200"
    >
      {children}
    </a>
  );
}

/* ── Inline SVG icons ── */
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LeetcodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}
