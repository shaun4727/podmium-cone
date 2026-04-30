import ParallaxMaskedImage from './sub-solution/solution-image';

export const SolutionSection = () => {
    return (
        <div className="font-montserrat bg-white flex flex-col md:flex-row gap-16 px-4 md:px-12 py-12 items-center">
            <div className="w-1/2">
                <h1 className="text-6xl uppercase font-bold leading-none">we have been there.</h1>
                <h1 className="text-6xl uppercase font-bold leading-none">and we will</h1>
                <h1 className="text-6xl uppercase font-bold leading-none">help you through it.</h1>

                <div className="mt-12 flex flex-col gap-6">
                    <p>
                        At The Podium Mindset, our mental performance coaches give you the practical
                        tools to quiet your inner-critic, perform under pressure, and reach the
                        performance goals you have set for yourself.
                    </p>
                    <p>
                        Get ready to play to your full potential and stand out among the
                        competition, all by mastering your mind.
                    </p>
                </div>
            </div>
            <div className="w-1/2">
                <ParallaxMaskedImage />
            </div>
        </div>
    );
};
