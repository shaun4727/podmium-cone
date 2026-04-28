'use client';
import HeroSection from '@/pageComponents/Home/hero-section';
import { OurPrograms } from '@/pageComponents/Home/our-programs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HomePageComponent() {
    const containerRef = useRef(null);
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Pin the hero section
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                pin: true,
                pinSpacing: false, // This allows the next section to overlap
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="relative">
            <div ref={heroRef} className="z-0">
                <HeroSection />
            </div>
            {/* Higher z-index ensures this section slides OVER the pinned hero */}
            <div className="relative z-10 bg-white">
                <OurPrograms />
            </div>
        </main>
    );
}
