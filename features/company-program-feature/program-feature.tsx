import { CustomButton } from '@/components/common/animated-button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const ProgramFeature = () => {
    const ProgramRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>('.stack-card');

            // -----------------------------------
            // INITIAL LAYER SETUP
            // -----------------------------------

            gsap.set(cards, {
                position: 'absolute',
                left: '12',
                right: '12',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
            });

            gsap.set('.stack-card-1', {
                zIndex: 1,
            });

            gsap.set('.stack-card-2', {
                zIndex: 2,
                yPercent: 100,
                scale: 1,
            });

            gsap.set('.stack-card-3', {
                zIndex: 3,
                yPercent: 100,
                scale: 1,
            });

            // -----------------------------------
            // TIMELINE
            // -----------------------------------

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ProgramRef.current,
                    start: 'top top',
                    end: '+=200%',
                    pin: true,
                    scrub: 1.5,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    markers: false,
                },
            });

            // CARD 2 ENTER
            tl.to(
                '.stack-card-2',
                {
                    yPercent: 0,
                    duration: 1,
                    ease: 'none',
                },
                0
            );

            // CARD 1 DEPTH
            tl.to(
                '.stack-card-1',
                {
                    scale: 0.92,
                    opacity: 0.35,
                    duration: 1,
                    ease: 'none',
                },
                0
            );

            // CARD 3 ENTER
            tl.to(
                '.stack-card-3',
                {
                    yPercent: 0,
                    duration: 1,
                    ease: 'none',
                },
                1
            );

            // CARD 2 DEPTH
            tl.to(
                '.stack-card-2',
                {
                    scale: 0.92,
                    opacity: 0.35,
                    duration: 1,
                    ease: 'none',
                },
                1
            );
        }, ProgramRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={ProgramRef}
            className="pinned-layer relative bg-white px-4 md:px-12 min-h-screen py-30 overflow-hidden"
            style={{ height: '100vh' }}
        >
            <section className="stack-card-1 bg-[#584e3f] font-montserrat flex flex-col md:flex-row gap-12 p-2 md:p-15  overflow-hidden text-white relative ">
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
            <section className="stack-card stack-card-2 bg-[#e7d5bb] text-black font-montserrat flex flex-col md:flex-row gap-12 p-2 md:p-15 overflow-hidden relative z-3">
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
            <section className="stack-card stack-card-3 bg-[#584e3f] font-montserrat flex flex-col md:flex-row gap-12 p-2 md:p-15 overflow-hidden text-white relative z-6">
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
