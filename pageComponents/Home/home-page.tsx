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
                end: '+=200%', // Increased to account for two phases of animation
                pin: true,
                pinSpacing: true,
            });

            // 2. Create a Timeline for OurPrograms
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=200%', // Matches the hero pinning duration
                    scrub: true,
                },
            });

            tl.fromTo(
                programsWrapperRef.current,
                {
                    y: '100vh',
                    width: '50%',
                    borderRadius: '20px',
                    opacity: 1,
                },
                {
                    y: '10vh', // Positioned nicely on screen
                    width: '80%',
                    borderRadius: '0px',
                    opacity: 1,
                    ease: 'none',
                }
            )
                // 3. The "Disappear" Phase
                // This starts right after the first animation finishes
                .to(programsWrapperRef.current, {
                    y: '-10vh', // Slides out to the top
                    opacity: 1, // Fades out
                    ease: 'none',
                });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="relative bg-black overflow-x-hidden">
            <div ref={heroRef} className="z-0">
                <HeroSection />
            </div>

            {/* Centering wrapper is essential for symmetrical width expansion */}
            <div className="fixed inset-0 pointer-events-none flex justify-center items-end z-10">
                <div ref={programsWrapperRef} className="bg-white pointer-events-auto shadow-2xl ">
                    <OurPrograms />
                </div>
            </div>

            {/* Spacer to allow scrolling */}
            <div className="h-screen" />
        </main>
    );
}
