import { FooterMarquee } from './sub-footer/footer-marque';

export const FooterComponent = () => {
    return (
        <div className="bg-[#fbf9f5]">
            <div className="  px-4 md:px-12 md:py-36 font-roboto font-semibold uppercase flex gap-12">
                <div className="w-2/5">
                    <ul className="leading-none">
                        <li className="text-[2vw]">Home</li>
                        <li className="text-[2vw]">About</li>
                        <li className="text-[2vw]">Programs</li>
                        <li className="text-[2vw]">Contact</li>
                    </ul>
                </div>
                <div className="3/5 leading-none">
                    <h1 className="text-[2vw]">1:1 mental performance coaching</h1>
                    <h1 className="text-[2vw]">metal toolbox development </h1>
                    <h1 className="text-[2vw]">next level confidence</h1>
                </div>
            </div>
            <FooterMarquee />
        </div>
    );
};
