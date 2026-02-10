import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-black selection:text-white">
            <Hero />
            <About />
            <Projects />
            <Contact />

            {/* Enhanced Noise Overlay for Texture */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.015] z-[9999] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                }}
            />
        </main>
    );
}
