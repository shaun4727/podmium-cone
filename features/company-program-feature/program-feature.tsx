import { CustomButton } from '@/components/common/animated-button';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

export const ProgramFeature = () => {
    const companyDetailProgramRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // Register plugin inside the effect to be safe with Next.js SSR
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // 1. Select all cards
            const cards = gsap.utils.toArray<HTMLElement>('.stack-card');

            cards.forEach((card, index) => {
                const isLastCard = index === cards.length - 1;

                // 2. We don't pin the last card so the footer/next section can scroll normally
                if (!isLastCard) {
                    ScrollTrigger.create({
                        trigger: card,
                        // Pin exactly when the top of the card hits the top of the viewport
                        start: 'top top',
                        // Math: Stay pinned for exactly the height of the remaining cards
                        end: () => `+=${(cards.length - 1 - index) * window.innerHeight}`,
                        pin: true,
                        // CRITICAL: This allows the next card in the DOM to overlap it
                        pinSpacing: false,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    });
                }
            });
        }, companyDetailProgramRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={companyDetailProgramRef} className="relative bg-white w-full min-h-screen py-30">
            <section className="stack-card stack-card-1 bg-[#584e3f] font-montserrat flex flex-col md:flex-row gap-12 p-2 md:p-15 relative overflow-hidden text-white">
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-6xl md:text-[7vw] font-extrabold text-[#f8f3eb]/25 absolute -top-3 md:-top-5 -left-2 md:-left-4">
                        01
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
                        Personalized sessions focused on your specific challenges, whether it's
                        negative self-talk, performance anxiety, or fear of failure. We build
                        practical mental skills you can use immediately to maximize your full
                        potential.
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
            </section>
            <section className="stack-card stack-card-2 bg-[#e7d5bb] text-black mt-20 font-montserrat flex flex-col md:flex-row gap-12 p-2 md:p-15 overflow-hidden relative">
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-6xl md:text-[7vw] font-extrabold text-[#f8f3eb]/25 absolute -top-3 md:-top-5 -left-2 md:-left-4">
                        02
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
                        Personalized sessions focused on your specific challenges, whether it's
                        negative self-talk, performance anxiety, or fear of failure. We build
                        practical mental skills you can use immediately to maximize your full
                        potential.
                    </p>
                    <CustomButton text="See our program" />
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/pod-images/study.webp"
                        width="400"
                        height="400"
                        alt="thumbnail"
                        className="w-6xl"
                    />
                </div>
            </section>
            <section className="stack-card stack-card-3 bg-[#584e3f] mt-20 font-montserrat flex flex-col md:flex-row gap-12 p-2 md:p-15 relative overflow-hidden text-white">
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-6xl md:text-[7vw] font-extrabold text-[#f8f3eb]/25 absolute -top-3 md:-top-5 -left-2 md:-left-4">
                        03
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
                        Personalized sessions focused on your specific challenges, whether it's
                        negative self-talk, performance anxiety, or fear of failure. We build
                        practical mental skills you can use immediately to maximize your full
                        potential.
                    </p>
                    <CustomButton text="See our program" />
                </div>
                <div className="md:w-1/2">
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
    );
};
