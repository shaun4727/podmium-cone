'use client';

import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useLayoutEffect, useRef, useState } from 'react';

interface SliderProps {
    children: React.ReactNode[];
    visibleSlides?: number;
}

export const CustomSlickSlider = ({ children, visibleSlides = 3 }: SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderTrackRef = useRef<HTMLDivElement>(null);
    const xToRef = useRef<((value: number) => void) | null>(null);

    const totalSlides = children.length;
    const maxIndex = Math.max(0, totalSlides - visibleSlides);

    useLayoutEffect(() => {
        const track = sliderTrackRef.current;
        if (!track) return;

        const slideWidthPercent = 100 / visibleSlides;

        // 🔥 Create quickTo ONLY once
        if (!xToRef.current) {
            // Set initial position BEFORE anything renders
            gsap.set(track, { xPercent: -currentIndex * slideWidthPercent });

            xToRef.current = gsap.quickTo(track, 'xPercent', {
                duration: 0.8,
                ease: 'power4.inOut',
            });
        }

        // 🔥 Update position smoothly
        xToRef.current(-currentIndex * slideWidthPercent);
    }, [currentIndex, visibleSlides]);

    const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

    return (
        <div className="relative w-full overflow-hidden px-4 py-10 group">
            {/* Slider Window */}
            <div className="overflow-hidden rounded-xl">
                <div ref={sliderTrackRef} className="flex will-change-transform translate-z-0">
                    {children.map((child, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 px-2"
                            style={{ flex: `0 0 ${100 / visibleSlides}%` }}
                        >
                            <div className="h-full transform transition-transform duration-500 hover:scale-[1.02]">
                                {child}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-6 z-10 flex gap-3 pointer-events-none px-2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="pointer-events-auto p-6 border-0 bg-gray-800/60 backdrop-blur-sm hover:bg-theme-brandy hover:text-white transition-all rounded-none duration-300 disabled:opacity-30 shadow-lg"
                >
                    <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex}
                    className="pointer-events-auto p-6 rounded-none border-0 bg-gray-800/60 backdrop-blur-sm hover:bg-theme-brandy hover:text-white transition-all duration-300 disabled:opacity-30 shadow-lg"
                >
                    <ChevronRight className="w-6 h-6" />
                </Button>
            </div>
        </div>
    );
};
