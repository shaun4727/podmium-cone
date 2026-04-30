'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingText() {
    const containerRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Line 1: Moves Left to Right
            gsap.to(line1Ref.current, {
                xPercent: 20, // Adjust this number for more/less movement
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1, // Smoothly follows scroll
                },
            });

            // Line 2: Moves Right to Left
            gsap.to(line2Ref.current, {
                xPercent: -20,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-black py-20 overflow-hidden flex flex-col gap-4 font-montserrat"
        >
            {/* Top Line */}

            <div ref={line1Ref} className="whitespace-nowrap will-change-transform">
                <h2
                    className="text-[10vw] font-bold uppercase leading-none inline-block text-transparent"
                    style={{
                        WebkitTextStroke: '1px white',
                    }}
                >
                    Your Guide For Peak Mental Performance — Your Guide For Peak Mental Performance
                    —
                </h2>
            </div>

            {/* Bottom Line */}
            <div ref={line2Ref} className="whitespace-nowrap will-change-transform">
                <h2
                    className="text-[10vw] font-bold uppercase leading-none inline-block text-transparent"
                    style={{
                        WebkitTextStroke: '1px white',
                    }}
                >
                    Peak Mental Performance — Peak Mental Performance — Peak Mental Performance —
                </h2>
            </div>
        </div>
    );
}
