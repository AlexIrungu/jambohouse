import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white shadow-md' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <img 
                            src="https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/10/cropped-Asset-7-1.png" 
                            alt="Jambo Travel House Holidays Logo" 
                            className={`h-10 w-auto mr-3 transition-all duration-300 ${
                                isScrolled ? 'opacity-100' : 'opacity-90'
                            }`}
                        />
                        <span className={`text-xl font-bold transition-all duration-300 ${
                            isScrolled ? 'text-blue-900' : 'text-black'
                        }`}>
                            Jambo Travel House
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className={`transition-colors duration-300 ${
                            isScrolled 
                                ? 'text-gray-700 hover:text-blue-600' 
                                : 'text-black hover:text-blue-200'
                        } px-3 py-2 rounded-md`}>
                            Home
                        </Link>
                        <Link to="/about" className={`transition-colors duration-300 ${
                            isScrolled 
                                ? 'text-gray-700 hover:text-blue-600' 
                                : 'text-black hover:text-blue-200'
                        } px-3 py-2 rounded-md`}>
                            About
                        </Link>
                        
                        {/* Safaris Dropdown */}
                        <div className="relative group">
                            <Link 
                                to="/safaris" 
                                className={`transition-colors duration-300 flex items-center ${
                                    isScrolled 
                                        ? 'text-gray-700 hover:text-blue-600' 
                                        : 'text-black hover:text-blue-200'
                                } px-3 py-2 rounded-md`}
                            >
                                Safaris
                                <svg 
                                    className={`w-4 h-4 ml-1 transition-colors duration-300 ${
                                        isScrolled ? 'text-gray-700' : 'text-white'
                                    }`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M19 9l-7 7-7-7" 
                                    />
                                </svg>
                            </Link>
                            
                            <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-md mt-2 py-1 w-48">
                                <Link 
                                    to="/safaris/kenya" 
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Kenya Safaris
                                </Link>
                                <Link 
                                    to="/safaris/tanzania" 
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Tanzania Safaris
                                </Link>
                                <Link 
                                    to="/safaris/rwanda" 
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Rwanda Safaris
                                </Link>
                            </div>
                        </div>

                        {/* Other Menu Items */}
                        {['Pricelist', 'Car Hire', 'Hotel Booking', 'Enquire', 'Blog'].map((item) => (
                            <Link 
                                key={item} 
                                to={`/${item.toLowerCase().replace(' ', '-')}`} 
                                className={`transition-colors duration-300 ${
                                    isScrolled 
                                        ? 'text-gray-700 hover:text-blue-600' 
                                        : 'text-black hover:text-blue-200'
                                } px-3 py-2 rounded-md`}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button 
                            onClick={toggleMobileMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                                isScrolled 
                                    ? 'text-gray-400 hover:text-blue-600 hover:bg-gray-100' 
                                    : 'text-white hover:bg-black/20'
                            } focus:outline-none`}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!mobileMenu ? (
                                <svg 
                                    className="block h-6 w-6" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M4 6h16M4 12h16M4 18h16" 
                                    />
                                </svg>
                            ) : (
                                <svg 
                                    className="block h-6 w-6" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['Home', 'About', 'Safaris', 'Pricelist', 'Car Hire', 'Hotel Booking', 'Enquire', 'Blog'].map((item) => (
                            <Link 
                                key={item} 
                                to={`/${item.toLowerCase().replace(' ', '-')}`} 
                                className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;