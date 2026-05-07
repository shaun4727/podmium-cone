'use client';
import { Button } from '../ui/button';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'none', duration: 1 },
            });

            tl.to('.g-background', {
                scaleY: 1,
                scrollTrigger: {
                    trigger: document.body,
                    start: 840,
                    // FIX 1: Provide an explicit end point (840 + 200px of scrolling)
                    end: 1040,
                    // FIX 2: Remove toggleActions entirely
                    scrub: 1,
                },
            });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        // 1. Stop the browser from aggressively jumping on reload
        if (typeof window !== 'undefined') {
            window.history.scrollRestoration = 'manual';
        }

        // 2. Clear GSAP's scroll memory to prevent conflicting math
        ScrollTrigger.clearScrollMemory();

        // 3. Tell GSAP to refresh its calculations AFTER the entire window loads
        // (including all images, fonts, and stylesheets)
        const handleLoad = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div className="relative z-50 ">
            <div className="g-background scale-y-0 origin-bottom fixed top-0 left-0 w-full h-[76px] bg-amber-500 z-20"></div>
            <nav className="fixed top-0 left-0 right-0 flex justify-between w-full z-30 font-montserrat p-3">
                <h1 className="text-md text-white uppercase font-bold flex flex-col items-center leading-tight">
                    <span className="text-[9px] font-regular">The</span>
                    <span>Podmium</span>
                    <span>Mindset</span>
                </h1>
                <ul className="text-white uppercase flex gap-8 items-center">
                    <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                        <span className="relative z-10">Home</span>

                        {/* 2. The background layer */}
                        <div className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                    </li>
                    <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                        <span className="relative z-10">Programs</span>
                        <div className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                    </li>
                    <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                        <span className="relative z-10">About</span>
                        <div className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                    </li>
                    <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                        <span className="relative z-10">Contact</span>
                        <div className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                    </li>
                    <li>
                        <Button
                            variant="outline"
                            className="text-black w-60 uppercase rounded-none cursor-pointer"
                        >
                            Book a call
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
