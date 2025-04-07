import React from 'react';
import { 
  MdOutlineEmail, 
  MdOutlinePhone, 
  MdOutlineLocationOn 
} from 'react-icons/md';

// Import social media icons from react-icons
import { 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaTiktok, 
  FaWhatsapp 
} from 'react-icons/fa6';

const Footer = () => {
  // Social media links data
  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter size={16} />, href: '#' },
    { name: 'Facebook', icon: <FaFacebookF size={16} />, href: 'https://www.facebook.com/Jambo.travel.Safaris?_rdc=1&_rdr' },
    { name: 'Instagram', icon: <FaInstagram size={16} />, href: 'https://www.instagram.com/jambo_travelhouse/' },
    { name: 'LinkedIn', icon: <FaLinkedinIn size={16} />, href: '#' },
    { name: 'YouTube', icon: <FaYoutube size={16} />, href: '#' },
    { name: 'TikTok', icon: <FaTiktok size={16} />, href: '#' },
    { name: 'WhatsApp', icon: <FaWhatsapp size={16} />, href: '#' }
  ];

  return (
    <footer className="jambo-footer bg-[#004d40] text-white py-[60px] px-5">
      <div className="jambo-footer-container max-w-[1200px] mx-auto flex flex-wrap justify-between">
        {/* Left Column */}
        <div className="jambo-footer-column flex-1 min-w-[250px] mb-5 px-[25px]">
          <img 
            src="https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/10/cropped-Asset-7-1.png" 
            alt="Jambo Travel House Holidays Logo" 
            className="jambo-logo w-[130px] mb-[25px] block"
          />
          <div className="jambo-contact-info">
            <p className="flex items-center mb-3 text-sm">
              <MdOutlineEmail className="w-4 h-4 mr-3 text-[#8bc34a]" />
              safaris@jambotravelhouseholidays.com
            </p>
            <p className="flex items-center mb-3 text-sm">
              <MdOutlinePhone className="w-4 h-4 mr-3 text-[#8bc34a]" />
              +254 722 218 901
            </p>
            <p className="flex items-center mb-3 text-sm">
              <MdOutlineLocationOn className="w-4 h-4 mr-3 text-[#8bc34a]" />
              Karen, Nairobi Kenya
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="jambo-footer-column flex-1 min-w-[250px] mb-5 px-[25px]">
          <h3 className="text-white text-opacity-90 text-base uppercase tracking-wider mb-5 pb-3 relative">
            Our Partners
            <span className="absolute bottom-0 left-0 w-[30px] h-[2px] bg-[#8bc34a]"></span>
          </h3>
          <div className="jambo-partner-logos flex justify-center gap-5 flex-wrap mb-5">
            {/* Safari Booking logo with enhanced visibility */}
            <img 
              src="https://www.jambotravelhouseholidays.com/wp-content/uploads/2025/03/logo-240x35-1.png" 
              alt="Safari Booking" 
              className="h-[35px] object-contain p-[6px] rounded-md hover:scale-105 transition-transform"
            />
            <img 
              src="https://www.jambotravelhouseholidays.com/wp-content/uploads/2025/03/logo.png" 
              alt="Trip Crafters" 
              className="h-[35px] object-contain bg-white bg-opacity-95 p-[6px] rounded-md hover:scale-105 transition-transform"
            />
            <img 
              src="https://www.jambotravelhouseholidays.com/wp-content/uploads/2025/03/Tripadvisor_lockup_horizontal_secondary_registered-1.svg" 
              alt="TripAdvisor" 
              className="h-[35px] object-contain bg-white bg-opacity-95 p-[6px] rounded-md hover:scale-105 transition-transform"
            />
          </div>
          <div className="border-t border-white border-opacity-10 my-4"></div>
          <div className="text-center text-xs tracking-wider">
            <a 
              href="https://www.safaribookings.com/p5824" 
              className="text-[#8bc34a] mx-2 hover:underline"
            >
              VIEW US ON SAFARI BOOKING.COM
            </a> • 
            <a 
              href="https://www.safarigo.com/operator/jambo-travelhouse-holidays-limited--1761" 
              className="text-[#8bc34a] mx-2 hover:underline"
            >
              SAFARIGO
            </a> • 
            <a 
              href="https://www.tripadvisor.com/Attraction_Review-g294207-d18843478-Reviews-Jambo_Travelhouse_Holidays-Nairobi.html" 
              className="text-[#8bc34a] mx-2 hover:underline"
            >
              VIEW US ON TRIPADVISOR
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="jambo-footer-column flex-1 min-w-[250px] mb-5 px-[25px]">
          <div className="flex justify-end gap-8 mb-5">
            <a href="#" className="text-white text-opacity-85 text-sm hover:text-[#8bc34a]">FAQ</a>
            <a href="#" className="text-white text-opacity-85 text-sm hover:text-[#8bc34a]">Contact</a>
            <a href="#" className="text-white text-opacity-85 text-sm hover:text-[#8bc34a]">Terms</a>
          </div>
          
          <div className="mb-5">
            <h3 className="text-white text-opacity-90 text-base uppercase tracking-wider mb-4 pb-3 relative">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-[30px] h-[2px] bg-[#8bc34a]"></span>
            </h3>
            <div className="flex gap-4 justify-end">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  aria-label={`Follow us on ${social.name}`}
                  className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-[#8bc34a] hover:bg-opacity-70 hover:-translate-y-1 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-white border-opacity-10 my-4"></div>
          <div className="text-right text-sm text-white text-opacity-60">
            © 2025 Jambo Travel House Holidays. All rights reserved.<br />
            Developed by Alex Irungu
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;