import ParallaxImage from './sub-inspired/inspired-image';

export const InspiredSection = () => {
    return (
        <section className="font-montserrat bg-white flex flex-col md:flex-row gap-16 px-4 md:px-12 py-12 items-center">
            {/* Image Container */}
            {/* <div className="w-full md:w-1/2 flex justify-center items-center h-[500px]">
                <div className="relative w-[80%] h-[80%] rounded-lg overflow-hidden border border-slate-200">
                    <Image
                        src="/pod-images/depressed-man.jpg"
                        alt="depressed-person"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        style={{
                            transform:
                                'translate3d(0px, 14.35%, 0px) scale3d(1.4, 1.4, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(5deg, 0deg)',
                            transformStyle: 'preserve-3d',
                            willChange: 'transform',
                        }}
                    />
                </div>
            </div> */}

            <ParallaxImage />
            {/* Content Container */}
            <div className="w-full md:w-1/2 flex flex-col gap-[7px]">
                <h1 className="text-6xl uppercase font-bold leading-none">
                    Your talent is not the problem
                </h1>

                <div className="w-fit">
                    <h4 className="text-3xl font-semibold bg-[#e7dfbc] p-[10px] my-4 inline-block">
                        Your mind is getting in your way...
                    </h4>
                </div>

                <p>You know the feeling.</p>
                <p>
                    That moment when self-doubt whispers, "You're not good enough." The spiral after
                    a mistake you can't shake off. The constant questioning of whether you have what
                    it takes.
                </p>
                <p>
                    Your real opponent isn't the competition...it's between your ears. And now it's
                    costing you.
                </p>
                <p>
                    Playing time. Consistent performance. Attention from recruiters. Your love of
                    the sport.
                </p>
                <p>
                    You’re afraid of giving everything you have and still failing, so you hold back,
                    play it safe, and stay stuck.
                </p>
            </div>
        </section>
    );
};
