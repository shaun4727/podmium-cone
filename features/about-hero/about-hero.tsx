import { CustomButton } from '@/components/common/animated-button';
import Image from 'next/image';

export const AboutHero = () => {
    return (
        <div id="about-image" className="relative w-full h-screen overflow-hidden">
            <Image
                src="/pod-images/about/about-cover.jpg"
                fill // Senior standard: Use fill inside an explicit parent container
                alt="pod-playing"
                className="object-cover"
                priority // Highly recommended for above-the-fold landing page images
            />

            {/* Dark overlay wrapper to ensure text readability against athletic imagery */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content Overlay */}
            <div className="absolute top-1/4 left-12 right-12 md:right-[150px] z-20 max-w-5xl">
                <h1 className="text-white text-[5vw] leading-none font-montserrat uppercase font-bold">
                    Your guide to peak athletic mental performance
                </h1>
                <p className="text-white text-xl md:text-3xl font-roboto mt-8 mb-6 max-w-3xl">
                    The secret to athletic success is not about pushing harder—it's about conquering
                    the voice in your head. We’re here to show you how.
                </p>
                <CustomButton
                    text="Schedule an Intro call"
                    bgColor="#dec49e"
                    textColor="text-black"
                    className="font-bold px-6 py-3"
                />
            </div>
        </div>
    );
};
