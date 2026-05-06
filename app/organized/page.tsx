'use client';

import HeroSection from '@/features/hero-section/hero-section';
import { InspiredSection } from '@/features/inspired-section/inspired-section';
import { OurPrograms } from '@/features/our-programs/our-programs';
import { SolutionSection } from '@/features/solution-section/solution-section';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const page = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const programsWrapperRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Pin the Hero (stays same)
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: '+=100%', // Increased to account for two phases of animation
                pin: true,
                pinSpacing: true,
            });

            // 2. Create a Timeline for OurPrograms
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: programsWrapperRef.current,
                    start: 'top center',
                    end: '+=10%', // Matches the hero pinning duration
                    scrub: 3,
                },
            });

            tl.fromTo(
                programsWrapperRef.current,
                {
                    y: '100vh',
                    scale: 1, // Start at 50% size
                    transformOrigin: 'top center',
                    borderRadius: '20px',
                    opacity: 1,
                },
                {
                    y: '90vh', // Positioned nicely on screen
                    scale: 1,
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
        <main ref={containerRef} className="relative bg-black ">
            <div ref={heroRef} className="z-0">
                <HeroSection />
            </div>
            <div className="absolute top-100 left-2.5 md:left-[10%] pointer-events-none flex justify-center items-end z-10">
                <div
                    ref={programsWrapperRef}
                    className="bg-white pointer-events-auto md:shadow-2xl flex-1 px-1 md:px-15"
                >
                    <OurPrograms />
                </div>
            </div>
            <InspiredSection />
            <SolutionSection />
        </main>
    );
};

export default page;
