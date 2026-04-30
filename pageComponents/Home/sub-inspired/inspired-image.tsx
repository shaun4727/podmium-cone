'use client';

import Image from 'next/image';
import './inspired-style.css';

export default function ParallaxImage() {
    return (
        <div className="w-full md:w-1/2 flex justify-center items-center h-125">
            <div className="relative h-full bg-amber-300 rounded-lg border border-slate-200 parallax">
                {/* IMPORTANT: wrap Image */}
                <div className="absolute top-[-800px] inset-0">
                    <Image
                        src="/pod-images/depressed-man-1.jpg"
                        alt="parallax"
                        fill
                        className="object-cover image-depressed"
                    />
                </div>
            </div>
        </div>
    );
}
