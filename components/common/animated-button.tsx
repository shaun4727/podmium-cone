import { cn } from '@/lib/utils'; // Assuming you use shadcn's utility for merging classes
import { ArrowUpRight } from 'lucide-react';

interface CustomButtonProps {
    text: string;
    className?: string;
    // Customization Props
    bgColor?: string; // Tailwind class like 'bg-black'
    hoverBgColor?: string; // Tailwind class like 'bg-theme-brandy'
    textColor?: string; // Tailwind class like 'text-white'
    iconBgColor?: string; // Tailwind class like 'bg-theme-brandy'
    // Event handlers
    onClick?: () => void;
}

export const CustomButton = ({
    text,
    className,
    bgColor = 'bg-black',
    hoverBgColor = 'bg-theme-brandy',
    textColor = 'text-white',
    iconBgColor = 'bg-theme-brandy',
    onClick,
}: CustomButtonProps) => {
    const isHexColor = bgColor?.startsWith('#') || bgColor?.startsWith('rgb');

    return (
        <button
            onClick={onClick}
            style={{
                // Safely apply raw hex as inline style if it's a hex string
                backgroundColor: isHexColor ? bgColor : undefined,
            }}
            className={cn(
                'group relative overflow-hidden uppercase cursor-pointer flex items-center justify-between gap-2 p-2 transition-colors duration-500 font-roboto',
                'w-full md:w-auto',
                !isHexColor && bgColor, // Fallback to class if it's not a hex code
                textColor,
                className
            )}
        >
            {/* 1. The Content (Text) */}
            <h1 className="relative z-11 pl-2 group-hover:text-white transition-colors duration-500">
                {text}
            </h1>

            {/* 2. The Arrow Wrapper + Expanding Background */}
            <span
                className={cn(
                    'relative z-10 flex items-center justify-center p-1 transition-colors duration-500 group-hover:bg-transparent',
                    iconBgColor
                )}
            >
                <ArrowUpRight size={16} className="text-white" />

                {/* The "Magic" Background Scale */}
                <div
                    className={cn(
                        'absolute inset-0 -z-10 scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[40]',
                        hoverBgColor
                    )}
                />

                {/* Secondary Layer (Black reset) */}
                <div className="absolute inset-0 bg-black scale-0 p-1 -z-10 transition-all duration-300 ease-in-out group-hover:scale-100" />
            </span>
        </button>
    );
};
