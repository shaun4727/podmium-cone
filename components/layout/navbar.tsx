'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { Button } from '../ui/button';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. The Gradual Background Fill
            // Using scrub ties the animation directly to the scrollbar.

            // 2. Optional: Add a subtle shadow ONLY after the background is fully white
            gsap.to(navRef.current, {
                position: 'sticky',
                scrollTrigger: {
                    trigger: document.body,
                    start: 'top -70px', // Triggers right as the white background finishes growing
                    toggleActions: 'play none none reverse',
                },
            });

            gsap.to(navRef.current, {
                backgroundColor: 'white',
                scrollTrigger: {
                    trigger: document.body,
                    start: 'top -180px', // Triggers right as the white background finishes growing
                    toggleActions: 'play none none reverse',
                },
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className="flex justify-between font-montserrat absolute bg-transparent top-0 left-0 right-0 p-3 z-50 overflow-hidden "
        >
            {/* THE BACKGROUND LAYER 
                origin-bottom: ensures it grows from bottom to top.
                bg-white: the color it will become.
                scale-y-0: starts completely invisible/flat.
            */}

            {/* Changed from text-white to text-black per Requirement 1 */}
            <h1 className="nav-element text-md text-black uppercase font-bold flex flex-col items-center leading-tight">
                <span className="text-[9px] font-regular">The</span>
                <span>Podmium</span>
                <span>Mindset</span>
            </h1>

            {/* Changed from text-white to text-black per Requirement 1 */}
            <ul className="nav-element text-black uppercase flex gap-8 items-center">
                <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                    <span className="relative z-10">Home</span>
                    {/* Changed hover underline to black to match text */}
                    <div className="absolute inset-0 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left -z-0 border-b-2 border-black" />
                </li>
                <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                    <span className="relative z-10">Programs</span>
                    <div className="absolute inset-0 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left -z-0 border-b-2 border-black" />
                </li>
                <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                    <span className="relative z-10">About</span>
                    <div className="absolute inset-0 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left -z-0 border-b-2 border-black" />
                </li>
                <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                    <span className="relative z-10">Contact</span>
                    <div className="absolute inset-0 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left -z-0 border-b-2 border-black" />
                </li>
                <li>
                    {/* Added border-black so the button remains visible when the background turns white */}
                    <Button
                        variant="outline"
                        className="text-black bg-transparent w-60 uppercase rounded-none cursor-pointer border border-black hover:bg-black hover:text-white transition-colors"
                    >
                        Book a call
                    </Button>
                </li>
            </ul>
        </nav>
    );
};
