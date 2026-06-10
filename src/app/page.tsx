"use client";

import Intro from "@/components/intro";
import InfiniteLogoSlider from "@/components/InfiniteLogoSlider";
import LeetCodeCalendar from "@/components/LeetCodeCalendar";
import StatsCounter from "@/components/StatsCounter";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap, Code2, Award, Sparkles, BookOpen,
  Database, Layout, Trophy, MapPin, Mail, ArrowRight,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 18 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

function SectionHeading({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2.5 rounded-xl bg-primary/10 ring-1 ring-primary/20">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

/* ── Animated skill bar row ── */
function SkillBar({ emoji, name, pct, delay }: { emoji: string; name: string; pct: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className="text-xl w-7 shrink-0">{emoji}</span>
      <span className="w-32 shrink-0 text-sm font-semibold">{name}</span>
      <div className="flex-1 h-2.5 rounded-full bg-primary/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-sky-400"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}

const skillGroups = [
  {
    icon: Code2, title: "Languages",
    skills: [
      { emoji: "☕", name: "Java", pct: 90 },
      { emoji: "🐍", name: "Python", pct: 82 },
      { emoji: "⚡", name: "JavaScript", pct: 85 },
      { emoji: "🔷", name: "TypeScript", pct: 78 },
      { emoji: "🔵", name: "C", pct: 72 },
    ],
  },
  {
    icon: Layout, title: "Frontend & Frameworks",
    skills: [
      { emoji: "⚛️", name: "React", pct: 88 },
      { emoji: "▲", name: "Next.js", pct: 82 },
      { emoji: "🎨", name: "Tailwind", pct: 85 },
      { emoji: "🚀", name: "Node.js", pct: 80 },
      { emoji: "🟢", name: "Express", pct: 78 },
    ],
  },
  {
    icon: Database, title: "Cloud & DevOps",
    skills: [
      { emoji: "🐳", name: "Docker", pct: 80 },
      { emoji: "☸️", name: "Kubernetes", pct: 72 },
      { emoji: "🏗️", name: "Terraform", pct: 68 },
      { emoji: "☁️", name: "AWS / GCP", pct: 74 },
      { emoji: "🔄", name: "CI/CD", pct: 76 },
    ],
  },
  {
    icon: Sparkles, title: "AI / ML",
    skills: [
      { emoji: "🔥", name: "PyTorch", pct: 78 },
      { emoji: "🦜", name: "LangChain", pct: 75 },
      { emoji: "📐", name: "FAISS", pct: 70 },
      { emoji: "👁️", name: "OpenCV", pct: 72 },
      { emoji: "🤖", name: "Scikit-learn", pct: 74 },
    ],
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-16">
      <Intro />

      {/* Infinite slider */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className="text-center mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Technologies I work with</span>
        </div>
        <InfiniteLogoSlider />
      </motion.section>

      {/* ── Stats Counter ── */}
      <StatsCounter />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-24"
      >
        <motion.section variants={fadeUp}>
          <SectionHeading icon={GraduationCap} title="Education" />
          <div className="grid gap-4 md:gap-6">
            <Card className="hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center gap-2">
                  <CardTitle className="text-xl">Ramaiah Institute of Technology (RIT)</CardTitle>
                  <Badge variant="outline" className="shrink-0 bg-primary/5 border-primary/30">2023 – 2027</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">B.E. Computer Science</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> Bengaluru
                  </p>
                  <Badge variant="secondary" className="font-semibold">CGPA: 8.66/10</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { school: "M.B. International School", year: "2022", level: "Class XII CBSE", location: "Kota", score: "90.8%" },
                { school: "Decent Public School", year: "2020", level: "Class X CBSE", location: "Kota", score: "87.6%" },
              ].map((edu) => (
                <Card key={edu.school} className="hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-lg">{edu.school}</CardTitle>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{edu.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.level}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" /> {edu.location}
                    </p>
                    <div className="mt-3"><Badge variant="secondary">{edu.score}</Badge></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills — Proficiency Bars */}
        <motion.section variants={fadeUp} id="skills">
          <SectionHeading icon={Code2} title="Skills" />
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {skillGroups.map(({ icon: Icon, title, skills }) => (
              <Card
                key={title}
                className="group hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300"
              >
                <CardHeader className="pb-3 flex flex-row items-center gap-2 space-y-0">
                  <div className="p-2 bg-primary/10 rounded-md ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {skills.map((s, i) => (
                    <SkillBar key={s.name} emoji={s.emoji} name={s.name} pct={s.pct} delay={i * 0.08} />
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Core CS badges strip */}
          <Card className="mt-4 hover:border-primary/50 transition-all duration-300">
            <CardHeader className="pb-2 flex flex-row items-center gap-2 space-y-0">
              <div className="p-2 bg-primary/10 rounded-md ring-1 ring-primary/20">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <CardTitle className="text-base">Core CS Fundamentals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "OOP", "System Design"].map((s) => (
                  <Badge key={s} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">{s}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Achievements */}
        <motion.section variants={fadeUp}>
          <SectionHeading icon={Trophy} title="Achievements" />
          <Card className="overflow-hidden bg-gradient-to-br from-card to-primary/5 border-primary/20 hover:shadow-[0_4px_30px_rgba(59,130,246,0.2)] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Award, text: "NPTEL Topper – Software Engineering (IIT Kharagpur)" },
                  { icon: Sparkles, text: "JEE Advanced Qualified – AIR 23,000" },
                  { icon: Code2, text: "Solved 200+ DSA problems on LeetCode & other platforms" },
                ].map(({ icon: Icon, text }) => (
                  <Badge
                    key={text}
                    variant="secondary"
                    className="px-4 py-3 text-sm rounded-full gap-2 hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    <Icon className="h-4 w-4 shrink-0" /> {text}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* LeetCode Activity */}
        <motion.section variants={fadeUp}>
          <SectionHeading icon={Code2} title="LeetCode Activity" />
          <Card className="hover:shadow-[0_4px_24px_rgba(59,130,246,0.2)] transition-all duration-300">
            <CardContent className="p-6">
              <LeetCodeCalendar />
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>

      {/* ── CTA Strip ── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-sky-400/10 p-10 text-center"
      >
        {/* Background orbs */}
        <div aria-hidden className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary/20 blur-[80px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-sky-400/20 blur-[80px]" />

        <div className="relative space-y-4">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary">Open to Work</p>
          <h2 className="text-4xl font-extrabold tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span> Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            I&apos;m actively looking for internships and full-time roles in software engineering, AI/ML, and cloud. Let&apos;s connect!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a href="/contact">
              <button className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 hover:shadow-[0_0_28px_rgba(59,130,246,0.55)] transition-all duration-200">
                Contact Me <ArrowRight className="h-4 w-4" />
              </button>
            </a>
            <a href="mailto:bhaveshkhandelwal1232@gmail.com">
              <button className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold border border-border hover:border-primary hover:text-primary transition-all duration-200">
                <Mail className="h-4 w-4" /> Send Email
              </button>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
