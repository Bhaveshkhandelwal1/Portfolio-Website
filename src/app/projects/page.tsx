"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BorderMagicButton } from "@/components/ui/border-magic-button";
import TiltCard from "@/components/TiltCard";
import { Github } from "lucide-react";


const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const projects = [
  {
    title: "AI-Powered Legal Assistance Platform (Legally)",
    description: [
      "Developed a full-stack web application using React, Node.js, Express, MongoDB with secure JWT-based authentication.",
      "Built an AI-powered legal assistant using LangChain, FAISS, InLegalBERT, enabling semantic search and context-aware query processing.",
      "Designed a document processing pipeline for unstructured legal data, improving retrieval efficiency by 40%.",
      "Reduced response latency by 30% using Redis caching and optimized API design.",
    ],
    tags: ["React", "Node.js", "LangChain", "FAISS", "InLegalBERT"],
    tagVariants: ["default", "default", "secondary", "secondary", "secondary"] as const,
    github: "https://github.com/Bhaveshkhandelwal1",
  },
  {
    title: "Placement Management System",
    description: [
      "Designed and implemented a backend-driven recruitment platform using Node.js and MongoDB.",
      "Implemented real-time communication using WebSockets for notifications and updates.",
      "Provisioned cloud infrastructure using Terraform (GKE, VPC, Cloud SQL) ensuring reproducibility.",
      "Built a CI/CD pipeline using Jenkins, SonarQube, and Docker, reducing deployment time by 50%.",
      "Deployed containerized services using Kubernetes and Helm with auto-scaling (HPA), achieving 99.9% uptime.",
    ],
    tags: ["Node.js", "MongoDB", "WebSockets", "Kubernetes", "Terraform"],
    tagVariants: ["default", "default", "secondary", "secondary", "secondary"] as const,
    github: "https://github.com/Bhaveshkhandelwal1",
  },
  {
    title: "AI-Powered Mock Interview Platform",
    description: [
      "Built a full-stack AI interview platform using Next.js, Gemini AI, and PostgreSQL.",
      "Generates custom interview questions, records user responses via webcam and microphone.",
      "Delivers instant AI-powered feedback to help users improve performance.",
      "Implemented secure authentication and dynamic dashboards for flexible interview practice.",
    ],
    tags: ["Next.js", "Gemini AI", "PostgreSQL", "Full-Stack"],
    tagVariants: ["default", "default", "secondary", "secondary"] as const,
    github: "https://github.com/Bhaveshkhandelwal1",
  },
  {
    title: "Realtime WebSocket Chat Application",
    description: [
      "Built a full-duplex real-time chat system using Socket.io and Node.js, enabling instant messaging with multi-client broadcasting and auto-reconnect.",
      "Designed message schema in MongoDB and implemented persistent chat history.",
      "Served last N messages on join for context continuity.",
    ],
    tags: ["Socket.io", "Node.js", "MongoDB", "Real-time"],
    tagVariants: ["default", "default", "secondary", "secondary"] as const,
    github: "https://github.com/Bhaveshkhandelwal1",
  },
];

export default function Projects() {
  return (
    <motion.div
      className="space-y-10 py-8"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">My Work</p>
          <h1 className="text-4xl font-extrabold tracking-tight">Projects</h1>
        </div>
        <a href="https://github.com/Bhaveshkhandelwal1" target="_blank" rel="noopener noreferrer">
          <BorderMagicButton>
            <Github className="h-4 w-4 mr-2" /> View GitHub
          </BorderMagicButton>
        </a>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeUp}>
            <TiltCard>
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 h-full">
                <div className="space-y-3">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  </CardHeader>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={tag} variant={project.tagVariants[i] ?? "secondary"}>{tag}</Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-0 flex-grow">
                  <ul className="text-muted-foreground leading-relaxed space-y-1.5 list-disc list-inside text-sm">
                    {project.description.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </CardContent>
                <CardFooter className="p-0 flex gap-3 flex-wrap">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-200">
                      <Github className="h-4 w-4" /> Source Code
                    </button>
                  </a>
                </CardFooter>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
