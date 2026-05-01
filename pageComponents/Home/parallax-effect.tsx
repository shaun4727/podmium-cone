'use client';

import { CustomSlickSlider } from '@/components/custom/custom-slider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                    pin: true,
                },
            });

            // Step 1: Fade out dark layer → reveal video
            tl.to('#bg-layer', {
                opacity: 1,
                duration: 1.5,
            });

            // Step 2: Slight zoom on video (premium feel)
            tl.fromTo('#video', { scale: 1.2 }, { scale: 1, duration: 2 }, 0);

            // Step 3: Fade in white overlay
            tl.to('#white-layer', {
                opacity: 1,
                duration: 1,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[99vh] py-48">
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* 🎥 Video */}
                <video
                    id="video"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/videos/football.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* 🖤 Initial dark background */}
                {/* <div id="bg-layer" className="absolute inset-0 bg-black z-10" /> */}
                <div
                    id="bg-layer"
                    className="absolute inset-0 z-10 text-white px-4 md:px-12 py-12  flex gap-4 bg-black/50"
                >
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <div className="">
                            <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                                real results
                            </h1>
                            <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                                from
                            </h1>
                            <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                                real athlets
                            </h1>
                        </div>
                    </div>
                    <div className="md:w-1/2 ">
                        <CustomSlickSlider visibleSlides={2}>
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

                {/* 🤍 Final white overlay */}
                <div id="white-layer" className="absolute inset-0 bg-blue-500 z-20 opacity-0" />
            </div>
        </section>
    );
}
