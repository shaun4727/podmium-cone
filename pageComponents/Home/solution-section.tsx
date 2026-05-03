import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ArrowUpRight } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import ParallaxMaskedImage from './sub-solution/solution-image';

export const SolutionSection = () => {
    const solutionSectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            document.fonts.ready.then(() => {
                const splitH1 = new SplitText('.split-h1', {
                    type: 'chars, words, lines',
                    linesClass: 'overflow-hidden',
                });

                const splitP = new SplitText('.split-p', {
                    type: 'lines',
                    linesClass: 'overflow-hidden',
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: solutionSectionRef.current,
                        start: 'top 40%',
                        once: true,
                    },
                });

                tl.from(splitH1.chars, {
                    yPercent: 100,
                    autoAlpha: 0,
                    stagger: 0.03,
                    ease: 'power4.out',
                    duration: 1,
                })
                    .from(
                        splitP.lines,
                        {
                            yPercent: 100,
                            autoAlpha: 0,
                            stagger: 0.2,
                            ease: 'power4.out',
                            duration: 1,
                        },
                        '-=0.5' // Overlap with H1 slightly for flow
                    )
                    /* 
               THE FIX: 
               1. Use .fromTo to ensure we start from 'hidden'
               2. Use ">" to start ONLY after splitP.lines has COMPLETELY finished
            */
                    .to(
                        '.solution-button',
                        {
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                            autoAlpha: 1, // This flips visibility to 'visible' and animates opacity to 1
                            duration: 1.2,
                            ease: 'power4.inOut',
                        },
                        '>'
                    ); // Strictly waits for paragraphs to finish
            });
        }, solutionSectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            className="font-montserrat bg-white flex flex-col md:flex-row gap-16 px-4 md:px-12 py-12 items-center"
            ref={solutionSectionRef}
        >
            <div className="w-1/2">
                <h1 className="split-h1 text-[4vw] uppercase font-bold leading-none">
                    we have been there.
                </h1>
                <h1 className="split-h1 text-[4vw] uppercase font-bold leading-none">
                    and we will
                </h1>
                <h1 className="split-h1 text-[4vw] uppercase font-bold leading-none">
                    help you through it.
                </h1>

                <div className="mt-12 flex flex-col gap-6">
                    <p className="split-p">
                        At The Podium Mindset, our mental performance coaches give you the practical
                        tools to quiet your inner-critic, perform under pressure, and reach the
                        performance goals you have set for yourself.
                    </p>
                    <p className="split-p">
                        Get ready to play to your full potential and stand out among the
                        competition, all by mastering your mind.
                    </p>
                </div>
                <button className="group relative overflow-hidden uppercase cursor-pointer flex items-center gap-2 mt-4 bg-black p-2 text-white transition-colors duration-500 hover:text-white solution-button opacity-0 invisible">
                    {/* 1. The Content (Text) */}
                    <span className="relative z-11 pl-2 group-hover:text-white">
                        See our program
                    </span>

                    {/* 2. The Arrow Wrapper + Expanding Background */}
                    <span className="relative z-10 flex items-center justify-center bg-theme-brandy text-white  p-1 transition-colors duration-500 group-hover:bg-transparent">
                        <ArrowUpRight size={16} />

                        {/* This div is the magic: It scales from the icon to cover the button */}
                        <div className="absolute inset-0 bg-theme-brandy -z-10 scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[40]" />

                        <div className="absolute inset-0 bg-black scale-0 p-1 -z-10  transition-all duration-300 ease-in-out group-hover:scale-100" />
                    </span>
                </button>
            </div>
            <div className="w-1/2">
                <ParallaxMaskedImage />
            </div>
        </div>
    );
};
