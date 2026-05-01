'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function ScrollVideoSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                    pin: true,
                },
            });

            // Step 1: Fade out dark layer → reveal video
            tl.to('#bg-layer', {
                opacity: 0,
                duration: 1,
            });

            // Step 2: Slight zoom on video (premium feel)
            tl.fromTo('#video', { scale: 1.2 }, { scale: 1, duration: 2 }, 0);

            // Step 3: Fade in white overlay
            tl.to('#white-layer', {
                opacity: 1,
                duration: 1,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[100vh]">
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* 🎥 Video */}
                <video
                    id="video"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/videos/football.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* 🖤 Initial dark background */}
                <div id="bg-layer" className="absolute inset-0 bg-black z-10" />

                {/* 🤍 Final white overlay */}
                <div id="white-layer" className="absolute inset-0 bg-blue-500 z-20 opacity-0" />
            </div>
        </section>
    );
}
