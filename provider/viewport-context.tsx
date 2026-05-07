// context/viewport-context.tsx
'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Define the shape of our context
interface ViewportContextType {
    isMobile: boolean;
    width: number;
}

const ViewportContext = createContext<ViewportContextType | undefined>(undefined);

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
    const [width, setWidth] = useState<number>(0); // Initialize with 0 for SSR safety

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => setWidth(window.innerWidth);

        // Set initial width
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Define your mobile breakpoint (e.g., 768px matches Tailwind's 'md')
    const isMobile = width > 0 && width < 768;

    return (
        <ViewportContext.Provider value={{ isMobile, width }}>{children}</ViewportContext.Provider>
    );
};

// The global hook
export const useIsMobile = (): boolean => {
    const context = useContext(ViewportContext);
    if (context === undefined) {
        throw new Error('useIsMobile must be used within a ViewportProvider');
    }
    return context.isMobile;
};
