"use client";

import Intro from "@/components/intro";
import InfiniteLogoSlider from "@/components/InfiniteLogoSlider";
import LeetCodeCalendar from "@/components/LeetCodeCalendar";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap, Code2, Award, Sparkles, BookOpen,
  Database, Layout, Briefcase, Trophy, MapPin,
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

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-24"
      >
        {/* Experience */}
        <motion.section variants={fadeUp}>
          <SectionHeading icon={Briefcase} title="Experience" />
          <Card className="border-l-4 border-l-primary hover:shadow-[0_4px_24px_rgba(59,130,246,0.2)] transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center gap-2">
                <CardTitle className="text-xl">Samsung R&D</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-primary/5 border-primary/30">Bangalore</Badge>
                  <Badge variant="secondary">Nov 2025 – Present</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-semibold mb-3">AI-Based Image Classification System</p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Developed an image classification system using MobileNetV3 and EfficientNetV2 with transfer learning across 10+ categories.</li>
                <li>Engineered a modular ML pipeline with YAML-based configuration, improving reproducibility and scalability.</li>
                <li>Optimized model performance achieving 95%+ accuracy and sub-500ms inference latency using PyTorch and OpenCV.</li>
                <li>Collaborated in a cross-functional team of 4, following agile development practices.</li>
              </ul>
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
                { school: "M.B. International School", year: "2022", level: "Class XII CBSE", location: "Kota", score: "90.6%" },
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

        {/* Skills — Bento Grid */}
        <motion.section variants={fadeUp}>
          <SectionHeading icon={Code2} title="Skills" />
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen, title: "Core CS", span: "",
                skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "OOP"],
                variant: "outline" as const,
              },
              {
                icon: Code2, title: "Languages", span: "",
                skills: ["Java", "Python", "C", "JavaScript", "TypeScript"],
                variant: "default" as const,
              },
              {
                icon: Database, title: "Backend & Databases", span: "",
                skills: ["Node.js", "Express", "MongoDB", "SQL", "Redis"],
                variant: "secondary" as const,
              },
              {
                icon: Layout, title: "DevOps & Cloud", span: "",
                skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "AWS", "GCP"],
                variant: "secondary" as const,
              },
              {
                icon: Briefcase, title: "AI / ML", span: "",
                skills: ["PyTorch", "LangChain", "FAISS", "OpenCV", "Scikit-learn"],
                variant: "outline" as const,
              },
              {
                icon: Layout, title: "Tools", span: "sm:col-span-2 lg:col-span-1",
                skills: ["Git", "GitHub", "Linux", "VS Code", "IntelliJ", "Postman"],
                variant: "outline" as const,
              },
            ].map(({ icon: Icon, title, span, skills, variant }) => (
              <Card
                key={title}
                className={`group hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300 ${span}`}
              >
                <CardHeader className="pb-2 flex flex-row items-center gap-2 space-y-0">
                  <div className="p-2 bg-primary/10 rounded-md ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {skills.map((s) => <Badge key={s} variant={variant}>{s}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
    </div>
  );
}
