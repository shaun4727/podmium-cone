'use client';

import Image from 'next/image';
import './parallax-style.css';

export default function ParallaxImage() {
    return (
        <div className="w-full md:w-1/2">
            <div className="parallax rounded-lg border border-slate-200">
                {/* 
                   Senior Tip: Next.js 'fill' creates a relative wrapper. 
                   We use 'object-cover' for the background and 'object-contain' 
                   or 'object-bottom' for characters to keep them on the 'ground'.
                */}
                <Image
                    src="/pod-images/bg.jpg"
                    alt="bg"
                    fill
                    className="parallax-bg object-cover"
                />
                <Image
                    src="/pod-images/dust.webp"
                    alt="dust"
                    fill
                    className="parallax-dust object-cover opacity-50"
                />

                {/* Rays/Lighting */}
                <Image
                    src="/pod-images/rays.webp"
                    alt="rays"
                    fill
                    className="parallax-rays object-cover mix-blend-screen"
                />

                {/* Characters */}
                <Image src="/pod-images/luna.webp" alt="luna" fill className="parallax-luna " />
                <Image src="/pod-images/manny.webp" alt="manny" fill className="parallax-manny " />
                <Image src="/pod-images/jax.webp" alt="jax" fill className="parallax-jax " />

                {/* Foreground (Static) */}
                <Image
                    src="/pod-images/foreground-back.webp"
                    alt="fg-back"
                    fill
                    className="parallax-foreground-back "
                />
                <Image
                    src="/pod-images/foreground-front.webp"
                    alt="fg-front"
                    fill
                    className="parallax-foreground-front "
                />
            </div>
        </div>
    );
}
