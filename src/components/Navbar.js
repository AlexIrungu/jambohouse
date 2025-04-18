import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();
    
    // Treat all pages like homepage for styling
    const isHomePage = true; // This makes all pages use the homepage styling
    
    // Detect active route for highlighting current page
    const isActive = (path) => {
        if (path === '/') return location.pathname === path;
        return location.pathname.startsWith(path);
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

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-eggshell/95 shadow-lg backdrop-blur-sm' 
                    : 'bg-gradient-to-b from-cafe-noir/80 to-transparent'
            }`}
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo Section */}
                    <Link 
                        to="/" 
                        className="flex items-center group transition-all duration-300"
                        aria-label="Jambo Travel House - Home"
                    >
                        <div className="relative h-12 w-12 mr-3 overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                            {/* Replace with your actual logo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-hunyadi-yellow to-princeton-orange flex items-center justify-center">
                                <span className="text-2xl font-bold text-eggshell">J</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl font-bold tracking-tight transition-all duration-300 ${
                                isScrolled || !isHomePage ? 'text-cafe-noir' : 'text-eggshell'
                            } group-hover:text-hunyadi-yellow`}>
                                Jambo Travel
                            </span>
                            <span className={`text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                                isScrolled || !isHomePage ? 'text-moss-green' : 'text-cornsilk/90'
                            }`}>
                                Adventure Awaits
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink to="/" isActive={isActive} isHomePage={isHomePage} isScrolled={isScrolled}>
                            Home
                        </NavLink>
                        <NavLink to="/about" isActive={isActive} isHomePage={isHomePage} isScrolled={isScrolled}>
                            About
                        </NavLink>
                        
                        {/* Safaris Dropdown */}
                        <div className="relative group">
                            <Link 
                                to="/safaris"
                                className={`px-3 py-2 rounded-md transition-all duration-300 font-medium flex items-center ${
                                    isActive('/safaris')
                                    ? `text-hunyadi-yellow font-semibold ${isHomePage && !isScrolled ? 'bg-cafe-noir/30' : 'bg-mindaro/20'}`
                                    : isHomePage && !isScrolled
                                        ? 'text-eggshell hover:text-hunyadi-yellow hover:bg-cafe-noir/30'
                                        : 'text-cafe-noir hover:text-hunyadi-yellow hover:bg-mindaro/20'
                                }`}
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
                            </Link>
                            
                            <div className="absolute hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 bg-eggshell shadow-xl rounded-md mt-1 py-2 w-56 border-t-2 border-t-hunyadi-yellow">
                                {[
                                    { name: 'All Safaris', path: '/safaris' },
                                    { name: 'Kenya Safaris', path: '/safaris/kenya' },
                                    { name: 'Tanzania Safaris', path: '/safaris/tanzania' },
                                    { name: 'Rwanda Safaris', path: '/safaris/rwanda' }
                                ].map((item) => (
                                    <Link 
                                        key={item.name}
                                        to={item.path} 
                                        className={`block px-4 py-2 hover:bg-mindaro/30 hover:text-hunyadi-yellow transition-colors duration-150 ${
                                            isActive(item.path) ? 'text-hunyadi-yellow bg-mindaro/20 font-medium' : 'text-cafe-noir'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Destinations Dropdown */}
                        <div className="relative group">
                            <Link 
                                to="/destinations"
                                className={`px-3 py-2 rounded-md transition-all duration-300 font-medium flex items-center ${
                                    isActive('/destinations')
                                    ? `text-hunyadi-yellow font-semibold ${isHomePage && !isScrolled ? 'bg-cafe-noir/30' : 'bg-mindaro/20'}`
                                    : isHomePage && !isScrolled
                                        ? 'text-eggshell hover:text-hunyadi-yellow hover:bg-cafe-noir/30'
                                        : 'text-cafe-noir hover:text-hunyadi-yellow hover:bg-mindaro/20'
                                }`}
                                aria-haspopup="true"
                            >
                                Destinations
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
                            </Link>
                            
                            <div className="absolute hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 bg-eggshell shadow-xl rounded-md mt-1 py-2 w-56 border-t-2 border-t-hunyadi-yellow">
                                <Link 
                                    to="/destinations" 
                                    className={`block px-4 py-2 hover:bg-mindaro/30 hover:text-hunyadi-yellow transition-colors duration-150 ${
                                        location.pathname === '/destinations' ? 'text-hunyadi-yellow bg-mindaro/20 font-medium' : 'text-cafe-noir'
                                    }`}
                                >
                                    All Destinations
                                </Link>
                                <Link 
                                    to="/safaari" 
                                    className={`block px-4 py-2 hover:bg-mindaro/30 hover:text-hunyadi-yellow transition-colors duration-150 ${
                                        location.pathname === '/safaari' ? 'text-hunyadi-yellow bg-mindaro/20 font-medium' : 'text-cafe-noir'
                                    }`}
                                >
                                    Safari Tours
                                </Link>
                            </div>
                        </div>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button 
                                className={`px-3 py-2 rounded-md transition-all duration-300 font-medium flex items-center ${
                                    (isActive('/car-hire') || isActive('/hotel-booking') || isActive('/pricelist'))
                                    ? `text-hunyadi-yellow font-semibold ${isHomePage && !isScrolled ? 'bg-cafe-noir/30' : 'bg-mindaro/20'}`
                                    : isHomePage && !isScrolled
                                        ? 'text-eggshell hover:text-hunyadi-yellow hover:bg-cafe-noir/30'
                                        : 'text-cafe-noir hover:text-hunyadi-yellow hover:bg-mindaro/20'
                                }`}
                                aria-haspopup="true"
                            >
                                Services
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
                            
                            <div className="absolute hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 bg-eggshell shadow-xl rounded-md mt-1 py-2 w-56 border-t-2 border-t-hunyadi-yellow">
                                {[
                                    { name: 'Car Hire', path: '/car-hire' },
                                    { name: 'Hotel Booking', path: '/hotel-booking' },
                                    { name: 'Pricelist', path: '/pricelist' }
                                ].map((item) => (
                                    <Link 
                                        key={item.name}
                                        to={item.path} 
                                        className={`block px-4 py-2 hover:bg-mindaro/30 hover:text-hunyadi-yellow transition-colors duration-150 ${
                                            isActive(item.path) ? 'text-hunyadi-yellow bg-mindaro/20 font-medium' : 'text-cafe-noir'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <NavLink to="/blog" isActive={isActive} isHomePage={isHomePage} isScrolled={isScrolled}>
                            Blog
                        </NavLink>
                        
                        <NavLink to="/enquire" isActive={isActive} isHomePage={isHomePage} isScrolled={isScrolled}>
                            Enquire
                        </NavLink>
                    </div>

                    {/* Contact Button */}
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLink to="/faq" isActive={isActive} isHomePage={isHomePage} isScrolled={isScrolled}>
                            FAQ
                        </NavLink>
                        
                        <Link 
                            to="/contact" 
                            className={`rounded-full px-5 py-2 font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center ${
                                isScrolled || !isHomePage
                                    ? 'bg-moss-green text-eggshell hover:bg-asparagus'
                                    : 'bg-hunyadi-yellow text-cafe-noir hover:bg-princeton-orange'
                            }`}
                        >
                            <svg 
                                className="w-4 h-4 mr-2" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
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
                                    : 'text-eggshell hover:bg-cafe-noir/30'
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

            {/* Mobile Menu */}
            <div 
                id="mobile-menu"
                className={`md:hidden transform transition-all duration-300 ease-in-out ${
                    mobileMenu ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                } absolute left-0 right-0 top-20 bg-eggshell shadow-lg max-h-[80vh] overflow-y-auto`}
            >
                <div className="px-4 pt-2 pb-4 space-y-1">
                    <div className="grid grid-cols-1 gap-y-2 py-2">
                        <MobileNavLink to="/" isActive={isActive}>Home</MobileNavLink>
                        <MobileNavLink to="/about" isActive={isActive}>About</MobileNavLink>
                    </div>
                    
                    {/* Mobile Safari Section */}
                    <div className="py-3 border-t border-moss-green/20">
                        <div className="px-3 py-2 text-cafe-noir font-medium flex items-center">
                            <svg className="w-5 h-5 mr-2 text-hunyadi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                            Safaris
                        </div>
                        <div className="pl-6 space-y-1">
                            <MobileNavLink to="/safaris" isActive={isActive} exact>All Safaris</MobileNavLink>
                            <MobileNavLink to="/safaris/kenya" isActive={isActive}>Kenya</MobileNavLink>
                            <MobileNavLink to="/safaris/tanzania" isActive={isActive}>Tanzania</MobileNavLink>
                            <MobileNavLink to="/safaris/rwanda" isActive={isActive}>Rwanda</MobileNavLink>
                        </div>
                    </div>
                    
                    {/* Mobile Destinations Section */}
                    <div className="py-3 border-t border-moss-green/20">
                        <div className="px-3 py-2 text-cafe-noir font-medium flex items-center">
                            <svg className="w-5 h-5 mr-2 text-hunyadi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Destinations
                        </div>
                        <div className="pl-6 space-y-1">
                            <MobileNavLink to="/destinations" isActive={isActive} exact>All Destinations</MobileNavLink>
                            <MobileNavLink to="/safaari" isActive={isActive}>Safari Tours</MobileNavLink>
                        </div>
                    </div>
                    
                    {/* Mobile Services Section */}
                    <div className="py-3 border-t border-moss-green/20">
                        <div className="px-3 py-2 text-cafe-noir font-medium flex items-center">
                            <svg className="w-5 h-5 mr-2 text-hunyadi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Services
                        </div>
                        <div className="pl-6 space-y-1">
                            <MobileNavLink to="/car-hire" isActive={isActive}>Car Hire</MobileNavLink>
                            <MobileNavLink to="/hotel-booking" isActive={isActive}>Hotel Booking</MobileNavLink>
                            <MobileNavLink to="/pricelist" isActive={isActive}>Pricelist</MobileNavLink>
                        </div>
                    </div>
                    
                    {/* Other Mobile Menu Items */}
                    <div className="grid grid-cols-1 gap-y-2 py-2 border-t border-moss-green/20">
                        <MobileNavLink to="/blog" isActive={isActive}>Blog</MobileNavLink>
                        <MobileNavLink to="/enquire" isActive={isActive}>Enquire</MobileNavLink>
                        <MobileNavLink to="/faq" isActive={isActive}>FAQ</MobileNavLink>
                    </div>
                    
                    {/* Mobile Contact Button */}
                    <div className="pt-4 pb-2 border-t border-moss-green/20">
                        <Link 
                            to="/contact" 
                            className="flex items-center justify-center w-full text-center rounded-full px-4 py-3 bg-hunyadi-yellow text-cafe-noir font-medium hover:bg-princeton-orange transition-colors duration-300 shadow-md"
                        >
                            <svg 
                                className="w-5 h-5 mr-2" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Helper component for desktop nav links
const NavLink = ({ to, children, isActive, isHomePage, isScrolled }) => {
    return (
        <Link 
            to={to} 
            className={`px-3 py-2 rounded-md transition-all duration-300 font-medium ${
                isActive(to)
                ? `text-hunyadi-yellow font-semibold ${isHomePage && !isScrolled ? 'bg-cafe-noir/30' : 'bg-mindaro/20'}`
                : isHomePage && !isScrolled
                    ? 'text-eggshell hover:text-hunyadi-yellow hover:bg-cafe-noir/30'
                    : 'text-cafe-noir hover:text-hunyadi-yellow hover:bg-mindaro/20'
            }`}
        >
            {children}
        </Link>
    );
};

// Helper component for mobile nav links
const MobileNavLink = ({ to, children, isActive, exact = false }) => {
    const isActiveRoute = exact ? (path) => path === to : isActive;
    
    return (
        <Link 
            to={to}
            className={`block px-3 py-2 rounded-md transition-colors duration-150 ${
                isActiveRoute(to) 
                    ? 'text-hunyadi-yellow font-medium bg-mindaro/20 border-l-4 border-hunyadi-yellow pl-2' 
                    : 'text-cafe-noir hover:bg-mindaro/20 hover:text-hunyadi-yellow'
            }`}
        >
            {children}
        </Link>
    );
};

export default Navbar;