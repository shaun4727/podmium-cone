'use client';

import './solution-image.css';

export default function ParallaxMaskedImage() {
    return (
        <div className="w-full flex justify-center   items-center p-4">
            {/* 
               The 'parallax-mask-container' handles the mask logic.
               The 'parallax-scrolling-bg' handles the scroll animation.
            */}
            <div
                className="parallax-mask-container parallax-scrolling-bg w-full h-[550px]"
                style={
                    {
                        backgroundImage: "url('/pod-images/inspired-solution.jpg')",
                        // Verbatim reference to your mask file
                        maskImage: "url('/pod-images/brush-mask.png')",
                        WebkitMaskImage: "url('/pod-images/brush-mask.png')",
                        // Custom property to control parallax depth
                        '--parallax-speed': '150',
                    } as React.CSSProperties
                }
            />
        </div>
    );
}
