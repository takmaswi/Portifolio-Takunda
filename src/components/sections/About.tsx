'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Delivered', value: '30+' },
    { label: 'Time Saved/Client', value: '6H+' },
];

export default function About() {
    return (
        <section className="relative w-full py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-foreground text-background overflow-hidden font-light">
            {/* Strong geometric accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 via-[hsl(var(--accent))] to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* BOLD STATEMENT - Editorial Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-20 md:mb-32"
                >
                    <span className="block text-xs md:text-sm uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-8 font-medium">The Strategy</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight">
                        Multi-sector expertise.{' '}
                        <span className="block mt-2 md:mt-4 text-white/40 italic">Structural impact.</span>
                    </h2>
                </motion.div>

                {/* Two-Column Editorial Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 mb-24">

                    {/* Left Column - Portrait */}
                    <div className="lg:col-span-12 xl:col-span-5">
                        <div className="relative w-full max-w-md mx-auto lg:mx-0">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 group">
                                <Image
                                    src="/takunda_noir_portrait_1770638476675.png"
                                    alt="Takunda Maswi"
                                    fill
                                    className="object-cover object-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-soft duration-700 group-hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                            </div>
                            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/40 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[hsl(var(--accent))]"></span>
                                Takunda Maswi • Specialist Consultant
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-12 xl:col-span-7 space-y-16">

                        {/* Key Statement */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8">
                                Architecting <span className="italic text-white">secure</span>, <span className="italic text-white">autonomous</span>, and <span className="italic text-white">efficient</span> digital ecosystems.
                            </h3>
                        </motion.div>

                        {/* Specializations Grid - Better Scanability */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 border-t border-white/10 pt-12">
                            <div className="space-y-4">
                                <h4 className="text-xs uppercase tracking-widest text-[hsl(var(--accent))]">Core Focus</h4>
                                <ul className="space-y-3 text-lg md:text-xl font-light">
                                    <li>Cybersecurity & Risk Management</li>
                                    <li>Enterprise Process Automation</li>
                                    <li>Digital Transformation Strategy</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs uppercase tracking-widest text-[hsl(var(--accent))]">Sector Experience</h4>
                                <ul className="space-y-3 text-lg md:text-xl font-light">
                                    <li>Telecommunications & ISP</li>
                                    <li>Banking & Financial Services</li>
                                    <li>Chartered Accounting / Audit</li>
                                </ul>
                            </div>
                        </div>

                        {/* Body Copy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-xl font-light text-gray-300 leading-relaxed max-w-2xl"
                        >
                            <p>
                                I bridge technical precision with strategic business impact. My background in <strong className="font-medium text-white">IT management and audit</strong> allows me to see both the code and the compliance—ensuring systems aren't just powerful, but resilient.
                            </p>
                        </motion.div>

                    </div>
                </div>

                {/* Stats - Bold Numbers */}
                <div className="border-t border-white/10 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="text-center md:text-left"
                            >
                                <div className="text-7xl md:text-8xl font-serif font-bold mb-3 tracking-tighter text-white">{stat.value}</div>
                                <div className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))] font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
