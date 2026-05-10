'use client';

import { CustomSlickSlider } from '@/components/custom/custom-slider';
import { useIsMobile } from '@/provider/viewport-context';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
const slides = [
    { title: 'Peak Focus', color: 'bg-blue-500' },
    { title: 'Mental Toughness', color: 'bg-theme-brandy' },
    { title: 'Pressure Handling', color: 'bg-gray-800' },
    { title: 'Goal Setting', color: 'bg-zinc-900' },
];

export default function VideoRevealSection() {
    const sectionRef = useRef(null);
    const videoRevealCoachingSectionRef = useRef(null);
    const companyDetailSectionRef = useRef(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (!containerRef.current) return;

        const height = containerRef.current.scrollHeight;
        containerRef.current.style.minHeight = `${height}px`;
    }, []);

    //     useEffect(() => {
    //     if (!containerRef.current) return;

    //     const resizeObserver = new ResizeObserver((entries) => {
    //         for (let entry of entries) {
    //             // Update the min-height based on the actual scrollHeight
    //             const height = entry.target.scrollHeight;
    //             containerRef.current!.style.minHeight = `${height}px`;
    //         }
    //     });

    //     resizeObserver.observe(containerRef.current);

    //     return () => resizeObserver.disconnect(); // Clean up to avoid memory leaks
    // }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            //video reveal starts
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=220%',
                    scrub: 1.5,
                    pin: '.pinned-video-item',
                    anticipatePin: 1,
                },
            });
            // 1. Initial State: Semi-transparent black (Video is visible)
            // Adjust the 0.6 (60%) to make it more or less see-through
            tl.set('#bg-layer', { backgroundColor: 'rgba(0, 0, 0, 1)' });

            // 2. Phase One: Transition to a lighter "tint"
            // This keeps the video visible but shifts the mood
            tl.to(
                '#bg-layer',
                {
                    backgroundColor: 'rgba(26, 26, 26, 0.7)',
                    duration: 0.3,
                    ease: 'none',
                },
                0
            );

            // 3. Phase Two: Hold that transparency
            tl.to('#bg-layer', {
                backgroundColor: 'rgba(26, 26, 26, 0.3)',
                duration: 1,
            });

            // 4. Final Phase: Transition to SOLID White
            // This fades out the video as the background becomes fully opaque white
            tl.to('#bg-layer', {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                duration: 1.3,
                ease: 'power2.inOut',
            });

            // Optional: Sync text fade out
            tl.to(
                '.authenticity-section',
                {
                    opacity: 0,
                    duration: 0.5,
                },
                '>-0.5'
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full ">
            {/* Sticky container */}
            <div ref={containerRef}>
                {/* 🎥 Video */}
                <video
                    id="video"
                    src="/videos/football.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0  object-cover pointer-events-none pinned-video-item"
                />

                <div id="bg-layer" className="px-4 md:px-12 relative z-4">
                    <div className="extra-layer  w-full min-h-screen"></div>
                    <div className="flex flex-col md:flex-row  authenticity-section min-h-screen">
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <div className="text-white">
                                <h1 className="reveal-split text-[4vw] font-bold uppercase font-montserrat leading-none">
                                    real results
                                </h1>
                                <h1 className="reveal-split text-[4vw] font-bold uppercase font-montserrat leading-none">
                                    from
                                </h1>
                                <h1 className="reveal-split text-[4vw] font-bold uppercase font-montserrat leading-none">
                                    real athlets
                                </h1>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <CustomSlickSlider visibleSlides={isMobile ? 1 : 2}>
                                {slides.map((slide, i) => (
                                    <div
                                        key={i}
                                        className={`${slide.color} h-[400px] text-white p-8 flex flex-col justify-end `}
                                    >
                                        <span className="text-sm font-roboto opacity-60 uppercase tracking-widest">
                                            Module 0{i + 1}
                                        </span>
                                        <h3 className="text-2xl font-bold font-montserrat">
                                            {slide.title}
                                        </h3>
                                    </div>
                                ))}
                            </CustomSlickSlider>
                        </div>
                    </div>
                    <div id="company-info" className="mt-48 min-h-screen">
                        <div
                            className="flex flex-col items-center"
                            ref={videoRevealCoachingSectionRef}
                        >
                            <Image
                                src={`/pod-images/logo.svg`}
                                width="30"
                                height="30"
                                className="video-reveal-detail"
                                alt="podmium-logo"
                            />
                            <h1
                                className="video-reveal-detail text-3xl font-bold uppercase font-roboto 
               bg-gradient-to-b from-[#e6cca9] from-[25%] to-[#a7885d] 
               bg-clip-text text-transparent"
                            >
                                the podium
                            </h1>
                            <h1
                                className="video-reveal-detail text-3xl font-bold uppercase font-roboto 
               bg-gradient-to-b from-[#b49267] from-[25%] to-[#90754e] 
               bg-clip-text text-transparent"
                            >
                                mindset
                            </h1>
                            <p className="video-reveal-detail text-[10px] font-bold uppercase font-roboto text-[#574021] ">
                                train the brain - dominate the game
                            </p>

                            <div className="company-detail" ref={companyDetailSectionRef}>
                                <h1 className="company-detail-split text-3xl md:text-[4vw] text-center w-sm md:w-5xl uppercase font-bold font-montserrat leading-none mt-12">
                                    Personalized Coaching for Game-Time Results
                                </h1>

                                <p className="company-detail-split text-2xl w-sm md:w-5xl text-center text-roboto mt-6">
                                    You shouldn’t have to figure this out alone. Our coaches walk
                                    alongside you every step of the way. We check in before big
                                    tournaments, help you implement strategies in real time, and
                                    celebrate your wins along the way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
