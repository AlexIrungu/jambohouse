import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import KenyaSafaris from './KenyaSafari';
import TanzaniaSafaris from './TanzaniaSafari';
import RwandaSafaris from './RwandaSafari';

const Safaris = () => {
  const [activeDestination, setActiveDestination] = useState('kenya');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [expandedPackage, setExpandedPackage] = useState(null);

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
      signature: 'The Great Migration',
      packages: [
        { 
          title: "Masai Mara Discovery", 
          duration: "5 days", 
          price: "$2,400",
          image: "/images/masai-mara.jpg",
          description: "Experience the world-famous Masai Mara with its abundant wildlife and breathtaking landscapes."
        },
        { 
          title: "Kenya Highlights Safari", 
          duration: "8 days", 
          price: "$3,600",
          image: "/images/kenya-highlights.jpg",
          description: "Visit Kenya's most iconic parks including Amboseli with views of Mt. Kilimanjaro."
        },
        { 
          title: "Kenya & Beach Getaway", 
          duration: "10 days", 
          price: "$4,200",
          image: "/images/kenya-beach.jpg",
          description: "Combine wildlife safari adventures with relaxing beach time on Kenya's beautiful coast."
        }
      ]
    },
    {
      id: 'tanzania',
      name: 'Tanzania',
      description: 'Serengeti, Ngorongoro, and unparalleled wildlife experiences',
      backgroundImage: '/images/tanzania-safari-bg.jpg',
      flagIcon: '🇹🇿',
      highlights: ['Serengeti', 'Ngorongoro Crater', 'Mount Kilimanjaro', 'Zanzibar'],
      bestTime: 'July to October',
      signature: 'Ngorongoro Crater',
      packages: [
        { 
          title: "Serengeti Migration Safari", 
          duration: "6 days", 
          price: "$2,800",
          image: "/images/serengeti.jpg",
          description: "Follow the great wildebeest migration across the endless plains of the Serengeti."
        },
        { 
          title: "Tanzania Northern Circuit", 
          duration: "9 days", 
          price: "$3,900",
          image: "/images/northern-circuit.jpg",
          description: "Experience the Serengeti, Ngorongoro Crater, Lake Manyara and Tarangire."
        },
        { 
          title: "Kilimanjaro & Safari Adventure", 
          duration: "12 days", 
          price: "$5,100",
          image: "/images/kilimanjaro.jpg",
          description: "Climb Africa's highest peak and then relax with wildlife viewing in Tanzania's best parks."
        }
      ]
    },
    {
      id: 'rwanda',
      name: 'Rwanda',
      description: 'Mountain gorillas, lush landscapes, and unique wildlife encounters',
      backgroundImage: '/images/rwanda-safari-bg.jpg',
      flagIcon: '🇷🇼',
      highlights: ['Volcanoes National Park', 'Nyungwe Forest', 'Akagera', 'Lake Kivu'],
      bestTime: 'June to September',
      signature: 'Mountain Gorilla Trekking',
      packages: [
        { 
          title: "Gorilla Trekking Experience", 
          duration: "4 days", 
          price: "$3,900",
          image: "/images/gorilla-trek.jpg",
          description: "Trek through misty forests to encounter magnificent mountain gorillas in their natural habitat."
        },
        { 
          title: "Rwanda Complete", 
          duration: "8 days", 
          price: "$4,800",
          image: "/images/rwanda-complete.jpg",
          description: "Explore Rwanda's three national parks: Volcanoes, Nyungwe Forest and Akagera."
        },
        { 
          title: "Rwanda & Uganda Primate Safari", 
          duration: "10 days", 
          price: "$5,300",
          image: "/images/rwanda-uganda.jpg",
          description: "The ultimate primate adventure across Rwanda and Uganda's diverse ecosystems."
        }
      ]
    }
  ];

  const togglePackageDetails = (index) => {
    if (expandedPackage === index) {
      setExpandedPackage(null);
    } else {
      setExpandedPackage(index);
    }
  };

  const currentDestination = destinations.find(d => d.id === activeDestination);

  return (
    <div className="min-h-screen bg-eggshell font-sans">
      {/* Hero Section with Parallax Effect */}
      <div 
        className="relative h-screen bg-cover bg-fixed bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${currentDestination.backgroundImage})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cafe-noir opacity-60"></div>
        <div className="text-center text-white z-10 px-4 mt-16">
          <div className="animate-fadeIn">
            <span className="inline-block text-lg bg-hunyadi-yellow text-cafe-noir px-4 py-1 rounded-full mb-4 font-medium">
              Experience East Africa
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              {currentDestination.flagIcon}{' '}
              {currentDestination.name} <span className="text-princeton-orange">Safaris</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md font-light">
              {currentDestination.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button className="bg-moss-green hover:bg-asparagus text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center">
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
        <div className="fixed inset-0 bg-cafe-noir/80 z-40 flex items-center justify-center p-4" onClick={() => setShowInfo(false)}>
          <div className="bg-cornsilk rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${currentDestination.backgroundImage})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-noir/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <span className="text-sm bg-hunyadi-yellow text-cafe-noir px-3 py-1 rounded-full mb-2 inline-block font-medium">
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
                  <h3 className="font-medium text-cafe-noir mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {currentDestination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <MapPin className="w-4 h-4 text-moss-green mr-2" />
                        <span className="text-cafe-noir">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-princeton-orange mr-2" />
                    <span className="text-cafe-noir"><span className="font-medium">Best Time to Visit:</span> {currentDestination.bestTime}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-princeton-orange mr-2" />
                    <span className="text-cafe-noir"><span className="font-medium">Signature Experience:</span> {currentDestination.signature}</span>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-moss-green hover:bg-asparagus text-white py-3 rounded-lg font-medium transition-all duration-300">
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
      <div className="container mx-auto px-4 py-16 -mt-16 relative z-10">
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-alice-blue rounded-xl shadow-lg">
            {destinations.map((destination) => (
              <button
                key={destination.id}
                onClick={() => setActiveDestination(destination.id)}
                className={`
                  px-8 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2
                  ${activeDestination === destination.id 
                    ? 'bg-moss-green text-white shadow-md' 
                    : 'bg-transparent text-cafe-noir hover:bg-cornsilk'}
                `}
              >
                <span className="text-xl">{destination.flagIcon}</span>
                <span className="font-medium">{destination.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Safari Packages */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-cafe-noir">Featured {currentDestination.name} Safaris</h2>
            <div className="w-24 h-1 bg-hunyadi-yellow mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentDestination.packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-52 bg-gray-200 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-all duration-700"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cafe-noir/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-hunyadi-yellow text-cafe-noir text-sm px-3 py-1 rounded-full font-medium">
                      {pkg.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cafe-noir mb-2">{pkg.title}</h3>
                  <p className="text-cafe-noir/80 mb-4 line-clamp-2">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-hunyadi-yellow font-bold text-xl">{pkg.price}</span>
                    <button 
                      onClick={() => togglePackageDetails(index)}
                      className="text-moss-green hover:text-asparagus font-medium flex items-center transition-all duration-300"
                    >
                      {expandedPackage === index ? "Less Details" : "More Details"}
                      <ChevronDown className={`w-5 h-5 ml-1 transition-transform ${expandedPackage === index ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  
                  {expandedPackage === index && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-cafe-noir/80 mb-4">{pkg.description}</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <MapPin className="w-4 h-4 text-moss-green mr-2 mt-1" />
                          <span className="text-cafe-noir/80">Visit {currentDestination.highlights.slice(0, 2).join(' and ')} with expert guides</span>
                        </li>
                        <li className="flex items-start">
                          <MapPin className="w-4 h-4 text-moss-green mr-2 mt-1" />
                          <span className="text-cafe-noir/80">All-inclusive luxury accommodations and transport</span>
                        </li>
                      </ul>
                      <button className="w-full bg-moss-green hover:bg-asparagus text-white py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                        View Full Itinerary <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="inline-flex items-center px-6 py-3 bg-hunyadi-yellow hover:bg-princeton-orange text-cafe-noir font-medium rounded-lg transition-all duration-300">
              Explore All {currentDestination.name} Safaris <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Safari Map */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-cafe-noir text-white p-6">
            <h2 className="text-2xl font-bold">Discover {currentDestination.name}'s Safari Regions</h2>
            <p className="text-white/80">Explore the diverse areas that make {currentDestination.name} a premier safari destination</p>
          </div>
          <div className="p-6">
            <div className="aspect-video bg-french-gray rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-moss-green mx-auto mb-4" />
                <p className="text-cafe-noir font-medium mb-2">Interactive Map Would Display Here</p>
                <p className="text-cafe-noir/70 max-w-md mx-auto">
                  Explore {currentDestination.name}'s national parks, reserves, and key wildlife viewing areas with our interactive map.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {currentDestination.highlights.map((highlight, index) => (
                <div key={index} className="bg-cornsilk rounded-lg p-4 hover:bg-mindaro transition-colors duration-300 cursor-pointer">
                  <h3 className="font-medium text-cafe-noir">{highlight}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-cafe-noir/70">Popular destination</span>
                    <ArrowRight className="w-4 h-4 text-moss-green" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-cafe-noir to-brown-sugar text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Dream African Safari</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
            Our safari specialists are ready to create a tailor-made experience just for you. Start your adventure today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-hunyadi-yellow text-cafe-noir px-8 py-4 rounded-lg text-lg font-medium hover:bg-princeton-orange transition shadow-lg">
              Request Custom Itinerary
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition">
              View Sample Itineraries
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-cafe-noir text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">African<span className="text-hunyadi-yellow">Safaris</span></h3>
              <p className="text-white/70">Crafting unforgettable safari experiences across East Africa since 2010.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Destinations</h4>
              <ul className="space-y-2 text-white/70">
                {destinations.map(dest => (
                  <li key={dest.id} className="hover:text-hunyadi-yellow transition cursor-pointer">
                    {dest.flagIcon} {dest.name}
                  </li>
                ))}
                <li className="hover:text-hunyadi-yellow transition cursor-pointer">🇺🇬 Uganda</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li className="hover:text-hunyadi-yellow transition cursor-pointer">About Us</li>
                <li className="hover:text-hunyadi-yellow transition cursor-pointer">Safari Types</li>
                <li className="hover:text-hunyadi-yellow transition cursor-pointer">Sustainability</li>
                <li className="hover:text-hunyadi-yellow transition cursor-pointer">Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-white/70 mb-4">Subscribe for safari inspiration and exclusive offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg flex-grow bg-cafe-noir/40 border border-brown-sugar text-white focus:outline-none focus:ring-1 focus:ring-hunyadi-yellow"
                />
                <button className="bg-hunyadi-yellow text-cafe-noir px-4 py-2 rounded-r-lg hover:bg-princeton-orange transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-brown-sugar mt-8 pt-8 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} AfricanSafaris. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Safaris;