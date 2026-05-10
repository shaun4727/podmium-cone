'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function LayeredPinnedSections() {
    const containerRef = useRef(null);
    // 1. Tell the ref it is an array of HTMLElements
    const panelsRef = useRef<HTMLElement[]>([]);

    // 2. The addToPanels function will now work with the correct type
    const addToPanels = (el: HTMLElement | null) => {
        if (el && !panelsRef.current.includes(el)) {
            panelsRef.current.push(el);
        }
    };
    useEffect(() => {
        // Make sure we have panels to animate
        if (panelsRef.current.length === 0) return;

        // Create a ScrollTrigger context to easily clean up later
        let ctx = gsap.context(() => {
            // Loop through each panel except the last one
            panelsRef.current.forEach((panel, i) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: 'top top', // Pin when the top of the panel hits the top of the viewport
                    pin: true,
                    pinSpacing: false, // Prevents GSAP from adding extra space, allowing the next section to overlap
                    // Optional: Add a slight shadow or darken effect as it gets covered
                    animation: gsap.to(panel, {
                        opacity: 0.5,
                        ease: 'none',
                    }),
                    scrub: true,
                });
            });
        }, containerRef);

        // Cleanup function: Kills all GSAP animations when the component unmounts
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden">
            {/* Intro section just to give us space to scroll down to the effect */}
            <section className="flex h-screen items-center justify-center bg-gray-100 text-black">
                <h1 className="text-4xl font-bold">Scroll down for Layered Sections</h1>
            </section>

            {/* Panel 1 */}
            <section
                ref={addToPanels}
                className="flex h-screen items-center justify-center bg-blue-600 text-white shadow-xl"
            >
                <h2 className="text-6xl font-black">Layer 1</h2>
            </section>

            {/* Panel 2 */}
            <section
                ref={addToPanels}
                className="flex h-screen items-center justify-center bg-purple-600 text-white shadow-xl"
            >
                <h2 className="text-6xl font-black">Layer 2</h2>
            </section>

            {/* Panel 3 */}
            <section
                ref={addToPanels}
                className="flex h-screen items-center justify-center bg-orange-500 text-white shadow-xl"
            >
                <h2 className="text-6xl font-black">Layer 3</h2>
            </section>

            {/* Final Outro section to scroll past the effect */}
            <section className="flex h-[150vh] items-center justify-center bg-gray-900 text-white z-10 relative">
                <h2 className="text-4xl font-bold">End of Parallax</h2>
            </section>
        </div>
    );
}
