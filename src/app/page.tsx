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
  Database, Layout, Trophy, MapPin, Mail, ArrowRight, Briefcase,
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
      <span className="w-36 shrink-0 text-sm font-semibold">{name}</span>
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
      { emoji: "🐍", name: "Python", pct: 88 },
      { emoji: "⚡", name: "JavaScript", pct: 85 },
      { emoji: "🔷", name: "TypeScript", pct: 80 },
      { emoji: "🔵", name: "C", pct: 75 },
    ],
  },
  {
    icon: Database, title: "Backend & Databases",
    skills: [
      { emoji: "🟩", name: "Node.js", pct: 88 },
      { emoji: "⚡", name: "FastAPI", pct: 84 },
      { emoji: "🟢", name: "Express.js", pct: 85 },
      { emoji: "🍃", name: "MongoDB", pct: 88 },
      { emoji: "🔴", name: "Redis", pct: 80 },
    ],
  },
  {
    icon: Sparkles, title: "AI / ML & GenAI",
    skills: [
      { emoji: "🔗", name: "RAG Pipelines", pct: 88 },
      { emoji: "🦜", name: "LangChain", pct: 85 },
      { emoji: "✨", name: "Gemini AI", pct: 86 },
      { emoji: "👁️", name: "OpenCV", pct: 82 },
      { emoji: "🎯", name: "FAISS & Qdrant", pct: 80 },
    ],
  },
  {
    icon: Layout, title: "Cloud, DevOps & Tools",
    skills: [
      { emoji: "🐳", name: "Docker", pct: 84 },
      { emoji: "☸️", name: "Kubernetes", pct: 75 },
      { emoji: "💬", name: "WebSockets", pct: 85 },
      { emoji: "🔀", name: "Git & GitHub", pct: 90 },
      { emoji: "⚙️", name: "BullMQ & Celery", pct: 80 },
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
        {/* Experience */}
        <motion.section variants={fadeUp} id="experience">
          <SectionHeading icon={Briefcase} title="Experience" />
          <Card className="border-l-4 border-l-primary hover:border-primary/50 hover:shadow-[0_4px_24px_rgba(59,130,246,0.2)] transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center gap-2">
                <div>
                  <CardTitle className="text-xl">Samsung PRISM Project Intern</CardTitle>
                  <p className="text-sm font-semibold text-primary mt-0.5">Samsung PRISM Program</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="bg-primary/5 border-primary/30 flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Bengaluru, India
                  </Badge>
                  <Badge variant="secondary" className="font-semibold">Oct 2025 – Mar 2026</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              <p className="text-sm font-semibold text-foreground">AI Image Classification Pipeline</p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside leading-relaxed">
                <li>
                  Contributed to an AI image classification pipeline for Samsung PRISM that categorizes gallery images into 10 classes through a 7-stage ML workflow covering data cleaning, training, evaluation, and reporting, using TensorFlow/Keras transfer learning with MobileNetV3 and EfficientNetV2.
                </li>
                <li>
                  Owned the Data Cleaning module (Stage 2) using OpenCV, implementing Laplacian variance-based blur detection, CLAHE-based dark-image enhancement, and MD5 hash-based duplicate removal to reduce dataset noise and improve downstream model performance.
                </li>
                <li>
                  Collaborated in a 4-member team to develop a config-driven, reproducible ML pipeline, integrating preprocessing with model training, evaluation, and reporting modules.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                {["TensorFlow", "Keras", "OpenCV", "MobileNetV3", "EfficientNetV2", "Python", "Data Preprocessing", "ML Pipelines"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Education */}
        <motion.section variants={fadeUp}>
          <SectionHeading icon={GraduationCap} title="Education" />
          <div className="grid gap-4 md:gap-6">
            <Card className="hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center gap-2">
                  <CardTitle className="text-xl">Ramaiah Institute of Technology (RIT)</CardTitle>
                  <Badge variant="outline" className="shrink-0 bg-primary/5 border-primary/30">Oct 2023 – May 2027</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Bachelor of Engineering in Computer Science</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> Bengaluru, Karnataka
                  </p>
                  <Badge variant="secondary" className="font-semibold text-primary">CGPA: 8.75/10</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { school: "M.B. International School", year: "2022", level: "Class XII CBSE", location: "Kota, Rajasthan", score: "90.8%" },
                { school: "Decent Public School", year: "2020", level: "Class X CBSE", location: "Kota, Rajasthan", score: "87.6%" },
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { icon: Award, text: "NPTEL Elite Certificate – Cloud Computing, IIT Kharagpur (Score: 82%, Jan–Apr 2026)" },
                  { icon: Trophy, text: "NPTEL Topper – Software Engineering, IIT Kharagpur" },
                  { icon: Sparkles, text: "JEE Advanced Qualified – AIR 23,000" },
                  { icon: Code2, text: "Solved 200+ DSA problems across LeetCode & GeeksforGeeks" },
                ].map(({ icon: Icon, text }) => (
                  <Badge
                    key={text}
                    variant="secondary"
                    className="px-4 py-3 text-sm rounded-xl gap-2.5 justify-start hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    <Icon className="h-4 w-4 shrink-0" /> <span className="leading-snug">{text}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Leadership & Activities */}
        <motion.section variants={fadeUp}>
          <SectionHeading icon={Trophy} title="Leadership & Activities" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  ⚽ Inter-Branch Football
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Represented branch in Inter-Branch Football for 3 consecutive years, demonstrating teamwork, discipline, and leadership in college-level competitions.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  🤝 National Service Scheme (NSS)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Active member of the National Service Scheme (NSS), contributing to social service activities, blood donation drives, and campus community events.
                </p>
              </CardContent>
            </Card>
          </div>
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
