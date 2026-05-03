'use client';

import { CustomSlickSlider } from '@/components/custom/custom-slider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
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

    const containerRef = useRef<HTMLDivElement>(null);

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
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=150%',
                    scrub: 1.5,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // Black fade out
            tl.to('#black-layer', {
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out',
            });

            // Video zoom
            tl.fromTo('#video', { scale: 1.2 }, { scale: 1, duration: 2, ease: 'power2.out' }, 0);

            // 🔥 MOVE CONTENT (this fixes your issue)
            tl.to(
                '#bg-layer',
                {
                    ease: 'none',
                    duration: 2,
                },
                0 // Starts at the exact beginning of the scroll trigger (0% progress)
            );

            // Optional finer control

            tl.to(
                '#company-info',
                {
                    y: -200, // Assuming you are moving it up
                    ease: 'power3.inOut',
                    duration: 1, // Increased duration slightly for a smoother "move up"
                },
                0.2
                /**
                 * POSITION PARAMETER: 0.2
                 * In a scrubbed timeline, this creates a 'scroll offset'.
                 * This animation starts after the user has scrolled 20% into the timeline
                 * duration, allowing the #bg-layer to lead the transition first.
                 */
            );

            // 🔥 Background to white - START AFTER THE MOVE
            tl.fromTo(
                '#bg-layer',
                { backgroundColor: 'rgba(255,255,255,0)' },
                {
                    backgroundColor: 'rgba(255,255,255,1)',
                    duration: 1,
                    ease: 'none',
                },
                // Using '>' tells GSAP to start exactly when the previous animation (#company-info move) FINISHES
                '>'
            );

            // Syncing the Authenticity Section opacity to fade out as the white background fades in
            tl.to(
                '.authenticity-section',
                {
                    opacity: 0,
                    duration: 1,
                    ease: 'none',
                },
                '<' // Synchronizes with the background-to-white transition
            );

            tl.to(
                '.company-detail',
                {
                    color: 'black',
                    duration: 1,
                    ease: 'none',
                },
                '<'
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full ">
            {/* Sticky container */}
            <div ref={containerRef} className="sticky top-0 h-full overflow-hidden">
                {/* 🎥 Video */}
                <video
                    id="video"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    src="/videos/football.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                <div
                    id="black-layer"
                    className="absolute inset-0 bg-black z-30 pointer-events-none"
                />
                <div id="overlay-layer" className="absolute inset-0 z-20 pointer-events-none" />
                <div
                    id="bg-layer"
                    className="absolute inset-0 z-30 h-full text-white px-4 md:px-12 pt-48  gap-4 bg-black/30 pointer-events-auto"
                >
                    <div className="flex authenticity-section">
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
                        <div className="md:w-1/2 flex flex-col justify-center">
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
                    <div id="company-info" className="bg-transparent mt-48">
                        <div className="flex flex-col items-center">
                            <Image
                                src={`/pod-images/logo.svg`}
                                width="30"
                                height="30"
                                alt="podmium-logo"
                            />
                            <h1
                                className="text-3xl font-bold uppercase font-roboto 
               bg-gradient-to-b from-[#e6cca9] from-[25%] to-[#a7885d] 
               bg-clip-text text-transparent"
                            >
                                the podium
                            </h1>
                            <h1
                                className="text-3xl font-bold uppercase font-roboto 
               bg-gradient-to-b from-[#b49267] from-[25%] to-[#90754e] 
               bg-clip-text text-transparent"
                            >
                                mindset
                            </h1>
                            <p className="text-[10px] font-bold uppercase font-roboto text-[#574021] ">
                                train the brain - dominate the game
                            </p>

                            <div className="company-detail">
                                <h1 className="text-[4vw] uppercase font-bold font-montserrat leading-none mt-12">
                                    Personalized Coaching
                                </h1>
                                <h1 className="text-[4vw] uppercase font-bold font-montserrat leading-none">
                                    for Game-Time Results
                                </h1>
                                <p className="text-2xl w-5xl text-center mt-6">
                                    You shouldn’t have to figure this out alone. Our coaches walk
                                    alongside you every step of the way. We check in before big
                                    tournaments, help you implement strategies in real time, and
                                    celebrate your wins along the way.
                                </p>
                            </div>
                            <section className="bg-[#584e3f] mt-40 font-montserrat flex gap-12 p-15 relative overflow-hidden">
                                <div className="w-1/2 flex flex-col justify-center">
                                    <h1 className="text-[7vw] font-extrabold text-[#f8f3eb]/25 absolute -top-15 -left-4">
                                        01
                                    </h1>
                                    <h1 className="text-[3vw] uppercase font-bold leading-none">
                                        one-on-one mental
                                    </h1>
                                    <h1 className="text-[3vw] uppercase font-bold leading-none">
                                        performance
                                    </h1>
                                    <h1 className="text-[3vw] uppercase font-bold leading-none">
                                        coaching
                                    </h1>
                                    <p className="w-2/3 mt-10">
                                        Personalized sessions focused on your specific challenges,
                                        whether it's negative self-talk, performance anxiety, or
                                        fear of failure. We build practical mental skills you can
                                        use immediately to maximize your full potential.
                                    </p>
                                    <button className="group w-[225px] relative overflow-hidden uppercase cursor-pointer flex items-center gap-2 mt-4 bg-black p-2 text-white transition-colors duration-500 hover:text-white solution-button opacity-0 invisible">
                                        {/* 1. The Content (Text) */}
                                        <span className="relative z-11 pl-2 group-hover:text-white">
                                            See our program
                                        </span>

                                        {/* 2. The Arrow Wrapper + Expanding Background */}
                                        <span className="relative z-10 flex items-center justify-center bg-theme-brandy text-white  p-1 transition-colors duration-500 group-hover:bg-transparent">
                                            <ArrowUpRight size={16} />

                                            {/* This div is the magic: It scales from the icon to cover the button */}
                                            <div className="absolute inset-0 bg-theme-brandy -z-10 scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[40]" />

                                            <div className="absolute inset-0 bg-black scale-0 p-1 -z-10  transition-all duration-300 ease-in-out group-hover:scale-100" />
                                        </span>
                                    </button>
                                </div>
                                <div className="w-1/2">
                                    <Image
                                        src="/pod-images/study-2.jpeg"
                                        width="400"
                                        height="400"
                                        alt="thumbnail"
                                        className="w-6xl"
                                    />
                                </div>
                            </section>
                            <section className="bg-[#e7d5bb] text-black mt-40 font-montserrat flex gap-12 p-15 relative overflow-hidden">
                                <div className="w-1/2 flex flex-col justify-center">
                                    <h1 className="text-[7vw] font-extrabold text-[#f8f3eb]/25 absolute -top-15 -left-4">
                                        01
                                    </h1>
                                    <h1 className="text-[3vw] uppercase font-bold leading-none">
                                        one-on-one mental
                                    </h1>
                                    <h1 className="text-[3vw] uppercase font-bold leading-none">
                                        performance
                                    </h1>
                                    <h1 className="text-[3vw] uppercase font-bold leading-none">
                                        coaching
                                    </h1>
                                    <p className="w-2/3 mt-10">
                                        Personalized sessions focused on your specific challenges,
                                        whether it's negative self-talk, performance anxiety, or
                                        fear of failure. We build practical mental skills you can
                                        use immediately to maximize your full potential.
                                    </p>
                                    <button className="group w-[225px] relative overflow-hidden uppercase cursor-pointer flex items-center gap-2 mt-4 bg-black p-2 text-white transition-colors duration-500 hover:text-white solution-button opacity-0 invisible">
                                        {/* 1. The Content (Text) */}
                                        <span className="relative z-11 pl-2 group-hover:text-white">
                                            See our program
                                        </span>

                                        {/* 2. The Arrow Wrapper + Expanding Background */}
                                        <span className="relative z-10 flex items-center justify-center bg-theme-brandy text-white  p-1 transition-colors duration-500 group-hover:bg-transparent">
                                            <ArrowUpRight size={16} />

                                            {/* This div is the magic: It scales from the icon to cover the button */}
                                            <div className="absolute inset-0 bg-theme-brandy -z-10 scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[40]" />

                                            <div className="absolute inset-0 bg-black scale-0 p-1 -z-10  transition-all duration-300 ease-in-out group-hover:scale-100" />
                                        </span>
                                    </button>
                                </div>
                                <div className="w-1/2">
                                    <Image
                                        src="/pod-images/study.webp"
                                        width="400"
                                        height="400"
                                        alt="thumbnail"
                                        className="w-6xl"
                                    />
                                </div>
                            </section>
                            <section className="bg-[#584e3f] mt-40 font-montserrat  flex gap-12 p-15 relative overflow-hidden">
                                <div className="w-1/2 flex flex-col justify-center">
                                    <h1 className="text-[7vw] font-extrabold text-[#f8f3eb]/25 absolute -top-15 -left-4">
                                        01
                                    </h1>
                                    <h1 className="text-[3vw] uppercase font-bold leading-none">
                                        one-on-one mental
                                    </h1>
                                    <h1 className="text-[3vw] uppercase font-bold leading-none">
                                        performance
                                    </h1>
                                    <h1 className="text-[3vw] uppercase font-bold leading-none">
                                        coaching
                                    </h1>
                                    <p className="w-2/3 mt-10">
                                        Personalized sessions focused on your specific challenges,
                                        whether it's negative self-talk, performance anxiety, or
                                        fear of failure. We build practical mental skills you can
                                        use immediately to maximize your full potential.
                                    </p>
                                    <button className="group w-[225px] relative overflow-hidden uppercase cursor-pointer flex items-center gap-2 mt-4 bg-black p-2 text-white transition-colors duration-500 hover:text-white solution-button opacity-0 invisible">
                                        {/* 1. The Content (Text) */}
                                        <span className="relative z-11 pl-2 group-hover:text-white">
                                            See our program
                                        </span>

                                        {/* 2. The Arrow Wrapper + Expanding Background */}
                                        <span className="relative z-10 flex items-center justify-center bg-theme-brandy text-white  p-1 transition-colors duration-500 group-hover:bg-transparent">
                                            <ArrowUpRight size={16} />

                                            {/* This div is the magic: It scales from the icon to cover the button */}
                                            <div className="absolute inset-0 bg-theme-brandy -z-10 scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[40]" />

                                            <div className="absolute inset-0 bg-black scale-0 p-1 -z-10  transition-all duration-300 ease-in-out group-hover:scale-100" />
                                        </span>
                                    </button>
                                </div>
                                <div className="w-1/2">
                                    <Image
                                        src="/pod-images/playing.jpg"
                                        width="400"
                                        height="400"
                                        alt="thumbnail"
                                        className="w-6xl"
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
