import { CustomSlickSlider } from '@/components/custom/custom-slider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const slides = [
    { title: 'Peak Focus', color: 'bg-blue-500' },
    { title: 'Mental Toughness', color: 'bg-theme-brandy' },
    { title: 'Pressure Handling', color: 'bg-gray-800' },
    { title: 'Goal Setting', color: 'bg-zinc-900' },
];

export const FeedbackSection = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0 bg-black z-10" />
            <div className="relative z-10 text-white px-4 md:px-12 py-12 mt-60 flex gap-4 bg-transparent">
                <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="">
                        <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                            real results
                        </h1>
                        <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                            from
                        </h1>
                        <h1 className="text-[4vw] font-bold uppercase font-montserrat leading-none">
                            real athlets
                        </h1>
                    </div>
                </div>
                <div className="md:w-1/2 ">
                    <CustomSlickSlider visibleSlides={2}>
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className={`${slide.color} h-[400px] text-white p-8 flex flex-col justify-end `}
                            >
                                <span className="text-sm font-roboto opacity-60 uppercase tracking-widest">
                                    Module 0{i + 1}
                                </span>
                                <h3 className="text-2xl font-bold font-montserrat">
                                    {slide.title}
                                </h3>
                            </div>
                        ))}
                    </CustomSlickSlider>
                </div>
            </div>
        </div>
    );
};
