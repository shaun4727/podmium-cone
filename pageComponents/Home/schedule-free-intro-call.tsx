import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const tpmLettersSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="268" viewBox="0 0 1024 268" xml:space="preserve">
      <rect width="100%" height="100%" fill="none" />
      <g>
        <path fill="white" d="M198.812,65.378H0v65.37h65.361v137.247h68.08V130.748h65.371V65.378z"/>
        <path fill="white" d="M304.707,268.001h68.08v-72.234h28.182c18.528,0,32.611-3.641,42.246-10.925
          c9.637-7.284,14.453-18.064,14.453-32.348V98.118c0-10.925-3.646-19.646-10.932-26.162c-7.284-6.516-18.062-9.774-32.342-9.774
          h-41.605L304.707,268.001z M372.787,130.748v-2.072h17.92c4.129,0,7.207,0.729,9.231,2.188c2.022,1.458,3.033,3.758,3.033,6.899
          v33.43c0,3.14-1.011,5.441-3.033,6.901c-2.024,1.46-5.102,2.189-9.231,2.189h-17.92V130.748z"/>
        <path fill="white" d="M608.232,65.378H608l102.346,137.247L812.693,65.378H1024v202.617h-68.078V130.748l-87.161,137.247
          h-65.366L716.234,130.748v137.247h-68.077V65.378H608.232z"/>
      </g>
    </svg>
  `;

const encodedSvg = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(tpmLettersSvg)}`;

export const ScheduleFreeIntroCall = () => {
    return (
        <div>
            <div className="text-white px-4 md:px-12 md:py-36 flex gap-12">
                <div className="w-3/4">
                    <h1 className="text-[4vw] font-roboto font-extrabold uppercase leading-none">
                        Tired of being held back by what's happening <br /> in your head?
                    </h1>
                    <p className="font-montserrat text-xl">
                        It's time to build the mindset behind the medal
                    </p>
                </div>
                <div className="flex items-end">
                    <button className="group relative overflow-hidden uppercase cursor-pointer flex items-center gap-2 mt-4 bg-[#dec49e] p-4 font-semibold text-black transition-colors duration-500 hover:text-white solution-button opacity-0 invisible font-roboto">
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

            {/* masked image section started */}
            <div className="flex flex-col items-center justify-center p-8 ">
                <div className="relative h-[250px] aspect-[1024/268] bg-transparent overflow-hidden">
                    {/* 
                        FIX: Dynamic values must be passed via inline styles. 
                        Tailwind classes handle the repeat, position, and sizing.
                    */}
                    <div
                        className="relative parallax-mask-container parallax-scrolling-bg w-full h-full [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
                        style={{
                            maskImage: `url("${encodedSvg}")`,
                            WebkitMaskImage: `url("${encodedSvg}")`,
                        }}
                    >
                        <Image
                            src="/pod-images/footer-mask.jpg"
                            alt="Masked Hockey Program CTA"
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="(max-height: 350px) 100vw, 955px"
                        />
                    </div>

                    <a
                        href="#join-now"
                        className="absolute inset-0 z-10 block"
                        aria-label="Join the elite training program"
                    ></a>
                </div>
            </div>

            {/* masked image section ended */}
        </div>
    );
};
