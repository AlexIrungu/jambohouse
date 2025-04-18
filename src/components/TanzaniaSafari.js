import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, X, MapPin, Star, Award, Clock, Users, ArrowRight, Filter, Sun, Cloud, Umbrella, Check } from 'lucide-react';
import safariPackages from './TanzaniaPackages.json';

// Placeholder images - using API placeholder for consistent display
const placeholderImages = {
  tanz: "/api/placeholder/1200/800",
  kilimanjaro: "/api/placeholder/1200/800",
  lake: "/api/placeholder/600/400",
  serengeti: "/api/placeholder/600/400",
  tarangire: "/api/placeholder/600/400",
  ngorongoro: "/api/placeholder/600/400", 
  hot: "/api/placeholder/600/400",
  serengetinp: "/api/placeholder/600/400",
  luzury: "/api/placeholder/600/400",
  grand: "/api/placeholder/600/400"
};

// Season data with icons and descriptions
const seasonData = [
  { 
    id: "Jan-Mar",
    name: "Peak Season (Jan-Mar)",
    icon: <Sun className="h-6 w-6 text-hunyadi-yellow" />,
    shortName: "Jan-Mar",
    description: "Excellent wildlife viewing with warm days and cool nights. Great time for the southern Serengeti wildebeest calving season.",
    conditions: ["Warm days (25-30°C)", "Cool nights (15-18°C)", "Mostly dry", "Excellent wildlife viewing"],
    bestFor: ["Wildebeest calving in Southern Serengeti", "Bird watching", "Photography", "Generally good game viewing"]
  },
  { 
    id: "Apr-Jun",
    name: "Green Season (Apr-Jun)",
    icon: <Cloud className="h-6 w-6 text-columbia-blue" />,
    shortName: "Apr-Jun",
    description: "Low season with occasional rain. Lower rates and fewer tourists. Lush green landscapes make for beautiful photography.",
    conditions: ["Warm days (22-28°C)", "Some rainfall", "Lush green landscapes", "Fewer tourists"],
    bestFor: ["Budget travelers", "Photography of landscapes", "Bird watching", "Authentic experiences away from crowds"]
  },
  { 
    id: "Jul-Oct",
    name: "Peak Dry Season (Jul-Oct)",
    icon: <Sun className="h-6 w-6 text-princeton-orange" />,
    shortName: "Jul-Oct",
    description: "Dry weather and excellent wildlife viewing. Ideal for witnessing river crossings in the northern Serengeti.",
    conditions: ["Warm days (25-30°C)", "Very little rainfall", "Excellent visibility", "High wildlife concentration around water sources"],
    bestFor: ["Migration river crossings", "General game viewing", "First-time safari goers", "Photography"]
  },
  { 
    id: "Nov-Dec",
    name: "Short Rains (Nov-Dec)",
    icon: <Umbrella className="h-6 w-6 text-moss-green" />,
    shortName: "Nov-Dec",
    description: "Short rains season. Good wildlife viewing with fewer tourists. Migration returns to southern Serengeti.",
    conditions: ["Warm days (24-29°C)", "Afternoon showers", "Fresh green landscapes", "Moderate tourist numbers"],
    bestFor: ["Migration returning south", "Newborn animals", "Bird watching", "Value travelers"]
  }
];

const allPackages = safariPackages.map(pkg => {
  // For packages that use "name" instead of "tourName"
  const name = pkg.name || pkg.tourName;
  
  // For packages that use "itinerary" with different structure
  const itinerary = pkg.itinerary.map(day => ({
    day: day.day,
    title: day.title || `${day.location} Activities`,
    description: day.description || day.activities?.join(', ') || '',
    location: day.location,
    accommodation: day.accommodation,
    activities: day.activities || [],
    meals: day.meals || day.board
  }));
  
  return {
    id: pkg.tourCode,
    name: name,
    duration: pkg.duration,
    type: pkg.type || "Classic", // Default type if not specified
    difficulty: "Moderate", // Default difficulty
    description: pkg.description || `Experience the wonders of ${pkg.locations?.join(', ') || pkg.location}`,
    destinations: pkg.locations || [pkg.location] || [],
    highlights: pkg.highlights || ["Wildlife viewing", "Scenic landscapes"],
    coverImage: placeholderImages.tanz, // Use placeholder image
    featured: Math.random() > 0.7, // Randomly feature some packages
    bestValue: Math.random() > 0.8, // Randomly mark some as best value
    pricing: {
      "Jan-Mar": { shared: 2000 + Math.random() * 2000, single: 2500 + Math.random() * 2000 },
      "Apr-Jun": { shared: 1500 + Math.random() * 1500, single: 2000 + Math.random() * 1500 },
      "Jul-Oct": { shared: 2500 + Math.random() * 2500, single: 3000 + Math.random() * 2500 },
      "Nov-Dec": { shared: 1800 + Math.random() * 1800, single: 2300 + Math.random() * 1800 }
    },
    itinerary: itinerary
  };
});

const TanzaniaSafari = () => {
  // State variables
  const [displayedPackages, setDisplayedPackages] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("Jan-Mar");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [similarPackages, setSimilarPackages] = useState([]);

  // Apply filters and set displayed packages
  useEffect(() => {
    let filtered = [...allPackages];
    
    // Apply type filter
    if (selectedFilter === "featured") {
      filtered = filtered.filter(pkg => pkg.featured);
    } else if (selectedFilter === "budget") {
      filtered = filtered.filter(pkg => {
        const price = pkg.pricing[selectedSeason].shared;
        return price > 0 && price < 3000;
      });
    } else if (selectedFilter === "luxury") {
      filtered = filtered.filter(pkg => pkg.type === "Luxury");
    }
    
    // Filter out packages not available in selected season
    filtered = filtered.filter(pkg => pkg.pricing[selectedSeason].shared > 0);
    
    setDisplayedPackages(filtered);
  }, [selectedSeason, selectedFilter]);

  // Handle season change
  const handleSeasonChange = (season) => {
    setSelectedSeason(season);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setVisibleItems(6); // Reset visible items when filter changes
  };

  // Load more packages
  const loadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  // View package details
  const viewPackageDetails = (packageId) => {
    const selectedPkg = allPackages.find(pkg => pkg.id === packageId);
    setSelectedPackage(selectedPkg);
    setIsDetailView(true);
    
    // Find similar packages (same type or destinations)
    const similar = allPackages
      .filter(pkg => 
        pkg.id !== packageId && 
        (pkg.type === selectedPkg.type || 
         pkg.destinations.some(dest => selectedPkg.destinations.includes(dest)))
      )
      .slice(0, 3);
    
    setSimilarPackages(similar);
    
    // Scroll to top
    window.scrollTo(0, 0);
  };

  // Close detail view
  const closeDetailView = () => {
    setIsDetailView(false);
    setSelectedPackage(null);
  };

  // Get current season data
  const currentSeasonData = seasonData.find(season => season.id === selectedSeason);

  return (
    <div className="bg-eggshell min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cafe-noir/80 to-transparent z-10"></div>
        <img 
          src="/api/placeholder/1200/800"
          alt="Tanzania Safari"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-2xl">
            <div className="flex items-center mb-4 bg-hunyadi-yellow/80 text-cafe-noir px-3 py-1 rounded-full w-fit">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Best Time to Travel: July to October</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-cornsilk mb-6 leading-tight">Discover the Wonders of Tanzania</h1>
            <p className="text-xl text-eggshell mb-8 max-w-lg">Experience the majesty of East Africa with our handcrafted safari packages, guided by local experts.</p>
            <div className="flex flex-wrap space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-nowrap">
              <button className="w-full sm:w-auto bg-hunyadi-yellow hover:bg-princeton-orange text-cafe-noir font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                <span>Explore Packages</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-eggshell text-eggshell hover:bg-eggshell hover:text-cafe-noir font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                <span>Contact Our Experts</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {!isDetailView ? (
          <>
            {/* Season Selector with Icons and More Information */}
            <div className="mb-12 bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-cafe-noir mb-6 flex items-center">
                <Calendar className="mr-2 h-6 w-6 text-moss-green" />
                Choose Your Travel Season
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {seasonData.map((season) => (
                  <button
                    key={season.id}
                    onClick={() => handleSeasonChange(season.id)}
                    className={`flex flex-col items-center p-4 rounded-lg transition duration-300 border-2 ${
                      selectedSeason === season.id
                        ? 'border-moss-green bg-moss-green/10'
                        : 'border-french-gray hover:border-moss-green'
                    }`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-alice-blue mb-3">
                      {season.icon}
                    </div>
                    <span className="font-medium text-cafe-noir">{season.name}</span>
                  </button>
                ))}
              </div>
              
              {/* Season Details */}
              <div className="bg-alice-blue rounded-lg p-4">
                <div className="flex items-start">
                  <div className="mr-4">
                    {currentSeasonData.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-cafe-noir mb-2">{currentSeasonData.name}</h3>
                    <p className="text-gray-700 mb-4">{currentSeasonData.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-cafe-noir mb-2">Weather Conditions:</h4>
                        <ul className="space-y-1">
                          {currentSeasonData.conditions.map((condition, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check className="h-4 w-4 text-moss-green mr-2" />
                              {condition}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-cafe-noir mb-2">Best For:</h4>
                        <ul className="space-y-1">
                          {currentSeasonData.bestFor.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check className="h-4 w-4 text-hunyadi-yellow mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Options with Enhanced UI */}
            <div className="mb-12 bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-cafe-noir mb-6 flex items-center">
                <Filter className="mr-2 h-6 w-6 text-cafe-noir" />
                Filter Safari Packages
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { id: 'all', name: 'All Safaris', icon: <MapPin className="h-5 w-5" /> },
                  { id: 'featured', name: 'Featured', icon: <Star className="h-5 w-5" /> },
                  { id: 'budget', name: 'Budget-Friendly', icon: <Award className="h-5 w-5" /> },
                  { id: 'luxury', name: 'Luxury', icon: <Users className="h-5 w-5" /> }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => handleFilterChange(filter.id)}
                    className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start p-4 rounded-lg transition duration-300 ${
                      selectedFilter === filter.id
                        ? 'bg-cafe-noir text-white'
                        : 'bg-french-gray/30 text-cafe-noir hover:bg-cafe-noir/10'
                    }`}
                  >
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      selectedFilter === filter.id ? 'bg-white/20' : 'bg-white'
                    } mb-2 sm:mb-0 sm:mr-3`}>
                      {filter.icon}
                    </span>
                    <span className="font-medium text-center sm:text-left">{filter.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Safari Packages */}
            <div className="mb-16">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <h2 className="text-3xl font-bold text-cafe-noir">Tanzania Safari Packages</h2>
                <p className="text-brown-sugar mt-2 sm:mt-0 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Showing prices for {currentSeasonData.name}</span>
                </p>
              </div>
              
              {displayedPackages.length === 0 ? (
                <div className="bg-alice-blue p-8 rounded-lg text-center shadow-md">
                  <p className="text-xl text-cafe-noir">No safari packages available for the selected criteria. Please try another season or filter.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedPackages.slice(0, visibleItems).map((safari) => (
                    <div 
                      key={safari.id} 
                      className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:shadow-xl hover:translate-y-[-5px]"
                    >
                      <div className="relative">
                        <img 
                          src={safari.coverImage}
                          alt={safari.name} 
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                          <div className="flex flex-wrap gap-2 mb-2">
                            {safari.featured && (
                              <div className="bg-gold-metallic text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                                <Star className="h-4 w-4 mr-1" />
                                Featured
                              </div>
                            )}
                            {safari.bestValue && (
                              <div className="bg-claret text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                                <Award className="h-4 w-4 mr-1" />
                                Best Value
                              </div>
                            )}
                          </div>
                          <div className="flex justify-between items-end">
                            <h2 className="text-2xl font-bold text-white leading-tight">{safari.name}</h2>
                            <span className="bg-cafe-noir text-cornsilk px-3 py-1 rounded-lg text-sm font-medium">
                              {safari.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-500 mr-1" />
                            <span className="text-sm text-gray-600">{safari.duration}</span>
                          </div>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            safari.difficulty === 'Easy' ? 'bg-mindaro text-cafe-noir' :
                            safari.difficulty === 'Moderate' ? 'bg-hunyadi-yellow text-cafe-noir' :
                            'bg-brown-sugar text-white'
                          } flex items-center`}>
                            {safari.difficulty}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {safari.destinations.map((destination, idx) => (
                            <span 
                              key={idx} 
                              className="inline-flex items-center bg-alice-blue text-asparagus px-2 py-1 rounded-full text-xs font-medium"
                            >
                              <MapPin className="h-3 w-3 mr-1" />
                              {destination}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{safari.description}</p>
                        
                        <div className="mb-6">
                          <h3 className="font-medium text-cafe-noir mb-3 flex items-center">
                            <Check className="h-4 w-4 text-moss-green mr-2" />
                            Highlights:
                          </h3>
                          <ul className="space-y-2">
                            {safari.highlights.slice(0, 3).map((highlight, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start">
                                <span className="text-hunyadi-yellow mr-2">✓</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-french-gray">
                          <div className="flex justify-between mb-4">
                            <div>
                              <span className="text-cafe-noir font-medium block mb-1">Pricing ({selectedSeason}):</span>
                              <div className="flex items-center">
                                <span className="text-sm text-gray-600 mr-2">From</span>
                                <span className="text-2xl font-bold text-moss-green">${safari.pricing[selectedSeason].shared.toFixed(0)}</span>
                                <span className="text-sm text-gray-600 ml-1">per person</span>
                              </div>
                              <span className="text-xs text-gray-500">Single Supplement: ${safari.pricing[selectedSeason].single.toFixed(0)}</span>
                            </div>
                            <div className="flex items-end">
                              <span className="bg-moss-green text-white px-2 py-1 rounded text-xs font-bold">
                                ID: {safari.id}
                              </span>
                            </div>
                          </div>
                          
                          <button 
                            onClick={() => viewPackageDetails(safari.id)}
                            className="w-full bg-hunyadi-yellow hover:bg-princeton-orange text-cafe-noir font-bold py-3 px-4 rounded-lg transition duration-300 flex justify-center items-center"
                          >
                            <span>View Details</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {displayedPackages.length > visibleItems && (
                <div className="text-center mt-12">
                  <button 
                    onClick={loadMore}
                    className="bg-cafe-noir hover:bg-cafe-noir/80 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center mx-auto"
                  >
                    <span>Load More Packages</span>
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Safari Experience Section */}
            <div className="mb-16 bg-cornsilk rounded-xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-cafe-noir mb-4">The Ultimate Safari Experience</h2>
                  <p className="text-brown-sugar mb-6">
                    Our team of expert guides will ensure you experience the best of Tanzania's wildlife and landscapes.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="bg-hunyadi-yellow/20 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-hunyadi-yellow" />
                      </div>
                      <div>
                        <h3 className="font-medium text-cafe-noir">Expert Local Guides</h3>
                        <p className="text-sm text-gray-600">All our safaris are led by experienced guides with deep knowledge of local wildlife and culture.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-moss-green/20 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-moss-green" />
                      </div>
                      <div>
                        <h3 className="font-medium text-cafe-noir">Quality Accommodations</h3>
                        <p className="text-sm text-gray-600">From comfortable lodges to luxury tented camps, we select the best places to stay.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-claret/20 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-claret" />
                      </div>
                      <div>
                        <h3 className="font-medium text-cafe-noir">Responsible Tourism</h3>
                        <p className="text-sm text-gray-600">Our safaris support conservation efforts and local communities throughout Tanzania.</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-cafe-noir hover:bg-cafe-noir/80 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center">
                    <span>Learn More About Our Approach</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                
                <div className="h-full">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Safari Experience" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Seasonal Information Section with Enhanced UI */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
              <h2 className="text-2xl font-bold text-cafe-noir mb-6">Tanzania Travel Seasons Guide</h2>
              <p className="text-cafe-noir mb-8">
                Understanding the different seasons in Tanzania will help you choose the best time for your safari adventure. Each season offers unique wildlife viewing opportunities and experiences.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seasonData.map((info) => (
                  <div 
                    key={info.id} 
                    className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                      info.id === 'Jan-Mar' ? 'border-hunyadi-yellow' :
                      info.id === 'Apr-Jun' ? 'border-columbia-blue' :
                      info.id === 'Jul-Oct' ? 'border-princeton-orange' :
                      'border-moss-green'
                    } hover:shadow-lg transition duration-300`}
                  >
                    <div className="flex items-center mb-3">
                      {info.icon}
                      <h3 className="text-lg font-bold text-cafe-noir ml-2">{info.shortName}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{info.description}</p>
                    <div>
                      <span className="text-xs font-medium text-moss-green uppercase">Best For:</span>
                      <ul className="mt-2 space-y-1">
                        {info.bestFor.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start">
                            <Check className="h-3 w-3 text-hunyadi-yellow mr-1 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          // Detailed Package View
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {selectedPackage && (
              <>
                {/* Package Header */}
                <div className="relative h-96">
                  <img 
                    src={selectedPackage.coverImage} 
                    alt={selectedPackage.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <button 
                    onClick={closeDetailView}
                    className="absolute top-4 left-4 bg-white/80 p-2 rounded-full hover:bg-white transition duration-300"
                  >
                    <X className="h-6 w-6 text-cafe-noir" />
                  </button>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedPackage.featured && (
                        <div className="bg-gold-metallic text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Featured
                        </div>
                      )}
                      {selectedPackage.bestValue && (
                        <div className="bg-claret text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          Best Value
                        </div>
                      )}
                      <div className="bg-cafe-noir text-cornsilk px-3 py-1 rounded-lg text-sm">
                        {selectedPackage.type}
                      </div>
                      <div className="bg-moss-green text-white px-3 py-1 rounded-lg text-sm">
                        ID: {selectedPackage.id}
                      </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">{selectedPackage.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-1" />
              <span>{selectedPackage.duration}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{selectedPackage.destinations.join(', ')}</span>
            </div>
            <span className={`px-3 py-1 rounded-full ${
              selectedPackage.difficulty === 'Easy' ? 'bg-mindaro text-cafe-noir' :
              selectedPackage.difficulty === 'Moderate' ? 'bg-hunyadi-yellow text-cafe-noir' :
              'bg-brown-sugar text-white'
            }`}>
              {selectedPackage.difficulty} Difficulty
            </span>
          </div>
        </div>
      </div>
      
      {/* Package Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-cafe-noir mb-4">Overview</h2>
              <p className="text-gray-700 mb-6">{selectedPackage.description}</p>
              
              <div className="bg-alice-blue rounded-lg p-6 mb-6">
                <h3 className="font-bold text-cafe-noir mb-3">Safari Highlights</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedPackage.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-hunyadi-yellow/20 p-1 rounded-full mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-hunyadi-yellow" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Itinerary Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-cafe-noir mb-4">Safari Itinerary</h2>
              <div className="space-y-6">
                {selectedPackage.itinerary.map((day, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="bg-moss-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                    </div>
                    <div className="bg-white border-l-4 border-moss-green pl-4 py-2 flex-1">
                      <h3 className="font-bold text-cafe-noir">{day.title}</h3>
                      <p className="text-gray-600 text-sm">{day.description}</p>
                    </div>
                  </div>
                ))}
                {selectedPackage.itinerary.length < 5 && (
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <span>Full itinerary details provided upon booking</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Destinations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-cafe-noir mb-4">Destinations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedPackage.destinations.map((destination, idx) => (
                  <div key={idx} className="bg-cornsilk rounded-lg p-4 flex items-center">
                    <MapPin className="h-6 w-6 text-hunyadi-yellow mr-3" />
                    <div>
                      <h3 className="font-medium text-cafe-noir">{destination}</h3>
                      <p className="text-xs text-gray-600">
                        {destination === 'Serengeti' && 'Famous for the great migration and vast plains'}
                        {destination === 'Ngorongoro' && 'Stunning crater with concentrated wildlife'}
                        {destination === 'Kilimanjaro' && 'Africa\'s highest mountain with diverse ecosystems'}
                        {destination === 'Tarangire' && 'Known for large elephant herds and baobab trees'}
                        {destination === 'Lake Manyara' && 'Home to tree-climbing lions and birdlife'}
                        {destination === 'Arusha' && 'Gateway to Tanzania\'s northern safari circuit'}
                        {destination === 'Maasai Mara' && 'Kenya\'s famous reserve connecting to Serengeti'}
                        {destination === 'Amboseli' && 'Kenya\'s park with views of Mount Kilimanjaro'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-lg border border-french-gray p-6 mb-6 sticky top-4">
              <h3 className="text-xl font-bold text-cafe-noir mb-2">Pricing Details</h3>
              <p className="text-sm text-gray-600 mb-4">Price per person for {currentSeasonData.name}</p>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Shared Accommodation:</span>
                  <span className="text-2xl font-bold text-moss-green">
                    ${selectedPackage.pricing[selectedSeason].shared.toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Single Supplement:</span>
                  <span className="text-lg font-semibold text-cafe-noir">
                    ${selectedPackage.pricing[selectedSeason].single.toFixed(0)}
                  </span>
                </div>
              </div>
              
              <div className="bg-alice-blue rounded-lg p-4 mb-6">
                <h4 className="font-medium text-cafe-noir mb-2">Includes:</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-start">
                    <Check className="h-4 w-4 text-moss-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>All accommodations</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start">
                    <Check className="h-4 w-4 text-moss-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>Professional guides & vehicles</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start">
                    <Check className="h-4 w-4 text-moss-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>All park entrance fees</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start">
                    <Check className="h-4 w-4 text-moss-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>All meals as specified</span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full bg-hunyadi-yellow hover:bg-princeton-orange text-cafe-noir font-bold py-3 px-4 rounded-lg transition duration-300 flex justify-center items-center mb-4">
                <span>Book This Safari</span>
              </button>
              
              <button className="w-full bg-cafe-noir hover:bg-cafe-noir/80 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex justify-center items-center">
                <span>Request Custom Quote</span>
              </button>
            </div>
            
            {/* Season Availability */}
            <div className="bg-white rounded-lg shadow-lg border border-french-gray p-6 mb-6">
              <h3 className="font-bold text-cafe-noir mb-3">Seasonal Availability</h3>
              <div className="space-y-3">
                {Object.entries(selectedPackage.pricing).map(([season, prices]) => (
                  <div 
                    key={season} 
                    className={`flex items-center justify-between p-2 rounded ${
                      prices.shared > 0 
                        ? season === selectedSeason 
                          ? 'bg-moss-green/20' 
                          : 'bg-gray-50' 
                        : 'bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      {season === 'Jan-Mar' && <Sun className="h-4 w-4 text-hunyadi-yellow mr-2" />}
                      {season === 'Apr-Jun' && <Cloud className="h-4 w-4 text-columbia-blue mr-2" />}
                      {season === 'Jul-Oct' && <Sun className="h-4 w-4 text-princeton-orange mr-2" />}
                      {season === 'Nov-Dec' && <Umbrella className="h-4 w-4 text-moss-green mr-2" />}
                      <span className={prices.shared > 0 ? "text-cafe-noir" : "text-gray-400"}>
                        {season}
                      </span>
                    </div>
                    {prices.shared > 0 ? (
                      <span className="font-medium text-moss-green">
                        ${prices.shared.toFixed(0)}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm">Not Available</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Packages Section */}
        {similarPackages.length > 0 && (
          <div className="mt-12 border-t border-french-gray pt-8">
            <h2 className="text-2xl font-bold text-cafe-noir mb-6">Similar Safari Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarPackages.map((safari) => (
                <div 
                  key={safari.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-french-gray hover:shadow-lg transition duration-300"
                >
                  <div className="relative h-48">
                    <img 
                      src={safari.coverImage || placeholderImages.tanz} 
                      alt={safari.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="text-lg font-bold text-white">{safari.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-xs text-gray-600">{safari.duration}</span>
                      </div>
                      <span className="bg-moss-green text-white px-2 py-1 rounded text-xs">
                        ${safari.pricing[selectedSeason].shared.toFixed(0)}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => viewPackageDetails(safari.id)}
                      className="w-full bg-hunyadi-yellow/80 hover:bg-hunyadi-yellow text-cafe-noir font-medium py-2 px-4 rounded transition duration-300 flex justify-center items-center text-sm"
                    >
                      <span>View Details</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )}
</div>
)}
</div>


</div>
);
};

export default TanzaniaSafari;