'use client';
import { Button } from '../ui/button';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    end: 1040,
                    scrub: 1,
                },
            });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.history.scrollRestoration = 'manual';
        }

        ScrollTrigger.clearScrollMemory();

        const handleLoad = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div className="relative z-50">
            {/* Scroll animation background layer */}
            <div className="g-background scale-y-0 origin-bottom fixed top-0 left-0 w-full h-[76px] bg-amber-500 z-20"></div>

            <nav className="fixed top-0 left-0 right-0 flex justify-between items-center w-full z-30 font-montserrat p-4 md:p-3">
                {/* Logo - Kept at high z-index to stay above overlay */}
                <h1 className="text-md text-white uppercase font-bold flex flex-col items-center leading-tight z-40">
                    <span className="text-[9px] font-regularNormal">The</span>
                    <span>Podmium</span>
                    <span>Mindset</span>
                </h1>

                {/* Hamburger Button - Visible only on Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white md:hidden focus:outline-none z-40 p-2 cursor-pointer"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        // Close "X" Icon
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Menu Hamburger Icon
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

                {/* Desktop Menu - Hidden on mobile, flex on desktop */}
                <ul className="text-white uppercase hidden md:flex gap-8 items-center">
                    <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                        <Link href={`/`} className="relative z-10">
                            Home
                        </Link>
                        <div className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                    </li>
                    <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                        <span className="relative z-10">Programs</span>
                        <div className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                    </li>
                    <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                        <Link href={`/about`} className="relative z-10">
                            About
                        </Link>
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

                {/* Mobile Menu Drawer Overlay */}
                <div
                    className={`fixed inset-0 bg-neutral-950 bg-opacity-95 z-30 flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <ul className="text-white uppercase flex flex-col gap-8 items-center text-xl font-semibold tracking-wider">
                        <li>
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <span className="cursor-pointer" onClick={() => setIsOpen(false)}>
                                Programs
                            </span>
                        </li>
                        <li>
                            <Link href="/about" onClick={() => setIsOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <span className="cursor-pointer" onClick={() => setIsOpen(false)}>
                                Contact
                            </span>
                        </li>
                        <li className="mt-4">
                            <Button
                                variant="outline"
                                className="text-black w-52 uppercase rounded-none cursor-pointer bg-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Book a call
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
