import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useLayoutEffect, useRef } from 'react';
import ParallaxImage from './components/inspired-image';

export const InspiredSection = () => {
    const inspiredSectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            document.fonts.ready.then(() => {
                // 1. Target H1 for character splitting
                const splitH1 = new SplitText('.split-inspired-h1', {
                    type: 'chars, words, lines',
                    linesClass: 'overflow-hidden',
                });

                // 2. Target Paragraphs for line splitting only
                const splitP = new SplitText('.split-inspired-p', {
                    type: 'lines',
                    linesClass: 'overflow-hidden',
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: inspiredSectionRef.current,
                        start: 'top 40%',
                        once: true,
                    },
                });

                tl.from(splitH1.chars, {
                    yPercent: 100,
                    autoAlpha: 0,
                    stagger: 0.03, // Faster stagger for characters
                    ease: 'power4.out',
                    duration: 1,
                })
                    .to('.inspired-title', {
                        opacity: 1,
                        duration: 1,
                        ease: 'power4.inOut',
                    })
                    .from(
                        splitP.lines,
                        {
                            yPercent: 100,
                            autoAlpha: 0,
                            stagger: 0.2, // Slower stagger for lines
                            ease: 'power4.out',
                            duration: 1,
                        },
                        '-=0.5'
                    ) // Overlap with the heading animation
                    .fromTo(
                        '.solution-button',
                        {
                            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
                            opacity: 0,
                        },
                        {
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                            opacity: 1,
                            duration: 1.2,
                            ease: 'power4.inOut',
                        },
                        '-=0.5'
                    );
            });
        }, inspiredSectionRef);

        return () => ctx.revert();
    }, []);
    return (
        <section
            className="flex flex-col-reverse md:flex-row font-montserrat bg-white gap-16 px-4 md:px-12 py-12 items-center "
            ref={inspiredSectionRef}
        >
            <ParallaxImage />
            {/* Content Container */}
            <div className="w-full md:w-1/2 flex flex-col gap-[7px]">
                <h1 className="text-[4vw] uppercase font-bold leading-none split-inspired-h1">
                    Your talent is not the problem
                </h1>

                <div className="w-fit inspired-title opacity-0">
                    <h4 className="text-3xl font-semibold bg-[#e7dfbc] p-[10px] my-4 inline-block">
                        Your mind is getting in your way...
                    </h4>
                </div>

                <p className="split-inspired-p">You know the feeling.</p>
                <p className="split-inspired-p">
                    That moment when self-doubt whispers, "You're not good enough." The spiral after
                    a mistake you can't shake off. The constant questioning of whether you have what
                    it takes.
                </p>
                <p className="split-inspired-p">
                    Your real opponent isn't the competition...it's between your ears. And now it's
                    costing you.
                </p>
                <p className="split-inspired-p">
                    Playing time. Consistent performance. Attention from recruiters. Your love of
                    the sport.
                </p>
                <p className="split-inspired-p">
                    You’re afraid of giving everything you have and still failing, so you hold back,
                    play it safe, and stay stuck.
                </p>
            </div>
        </section>
    );
};
