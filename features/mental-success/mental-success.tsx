'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}
export const MentalSuccess = () => {
    const mentalSuccessRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create a timeline mapped to the scroll position of the container
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mentalSuccessRef.current,
                    start: 'top top',
                    end: `end end`, // Extend scroll distance based on card count
                    scrub: true, // Smooth scrubbing
                    pin: '.middle-section', // Pin the container in place while scrolling
                },
            });
        }, mentalSuccessRef);

        return () => ctx.revert(); // Clean up GSAP instances on unmount
    }, []);

    return (
        <div className="md:mt-40 md:px-16" ref={mentalSuccessRef}>
            <div className="flex justify-center">
                <h1 className="w-200 text-[5vw] font-bold font-roboto uppercase  text-center leading-none">
                    your path to mental success
                </h1>
            </div>
            <p className="text-xl font-roboto text-center my-10">
                We walk alongside you every step of your mental performance journey:
            </p>
            <div className="flex gap-4">
                <div className="first-col">
                    <div className="bg-red-400 h-150 w-full"></div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-xl border-l-2 border-theme-brandy px-1">
                            01
                        </h4>
                        <h2 className="text-[#2e2b25] text-5xl uppercase font-roboto font-bold">
                            we listen first
                        </h2>
                        <p className="font-2xl font-light font-roboto">
                            Before offering solutions, we take the time to truly understand your
                            unique challenges, goals, and experiences.
                        </p>
                    </div>
                    <div className="bg-red-400 h-230 w-full"></div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-xl border-l-2 border-theme-brandy px-1">
                            02
                        </h4>
                        <h2 className="text-[#2e2b25] text-5xl uppercase font-roboto font-bold">
                            we listen first
                        </h2>
                        <p className="font-2xl font-light font-roboto">
                            Before offering solutions, we take the time to truly understand your
                            unique challenges, goals, and experiences.
                        </p>
                    </div>
                </div>
                <div className="relative w-full max-w-[500px] h-[600px] flex-shrink-0  overflow-hidden shadow-xl middle-section">
                    <Image
                        src="/pod-images/about/mental-1.jpg"
                        width="500"
                        height="600"
                        alt="formal image"
                        className="absolute z-1 inset-0 w-100"
                    />
                    <Image
                        src="/pod-images/about/mental-2.jpg"
                        width="500"
                        height="600"
                        alt="formal image"
                        className="absolute z-2"
                    />
                    <Image
                        src="/pod-images/about/mental-3.jpg"
                        width="500"
                        height="600"
                        alt="formal image"
                        className="absolute z-3"
                    />
                    <Image
                        src="/pod-images/about/mental-4.jpg"
                        width="500"
                        height="600"
                        alt="formal image"
                        className="absolute z-4"
                    />
                </div>
                <div className="third-col">
                    <div className="bg-red-400 h-260 w-full"></div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-xl border-l-2 border-theme-brandy px-1">
                            03
                        </h4>
                        <h2 className="text-[#2e2b25] text-5xl uppercase font-roboto font-bold">
                            we listen first
                        </h2>
                        <p className="font-2xl font-light font-roboto">
                            Before offering solutions, we take the time to truly understand your
                            unique challenges, goals, and experiences.
                        </p>
                    </div>
                    <div className="bg-red-400 h-260 w-full"></div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-xl border-l-2 border-theme-brandy px-1">
                            04
                        </h4>
                        <h2 className="text-[#2e2b25] text-5xl uppercase font-roboto font-bold">
                            we listen first
                        </h2>
                        <p className="font-2xl font-light font-roboto">
                            Before offering solutions, we take the time to truly understand your
                            unique challenges, goals, and experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
