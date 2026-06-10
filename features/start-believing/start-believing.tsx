import { CustomButton } from '@/components/common/animated-button';

export const StartBelieving = () => {
    return (
        <div className="bg-black p-10 flex justify-between">
            <div className="w-[76%]">
                <h1 className="text-[5vw] text-white font-montserrat leading-none uppercase font-bold">
                    ready to start believing you can succeed?
                </h1>
            </div>
            <div className="flex items-center">
                <CustomButton
                    text="Schedule your free intro call"
                    className="border border-theme-brandy"
                />
            </div>
        </div>
    );
};
