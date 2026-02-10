'use client';

import { motion, Variants } from 'framer-motion';

export default function Hero() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item: Variants = {
        hidden: { y: 100, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
            {/* Premium Mesh Gradient for Depth */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vw] bg-[radial-gradient(circle,hsl(var(--accent)/0.08)_0%,transparent_70%)] rounded-full blur-[120px]"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="z-10 flex flex-col gap-2"
            >
                <div className="overflow-visible pb-4">
                    <motion.div variants={item} className="flex items-center gap-4 mb-6">
                        <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[hsl(var(--accent))] font-semibold">
                            Specialist Systems Consultant
                        </p>
                    </motion.div>
                </div>

                <div className="overflow-visible py-2">
                    <motion.h1 variants={item} className="text-[12vw] leading-[0.8] font-serif text-foreground tracking-tighter">
                        Takunda
                    </motion.h1>
                </div>

                <div className="overflow-visible py-2">
                    <motion.h1 variants={item} className="text-[12vw] leading-[0.8] font-serif text-foreground tracking-tighter ml-[10vw]">
                        Maswi
                    </motion.h1>
                </div>

                <div className="flex flex-col md:flex-row mt-16 md:mt-24 gap-12 md:items-end justify-between">
                    <motion.div variants={item} className="max-w-xl">
                        <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed text-balance">
                            Turning <span className="text-foreground font-medium italic">industrial-scale complexity</span> into secure, autonomous, and <span className="text-[hsl(var(--accent))] font-medium">high-performance</span> digital systems.
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-col items-end gap-2 text-right">
                        <div className="flex gap-4 items-center">
                            <span className="text-xs uppercase tracking-[0.3em] font-medium">Harare, ZW</span>
                            <div className="h-2 w-2 rounded-full bg-[hsl(var(--accent))] animate-pulse"></div>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-400">Available for 2026 Engagements</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
