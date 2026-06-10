'use client';

import { FooterComponent } from '@/components/layout/footer';
import { AboutHero } from '@/features/about-hero/about-hero';
import { GreatJourney } from '@/features/great-journey/great-journey';
import { MentalSuccess } from '@/features/mental-success/mental-success';
import { RealizationComponent } from '@/features/realization/realization';
import { StartBelieving } from '@/features/start-believing/start-believing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    const aboutContainer = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isDesktop: '(min-width: 768px)',
                isMobile: '(max-width: 767px)',
            },
            (context) => {
                const { isMobile } = context.conditions || {};
                // Target the element cleanly

                gsap.fromTo(
                    '#about-image',
                    {
                        ease: 'none',
                        scale: '1',
                    },
                    {
                        ease: 'none',
                        scale: '.6',
                        scrollTrigger: {
                            trigger: aboutContainer.current,
                            // FIX: Start when the top of the container is 20% above the viewport bottom
                            // This kicks the animation off earlier than 'top bottom'
                            start: isMobile ? 'top 118%' : 'top top',
                            // End when the bottom of the container is 20% above the viewport top
                            end: isMobile ? 'bottom -10%' : 'bottom top',
                            scrub: 1.5,
                            invalidateOnRefresh: true,
                            fastScrollEnd: true,
                        },
                    }
                );
            },
            aboutContainer
        );

        return () => mm.revert();
    }, []);

    return (
        <main className="relative bg-[#f8f3eb] overflow-hidden min-h-screen" ref={aboutContainer}>
            {/* 🔥 FIX: Added relative, w-full, h-screen, and overflow-hidden.
               This gives the CSS clipPath an explicit spatial boundary to clip against.
            */}
            <AboutHero />
            <GreatJourney />
            <RealizationComponent />
            <MentalSuccess />
            <StartBelieving />
            <FooterComponent />
        </main>
    );
};

export default Page;
