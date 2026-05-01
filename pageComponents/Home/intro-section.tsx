import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import ScrollingText from './sub-intro/scrolling-text';

export const IntroSection = () => {
    return (
        <div className="text-white ">
            <ScrollingText />
            <div className="px-4 md:px-12">
                <h1 className="text-[4vw] uppercase font-montserrat font-semibold">
                    meet the founder,
                </h1>
                <h2 className="text-[4vw] capitalize font-semibold">tony stark.</h2>
                <div className="flex gap-12">
                    <Image
                        src="/pod-images/fomal-image.jpg"
                        width="500"
                        height="600"
                        alt="formal image"
                    />
                    <Image
                        src="/pod-images/playing-volleyball.jpg"
                        width="500"
                        height="600"
                        alt="formal image"
                        className="w-100 h-140"
                    />
                    <div className="font-roboto flex flex-col gap-6 md:mt-24">
                        {/* <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left  first-letter:text-theme-brandy"> */}
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-theme-brandy">
                            As a former Division I volleyball player with a PhD in Sport Psychology,
                            I know exactly what you're going through.
                        </p>
                        <p>
                            The confidence crashes that left me questioning everything. The
                            overwhelming pressure to perform. The fear of failure that kept me from
                            playing freely.
                        </p>
                        <p>
                            I had all the physical talent and potential, but I struggled mentally
                            and I had no one to show me the way through.
                        </p>
                        <p>
                            That's exactly why I pursued this career and founded The Podium Mindset:{' '}
                            <br /> to provide the mental training I once desperately needed.
                        </p>
                        <p>
                            Our one-on-one coaching is built around YOU (your sport, your
                            challenges, your goals). We focus on real mental skills that are
                            practical, personalized, and proven to hold up in critical moments.
                        </p>
                        <button className="group relative overflow-hidden uppercase cursor-pointer flex items-center gap-2 mt-4 bg-theme-brandy p-2 text-black transition-all duration-500 hover:text-white intro-button max-w-[200px] hover:border hover:border-theme-brandy">
                            {/* 1. The Content (Text) */}
                            <span className="relative z-11 pl-2 group-hover:text-white">
                                our approach
                            </span>

                            {/* 2. The Arrow Wrapper + Expanding Background */}
                            <span className="relative z-10 flex items-center justify-center bg-black text-white  p-1 transition-colors duration-500 group-hover:bg-transparent">
                                <ArrowUpRight size={16} />

                                {/* This div is the magic: It scales from the icon to cover the button */}
                                <div className="absolute inset-0 bg-black -z-10 scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[40]" />

                                <div className="absolute inset-0 bg-theme-brandy scale-0 p-1 -z-10  transition-all duration-300 ease-in-out group-hover:scale-100" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
