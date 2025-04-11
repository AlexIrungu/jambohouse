import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();
    
    // Check if we're on the homepage
    const isHomePage = location.pathname === '/';
    
    // Detect active route for highlighting current page
    const isActive = (path) => {
        return location.pathname === path;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenu(false);
    }, [location]);

    // Handle keyboard accessibility for dropdown
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setMobileMenu(!mobileMenu);
        }
    };

    // Dynamic nav link styling based on scroll state, active status, and page
    const getLinkStyles = (path) => {
        const baseStyles = "px-3 py-2 rounded-md transition-all duration-300 font-medium";
        
        // On homepage with transparent navbar
        if (isHomePage && !isScrolled) {
            return `${baseStyles} ${isActive(path) 
                ? "text-hunyadi-yellow font-semibold" 
                : "text-eggshell hover:text-hunyadi-yellow"}`;
        }
        
        // On all other pages or when scrolled
        return `${baseStyles} ${isActive(path) 
            ? "text-hunyadi-yellow font-semibold" 
            : "text-cafe-noir hover:text-hunyadi-yellow"}`;
    };

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-eggshell/95 shadow-lg backdrop-blur-sm' 
                    : isHomePage 
                        ? 'bg-transparent' 
                        : 'bg-eggshell/95'
            }`}
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Section */}
                    <Link 
                        to="/" 
                        className="flex items-center group transition-all duration-300"
                        aria-label="Jambo Travel House - Home"
                    >
                        <img 
                            src="/logo.png" 
                            alt="" 
                            className={`h-10 w-auto mr-3 transition-all duration-300 ${
                                isScrolled ? 'opacity-100' : 'opacity-90'
                            } group-hover:scale-105`}
                            loading="eager"
                        />
                        <span className={`text-xl font-bold transition-all duration-300 ${
                            isScrolled || !isHomePage ? 'text-cafe-noir' : 'text-eggshell'
                        } group-hover:text-hunyadi-yellow`}>
                            Jambo Travel House
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/" className={getLinkStyles('/')}>
                            Home
                        </Link>
                        <Link to="/about" className={getLinkStyles('/about')}>
                            About
                        </Link>
                        
                        {/* Safaris Dropdown */}
                        <div className="relative group">
                            <Link to='/safaris'>
                            <button 
                                className={`${getLinkStyles('/safaris')} flex items-center focus:outline-none focus:ring-2 focus:ring-moss-green focus:ring-opacity-50`}
                                aria-expanded={mobileMenu}
                                aria-haspopup="true"
                            >
                                Safaris
                                <svg 
                                    className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M19 9l-7 7-7-7" 
                                    />
                                </svg>
                            </button>
                            </Link>
                           
                            
                            <div className="absolute hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 bg-eggshell shadow-xl rounded-md mt-1 py-2 w-52 border border-moss-green/20">
                                {['Kenya', 'Tanzania', 'Rwanda'].map((country) => (
                                    <Link 
                                        key={country}
                                        to={`/safaris/${country.toLowerCase()}`} 
                                        className={`block px-4 py-2 hover:bg-mindaro/30 hover:text-hunyadi-yellow transition-colors duration-150 ${
                                            isActive(`/safaris/${country.toLowerCase()}`) ? 'text-hunyadi-yellow bg-mindaro/20 font-medium' : 'text-cafe-noir'
                                        }`}
                                    >
                                        {country} Safaris
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Other Menu Items */}
                        {[
                            { name: 'Pricelist', path: '/pricelist' },
                            { name: 'Car Hire', path: '/car-hire' },
                            { name: 'Hotel Booking', path: '/hotel-booking' },
                            { name: 'Enquire', path: '/enquire' },
                            { name: 'Blog', path: '/blog' }
                        ].map((item) => (
                            <Link 
                                key={item.name} 
                                to={item.path} 
                                className={getLinkStyles(item.path)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Contact Button - New Addition */}
                    <div className="hidden md:block">
                        <Link 
                            to="/contact" 
                            className={`rounded-full px-4 py-2 font-medium transition-all duration-300 ${
                                isScrolled || !isHomePage
                                    ? 'bg-moss-green text-eggshell hover:bg-asparagus hover:shadow-md'
                                    : 'bg-hunyadi-yellow text-cafe-noir hover:bg-princeton-orange'
                            }`}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setMobileMenu(!mobileMenu)}
                            onKeyDown={handleKeyDown}
                            className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                                isScrolled || !isHomePage
                                    ? 'text-cafe-noir hover:text-hunyadi-yellow hover:bg-mindaro/30' 
                                    : 'text-eggshell hover:bg-black/30'
                            } focus:outline-none focus:ring-2 focus:ring-moss-green`}
                            aria-expanded={mobileMenu}
                            aria-controls="mobile-menu"
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">
                                {mobileMenu ? 'Close menu' : 'Open menu'}
                            </span>
                            {!mobileMenu ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Smooth Animation */}
            <div 
                id="mobile-menu"
                className={`md:hidden transform transition-all duration-300 ease-in-out ${
                    mobileMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                } origin-top absolute left-0 right-0 bg-eggshell shadow-lg`}
            >
                <div className="px-4 pt-2 pb-4 space-y-1 divide-y divide-moss-green/20">
                    {['Home', 'About'].map((item) => (
                        <Link 
                            key={item} 
                            to={`/${item === 'Home' ? '' : item.toLowerCase()}`} 
                            className={`block px-3 py-3 rounded-md transition-colors duration-150 ${
                                isActive(`/${item === 'Home' ? '' : item.toLowerCase()}`) 
                                    ? 'text-hunyadi-yellow font-medium bg-mindaro/20' 
                                    : 'text-cafe-noir hover:bg-mindaro/20 hover:text-hunyadi-yellow'
                            }`}
                        >
                            {item}
                        </Link>
                    ))}
                    
                    {/* Mobile Safaris Dropdown */}
                    <div className="py-2">
                        <div className="px-3 py-2 text-cafe-noir font-medium">Safaris</div>
                        <div className="pl-6 space-y-1">
                            {['Kenya', 'Tanzania', 'Rwanda'].map((country) => (
                                <Link 
                                    key={country}
                                    to={`/safaris/${country.toLowerCase()}`} 
                                    className={`block px-3 py-2 rounded-md ${
                                        isActive(`/safaris/${country.toLowerCase()}`) 
                                            ? 'text-hunyadi-yellow bg-mindaro/20' 
                                            : 'text-cafe-noir hover:bg-mindaro/20 hover:text-hunyadi-yellow'
                                    }`}
                                >
                                    {country} Safaris
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    {/* Other Mobile Menu Items */}
                    {[
                        { name: 'Pricelist', path: '/pricelist' },
                        { name: 'Car Hire', path: '/car-hire' },
                        { name: 'Hotel Booking', path: '/hotel-booking' },
                        { name: 'Enquire', path: '/enquire' },
                        { name: 'Blog', path: '/blog' }
                    ].map((item) => (
                        <Link 
                            key={item.name}
                            to={item.path}
                            className={`block px-3 py-3 rounded-md transition-colors duration-150 ${
                                isActive(item.path) 
                                    ? 'text-hunyadi-yellow font-medium bg-mindaro/20' 
                                    : 'text-cafe-noir hover:bg-mindaro/20 hover:text-hunyadi-yellow'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    
                    {/* Mobile Contact Button - Center Aligned */}
                    <div className="pt-4 pb-2">
                        <Link 
                            to="/contact" 
                            className="block w-full text-center rounded-full px-4 py-3 bg-hunyadi-yellow text-cafe-noir font-medium hover:bg-princeton-orange transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;