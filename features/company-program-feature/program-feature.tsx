'use client';

import { CustomButton } from '@/components/common/animated-button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const cardsData = [
    { id: 1, title: 'Card One', color: '#584e3f', text: '#ffffff' },
    { id: 2, title: 'Card Two', color: '#e7d5bb', text: '#000000' },
    { id: 3, title: 'Card Three', color: '#584e3f', text: '#ffffff' },
];

export default function LayeredProgram() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create a timeline mapped to the scroll position of the container
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: `+=${cardsData.length * 100}%`, // Extend scroll distance based on card count
                    scrub: true, // Smooth scrubbing
                    pin: true, // Pin the container in place while scrolling
                },
            });

            // Animate each card (except the first one, which is already in place)
            cardsRef.current.forEach((card, index) => {
                if (index === 0) return;

                tl.fromTo(
                    card,
                    { y: () => window.innerHeight }, // Start below the screen
                    {
                        y: 0,
                        duration: 1,
                        ease: 'none',
                        // Optional: Add a slight scale down to previous cards for depth
                    },
                    index * 0.5 // Overlap the animations slightly
                );
            });
        }, containerRef);

        return () => ctx.revert(); // Clean up GSAP instances on unmount
    }, []);

    return (
        <div className="relative w-full bg-white pb-15 overflow-hidden">
            {/* Spacer to allow scrolling before the animation starts */}

            {/* The Pinned Container */}
            <div
                ref={containerRef}
                className="h-screen w-full relative flex items-center justify-center overflow-hidden"
            >
                {cardsData.map((card, index) => (
                    <div
                        key={card.id}
                        ref={(el) => {
                            cardsRef.current[index] = el;
                        }}
                        className="absolute left-12 right-12 font-montserrat flex flex-col md:flex-row gap-12 p-2 md:p-15 overflow-hidden "
                        style={{
                            backgroundColor: card.color,
                            zIndex: index,
                            color: card.text,
                            // Offset the visual top slightly so they look like a stacked deck
                            top: `calc(50% - 200px + ${index * 20}px)`,
                        }}
                    >
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <h1 className="text-6xl md:text-[7vw] font-extrabold text-[#f8f3eb]/25 absolute -top-3 md:-top-5 -left-2 md:-left-4">
                                0{index + 1}
                            </h1>
                            <h1 className="text-lg md:text-[3vw] text-center uppercase font-bold md:leading-none">
                                one-on-one mental
                            </h1>
                            <h1 className="text-lg md:text-[3vw] text-center uppercase font-bold md:leading-none">
                                performance
                            </h1>
                            <h1 className="text-lg md:text-[3vw] text-center uppercase font-bold md:leading-none">
                                coaching
                            </h1>
                            <p className="md:w-2/3 mt-10 mb-5">
                                Personalized sessions focused on your specific challenges, whether
                                it's negative self-talk, performance anxiety, or fear of failure. We
                                build practical mental skills you can use immediately to maximize
                                your full potential.
                            </p>
                            <CustomButton text="See our program" />
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/pod-images/study-2.jpeg"
                                width="400"
                                height="400"
                                alt="thumbnail"
                                className="w-6xl"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
