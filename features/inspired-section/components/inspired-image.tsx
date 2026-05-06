'use client';

import Image from 'next/image';
// import './inspired-style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxImage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                // Define your breakpoints
                isDesktop: '(min-width: 768px)',
                isMobile: '(max-width: 767px)',
            },
            (context) => {
                const { isMobile } = context.conditions || {};
                gsap.to(imageRef.current, {
                    yPercent: 40,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        // FIX: Start when the top of the container is 20% above the viewport bottom
                        // This kicks the animation off earlier than 'top bottom'
                        start: isMobile ? 'top 118%' : 'top bottom',
                        // End when the bottom of the container is 20% above the viewport top
                        end: isMobile ? 'bottom -10%' : 'bottom top',
                        scrub: 1.5,
                        invalidateOnRefresh: true,
                        fastScrollEnd: true,
                    },
                });
            },
            containerRef
        );

        return () => mm.revert();
    }, []);

    return (
        <div className="w-full md:w-1/2 flex justify-center items-center">
            <div
                ref={containerRef}
                className="relative w-full  rounded-lg border min-h-[35vh] md:min-h-[65vh] border-slate-200 overflow-hidden parallax"
            >
                {/* IMPORTANT: wrap Image */}
                <div className="absolute -top-60 md:-top-405 inset-0" ref={imageRef}>
                    <Image
                        src="/pod-images/depressed-man-1.jpg"
                        alt="parallax"
                        fill
                        className="object-cover image-depressed  "
                    />
                </div>
            </div>
        </div>
    );
}
