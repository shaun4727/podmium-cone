import { Button } from '../ui/button';

export const Navbar = () => {
    return (
        <nav className="flex justify-between w-full font-montserrat border-3 fixed top-0 left-0 right-0 border-none p-3">
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
    );
};
