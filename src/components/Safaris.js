import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Users, MapPin, Star, Clock, Shield } from 'lucide-react';
import KenyaSafaris from './KenyaSafari';
import TanzaniaSafaris from './TanzaniaSafari';
import RwandaSafaris from './RwandaSafari';

const Safaris = () => {
  const [activeDestination, setActiveDestination] = useState('kenya');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    {
      id: 'kenya',
      name: 'Kenya',
      description: 'Home of the Great Wildebeest Migration and iconic national parks',
      backgroundImage: '/images/kenya-safari-bg.jpg',
      flagIcon: '🇰🇪',
      highlights: ['Maasai Mara', 'Amboseli', 'Lake Nakuru', 'Tsavo'],
      bestTime: 'June to October',
      signature: 'The Great Migration'
    },
    {
      id: 'tanzania',
      name: 'Tanzania',
      description: 'Serengeti, Ngorongoro, and unparalleled wildlife experiences',
      backgroundImage: '/images/tanzania-safari-bg.jpg',
      flagIcon: '🇹🇿',
      highlights: ['Serengeti', 'Ngorongoro Crater', 'Mount Kilimanjaro', 'Zanzibar'],
      bestTime: 'July to October',
      signature: 'Ngorongoro Crater'
    },
    {
      id: 'rwanda',
      name: 'Rwanda',
      description: 'Mountain gorillas, lush landscapes, and unique wildlife encounters',
      backgroundImage: '/images/rwanda-safari-bg.jpg',
      flagIcon: '🇷🇼',
      highlights: ['Volcanoes National Park', 'Nyungwe Forest', 'Akagera', 'Lake Kivu'],
      bestTime: 'June to September',
      signature: 'Mountain Gorilla Trekking'
    }
  ];

  const renderDestinationComponent = () => {
    switch(activeDestination) {
      case 'kenya':
        return <KenyaSafaris />;
      case 'tanzania':
        return <TanzaniaSafaris />;
      case 'rwanda':
        return <RwandaSafaris />;
      default:
        return <KenyaSafaris />;
    }
  };

  const currentDestination = destinations.find(d => d.id === activeDestination);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Sticky Header */}
      {/* <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-700">
                African<span className="text-amber-600">Safaris</span>
              </span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {destinations.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => setActiveDestination(dest.id)}
                  className={`
                    px-3 py-1 rounded-md transition-all duration-300 flex items-center space-x-1 text-sm
                    ${activeDestination === dest.id 
                      ? 'bg-green-600 text-white' 
                      : 'text-green-800 hover:bg-green-50'}
                  `}
                >
                  <span>{dest.flagIcon}</span>
                  <span>{dest.name}</span>
                </button>
              ))}
            </div>
            
            <div>
              <button className={`${isScrolled ? 'bg-green-600' : 'bg-white'} 
                px-4 py-2 rounded-lg text-sm font-medium
                ${isScrolled ? 'text-white' : 'text-green-700'} 
                shadow-md hover:shadow-lg transition duration-300`}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section with Parallax Effect */}
      <div 
        className="relative h-screen bg-cover bg-fixed bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${currentDestination.backgroundImage})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.4)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="text-center text-white z-10 px-4 mt-16">
          <div className="animate-fadeIn">
            <span className="inline-block text-lg bg-green-600 px-4 py-1 rounded-full mb-4">
              Experience East Africa
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              {currentDestination.flagIcon}{' '}
              {currentDestination.name} <span className="text-amber-400">Safaris</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md font-light">
              {currentDestination.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Plan Your Trip
              </button>
              <button 
                onClick={() => setShowInfo(!showInfo)}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/40 px-8 py-3 rounded-lg text-lg transition-all duration-300 flex items-center"
              >
                Learn More <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center items-start p-1">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Destination Quick Info Overlay */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-4" onClick={() => setShowInfo(false)}>
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${currentDestination.backgroundImage})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <span className="text-sm bg-green-600 text-white px-3 py-1 rounded-full mb-2 inline-block">
                  Featured Destination
                </span>
                <h2 className="text-3xl font-bold text-white">
                  {currentDestination.flagIcon} {currentDestination.name} Safari Experience
                </h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {currentDestination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <MapPin className="w-4 h-4 text-green-600 mr-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-amber-600 mr-2" />
                    <span><span className="font-medium">Best Time to Visit:</span> {currentDestination.bestTime}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-amber-600 mr-2" />
                    <span><span className="font-medium">Signature Experience:</span> {currentDestination.signature}</span>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-all duration-300">
                      Explore Safari Packages
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Destination Selector Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-xl">
            {destinations.map((destination) => (
              <button
                key={destination.id}
                onClick={() => setActiveDestination(destination.id)}
                className={`
                  px-8 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2
                  ${activeDestination === destination.id 
                    ? 'bg-green-600 text-white shadow-md' 
                    : 'bg-transparent text-gray-700 hover:bg-green-50'}
                `}
              >
                <span className="text-xl">{destination.flagIcon}</span>
                <span className="font-medium">{destination.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Safari Packages */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          <div className="bg-green-700 text-white p-6">
            <h2 className="text-2xl font-bold">Available {currentDestination.name} Safaris</h2>
            <p className="text-green-100">Curated experiences for unforgettable adventures</p>
          </div>
          <div className="p-6">
            {renderDestinationComponent()}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Safari Experiences</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional wildlife encounters with comfort, safety, and sustainability at the core of everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-green-600" />,
                title: "Small Group Sizes",
                description: "Intimate safari experiences with no more than 6 guests per vehicle for optimal viewing"
              },
              {
                icon: <Shield className="w-10 h-10 text-green-600" />,
                title: "Safety First",
                description: "Experienced guides, well-maintained vehicles, and comprehensive safety protocols"
              },
              {
                icon: <Star className="w-10 h-10 text-green-600" />,
                title: "Premium Accommodations",
                description: "Hand-selected lodges and camps for comfort without compromising on authenticity"
              },
              {
                icon: <MapPin className="w-10 h-10 text-green-600" />,
                title: "Local Expertise",
                description: "Guides with deep knowledge of wildlife, culture, and the best viewing spots"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-medium">Traveler Stories</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">What Our Guests Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The safari exceeded all our expectations. The guides were knowledgeable and we saw all the Big Five!",
                author: "Sarah Johnson",
                location: "Kenya Safari",
                avatar: "/images/avatar-1.jpg"
              },
              {
                quote: "An unforgettable journey through the Serengeti. The wildebeest migration was truly a sight to behold.",
                author: "Michael Chen",
                location: "Tanzania Safari",
                avatar: "/images/avatar-2.jpg"
              },
              {
                quote: "The gorilla trekking experience in Rwanda was life-changing. Worth every penny and every minute.",
                author: "Emily Williams",
                location: "Rwanda Safari",
                avatar: "/images/avatar-3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4" style={{ backgroundImage: `url(${testimonial.avatar})`, backgroundSize: 'cover' }}></div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Dream African Safari</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
            Our safari specialists are ready to create a tailor-made experience just for you. Start your adventure today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-50 transition shadow-lg">
              Request Custom Itinerary
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition">
              View Sample Itineraries
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">African<span className="text-amber-500">Safaris</span></h3>
              <p className="text-gray-400">Crafting unforgettable safari experiences across East Africa since 2010.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                {destinations.map(dest => (
                  <li key={dest.id} className="hover:text-green-400 transition cursor-pointer">
                    {dest.flagIcon} {dest.name}
                  </li>
                ))}
                <li className="hover:text-green-400 transition cursor-pointer">🇺🇬 Uganda</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-green-400 transition cursor-pointer">About Us</li>
                <li className="hover:text-green-400 transition cursor-pointer">Safari Types</li>
                <li className="hover:text-green-400 transition cursor-pointer">Sustainability</li>
                <li className="hover:text-green-400 transition cursor-pointer">Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for safari inspiration and exclusive offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg flex-grow bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} AfricanSafaris. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Safaris;