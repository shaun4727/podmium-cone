const HeroSection = () => {
    return (
        <div className="min-h-screen w-full relative">
            <video autoPlay muted playsInline loop className="h-full w-full object-cover">
                <source src="/videos/hero-1.mp4" />
            </video>

            <div>
                <nav className="navigation-bar">
                    <ul>
                        <li>Home</li>
                        <li>Programs</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HeroSection;
