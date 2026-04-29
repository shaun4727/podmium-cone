import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="min-h-screen w-full relative">
            <video
                autoPlay
                muted
                playsInline
                loop
                className="min-h-screen md:h-full w-full object-cover"
            >
                <source src="/videos/hero-1.mp4" />
            </video>

            <div className="absolute flex flex-col gap-24 md:gap-48 inset-0 mx-4 md:mx-12 mt-6">
                <nav className="flex justify-between w-full font-montserrat border-3 border-indigo-600">
                    <h1 className="text-md text-white uppercase font-bold flex flex-col items-center leading-tight">
                        <span className="text-[9px] font-regular">The</span>
                        <span>Podmium</span>
                        <span>Mindset</span>
                    </h1>
                    <ul className="text-white uppercase flex gap-8 items-center">
                        <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                            <span className="relative z-10">Home</span>

                            {/* 2. The background layer */}
                            <div className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                        </li>
                        <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                            <span className="relative z-10">Programs</span>
                            <div className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                        </li>
                        <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                            <span className="relative z-10">About</span>
                            <div className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                        </li>
                        <li className="group relative cursor-pointer px-6 py-2 overflow-hidden transition-colors duration-500 hover:text-black">
                            <span className="relative z-10">Contact</span>
                            <div className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                        </li>
                        <li>
                            <Button
                                variant="outline"
                                className="text-black w-60 uppercase rounded-none cursor-pointer"
                            >
                                Book a call
                            </Button>
                        </li>
                    </ul>
                </nav>

                <div className="hero-text text-white font-montserrat md:w-1/2">
                    <h1 className="text-lg md:text-7xl font-montserrat uppercase font-bold">
                        Train your brain.
                    </h1>
                    <h1 className="text-lg md:text-7xl font-montserrat uppercase font-bold">
                        Dominate your game.
                    </h1>
                    <p className="mt-6 text-sm md:text-lg">
                        Elite mental performance coaching for competitive youth athletes who want to
                        silence self-doubt and and start competing with consistent confidence.
                    </p>

                    {/* /**
                     * HOVER EFFECT LOGIC: "The Ripple Expansion"
                     * ----------------------------------------
                     * * 1. BASE STATE:
                     * - The button has a 'bg-theme-brandy' background.
                     * - The Arrow Wrapper is a small black square ('bg-black') on the right.
                     * - The "magic" div inside the arrow wrapper is 'scale-0' (invisible).
                     * * 2. THE EXPANSION (group-hover:scale-[40]):
                     * - On hover, the 'scale-0' div inside the icon span expands to 40x its size.
                     * - Because it is nested INSIDE the icon span, the growth origin is the icon itself.
                     * - 'rounded-full' makes the expansion a circle, creating a ripple/radial effect.
                     * - 'absolute inset-0' ensures the growth starts exactly from the icon's boundaries.
                     * * 3. KEY CLASS BREAKDOWN:
                     * - 'group': Placed on parent; allows children to react when the button is hovered.
                     * - 'overflow-hidden': Essential! It clips the massive scaled-up circle so it
                     * doesn't bleed outside the button borders.
                     * - 'relative z-10/z-11': Ensures text and icon stay "above" the expanding
                     * black circle so they don't disappear.
                     * - '-z-10' (on the expanding div): Places the circle behind the icon/text
                     * but above the button's base background.
                     * - 'group-hover:bg-transparent': Hides the small black square of the icon span
                     * on hover so it blends perfectly into the large expanding circle.
                     * - 'transition-transform': Enables the smooth "growing" animation rather
                     * than an instant flicker.
                     */}

                    <button className="group relative overflow-hidden uppercase cursor-pointer flex items-center gap-2 mt-4 bg-theme-brandy p-2 text-black transition-colors duration-500 hover:text-white">
                        {/* 1. The Content (Text) */}
                        <span className="relative z-11 pl-2 group-hover:text-white">
                            Schedule an intro call
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
    );
};

export default HeroSection;
