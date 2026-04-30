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
                xPercent: 30,
                scrollTrigger: {
                    trigger: containerRef.current,

                    /* 
           START: "top 5%"
           ------------------------------------------------------------------
           - "top": Refers to the TOP of your black section (the trigger element).
           - "5%": Refers to a point 5% down from the top of the browser screen.
           
           EXPLANATION: The animation starts moving the text the moment the 
           top of your section reaches 5% from the top of the window. 
           (Basically as soon as it enters the very top of your view).
        */
                    start: 'top 5%',

                    /* 
           END: "bottom -355%"
           ------------------------------------------------------------------
           - "bottom": Refers to the BOTTOM of your black section.
           - "-355%": Refers to a point 355% ABOVE the top of the browser screen.
           
           EXPLANATION: This tells the animation to finish ONLY when the bottom
           of your section has traveled 3.55 full screen-heights past the top 
           edge of the browser. This massive "gap" creates a huge scrolling 
           distance, making the text move slowly and continuously even after 
           the section is long gone from the screen.
        */
                    end: 'bottom -355%',

                    scrub: 1.5,
                },
            });

            // Line 2: Moves Right to Left
            gsap.to(line2Ref.current, {
                xPercent: -30,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 10%',
                    end: 'bottom -300%',
                    scrub: 1.5,
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
