import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img 
                                src="https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/10/cropped-Asset-7-1.png" 
                                alt="Jambo Travel House Holidays Logo" 
                                className="h-10 w-auto mr-3"
                            />
                            <span className="text-xl font-bold text-blue-900">
                                Jambo Travel House
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">About</Link>
                        
                        {/* Safaris Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                        >
                            <Link 
                                to="/safaris" 
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md flex items-center"
                            >
                                Safaris
                                <svg 
                                    className="w-4 h-4 ml-1"
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
                            
                            {dropdown && (
                                <div className="absolute z-10 bg-white shadow-lg rounded-md mt-1 py-1 w-48">
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
                            )}
                        </div>

                        <Link to="/pricelist" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Pricelist</Link>
                        <Link to="/car-hire" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Car Hire</Link>
                        <Link to="/hotel-booking" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Hotel Booking</Link>
                        <Link to="/enquire" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Enquire</Link>
                        <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Blog</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button 
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none"
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
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                        <Link 
                            to="/" 
                            className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md"
                        >
                            About
                        </Link>
                        <Link 
                            to="/safaris" 
                            className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md"
                        >
                            Safaris
                        </Link>
                        <Link 
                            to="/pricelist" 
                            className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md"
                        >
                            Pricelist
                        </Link>
                        <Link 
                            to="/car-hire" 
                            className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md"
                        >
                            Car Hire
                        </Link>
                        <Link 
                            to="/hotel-booking" 
                            className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md"
                        >
                            Hotel Booking
                        </Link>
                        <Link 
                            to="/enquire" 
                            className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md"
                        >
                            Enquire
                        </Link>
                        <Link 
                            to="/blog" 
                            className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md"
                        >
                            Blog
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;