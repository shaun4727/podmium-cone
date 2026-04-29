'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxImage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!imageRef.current || !containerRef.current) return;

            gsap.fromTo(
                imageRef.current,
                {
                    yPercent: 15,
                    scale: 1.4,
                    skewX: 5,
                },
                {
                    yPercent: -15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <div
            ref={containerRef}
            className="w-full md:w-1/2 flex justify-center items-center h-[500px]"
        >
            <div className="relative w-[80%] h-[80%] rounded-lg overflow-hidden border border-slate-200">
                {/* IMPORTANT: wrap Image */}
                <div ref={imageRef} className="absolute inset-0">
                    <Image
                        src="/pod-images/depressed-man.jpg"
                        alt="parallax"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>
    );
}
