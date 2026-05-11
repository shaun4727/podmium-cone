import { CustomButton } from '@/components/common/animated-button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const TransformationStory = () => {
    const transformationContainerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Initialize matchMedia
            let mm = gsap.matchMedia();

            // --------------------------------------------------
            // DESKTOP ANIMATION (Screens 768px and wider)
            // This is your EXACT original code. It remains untouched.
            // --------------------------------------------------
            mm.add('(min-width: 768px)', () => {
                const tlDesktop = gsap.timeline({
                    scrollTrigger: {
                        trigger: transformationContainerRef.current,
                        start: 'top -410%',
                        end: '+=500%',
                    },
                });

                tlDesktop
                    .fromTo(
                        '.transform-subject',
                        {
                            // Start State: All points are squashed at the BOTTOM (Y = 100%)
                            // Top-Left (pushed down), Top-Right (pushed down), Bottom-Right, Bottom-Left
                            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
                            opacity: 0,
                        },
                        {
                            // End State: Fully revealed standard rectangle
                            // Top-Left (at top), Top-Right (at top), Bottom-Right, Bottom-Left
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                            opacity: 1,
                            duration: 1.5,
                            ease: 'power4.inOut',
                        },
                        '-=0.4'
                    )
                    .fromTo(
                        '.transform-playing',
                        {
                            // Start State: All points are squashed to the RIGHT edge (X = 100%)
                            // Top-Left (pushed right), Top-Right, Bottom-Right, Bottom-Left (pushed right)
                            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
                            opacity: 0,
                        },
                        {
                            // End State: Fully revealed standard rectangle
                            // Top-Left (returns to 0%), Top-Right, Bottom-Right, Bottom-Left (returns to 0%)
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                            opacity: 1,
                            duration: 1.5,
                            ease: 'power4.inOut',
                        },
                        '-=0.4'
                    )
                    .fromTo(
                        '.transform-volleyball',
                        {
                            // Start State: All points are squashed to the RIGHT edge (X = 100%)
                            // Top-Left (pushed right), Top-Right, Bottom-Right, Bottom-Left (pushed right)
                            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
                            opacity: 0,
                        },
                        {
                            // End State: Fully revealed standard rectangle
                            // Top-Left (returns to 0%), Top-Right, Bottom-Right, Bottom-Left (returns to 0%)
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                            opacity: 1,
                            duration: 1.5,
                            ease: 'power4.inOut',
                        },
                        '-=0.4'
                    );
            });

            // --------------------------------------------------
            // MOBILE ANIMATION (Screens smaller than 768px)
            // We adjust the triggers and timings here safely!
            // --------------------------------------------------
            mm.add('(max-width: 767px)', () => {
                const tlMobile = gsap.timeline({
                    scrollTrigger: {
                        trigger: transformationContainerRef.current,
                        // FIX 1: Adjust this start trigger. You likely need it to fire
                        // later on mobile, so try something like 'top -100%' or 'top 20%'
                        start: 'top -401%',
                        end: '+=500%',
                    },
                });

                tlMobile
                    .fromTo(
                        '.transform-subject',
                        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', opacity: 0 },
                        {
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                            opacity: 1,
                            duration: 1.5,
                            ease: 'power4.inOut',
                        }
                    )
                    .fromTo(
                        '.transform-playing',
                        { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', opacity: 0 },
                        {
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                            opacity: 1,
                            duration: 1.5,
                            ease: 'power4.inOut',
                        },
                        // FIX 2: Change '-=0.4' (overlap) to a positive delay like '+=0.5'
                        // This forces the timeline to wait for the user to scroll down to the next image
                        '+=0.5'
                    )
                    .fromTo(
                        '.transform-volleyball',
                        { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', opacity: 0 },
                        {
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                            opacity: 1,
                            duration: 1.5,
                            ease: 'power4.inOut',
                        },
                        '+=0.5' // Positive delay for mobile
                    );
            });
        }, transformationContainerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className=" bg-[#fbf9f5] px-4 md:px-12 py-6 md:py-36" ref={transformationContainerRef}>
            <h1 className="text-[2e2b25] text-4xl md:text-[4vw] font-roboto uppercase leading-none font-extrabold">
                a mental transformation <br /> story:{' '}
                <span className="text-[#9b917d]">andrew nicols</span>
            </h1>
            <div className="py-20 flex flex-col-reverse md:flex-row gap-12">
                <div className="md:w-1/2 flex flex-col justify-between">
                    <div className="p-8 bg-white font-montserrat text-lg border-l-2 border-[#9f8968] shadow-lg">
                        <Image
                            src="/pod-images/quote.svg"
                            width="200"
                            height="200"
                            alt="quotation"
                            className="brightness-0 invert-[75%] sepia-[5%] saturate-[50%] hue-rotate-[20deg] w-15"
                        />
                        <p className="mt-4 font-semibold">
                            "My ninth grade year, I experienced a lot of burnout. I was dreading the
                            sport, feeling a lot of pressure, and it was taking a toll on me. I just
                            wasn't positive anymore and really hated running - which was sad because
                            it's something I've always loved doing."
                        </p>
                        <p className="mt-4 text-[#9f8968] uppercase">
                            - nicols,Cross Country Runner, 10th Grade
                        </p>
                    </div>
                    <div className="font-montserrat mt-6 md:mt-0 flex flex-col gap-12">
                        <p>
                            Haley came to Jordan as a sophomore struggling with intense self-imposed
                            pressure. Her entire sense of worth had become tied to her race
                            times—and when those times didn't meet her expectations, her love for
                            running began to fade.
                        </p>
                        <p>
                            "My worth for running was only determined by the times I was running and
                            nothing else. It got to a point where my friends started to notice I was
                            struggling a lot."
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/pod-images/transformation-story.jpg"
                        width="400"
                        height="500"
                        alt="transformation-story"
                        className="w-full h-[750px] object-cover object-top transform-subject"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-10">
                <div className="md:w-1/2 flex flex-col gap-6">
                    <Image
                        src="/pod-images/playing.jpg"
                        width="700"
                        height="450"
                        alt="playing"
                        className="transform-playing"
                    />
                    <Image
                        src="/pod-images/playing-volleyball.jpg"
                        width="500"
                        height="400"
                        alt="play volley ball"
                        className="h-[450] w-[300px] md:w-[650px] transform-volleyball object-cover "
                    />
                </div>
                <div className="mt-6 md:mt-0 md:w-1/2 text-lg font-montserrat flex flex-col gap-8">
                    <p>
                        Working together, Jordan created personalized tools for Haley's specific
                        challenges—visualization techniques to release pressure, daily mantras to
                        build self-belief, pre-race mindset shifts, and in-race mental strategies to
                        rely on.
                    </p>

                    <p className="p-8 bg-white font-montserrat text-lg border-l-2 border-[#9f8968] text-[#584e3f] shadow-lg">
                        "This track season, there's been an incredible change. I finally enjoy the
                        sport again. I'm crossing the finish line, maybe not seeing the times I wish
                        for, but still walking off with a smile, knowing I'm happy with what I just
                        did."
                    </p>

                    <p>
                        The impact extended beyond running. Haley found herself happier in school,
                        more present with friends, and able to approach her future with less
                        anxiety.
                    </p>
                    <p className="p-8 bg-white font-montserrat text-lg border-l-2 border-[#9f8968] text-[#584e3f] shadow-lg">
                        "I used to sit in fourth period dreading the workout ahead. Now I'm laughing
                        with friends, still knowing practice is coming but with a positive outlook.
                        I could not imagine giving up the sport now, especially after working with
                        Jordan. I just love my sport again and cannot imagine quitting before high
                        school ends."
                    </p>
                </div>
            </div>

            <div className="relative w-full flex justify-center mt-18">
                {/* The Horizontal Line spanning the full width of the parent */}
                <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-[#2e2b25]/25 -translate-y-1/2" />

                <p className="relative font-montserrat  text-[#2e2b25] w-2xl text-center bg-[#fbf9f5] border-x  border-[#2e2b25]/25 z-10">
                    Don't face another season trapped in your head. Reclaim your passion for your
                    sport with personalized mental performance coaching.
                </p>
            </div>
            <div className="flex justify-center mt-8">
                <CustomButton text="Find The Right Program For You" />
            </div>
        </div>
    );
};
