import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export const TransformationStory = () => {
    return (
        <div className=" bg-[#fbf9f5] px-4 md:px-12 md:py-36">
            <h1 className="text-[2e2b25] text-[4vw] font-roboto uppercase leading-none font-extrabold">
                a mental transformation <br /> story:{' '}
                <span className="text-[#9b917d]">andrew nicols</span>
            </h1>
            <div className="py-20 flex gap-12">
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="p-8 bg-white font-montserrat text-lg border-l-2 border-[#9f8968] shadow-lg">
                        <Image
                            src="/pod-images/quote.svg"
                            width="200"
                            height="200"
                            alt="quotation"
                            className="brightness-0 invert-[75%] sepia-[5%] saturate-[50%] hue-rotate-[20deg] w-15"
                        />
                        <p className="mt-4 font-semibold">
                            "My ninth grade year, I experienced a lot of burnout. I was dreading the
                            sport, feeling a lot of pressure, and it was taking a toll on me. I just
                            wasn't positive anymore and really hated running - which was sad because
                            it's something I've always loved doing."
                        </p>
                        <p className="mt-4 text-[#9f8968] uppercase">
                            - nicols,Cross Country Runner, 10th Grade
                        </p>
                    </div>
                    <div className="font-montserrat flex flex-col gap-12">
                        <p>
                            Haley came to Jordan as a sophomore struggling with intense self-imposed
                            pressure. Her entire sense of worth had become tied to her race
                            times—and when those times didn't meet her expectations, her love for
                            running began to fade.
                        </p>
                        <p>
                            "My worth for running was only determined by the times I was running and
                            nothing else. It got to a point where my friends started to notice I was
                            struggling a lot."
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src="/pod-images/transformation-story.jpg"
                        width="400"
                        height="500"
                        alt="transformation-story"
                        className="w-full h-[750px] object-cover object-top"
                    />
                </div>
            </div>
            <div className="flex mt-10">
                <div className="w-1/2 flex flex-col gap-6">
                    <Image src="/pod-images/playing.jpg" width="700" height="450" alt="playing" />
                    <Image
                        src="/pod-images/playing-volleyball.jpg"
                        width="500"
                        height="400"
                        alt="play volley ball"
                        className="h-[450] object-cover "
                    />
                </div>
                <div className="w-1/2 text-lg font-montserrat flex flex-col gap-8">
                    <p>
                        Working together, Jordan created personalized tools for Haley's specific
                        challenges—visualization techniques to release pressure, daily mantras to
                        build self-belief, pre-race mindset shifts, and in-race mental strategies to
                        rely on.
                    </p>

                    <p className="p-8 bg-white font-montserrat text-lg border-l-2 border-[#9f8968] text-[#584e3f] shadow-lg">
                        "This track season, there's been an incredible change. I finally enjoy the
                        sport again. I'm crossing the finish line, maybe not seeing the times I wish
                        for, but still walking off with a smile, knowing I'm happy with what I just
                        did."
                    </p>

                    <p>
                        The impact extended beyond running. Haley found herself happier in school,
                        more present with friends, and able to approach her future with less
                        anxiety.
                    </p>
                    <p className="p-8 bg-white font-montserrat text-lg border-l-2 border-[#9f8968] text-[#584e3f] shadow-lg">
                        "I used to sit in fourth period dreading the workout ahead. Now I'm laughing
                        with friends, still knowing practice is coming but with a positive outlook.
                        I could not imagine giving up the sport now, especially after working with
                        Jordan. I just love my sport again and cannot imagine quitting before high
                        school ends."
                    </p>
                </div>
            </div>

            <div className="relative w-full flex justify-center mt-18">
                {/* The Horizontal Line spanning the full width of the parent */}
                <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-[#2e2b25]/25 -translate-y-1/2" />

                <p className="relative font-montserrat  text-[#2e2b25] w-2xl text-center bg-[#fbf9f5] border-x  border-[#2e2b25]/25 z-10">
                    Don't face another season trapped in your head. Reclaim your passion for your
                    sport with personalized mental performance coaching.
                </p>
            </div>
            <div className="flex justify-center mt-8">
                <button className="group relative overflow-hidden uppercase cursor-pointer flex items-center gap-2 mt-4 bg-black p-2 text-white transition-colors duration-500 hover:text-white solution-button opacity-0 invisible">
                    {/* 1. The Content (Text) */}
                    <span className="relative z-11 pl-2 group-hover:text-white">
                        Find The Right Program For You
                    </span>

                    {/* 2. The Arrow Wrapper + Expanding Background */}
                    <span className="relative z-10 flex items-center justify-center bg-theme-brandy text-white  p-1 transition-colors duration-500 group-hover:bg-transparent">
                        <ArrowUpRight size={16} />

                        {/* This div is the magic: It scales from the icon to cover the button */}
                        <div className="absolute inset-0 bg-theme-brandy -z-10 scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[40]" />

                        <div className="absolute inset-0 bg-black scale-0 p-1 -z-10  transition-all duration-300 ease-in-out group-hover:scale-100" />
                    </span>
                </button>
            </div>
        </div>
    );
};
