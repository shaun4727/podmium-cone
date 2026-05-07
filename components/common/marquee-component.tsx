'use client';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export const MarqueeText = () => {
    // 1. Define the type here
    const marqueeRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const row = marqueeRef.current;

            // 2. Add a type guard check
            if (!row) return;

            // Now TypeScript knows 'row' is a div, so 'children' exists!
            const part1 = row.children[0] as HTMLElement;

            if (!part1) return;

            const distance = part1.offsetWidth;

            gsap.to(row, {
                x: -distance,
                duration: 15,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % distance),
                },
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full overflow-hidden mt-28 py-4 ">
            {/* Container that moves */}
            <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
                {/* First set of text */}
                {[...Array(3)].map((_, i) => (
                    <div className="flex items-center gap-8 px-4" key={i}>
                        <span className="text-4xl md:text-[42px] font-bold uppercase text-white/15 font-montserrat">
                            The
                        </span>
                        <span className="text-4xl md:text-[142px] font-bold uppercase text-white/15 font-montserrat">
                            Podmium Mindset
                        </span>
                        <span className="text-4xl md:text-6xl text-theme-brandy/15">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
