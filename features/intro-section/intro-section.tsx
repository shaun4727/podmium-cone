import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import ScrollingText from './components/scrolling-text';

gsap.registerPlugin(SplitText);

export const IntroSection = () => {
    const introContainerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: introContainerRef.current,
                    start: 'top top',
                    end: '+=10%', // Matches the hero pinning duration
                },
            });

            // 1. Initialize the SplitText
            const split = new SplitText('.split-intro', {
                type: 'lines, words, chars',
                linesClass: 'overflow-hidden',
            });

            // 2. Create the Timeline

            // 3. Add animations to the timeline
            tl.from(split.chars, {
                yPercent: 100,
                autoAlpha: 0, // Combines opacity: 0 and visibility: hidden
                stagger: {
                    amount: 0.8, // Total time spread across all characters
                    from: 'start',
                },
                delay: 0.2,
            }).fromTo(
                '.first-formal-image',
                {
                    // Top-Left, Top-Right, Bottom-Right (squashed), Bottom-Left (squashed)
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                    opacity: 0,
                },
                {
                    // Top-Left, Top-Right, Bottom-Right (full), Bottom-Left (full)
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power4.inOut',
                },
                '-=0.4'
            );
        }, introContainerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="text-white pb-24">
            <ScrollingText />
            <div className="px-4 md:px-12" ref={introContainerRef}>
                <h1 className="split-intro text-[4vw] uppercase font-montserrat font-semibold">
                    meet the founder,
                </h1>
                <h2 className="split-intro text-[4vw] capitalize font-semibold">tony stark.</h2>
                <div className="flex flex-col md:flex-row gap-12">
                    <Image
                        src="/pod-images/fomal-image.jpg"
                        width="500"
                        height="600"
                        alt="formal image"
                        className="w-94 first-formal-image"
                    />
                    <Image
                        src="/pod-images/playing-volleyball.jpg"
                        width="500"
                        height="600"
                        alt="formal image"
                        className="hidden md:block w-100 h-140"
                    />
                    <div className="font-roboto w-94 flex flex-col gap-6 md:mt-24">
                        {/* <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left  first-letter:text-theme-brandy"> */}
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-theme-brandy">
                            As a former Division I volleyball player with a PhD in Sport Psychology,
                            I know exactly what you're going through.
                        </p>
                        <p>
                            The confidence crashes that left me questioning everything. The
                            overwhelming pressure to perform. The fear of failure that kept me from
                            playing freely.
                        </p>
                        <p>
                            I had all the physical talent and potential, but I struggled mentally
                            and I had no one to show me the way through.
                        </p>
                        <p>
                            That's exactly why I pursued this career and founded The Podium Mindset:{' '}
                            <br /> to provide the mental training I once desperately needed.
                        </p>
                        <p>
                            Our one-on-one coaching is built around YOU (your sport, your
                            challenges, your goals). We focus on real mental skills that are
                            practical, personalized, and proven to hold up in critical moments.
                        </p>
                        <button className="group relative overflow-hidden uppercase cursor-pointer flex items-center gap-2 mt-4 bg-theme-brandy p-2 text-black transition-all duration-500 hover:text-white intro-button max-w-[200px] hover:border hover:border-theme-brandy">
                            {/* 1. The Content (Text) */}
                            <span className="relative z-11 pl-2 group-hover:text-white">
                                our approach
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
                </div>
            </div>
        </div>
    );
};
