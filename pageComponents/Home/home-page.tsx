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
            // 1. Keep the Hero pinned
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: '+=100%', // Match the duration of the width animation
                pin: true,
                pinSpacing: true,
            });

            // 2. Animate the Programs section (Slide + Width)
            gsap.fromTo(
                programsWrapperRef.current,
                {
                    y: '100vh', // Start below the screen
                    width: '50%',
                    borderRadius: '20px', // Optional: adds a nice effect during expansion
                },
                {
                    y: 0,
                    width: '80%',
                    borderRadius: '0px',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: '+=100%',
                        scrub: true,
                    },
                }
            );
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
