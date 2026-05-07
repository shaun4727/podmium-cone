import { Navbar } from '@/components/layout/navbar';
import { ViewportProvider } from '@/provider/viewport-context';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Montserrat, Roboto } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});
const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Inspired Sports',
    description: 'A cloned website',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${roboto.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <ViewportProvider>
                    <Navbar />
                    {children}
                </ViewportProvider>
            </body>
        </html>
    );
}
