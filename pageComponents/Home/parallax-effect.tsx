'use client';

import { CustomSlickSlider } from '@/components/custom/custom-slider';
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

export default function ScrollVideoSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=220%',
                    scrub: 1.2,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // 🖤 Initial black fade out
            tl.to('#black-layer', {
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out',
            });

            // 🎥 Video zoom (depth feel)
            tl.fromTo('#video', { scale: 1.2 }, { scale: 1, duration: 2, ease: 'power2.out' }, 0);

            // 🌊 Parallax layers (different speeds)
            tl.to('#parallax-left', { y: '-20%', ease: 'none' }, 0);
            tl.to('#parallax-right', { y: '-35%', ease: 'none' }, 0);

            // 🧠 Content scroll
            tl.to('#content-wrapper', { y: '-30%', ease: 'none' }, 0);

            // ✨ Text reveal (masking)
            tl.fromTo(
                '.reveal-line',
                { y: '100%' },
                {
                    y: '0%',
                    stagger: 0.1,
                    duration: 1,
                    ease: 'power3.out',
                },
                0.3
            );

            // 🤍 White cover comes LAST (fixes your issue)
            tl.to(
                '#white-cover',
                {
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power2.inOut',
                },
                0.9
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full">
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* 🎥 VIDEO */}
                <video
                    id="video"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    src="/videos/football.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* 🖤 BLACK LAYER */}
                <div
                    id="black-layer"
                    className="absolute inset-0 bg-black z-40 pointer-events-none"
                />

                {/* 🤍 WHITE COVER (CRITICAL FIX) */}
                <div
                    id="white-cover"
                    className="absolute inset-0 bg-white z-50 opacity-0 pointer-events-none"
                />

                {/* 🧠 CONTENT */}
                <div
                    id="content-wrapper"
                    className="absolute inset-0 z-30 px-4 md:px-12 py-12 text-white"
                >
                    <div className="flex">
                        {/* LEFT TEXT (Parallax slower) */}
                        <div
                            id="parallax-left"
                            className="md:w-1/2 flex flex-col justify-center overflow-hidden"
                        >
                            <div className="overflow-hidden">
                                <h1 className="reveal-line text-[4vw] font-bold uppercase">
                                    real results
                                </h1>
                            </div>
                            <div className="overflow-hidden">
                                <h1 className="reveal-line text-[4vw] font-bold uppercase">from</h1>
                            </div>
                            <div className="overflow-hidden">
                                <h1 className="reveal-line text-[4vw] font-bold uppercase">
                                    real athletes
                                </h1>
                            </div>
                        </div>

                        {/* RIGHT SLIDER (Parallax faster) */}
                        <div id="parallax-right" className="md:w-1/2 flex items-center">
                            <CustomSlickSlider visibleSlides={2}>
                                {slides.map((slide, i) => (
                                    <div
                                        key={i}
                                        className={`${slide.color} h-[400px] text-white p-8 flex flex-col justify-end`}
                                    >
                                        <span className="text-sm opacity-60 uppercase tracking-widest">
                                            Module 0{i + 1}
                                        </span>
                                        <h3 className="text-2xl font-bold">{slide.title}</h3>
                                    </div>
                                ))}
                            </CustomSlickSlider>
                        </div>
                    </div>

                    {/* 🧾 COMPANY INFO */}
                    <div id="company-info" className="mt-48 flex flex-col items-center text-center">
                        <Image src={`/pod-images/logo.svg`} width={30} height={30} alt="logo" />

                        {/* Masked gradient text */}
                        <div className="overflow-hidden">
                            <h1 className="reveal-line text-3xl font-bold uppercase bg-gradient-to-b from-[#e6cca9] to-[#a7885d] bg-clip-text text-transparent">
                                the podium
                            </h1>
                        </div>

                        <div className="overflow-hidden">
                            <h1 className="reveal-line text-3xl font-bold uppercase bg-gradient-to-b from-[#b49267] to-[#90754e] bg-clip-text text-transparent">
                                mindset
                            </h1>
                        </div>

                        <p className="text-xs uppercase text-[#574021] mt-2">
                            train the brain - dominate the game
                        </p>

                        <h1 className="text-[4vw] font-bold uppercase mt-10">
                            Personalized Coaching
                        </h1>
                        <h1 className="text-[4vw] font-bold uppercase">for Game-Time Results</h1>

                        <p className="text-xl max-w-3xl mt-6">
                            You shouldn’t have to figure this out alone...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
