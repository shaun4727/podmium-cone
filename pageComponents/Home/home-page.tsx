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
    const programsWrapperRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Pin the Hero (stays same)
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: '+=120%', // Increased to account for two phases of animation
                pin: true,
                pinSpacing: true,
            });

            // 2. Create a Timeline for OurPrograms
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=10%', // Matches the hero pinning duration
                    scrub: 5,
                },
            });

            tl.fromTo(
                programsWrapperRef.current,
                {
                    y: '100vh',
                    width: '80%',
                    borderRadius: '20px',
                    opacity: 1,
                },
                {
                    y: '90vh', // Positioned nicely on screen
                    width: '100%',
                    borderRadius: '0px',
                    opacity: 1,
                    ease: 'power3.inOut',
                }
            );
            // 3. The "Disappear" Phase
            // This starts right after the first animation finishes
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="relative bg-black overflow-x-hidden">
            <div ref={heroRef} className="z-0">
                <HeroSection />
            </div>

            {/* Centering wrapper is essential for symmetrical width expansion */}
            <div className="absolute top-100 left-4 md:left-[10%] pointer-events-none flex justify-center items-end z-10">
                <div
                    ref={programsWrapperRef}
                    className="bg-white pointer-events-auto md:shadow-2xl flex-1 px-4 md:px-15"
                >
                    <OurPrograms />
                </div>
            </div>

            {/* Spacer to allow scrolling */}
            <div className="h-screen" />
        </main>
    );
}
