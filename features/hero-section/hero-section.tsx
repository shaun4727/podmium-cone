'use client';

import { ArrowUpRight } from 'lucide-react';

import { MarqueeText } from '@/components/common/marquee-component';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(SplitText);

const HeroSection = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            document.fonts.ready.then(() => {
                // 1. Initialize the SplitText
                const split = new SplitText('.split', {
                    type: 'lines, words, chars',
                    linesClass: 'overflow-hidden',
                });

                // 2. Create the Timeline
                // 'defaults' let you avoid repeating duration/ease for every animation
                const tl = gsap.timeline({
                    defaults: { ease: 'expo.inOut', duration: 1 },
                });

                // 3. Add animations to the timeline
                tl.from(split.chars, {
                    yPercent: 100,
                    autoAlpha: 0, // Combines opacity: 0 and visibility: hidden
                    stagger: {
                        amount: 0.8, // Total time spread across all characters
                        from: 'start',
                    },
                    delay: 0.2,
                })
                    // You can now chain more animations easily:
                    .fromTo(
                        '.hero-button',
                        {
                            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', // Hidden (vertical slice)
                            opacity: 0,
                        },
                        {
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Fully revealed
                            opacity: 1,
                            duration: 1.5,
                            ease: 'power4.inOut',
                        },
                        '-=0.4'
                    ); // Starts 0.4s before the previous animation ends
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen w-full relative">
            <video
                autoPlay
                muted
                playsInline
                loop
                className="min-h-screen md:h-full w-full object-cover"
            >
                <source src="/videos/hero-1.mp4" />
            </video>

            <div className="absolute  inset-0  ">
                <section className="mx-4 md:mx-12 mt-48 flex flex-col gap-24 md:gap-48">
                    {/* <Navbar /> */}
                    <div
                        ref={containerRef}
                        className="hero-text text-white font-montserrat md:w-1/2"
                    >
                        <h1 className="split text-lg md:text-[4vw] font-montserrat uppercase font-bold">
                            Train your brain.
                        </h1>
                        <h1 className="split text-lg md:text-[4vw]font-montserrat uppercase font-bold">
                            Dominate your game.
                        </h1>
                        <p className="split mt-6 text-sm md:text-lg">
                            Elite mental performance coaching for competitive youth athletes who
                            want to silence self-doubt and and start competing with consistent
                            confidence.
                        </p>

                        {/* /**
                         * HOVER EFFECT LOGIC: "The Ripple Expansion"
                         * ----------------------------------------
                         * * 1. BASE STATE:
                         * - The button has a 'bg-theme-brandy' background.
                         * - The Arrow Wrapper is a small black square ('bg-black') on the right.
                         * - The "magic" div inside the arrow wrapper is 'scale-0' (invisible).
                         * * 2. THE EXPANSION (group-hover:scale-[40]):
                         * - On hover, the 'scale-0' div inside the icon span expands to 40x its size.
                         * - Because it is nested INSIDE the icon span, the growth origin is the icon itself.
                         * - 'rounded-full' makes the expansion a circle, creating a ripple/radial effect.
                         * - 'absolute inset-0' ensures the growth starts exactly from the icon's boundaries.
                         * * 3. KEY CLASS BREAKDOWN:
                         * - 'group': Placed on parent; allows children to react when the button is hovered.
                         * - 'overflow-hidden': Essential! It clips the massive scaled-up circle so it
                         * doesn't bleed outside the button borders.
                         * - 'relative z-10/z-11': Ensures text and icon stay "above" the expanding
                         * black circle so they don't disappear.
                         * - '-z-10' (on the expanding div): Places the circle behind the icon/text
                         * but above the button's base background.
                         * - 'group-hover:bg-transparent': Hides the small black square of the icon span
                         * on hover so it blends perfectly into the large expanding circle.
                         * - 'transition-transform': Enables the smooth "growing" animation rather
                         * than an instant flicker.
                         */}

                        <button className="group relative overflow-hidden uppercase cursor-pointer flex items-center gap-2 mt-4 bg-theme-brandy p-2 text-black transition-colors duration-500 hover:text-white hero-button">
                            {/* 1. The Content (Text) */}
                            <span className="relative z-11 pl-2 group-hover:text-white">
                                Schedule an intro call
                            </span>

                            {/* 2. The Arrow Wrapper + Expanding Background */}
                            <span className="relative z-10 flex items-center justify-center bg-black text-white  p-1 transition-colors duration-500 group-hover:bg-transparent">
                                <ArrowUpRight size={16} />

                                {/* This div is the magic: It scales from the icon to cover the button */}
                                <div className="absolute inset-0 bg-black -z-10 scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[40]" />

                                <div className="absolute inset-0 bg-theme-brandy scale-0 p-1 -z-10  transition-all duration-300 ease-in-out group-hover:scale-100" />
                            </span>
                        </button>
                    </div>
                </section>
                <MarqueeText />
            </div>
        </div>
    );
};

export default HeroSection;
