'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

// Register ScrollTrigger once outside the component tree
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const cardsData = [
    {
        id: '01',
        title: 'Strategy & Planning',
        bgColor: 'bg-stone-800',
        textColor: 'text-white',
    },
    {
        id: '02',
        title: 'Design & Prototyping',
        bgColor: 'bg-amber-100',
        textColor: 'text-stone-900',
    },
    {
        id: '03',
        title: 'Development & Build',
        bgColor: 'bg-emerald-800',
        textColor: 'text-white',
    },
    {
        id: '04',
        title: 'Testing & Launch',
        bgColor: 'bg-indigo-900',
        textColor: 'text-white',
    },
];

export const LayeredPinning = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Grab all elements with the 'pin-card' class
            const cards = gsap.utils.toArray<HTMLElement>('.pin-card');

            cards.forEach((card, index) => {
                const isLastCard = index === cards.length - 1;

                if (!isLastCard) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: 'top top',
                        // The Math: Stay pinned exactly as long as it takes the remaining cards to scroll up
                        end: () => `+=${(cards.length - 1 - index) * window.innerHeight}`,
                        pin: true,
                        // CRITICAL: Prevents empty space from being added below the pinned card
                        pinSpacing: false,
                        // Optional: Un-comment to visualize the trigger lines while developing
                        // markers: true,
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <div ref={containerRef} className="relative w-full">
            {/* Optional: Added a buffer section at the top so you can scroll DOWN 
                into the effect, mimicking a real page structure.
            */}
            <div className="h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-400">Scroll Down to Stack</h1>
            </div>

            {cardsData.map((card, index) => (
                <section
                    key={card.id}
                    className={`
                        pin-card 
                        ${card.bgColor} ${card.textColor} 
                        min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden
                        /* Added a drop shadow to incoming cards so they visually overlap the previous one */
                        ${index > 0 ? 'shadow-[0_-15px_30px_rgba(0,0,0,0.3)]' : ''}
                    `}
                >
                    <div className="max-w-4xl px-8 w-full flex items-start gap-8">
                        <h2 className="text-[12vw] leading-none font-bold opacity-30">{card.id}</h2>
                        <div className="mt-8">
                            <h3 className="text-5xl md:text-7xl font-extrabold uppercase mb-6">
                                {card.title}
                            </h3>
                            <p className="text-xl max-w-xl opacity-80">
                                This is a reusable component. The GSAP logic automatically
                                calculates the pinning duration based on how many cards are left in
                                the array, ensuring a perfect stack every time.
                            </p>
                        </div>
                    </div>
                </section>
            ))}

            {/* Buffer section below to allow scrolling past the final stacked cards */}
            <div className="h-[50vh] bg-stone-900 flex items-center justify-center text-white">
                <p>End of stacking section.</p>
            </div>
        </div>
    );
};
