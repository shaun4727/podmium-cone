'use client';
import { CustomButton } from '@/components/common/animated-button';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(SplitText);

export const RealizationComponent = () => {
    const aboutRealizationContainerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutRealizationContainerRef.current,
                    start: 'top top',
                    end: '+=10%', // Matches the hero pinning duration
                },
            });

            // 1. Initialize the SplitText
            const split = new SplitText('.split-realization-about', {
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
                '.first-player-about',
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
        }, aboutRealizationContainerRef);

        return () => ctx.revert();
    }, []);
    return (
        <div
            className="bg-black md:flex mt-40 md:justify-between md:gap-8 py-10 px-4 md:px-0 md:py-40"
            ref={aboutRealizationContainerRef}
        >
            <h1 className="block md:hidden uppercase text-[10vw] text-white font-bold font-montserrat leading-none">
                i get it - because i lived it.
            </h1>
            <Image
                src="/pod-images/about/about-realization.jpg"
                width="400"
                height="600"
                alt="pod-playing"
                className="md:w-[600px] md:h-[900px] first-player-about"
            />
            <div className="text-white split-realization-about">
                <h1 className="hidden md:block uppercase text-[5vw] font-bold font-montserrat leading-none">
                    i get it - because i lived it.
                </h1>
                <div className="mt-10 text-2xl leading-none font-roboto ">
                    <p className="mb-4">
                        As a former Division I volleyball player at Eastern Michigan University,
                        Jordan experienced firsthand the mental challenges that can derail even the
                        most talented student-athlete.
                    </p>
                    <p className="mb-4">Physical training was always easy to get.</p>
                    <p className="mb-4">
                        Strength coaches, physical therapists, specialty camps. More practice, more
                        reps, more hours.
                    </p>
                    <p className="mb-4">
                        But there was shockingly no access to tangible mental training—despite
                        “mental toughness” being widely praised in sports. This is why she pursued a
                        doctorate in Sport Psychology and Certified Mental Performance Consultant
                        (CMPC) credentials, to become the mental coach youth athletes need.
                    </p>
                    <p className="mb-4">
                        "I founded The Podium Mindset to be the guide I wish I'd had as a young
                        athlete. I never want another athlete to feel alone in those mental battles
                        like I did."
                    </p>
                    <p className="mb-4">
                        Jordan has worked with over a hundred youth athletes across multiple sports,
                        helping them regulate emotions and nerves to stay focused on their success.
                    </p>
                    <p className="mb-4">
                        Her approach combines evidence-based techniques with real-world athletic
                        experience—creating mental training programs that are practical,
                        personalized, and proven to work.
                    </p>
                </div>
                <CustomButton
                    text="Book a meeting with me"
                    className="mt-2 p-4 flex gap-18 border border-theme-brandy"
                />
            </div>
        </div>
    );
};
