import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="min-h-screen w-full relative">
            <video autoPlay muted playsInline loop className="h-full w-full object-cover">
                <source src="/videos/hero-1.mp4" />
            </video>

            <div className="absolute flex flex-col gap-48 inset-0 mx-12 mt-6">
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

                <div className="hero-text text-white font-montserrat w-1/2">
                    <h1 className="text-7xl font-montserrat uppercase font-bold">
                        Train your brain.
                    </h1>
                    <h1 className="text-7xl font-montserrat uppercase font-bold">
                        Dominate your game.
                    </h1>
                    <p className="mt-6 text-lg">
                        Elite mental performance coaching for competitive youth athletes who want to
                        silence self-doubt and and start competing with consistent confidence.
                    </p>
                    <button className="group relative overflow-hidden uppercase cursor-pointer flex gap-2 mt-4 bg-theme-brandy p-2 text-black transition-colors duration-500 hover:text-white">
                        {/* 1. The Expanding Layer */}
                        <div className="absolute inset-0 bg-black transition-transform duration-500 scale-x-0 origin-right group-hover:scale-100" />

                        {/* 2. The Content (Z-index is key here) */}
                        <span className="relative z-10 flex items-center gap-2">
                            Schedule an intro call
                            <span className="bg-black text-white p-1 group-hover:bg-theme-brandy transition-colors duration-800 ">
                                <ArrowUpRight size={16} />
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
