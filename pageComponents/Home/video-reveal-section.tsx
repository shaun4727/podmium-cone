import { CustomSlickSlider } from '@/components/custom/custom-slider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
const slides = [
    { title: 'Peak Focus', color: 'bg-blue-500' },
    { title: 'Mental Toughness', color: 'bg-theme-brandy' },
    { title: 'Pressure Handling', color: 'bg-gray-800' },
    { title: 'Goal Setting', color: 'bg-zinc-900' },
];

export const FeedbackSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // ✅ Pin the section
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=120%', // gives enough scroll room
                pin: true,
                scrub: true,
            });

            // ✅ Dark overlay fade (main effect)
            gsap.fromTo(
                overlayRef.current,
                { opacity: 1 },
                {
                    opacity: 0.25, // keep slight darkness for readability
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );

            // ✅ Video subtle zoom-out (premium feel)
            gsap.fromTo(
                videoRef.current,
                { scale: 1.15 },
                {
                    scale: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );

            // ✅ Content reveal animation
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        end: 'top 20%',
                        scrub: true,
                    },
                }
            );

            // ✅ Ensure video plays when visible
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top center',
                onEnter: () => videoRef.current?.play(),
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="relative h-[220vh] w-full overflow-hidden">
            <video
                ref={videoRef}
                muted
                playsInline
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/football.mp4" type="video/mp4" />
            </video>
            <div ref={overlayRef} className="absolute inset-0 bg-black z-10" />
            <div
                ref={contentRef}
                className="relative z-10 text-white px-4 md:px-12 py-12 mt-60 flex gap-4 bg-transparent"
            >
                <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="">
                        <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                            real results
                        </h1>
                        <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                            from
                        </h1>
                        <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                            real athlets
                        </h1>
                    </div>
                </div>
                <div className="md:w-1/2 ">
                    <CustomSlickSlider visibleSlides={2}>
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className={`${slide.color} h-[400px] text-white p-8 flex flex-col justify-end `}
                            >
                                <span className="text-sm font-roboto opacity-60 uppercase tracking-widest">
                                    Module 0{i + 1}
                                </span>
                                <h3 className="text-2xl font-bold font-montserrat">
                                    {slide.title}
                                </h3>
                            </div>
                        ))}
                    </CustomSlickSlider>
                </div>
            </div>
        </div>
    );
};
