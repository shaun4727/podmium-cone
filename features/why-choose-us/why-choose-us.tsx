import Image from 'next/image';

export const WhyChooseUs = () => {
    return (
        <div className="text-white px-4 md:px-12 py-20">
            <h1 className="text-[4vw] leading-none font-extrabold font-roboto uppercase text-center py-12">
                why athlete choose <br /> podium mindset
            </h1>
            <div className="choose-section grid grid-rows-6 grid-flow-col grid-cols-3 gap-4">
                <div className="choose-card relative row-span-3 col-auto bg-[#201f1e] flex items-end">
                    <div className="p-10">
                        <h1 className="uppercase text-3xl font-montserrat font-bold mb-4 ">
                            why we actually get it
                        </h1>
                        <p className="text-lg leading-5 font-roboto">
                            We don't just talk about mental performance, we've LIVED it. As former
                            competitive athletes, we understand exactly what you're going through
                            and have created a space where you can talk openly about your struggles.
                        </p>
                    </div>
                    <div className="bg-[#b19c7e] absolute top-0 right-0 p-2">
                        <Image
                            src={`/pod-images/logo.svg`}
                            width="30"
                            height="30"
                            alt="podmium-logo"
                            className="brightness-0 invert "
                        />
                    </div>
                </div>
                <div className="choose-card relative row-span-3 col-auto bg-[#201f1e] flex items-end">
                    <div className="p-10">
                        <h1 className="uppercase text-3xl font-montserrat font-bold mb-4">
                            Skills That Transfer Beyond Sports
                        </h1>
                        <p className="text-lg leading-5 font-roboto">
                            The mental tools you develop with us don't just make you a better
                            athlete, they help you nail college interviews, present confidently to
                            coaches, and maintain academic excellence under pressure.
                        </p>
                    </div>
                    <div className="bg-[#b19c7e] absolute top-0 right-0 p-2">
                        <Image
                            src={`/pod-images/logo.svg`}
                            width="30"
                            height="30"
                            alt="podmium-logo"
                            className="brightness-0 invert "
                        />
                    </div>
                </div>
                <div className="choose-card relative row-span-3 col-auto bg-[#201f1e] flex items-end">
                    <div className="p-10">
                        <h1 className="uppercase text-3xl font-montserrat font-bold mb-4">
                            Real Coaching, Not Just Content
                        </h1>
                        <p className="text-lg leading-5 font-roboto">
                            Unlike those generic (and pricy) pre-recorded videos that leave you
                            stranded after checkout, we actually show up for you. We ask questions,
                            customize strategies, and hold you accountable every week.
                        </p>
                    </div>

                    <div className="bg-[#b19c7e] absolute top-0 right-0 p-2">
                        <Image
                            src={`/pod-images/logo.svg`}
                            width="30"
                            height="30"
                            alt="podmium-logo"
                            className="brightness-0 invert "
                        />
                    </div>
                </div>
                <div className="choose-card relative row-span-3 col-auto bg-[#201f1e] flex items-end">
                    <div className="p-10">
                        <h1 className="uppercase text-3xl font-montserrat font-bold mb-4">
                            Results You Can Feel
                        </h1>
                        <p className="text-lg leading-5 font-roboto">
                            Our athletes don't just think differently, they perform differently.
                            Less hesitation. More confidence. Quicker bounce-back from mistakes. The
                            mental edge and consistency that unlocks that next opportunity.
                        </p>
                    </div>
                    <div className="bg-[#b19c7e] absolute top-0 right-0 p-2">
                        <Image
                            src={`/pod-images/logo.svg`}
                            width="30"
                            height="30"
                            alt="podmium-logo"
                            className="brightness-0 invert "
                        />
                    </div>
                </div>
                <div className="award-winner row-span-6 col-auto bg-amber-500 ">
                    <Image
                        src={`/pod-images/intense-focus.jpg`}
                        width="500"
                        height="400"
                        alt="award-winner"
                        className="object-cover w-full h-[600px]"
                    />
                </div>
            </div>
        </div>
    );
};
