import { FooterMarquee } from '../common/footer-marque';

export const FooterComponent = () => {
    return (
        <div className="bg-[#fbf9f5]">
            <div className=" py-6 md:py-0 px-4 md:px-12 md:py-36 font-roboto font-semibold uppercase md:flex gap-12">
                <div className="md:w-2/5">
                    <ul className="leading-none">
                        <li className="text-2xl md:text-[2vw]">Home</li>
                        <li className="text-2xl md:text-[2vw]">About</li>
                        <li className="text-2xl md:text-[2vw]">Programs</li>
                        <li className="text-2xl md:text-[2vw]">Contact</li>
                    </ul>
                </div>
                <div className="mt-6 md:mt-0 md:3/5 leading-none">
                    <h1 className="text-2xl md:text-[2vw]">1:1 mental performance coaching</h1>
                    <h1 className="text-2xl md:text-[2vw]">metal toolbox development </h1>
                    <h1 className="text-2xl md:text-[2vw]">next level confidence</h1>
                </div>
            </div>
            <FooterMarquee />
        </div>
    );
};
