import React, { useState, useEffect } from 'react';
import tanz from '../assets/tanzania.jpg'
import kilimanjaro from '../assets/kilimanjaro.avif'
import lake from '../assets/Lake Manyara.avif'
import serengeti from '../assets/serengeti.avif'
import tarangire from '../assets/tarangire.avif'
import ngorongoro from '../assets/ngorongoro.avif'
import hot from '../assets/hotairbalooon.avif'
import serengetinp from '../assets/serengetinp.avif'
import luzury from '../assets/luzury.jpg'
import grand from '../assets/grandkenya.jpg'

export const allPackages = [
  {
    id: "JT022",
    name: "Kilimanjaro Safari",
    type: "Classic",
    duration: "5 Days / 4 Nights",
    destinations: ["Kilimanjaro", "Arusha"],
    description: "Experience the majesty of Kilimanjaro and its surroundings with this classic safari package.",
    highlights: [
      "Views of Mount Kilimanjaro",
      "Wildlife viewing in Arusha National Park",
      "Cultural visits to local villages",
      "Guided nature walks"
    ],
    difficulty: "Moderate",
    featured: false,
    bestValue: true,
    pricing: {
      "Jan-Mar": { shared: 870.55, single: 192.05 },
      "Apr-Jun": { shared: 765.90, single: 115.00 },
      "Jul-Oct": { shared: 941.85, single: 2043.55 },
      "Nov-Dec": { shared: 786.60, single: 126.50 }
    },
    coverImage: kilimanjaro,
  },
  {
    id: "JT023",
    name: "Treasure of East Africa",
    type: "Classic",
    duration: "10 Days / 9 Nights",
    destinations: ["Serengeti", "Ngorongoro", "Lake Manyara"],
    description: "Comprehensive safari covering the best wildlife viewing spots in East Africa for an unforgettable experience.",
    highlights: [
      "Full day in the Serengeti",
      "Ngorongoro Crater expedition",
      "Lake Manyara's tree-climbing lions",
      "Great Migration viewing (seasonal)"
    ],
    difficulty: "Moderate",
    featured: true,
    bestValue: false,
    pricing: {
      "Jan-Mar": { shared: 5033.55, single: 715.30 },
      "Apr-Jun": { shared: 3758.20, single: 173.65 },
      "Jul-Oct": { shared: 5104.85, single: 726.80 },
      "Nov-Dec": { shared: 4174.50, single: 607.20 }
    },
    coverImage: serengeti,
  },
  {
    id: "JT026",
    name: "Splendours of Tanzania",
    type: "Classic",
    duration: "7 Days / 6 Nights",
    destinations: ["Tarangire", "Serengeti", "Ngorongoro"],
    description: "Discover the magnificent wildlife and landscapes of Tanzania's most famous parks and conservation areas.",
    highlights: [
      "Big five game viewing",
      "Spectacular landscapes",
      "Maasai cultural interactions",
      "Exclusive game drives"
    ],
    difficulty: "Easy",
    featured: false,
    bestValue: false,
    pricing: {
      "Jan-Mar": { shared: 4376.90, single: 466.90 },
      "Apr-Jun": { shared: 3149.85, single: 462.30 },
      "Jul-Oct": { shared: 4376.90, single: 466.90 },
      "Nov-Dec": { shared: 3520.15, single: 425.50 }
    },
    coverImage: tarangire,
  },
  {
    id: "JT027",
    name: "Tanzania Migration Safari",
    type: "Classic",
    duration: "6 Days / 5 Nights",
    destinations: ["Serengeti", "Ngorongoro"],
    description: "Follow the Great Migration with this specially timed safari to witness one of nature's greatest spectacles.",
    highlights: [
      "Great Migration viewing",
      "Wildebeest river crossings (seasonal)",
      "Predator-prey interactions",
      "Unmatched wildlife photography"
    ],
    difficulty: "Moderate",
    featured: true,
    bestValue: false,
    pricing: {
      "Jan-Mar": { shared: 1083.30, single: 278.30 },
      "Apr-Jun": { shared: 0, single: 0 },
      "Jul-Oct": { shared: 969.45, single: 335.80 },
      "Nov-Dec": { shared: 0, single: 0 }
    },
    coverImage: ngorongoro,
  },
  {
    id: "JT028",
    name: "East Africa Odyssey",
    type: "Classic",
    duration: "12 Days / 11 Nights",
    destinations: ["Serengeti", "Ngorongoro", "Tarangire", "Lake Manyara"],
    description: "The ultimate East African adventure covering multiple parks and reserves across Tanzania.",
    highlights: [
      "Extended Serengeti stay",
      "Full day at Ngorongoro Crater",
      "Four different ecosystems",
      "Optional hot air balloon safari"
    ],
    difficulty: "Challenging",
    featured: false,
    bestValue: true,
    pricing: {
      "Jan-Mar": { shared: 5384.30, single: 594.55 },
      "Apr-Jun": { shared: 4861.05, single: 438.15 },
      "Jul-Oct": { shared: 5434.90, single: 609.50 },
      "Nov-Dec": { shared: 4896.70, single: 542.80 }
    },
    coverImage: hot,
  },
  {
    id: "JT029",
    name: "Tanzania Photography Safari",
    type: "Classic",
    duration: "8 Days / 7 Nights",
    destinations: ["Serengeti", "Ngorongoro", "Lake Manyara"],
    description: "Specially designed for photography enthusiasts with optimal viewing positions and timing for wildlife photography.",
    highlights: [
      "Photography-focused game drives",
      "Golden hour sessions",
      "Professional photography tips",
      "Special vehicles with camera mounts"
    ],
    difficulty: "Moderate",
    featured: true,
    bestValue: false,
    pricing: {
      "Jan-Mar": { shared: 4245.80, single: 410.55 },
      "Apr-Jun": { shared: 3050.95, single: 67.85 },
      "Jul-Oct": { shared: 4245.80, single: 410.55 },
      "Nov-Dec": { shared: 3816.85, single: 366.85 }
    },
    coverImage: lake,
  },
  {
    id: "JT030",
    name: "Tanzania Highlight Classic",
    type: "Classic",
    duration: "7 Days / 6 Nights",
    destinations: ["Tarangire", "Serengeti", "Ngorongoro"],
    description: "The essential Tanzania experience covering the most popular parks and wildlife viewing opportunities.",
    highlights: [
      "Elephant herds in Tarangire",
      "Serengeti plains game viewing",
      "Ngorongoro Crater descent",
      "Professional naturalist guides"
    ],
    difficulty: "Easy",
    featured: false,
    bestValue: false,
    pricing: {
      "Jan-Mar": { shared: 3984.75, single: 336.95 },
      "Apr-Jun": { shared: 2791.05, single: 115.00 },
      "Jul-Oct": { shared: 3984.75, single: 336.95 },
      "Nov-Dec": { shared: 3588.00, single: 299.00 }
    },
    coverImage: serengetinp
  },
  {
    id: "JT041",
    name: "The Ultimate Tanzania Safari",
    type: "Luxury",
    duration: "10 Days / 9 Nights",
    destinations: ["Serengeti", "Ngorongoro", "Tarangire", "Lake Manyara"],
    description: "Premium luxury safari experience with exclusive lodges, private guides, and exceptional service throughout.",
    highlights: [
      "Luxury accommodations",
      "Private safari vehicles",
      "Gourmet dining experiences",
      "Champagne sundowners"
    ],
    difficulty: "Easy",
    featured: true,
    bestValue: false,
    pricing: {
      "Jan-Mar": { shared: 7732.60, single: 2250.55 },
      "Apr-Jun": { shared: 7732.60, single: 2250.55 },
      "Jul-Oct": { shared: 8192.60, single: 2486.30 },
      "Nov-Dec": { shared: 7732.60, single: 2250.55 }
    },
    coverImage: luzury,
  },
  {
    id: "JT042",
    name: "Wings Over Kenya & Tanzania Safari",
    type: "Luxury",
    duration: "14 Days / 13 Nights",
    destinations: ["Maasai Mara", "Serengeti", "Ngorongoro", "Amboseli"],
    description: "The ultimate East African luxury experience with private flights between destinations for maximum comfort and efficiency.",
    highlights: [
      "Private air transfers",
      "Five-star accommodations",
      "Exclusive wildlife viewing",
      "Professional photography guide"
    ],
    difficulty: "Easy",
    featured: true,
    bestValue: false,
    pricing: {
      "Jan-Mar": { shared: 12973.15, single: 3960.60 },
      "Apr-Jun": { shared: 11399.95, single: 3243.00 },
      "Jul-Oct": { shared: 13031.80, single: 4073.30 },
      "Nov-Dec": { shared: 9911.85, single: 853.30 }
    },
    coverImage: grand
  }
];

const TanzaniaSafari = () => {
  // Safari package data with full details including seasonal pricing
  

  // State variables
  const [displayedPackages, setDisplayedPackages] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("Jan-Mar");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);

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
  }, [selectedSeason, selectedFilter, allPackages]);

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

  // Seasonal information for the informational section
  const seasonalInfo = [
    { 
      season: "Jan-Mar", 
      description: "Peak season. Excellent wildlife viewing with warm days and cool nights. Great time for the southern Serengeti wildebeest calving season." 
    },
    { 
      season: "Apr-Jun", 
      description: "Low season with occasional rain. Lower rates and fewer tourists. Lush green landscapes make for beautiful photography." 
    },
    { 
      season: "Jul-Oct", 
      description: "Peak season. Dry weather and excellent wildlife viewing. Ideal for witnessing river crossings in the northern Serengeti." 
    },
    { 
      season: "Nov-Dec", 
      description: "Short rains season. Good wildlife viewing with fewer tourists. Migration returns to southern Serengeti." 
    }
  ];

  return (
    <div className="bg-eggshell min-h-screen">
      {/* Hero Section */}
<div className="relative w-full h-[100vh] overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-cafe-noir to-transparent z-10"></div>
  <img 
    src={tanz}
    alt="Tanzania Safari"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div className="container mx-auto px-4 h-full flex items-center relative z-20">
    <div className="max-w-2xl">
      <h1 className="text-5xl font-bold text-cornsilk mb-4">Tanzania Safaris</h1>
      <p className="text-xl text-eggshell mb-8">Experience the majesty of East Africa with our classic and luxury safari packages</p>
      <div className="flex space-x-4">
        <button className="bg-hunyadi-yellow hover:bg-princeton-orange text-cafe-noir font-bold py-3 px-6 rounded-lg transition duration-300">
          Explore Packages
        </button>
        <button className="bg-transparent border-2 border-eggshell text-eggshell hover:bg-eggshell hover:text-cafe-noir font-bold py-3 px-6 rounded-lg transition duration-300">
          Contact Our Experts
        </button>
      </div>
    </div>
  </div>
</div>

      <div className="container mx-auto px-4 py-12">
        {/* Season Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cafe-noir mb-4">Choose Your Travel Season</h2>
          <div className="flex flex-wrap gap-3">
            {['Jan-Mar', 'Apr-Jun', 'Jul-Oct', 'Nov-Dec'].map((season) => (
              <button
                key={season}
                onClick={() => handleSeasonChange(season)}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  selectedSeason === season
                    ? 'bg-moss-green text-white'
                    : 'bg-french-gray text-cafe-noir hover:bg-moss-green hover:text-white'
                }`}
              >
                {season}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Options */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cafe-noir mb-4">Filter Safari Packages</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'all', name: 'All Safaris' },
              { id: 'featured', name: 'Featured' },
              { id: 'budget', name: 'Budget-Friendly' },
              { id: 'luxury', name: 'Luxury' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-cafe-noir text-white'
                    : 'bg-french-gray text-cafe-noir hover:bg-cafe-noir hover:text-white'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Safari Packages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-cafe-noir mb-6">Tanzania Safari Packages</h2>
          <p className="text-brown-sugar mb-8">Showing prices for {selectedSeason} season. All prices are in USD.</p>
          
          {displayedPackages.length === 0 ? (
            <div className="bg-alice-blue p-8 rounded-lg text-center">
              <p className="text-xl text-cafe-noir">No safari packages available for the selected criteria. Please try another season or filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPackages.slice(0, visibleItems).map((safari) => (
                <div 
                  key={safari.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative">
                    {safari.coverImage ? (
                      <img 
                        src={safari.coverImage} 
                        alt={safari.name} 
                        className="w-full h-64 object-cover"
                      />
                    ) : (
                      <div className="w-full h-64 bg-french-gray flex items-center justify-center">
                        <span className="text-cafe-noir">Image coming soon</span>
                      </div>
                    )}
                    {safari.featured && (
                      <div className="absolute top-4 left-4 bg-gold-metallic text-white px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </div>
                    )}
                    {safari.bestValue && (
                      <div className="absolute top-4 left-4 bg-claret text-white px-3 py-1 rounded-full text-sm font-bold">
                        Best Value
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-cafe-noir text-cornsilk px-3 py-1 rounded-lg text-sm">
                      {safari.type}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-bold text-cafe-noir">{safari.name}</h2>
                      <span className="bg-moss-green text-white px-2 py-1 rounded text-xs">
                        ID: {safari.id}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-gray-600">{safari.duration}</span>
                      <span className="mx-2">•</span>
                      <span className={`text-sm px-2 py-1 rounded ${
                        safari.difficulty === 'Easy' ? 'bg-mindaro text-cafe-noir' :
                        safari.difficulty === 'Moderate' ? 'bg-hunyadi-yellow text-cafe-noir' :
                        'bg-brown-sugar text-white'
                      }`}>
                        {safari.difficulty}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      {safari.destinations.map((destination, idx) => (
                        <span 
                          key={idx} 
                          className="inline-block bg-alice-blue text-asparagus px-2 py-1 rounded text-xs mr-2 mb-2"
                        >
                          {destination}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">{safari.description}</p>
                    
                    <div className="mb-4">
                      <h3 className="font-medium text-cafe-noir mb-2">Highlights:</h3>
                      <ul className="space-y-1">
                        {safari.highlights.map((highlight, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="text-hunyadi-yellow mr-2">✓</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-french-gray">
                      <div className="flex justify-between mb-2">
                        <span className="text-cafe-noir font-medium">Pricing ({selectedSeason}):</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Shared Accommodation:</span>
                        <span className="text-lg font-bold text-moss-green">${safari.pricing[selectedSeason].shared.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between mb-4">
                        <span className="text-sm text-gray-600">Single Supplement:</span>
                        <span className="text-md text-gray-700">${safari.pricing[selectedSeason].single.toFixed(2)}</span>
                      </div>
                      
                      <button className="w-full bg-hunyadi-yellow hover:bg-princeton-orange text-cafe-noir font-bold py-3 px-4 rounded-lg transition duration-300 flex justify-center items-center">
                        Book This Safari
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {displayedPackages.length > visibleItems && (
            <div className="text-center mt-8">
              <button 
                onClick={loadMore}
                className="bg-cafe-noir hover:bg-moss-green text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Load More Packages
              </button>
            </div>
          )}
        </div>

        {/* Seasonal Information Section */}
        <div className="bg-cornsilk rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-cafe-noir mb-4">Tanzania Travel Seasons</h2>
          <p className="text-cafe-noir mb-6">
            Understanding the different seasons in Tanzania will help you choose the best time for your safari adventure.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalInfo.map((info) => (
              <div key={info.season} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-cafe-noir mb-2">{info.season}</h3>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TanzaniaSafari;