import Image from 'next/image';

export const OurPrograms = () => {
    return (
        <div className="font-montserrat py-6 md:py-18">
            <h1 className="text-lg md:text-5xl text-center opacity-85 font-extrabold">
                Our Programs
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-12 justify-center">
                <div className="group relative overflow-hidden w-90 md:h-[300px] md:w-[400px]">
                    {/* ব্যাকগ্রাউন্ড ইমেজ */}
                    <Image
                        src="/pod-images/playing.jpg"
                        width="400"
                        height="500"
                        alt="pod-playing"
                        className="absolute inset-0 md:w-full md:h-full object-cover z-[-2] transition-transform duration-700 ease-in-out group-hover:scale-[1.5]"
                    />

                    {/* গ্রেডিয়েন্ট ওভারলে: এটিই আপনার বর্ডার ইমেজ ও কালার ইফেক্ট হ্যান্ডেল করবে */}
                    <div className="absolute inset-0 z-[-1] transition-opacity duration-700 opacity-100 bg-gradient-to-b from-transparent to-black/90 group-hover:opacity-0" />

                    {/* হোভার করলে যে গ্রেডিয়েন্টটি আসবে (Amber) */}
                    <div className="absolute inset-0 z-[-1] transition-opacity duration-700 opacity-0 bg-gradient-to-b from-[#f59e0b]/40 to-black/95 group-hover:opacity-100" />

                    {/* কন্টেন্ট */}
                    <div className="relative flex flex-col justify-end h-full p-6 text-white">
                        <p className="uppercase mb-4 flex items-center before:content-[''] before:w-[2px] before:h-[24px] before:bg-blue-500 before:mr-2">
                            program 01
                        </p>
                        <h1 className="uppercase font-bold md:text-2xl leading-tight">
                            the one-on-one mental
                        </h1>
                        <h1 className="uppercase font-bold md:text-2xl leading-tight">
                            performance coaching
                        </h1>

                        <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4">
                            <p className="w-80 text-sm leading-relaxed text-gray-200">
                                Personalized sessions focused on your specific challenges—whether
                                it's negative self-talk, performance anxiety, or fear of failure.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="group relative overflow-hidden w-90 md:h-[300px] md:w-[400px]">
                    {/* ব্যাকগ্রাউন্ড ইমেজ */}
                    <Image
                        src={`/pod-images/study-2.jpeg`}
                        width="400"
                        height="500"
                        alt="pod-playing"
                        className="absolute inset-0 w-full h-full object-cover z-[-2] transition-transform duration-700 ease-in-out group-hover:scale-[1.5]"
                    />

                    {/* গ্রেডিয়েন্ট ওভারলে: এটিই আপনার বর্ডার ইমেজ ও কালার ইফেক্ট হ্যান্ডেল করবে */}
                    <div className="absolute inset-0 z-[-1] transition-opacity duration-700 opacity-100 bg-gradient-to-b from-transparent to-black/90 group-hover:opacity-0" />

                    {/* হোভার করলে যে গ্রেডিয়েন্টটি আসবে (Amber) */}
                    <div className="absolute inset-0 z-[-1] transition-opacity duration-700 opacity-0 bg-gradient-to-b from-[#f59e0b]/40 to-black/95 group-hover:opacity-100" />

                    {/* কন্টেন্ট */}
                    <div className="relative flex flex-col justify-end h-full p-6 text-white">
                        <p className="uppercase mb-4 flex items-center before:content-[''] before:w-[2px] before:h-[24px] before:bg-blue-500 before:mr-2">
                            program 02
                        </p>
                        <h1 className="uppercase font-bold md:text-2xl leading-tight">
                            the one-on-one mental
                        </h1>
                        <h1 className="uppercase font-bold md:text-2xl leading-tight">
                            performance coaching
                        </h1>

                        <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4">
                            <p className="w-80 text-sm leading-relaxed text-gray-200">
                                Personalized sessions focused on your specific challenges—whether
                                it's negative self-talk, performance anxiety, or fear of failure.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="group relative overflow-hidden w-90 md:h-[300px] md:w-[400px]">
                    {/* ব্যাকগ্রাউন্ড ইমেজ */}
                    <Image
                        src={`/pod-images/study.webp`}
                        width="400"
                        height="500"
                        alt="pod-playing"
                        className="absolute inset-0 w-full h-full object-cover z-[-2] transition-transform duration-700 ease-in-out group-hover:scale-[1.5]"
                    />

                    {/* গ্রেডিয়েন্ট ওভারলে: এটিই আপনার বর্ডার ইমেজ ও কালার ইফেক্ট হ্যান্ডেল করবে */}
                    <div className="absolute inset-0 z-[-1] transition-opacity duration-700 opacity-100 bg-gradient-to-b from-transparent to-black/90 group-hover:opacity-0" />

                    {/* হোভার করলে যে গ্রেডিয়েন্টটি আসবে (Amber) */}
                    <div className="absolute inset-0 z-[-1] transition-opacity duration-700 opacity-0 bg-gradient-to-b from-[#f59e0b]/40 to-black/95 group-hover:opacity-100" />

                    {/* কন্টেন্ট */}
                    <div className="relative flex flex-col justify-end h-full p-6 text-white">
                        <p className="uppercase mb-4 flex items-center before:content-[''] before:w-[2px] before:h-[24px] before:bg-blue-500 before:mr-2">
                            program 03
                        </p>
                        <h1 className="uppercase font-bold md:text-2xl leading-tight">
                            the one-on-one mental
                        </h1>
                        <h1 className="uppercase font-bold md:text-2xl leading-tight">
                            performance coaching
                        </h1>

                        <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4">
                            <p className="w-80 text-sm leading-relaxed text-gray-200">
                                Personalized sessions focused on your specific challenges—whether
                                it's negative self-talk, performance anxiety, or fear of failure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
