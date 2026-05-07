'use client';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export const FooterMarquee = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const row = marqueeRef.current;
            if (!row) return;

            // Grab the first element to calculate the loop distance
            const firstItem = row.children[0] as HTMLElement;
            if (!firstItem) return;

            const distance = firstItem.offsetWidth;

            gsap.to(row, {
                x: -distance,
                duration: 20, // Adjusted duration for smoother 4vw text flow
                ease: 'none',
                repeat: -1,
                modifiers: {
                    // Use modulo to reset position seamlessly
                    x: gsap.utils.unitize((x) => parseFloat(x) % distance),
                },
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-transparent">
            {/* 
                We use a wrapper that is at least 2x the content width 
                to ensure no 'blank' space appears during the loop.
            */}
            <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
                {/* 
                    We map multiple times to ensure the screen is always filled. 
                    Text is set to 4vw, font-roboto, and black per requirements.
                */}
                {[...Array(6)].map((_, i) => (
                    <div className="flex items-center gap-8 px-4" key={i}>
                        <span className="text-[12vw] font-roboto font-black uppercase text-black">
                            the PODIUM MINDSET
                        </span>
                        {/* Elegant separator */}
                        <span className="text-[8vw] text-black/20 font-roboto">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
