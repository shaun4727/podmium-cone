'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const VideoRevealSection = () => {
    const mainContainerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Pinning the background while content scrolls
            ScrollTrigger.create({
                trigger: mainContainerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                pin: '#video-container', // Only pin the video/background
                pinSpacing: false,
            });

            // Example animation: Fading the black layer as you scroll
            gsap.to('#black-layer', {
                opacity: 0,
                scrollTrigger: {
                    trigger: mainContainerRef.current,
                    start: 'top top',
                    end: '50% top',
                    scrub: true,
                },
            });
        }, mainContainerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainContainerRef} className="relative w-full">
            {/* 🎥 Background Wrapper: Pins to viewport */}
            <div id="video-container" className="sticky top-0 h-screen w-full overflow-hidden">
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
            </div>

            {/* 📝 Content Layer: Height adapts to children automatically */}
            <div
                ref={contentRef}
                className="relative z-40 text-white px-4 md:px-12 py-24 flex flex-col gap-20 bg-black/30"
            >
                <div className="flex flex-wrap md:flex-nowrap min-h-screen">
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                            real results
                        </h1>
                        <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                            from
                        </h1>
                        <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                            real athletes
                        </h1>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center"></div>
                </div>

                {/* Additional Content: The height will now grow naturally */}
                <div className="flex justify-center pb-20">
                    <Image
                        src="/pod-images/logo.svg"
                        width={400}
                        height={400}
                        alt="podmium-logo"
                        className="opacity-50"
                    />
                </div>
            </div>
        </div>
    );
};
