'use client';

import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        projectType: '',
        email: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Project Inquiry from ${formData.name}`;
        const body = `Hi Takunda,\n\nI'm ${formData.name} from ${formData.company}. I need help with ${formData.projectType}.\n\nBest regards,\n${formData.name}\n${formData.email}`;
        window.location.href = `mailto:takmaswi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <footer className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background flex flex-col justify-between min-h-[80vh]">

            <div className="flex flex-col gap-16">
                <h2 className="text-[10vw] leading-none font-serif tracking-tighter">
                    Let's Talk
                </h2>

                {/* Interactive Conversational Form */}
                <form onSubmit={handleSubmit} className="max-w-4xl">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-snug">
                        Hi Takunda, I'm{' '}
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="your name"
                            className="bg-transparent border-b border-white/20 focus:border-[hsl(var(--accent))] outline-none px-2 py-1 transition-soft placeholder:text-white/10 hover:border-white/40"
                        />
                        {' '}from{' '}
                        <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="your company"
                            className="bg-transparent border-b border-white/20 focus:border-[hsl(var(--accent))] outline-none px-2 py-1 transition-soft placeholder:text-white/10 hover:border-white/40"
                        />
                        . <br className="hidden md:block" /> I need help with{' '}
                        <select
                            required
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="bg-transparent border-b border-white/20 focus:border-[hsl(var(--accent))] outline-none px-2 py-1 transition-soft cursor-pointer hover:border-white/40 appearance-none text-[hsl(var(--accent))]"
                        >
                            <option value="" disabled className="bg-black">choose a service</option>
                            <option value="Cybersecurity" className="bg-black">Cybersecurity</option>
                            <option value="Enterprise Automation" className="bg-black">Enterprise Automation</option>
                            <option value="Digital Transformation" className="bg-black">Digital Transformation</option>
                            <option value="IT Risk Audit" className="bg-black">IT Risk Audit</option>
                            <option value="Custom Development" className="bg-black">Custom Development</option>
                        </select>
                        . <br className="hidden md:block" /> Reach me at{' '}
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            className="bg-transparent border-b border-white/20 focus:border-[hsl(var(--accent))] outline-none px-2 py-1 transition-soft placeholder:text-white/10 hover:border-white/40"
                        />
                        .
                    </div>

                    <button
                        type="submit"
                        className="mt-16 px-10 py-5 bg-[hsl(var(--accent))] text-white font-medium tracking-widest uppercase text-xs hover:brightness-110 active:scale-95 transition-soft flex items-center gap-3 group rounded-full"
                    >
                        Send Inquiry
                        <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </button>
                </form>

                {/* Direct Contact */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-white/10 pt-12">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-widest text-gray-500">Or email directly</span>
                        <a href="mailto:takmaswi@gmail.com" className="text-xl md:text-2xl hover:italic transition-all flex items-center gap-2 group">
                            takmaswi@gmail.com
                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <span className="text-lg text-gray-400">+263 78 395 2522</span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-widest text-gray-500">Connect</span>
                        <div className="flex gap-6">
                            <a href="https://linkedin.com/in/takunda-christopher-maswi" target="_blank" className="hover:text-gray-400 transition-colors">
                                <Linkedin className="w-7 h-7" />
                            </a>
                            <a href="https://github.com/takmaswi" target="_blank" className="hover:text-gray-400 transition-colors">
                                <Github className="w-7 h-7" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-8 mt-24">
                <div className="flex flex-col">
                    <span className="text-sm font-light text-gray-400">© 2026 Takunda Maswi</span>
                    <span className="text-xs text-gray-600">Built with Next.js, Tailwind & Lenis</span>
                </div>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-sm uppercase tracking-widest hover:underline mt-8 md:mt-0"
                >
                    Back to Top
                </button>
            </div>

        </footer>
    );
}
