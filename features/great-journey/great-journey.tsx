import { CustomButton } from '@/components/common/animated-button';

export const GreatJourney = () => {
    return (
        <div className="mt-40 font-roboto flex  items-center flex-col gap-12">
            <h1 className="uppercase font-montserrat text-[5vw] font-bold leading-none text-center">
                the journey from good to great...is{' '}
                <span className="text-[#b19c7e]">in your mind</span>
            </h1>
            <div className="w-[60%] flex flex-col gap-8">
                <p className="text-2xl text-center">
                    As a competitor, you’ll reach a point where your athletic ability alone isn't
                    enough.
                </p>
                <p className="text-2xl text-center">
                    You've mastered the technical aspects of your sport. You've put in countless
                    hours of practice. But something is still holding you back.
                </p>
                <p className="text-2xl text-center">
                    We know how frustrating it is to train hard, give your all, and still feel like
                    you're not good enough.
                </p>
                <p className="text-2xl text-center">
                    To watch teammates with less dedication get better results. To know you have the
                    skills but can't seem to show them when it matters most.
                </p>
                <p className="text-2xl text-center">
                    You're not alone in this struggle. And more importantly, you don't have to
                    figure it out by yourself.
                </p>
            </div>
            <CustomButton text="see our program" className="p-4 flex gap-30" />
        </div>
    );
};
