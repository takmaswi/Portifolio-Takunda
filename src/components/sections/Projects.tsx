'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: "01",
        name: "Taku-Payroll",
        category: "Production System",
        tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
        description: "Engineered production-grade payroll system with localized compliance for Zimbabwe market (ZIMRA, NSSA)."
    },
    {
        id: "02",
        name: "Fairvalue-Tracker",
        category: "Task Management",
        tags: ["React", "Firebase", "Tailwind"],
        description: "Real-time Kanban interface and role-based access control for managing concurrent client engagements."
    },
    {
        id: "03",
        name: "Taku-AI",
        category: "AI Automation",
        tags: ["Python", "OpenAI", "n8n", "Make"],
        description: "Intelligent business automation platform integrating ChatGPT and Claude for workflow optimization."
    },
    {
        id: "04",
        name: "SQL Audit Framework",
        category: "Enterprise Audit",
        tags: ["SQL", "Compliance", "Data Analysis"],
        description: "Comprehensive SQL framework expanding audit testing coverage by 10x with automated trails."
    }
];

export default function Projects() {
    return (
        <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24">
            <div className="mb-16 border-b border-black/10 pb-6 flex justify-between items-end">
                <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))] font-semibold">Discovery</span>
                    <h3 className="text-4xl md:text-5xl font-serif">Selected Works</h3>
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-400">2022 — 2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative flex flex-col justify-between p-8 md:p-10 bg-white border border-black/5 rounded-2xl transition-soft hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:border-[hsl(var(--accent))/20] overflow-hidden"
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_hsl(var(--accent)/0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-sm font-mono text-gray-300">({project.id})</span>
                                <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-[hsl(var(--accent))] transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>

                            <div className="space-y-4 mb-12">
                                <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))] font-medium">
                                    {project.category}
                                </span>
                                <h4 className="text-3xl lg:text-4xl font-serif leading-tight">
                                    {project.name}
                                </h4>
                                <p className="text-base text-gray-600 font-light leading-relaxed max-w-sm">
                                    {project.description}
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] uppercase tracking-wider rounded-md border border-black/5 group-hover:border-[hsl(var(--accent))/20] group-hover:text-[hsl(var(--accent))] transition-all"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
