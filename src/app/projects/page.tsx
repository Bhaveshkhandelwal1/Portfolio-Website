"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BorderMagicButton } from "@/components/ui/border-magic-button";
import TiltCard from "@/components/TiltCard";
import { Github, ExternalLink } from "lucide-react";

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
    title: "AI-Powered Legal Assistance Platform",
    accent: "from-blue-500 to-cyan-400",
    emoji: "⚖️",
    description: [
      "Built a full-stack legal application featuring a Node.js/MongoDB backend with strict Role-Based Access Control for Judges and Lawyers.",
      "Achieved high-accuracy legal query resolution by developing a RAG pipeline utilizing LangChain, FAISS, Qdrant, and HuggingFace models.",
      "Optimized heavy AI workloads by deploying FastAPI, Celery, and Redis for asynchronous background processing of complex legal-document tasks.",
    ],
    tags: ["MongoDB", "LangChain", "FAISS", "Qdrant", "FastAPI", "Celery", "Redis", "Docker"],
    tagVariants: ["default", "default", "secondary", "secondary", "secondary", "secondary", "secondary", "secondary"] as const,
    github: "https://github.com/Bhaveshkhandelwal1",
    live: "",
  },
  {
    title: "Placement Management System",
    accent: "from-purple-500 to-pink-400",
    emoji: "🏢",
    description: [
      "Integrated Google Gemini AI to build an intelligent resume screening engine and an interactive mock interview simulator that provides real-time feedback.",
      "Architected a scalable Node.js backend, using Redis and BullMQ task queues to process long-running AI tasks in the background without slowing down the main application.",
      "Used Socket.io (WebSockets) to broadcast real-time placement notice alerts to students on new drive publication.",
    ],
    tags: ["Node.js", "MongoDB", "Redis", "BullMQ", "WebSockets", "Google Gemini AI", "Docker"],
    tagVariants: ["default", "default", "secondary", "secondary", "secondary", "secondary", "secondary"] as const,
    github: "https://github.com/Bhaveshkhandelwal1",
    live: "",
  },
  {
    title: "AI Image Classification Pipeline (Samsung PRISM)",
    accent: "from-emerald-500 to-teal-400",
    emoji: "🖼️",
    description: [
      "Categorized gallery images into 10 classes through a 7-stage ML workflow covering data cleaning, training, evaluation, and reporting using TensorFlow/Keras transfer learning with MobileNetV3 and EfficientNetV2.",
      "Engineered the Data Cleaning module using OpenCV with Laplacian variance-based blur detection, CLAHE-based dark-image enhancement, and MD5 hash duplicate removal.",
      "Built a modular, config-driven, reproducible ML pipeline integrating preprocessing with training and evaluation modules.",
    ],
    tags: ["TensorFlow", "Keras", "OpenCV", "MobileNetV3", "EfficientNetV2", "Python", "ML Pipelines"],
    tagVariants: ["default", "default", "secondary", "secondary", "secondary", "secondary", "secondary"] as const,
    github: "https://github.com/Bhaveshkhandelwal1",
    live: "",
  },
  {
    title: "Realtime WebSocket Chat Application",
    accent: "from-amber-500 to-orange-400",
    emoji: "💬",
    description: [
      "Built a full-duplex real-time chat system using Socket.io and Node.js, enabling instant messaging with multi-client broadcasting and auto-reconnect.",
      "Designed message schema in MongoDB and implemented persistent chat history.",
      "Served last N messages on join for context continuity.",
    ],
    tags: ["Socket.io", "Node.js", "MongoDB", "WebSockets", "Real-time"],
    tagVariants: ["default", "default", "secondary", "secondary", "secondary"] as const,
    github: "https://github.com/Bhaveshkhandelwal1",
    live: "",
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
              <div className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col h-full group">
                {/* Gradient accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />

                <div className="p-6 flex flex-col gap-4 flex-grow">
                  <div className="space-y-3">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{project.emoji}</span>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </CardTitle>
                      </div>
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
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-200">
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </button>
                      </a>
                    )}
                  </CardFooter>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
