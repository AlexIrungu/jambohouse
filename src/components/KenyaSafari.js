import React, { useState } from 'react';
import kenyahero from '../assets/kenyahero.jpg';
import grand from '../assets/grandkenya.jpg'
import karibu from '../assets/karibukenya.jpg'
import twiga from '../assets/twiga.jpg'
import amboseli from '../assets/amboseli.jpg'
import naivasha from '../assets/naivasha.jpg'
import mara from '../assets/mara.jpg'
import zebra from '../assets/zebra.jpg'
import marasun from '../assets/marasun.jpg'
import easymara from '../assets/easymara.jpg'
export const safariPackages = [
  {
    id: "JT001",
    name: "Grand Kenya (Classic)",
    duration: "9 Days / 8 Nights",
    description: "Experience the ultimate Kenya adventure with our most comprehensive safari package, covering the best national parks and reserves across the country.",
    highlights: [
      "Big Five wildlife viewing",
      "Visit to multiple national parks",
      "Cultural experiences with local tribes",
      "Luxury accommodations throughout"
    ],
    difficulty: "Moderate",
    featured: true,
    destinations: ["Masai Mara", "Amboseli", "Lake Nakuru", "Samburu"],
    coverImage: grand,
  },
  {
    id: "JT002",
    name: "Karibu Kenya (Classic)",
    duration: "7 Days / 6 Nights",
    description: "A warm welcome to Kenya with this classic safari experience that showcases the country's incredible biodiversity and landscapes.",
    highlights: [
      "Game drives in premier wildlife reserves", 
      "Professional safari guides",
      "Comfortable lodge accommodations",
      "Cultural interactions"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 2952.05, singleSupplement: 553.15 },
      { period: "01.04-30.06.2025", sharedPrice: 2715.15, singleSupplement: 155.25 },
      { period: "01.07-31.10.2025", sharedPrice: 3193.55, singleSupplement: 631.35 },
      { period: "01.11-15.12.2025", sharedPrice: 2938.25, singleSupplement: 545.10 }
    ],
    difficulty: "Easy to Moderate",
    featured: true,
    destinations: ["Masai Mara", "Lake Nakuru", "Aberdares"],
    coverImage: karibu,
  },
  {
    id: "JT003",
    name: "Twiga Safari (Classic)",
    duration: "8 Days / 7 Nights",
    description: "Named after the Swahili word for giraffe, this safari offers towering views of Kenya's most magnificent landscapes and wildlife.",
    highlights: [
      "Premium wildlife viewing opportunities",
      "Comfortable accommodations in the heart of the wilderness",
      "Expert naturalist guides",
      "Multiple national parks exploration"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 3251.05, singleSupplement: 1024.65 },
      { period: "01.04-30.06.2025", sharedPrice: 3093.50, singleSupplement: 474.95 },
      { period: "01.07-31.10.2025", sharedPrice: 3806.50, singleSupplement: 1276.50 },
      { period: "01.11-15.12.2025", sharedPrice: 3174.00, singleSupplement: 834.90 }
    ],
    difficulty: "Moderate",
    destinations: ["Masai Mara", "Samburu", "Amboseli", "Lake Naivasha"],
    coverImage: twiga,
  },
  {
    id: "JT004",
    name: "Kenya Horizons (Classic)",
    duration: "6 Days / 5 Nights",
    description: "Discover the breathtaking horizons of Kenya's diverse landscapes, from savannah plains to mountain vistas.",
    highlights: [
      "Scenic panoramic views",
      "Diverse ecosystems exploration",
      "Big Five wildlife sightings",
      "Comfortable safari lodges"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 2608.20, singleSupplement: 767.05 },
      { period: "01.04-30.06.2025", sharedPrice: 2410.40, singleSupplement: 353.05 },
      { period: "01.07-31.10.2025", sharedPrice: 3022.20, singleSupplement: 861.35 },
      { period: "01.11-15.12.2025", sharedPrice: 2439.15, singleSupplement: 591.10 }
    ],
    difficulty: "Easy",
    destinations: ["Masai Mara", "Lake Nakuru", "Amboseli"],
    coverImage: amboseli,
  },
  {
    id: "JT005",
    name: "Kenya Footsteps (Classic)",
    duration: "5 Days / 4 Nights",
    description: "Follow in the footsteps of Kenya's amazing wildlife with this compact but comprehensive safari experience.",
    highlights: [
      "Concentrated wildlife viewing",
      "Premium safari vehicles",
      "Expert tracking guides",
      "Conservation insights"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 2362.10, singleSupplement: 448.50 },
      { period: "01.04-30.06.2025", sharedPrice: 2165.45, singleSupplement: 156.40 },
      { period: "01.07-31.10.2025", sharedPrice: 2556.45, singleSupplement: 512.90 },
      { period: "01.11-15.12.2025", sharedPrice: 2349.45, singleSupplement: 441.60 }
    ],
    difficulty: "Easy",
    destinations: ["Masai Mara", "Lake Naivasha"],
    coverImage: naivasha,
  },
  {
    id: "JT006",
    name: "Classic Kenya Safari",
    duration: "7 Days / 6 Nights",
    description: "The quintessential Kenyan safari experience featuring the most iconic wildlife destinations and comfortable accommodations.",
    highlights: [
      "Big Five game viewing",
      "Scenic drives through diverse landscapes",
      "Bird watching opportunities",
      "Comfortable safari lodges"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 2503.55, singleSupplement: 661.25 },
      { period: "01.04-30.06.2025", sharedPrice: 2375.90, singleSupplement: 474.95 },
      { period: "01.07-31.10.2025", sharedPrice: 2945.15, singleSupplement: 969.45 },
      { period: "01.11-15.12.2025", sharedPrice: 2426.50, singleSupplement: 474.95 }
    ],
    difficulty: "Moderate",
    destinations: ["Masai Mara", "Lake Nakuru", "Amboseli"],
    coverImage: mara,
  },
  {
    id: "JT007",
    name: "Kenya Highlights Safari (Classic)",
    duration: "5 Days / 4 Nights",
    description: "A condensed safari focusing on Kenya's highlight destinations and most remarkable wildlife experiences.",
    highlights: [
      "Key wildlife viewing areas",
      "Efficient itinerary",
      "Quality accommodations",
      "Professional guiding"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 1743.40, singleSupplement: 343.85 },
      { period: "01.04-30.06.2025", sharedPrice: 1584.70, singleSupplement: 154.10 },
      { period: "01.07-31.10.2025", sharedPrice: 1890.60, singleSupplement: 393.30 },
      { period: "01.11-15.12.2025", sharedPrice: 1730.75, singleSupplement: 335.80 }
    ],
    difficulty: "Easy",
    destinations: ["Masai Mara", "Lake Nakuru"],
    coverImage: zebra,
  },
  {
    id: "JT017",
    name: "Masai Safari Classic",
    duration: "4 Days / 3 Nights",
    description: "Immerse yourself in the iconic Masai Mara ecosystem with this focused safari experience in Kenya's most famous reserve.",
    highlights: [
      "Concentrated Masai Mara game drives",
      "Great Migration viewing (seasonal)",
      "Big cat territory exploration",
      "Optional cultural visits"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 1414.50, singleSupplement: 257.60 },
      { period: "01.04-30.06.2025", sharedPrice: 1269.60, singleSupplement: 193.20 },
      { period: "01.07-31.10.2025", sharedPrice: 1549.05, singleSupplement: 302.45 },
      { period: "01.11-15.12.2025", sharedPrice: 1414.50, singleSupplement: 257.60 }
    ],
    difficulty: "Easy",
    featured: true,
    destinations: ["Masai Mara"],
    coverImage: marasun, 
  },
  {
    id: "JT020",
    name: "Mara Classic Experience (Classic)",
    duration: "3 Days / 2 Nights",
    description: "A compact but comprehensive Masai Mara experience, perfect for those with limited time but who want to witness the magic of Kenya's premier wildlife reserve.",
    highlights: [
      "Focused game drives in the Mara",
      "Big cat sightings",
      "Comfortable tented camps",
      "Professional safari guides"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 894.70, singleSupplement: 117.30 },
      { period: "01.04-30.06.2025", sharedPrice: 795.80, singleSupplement: 80.50 },
      { period: "01.07-31.10.2025", sharedPrice: 990.15, singleSupplement: 149.50 },
      { period: "01.11-15.12.2025", sharedPrice: 894.70, singleSupplement: 117.30 }
    ],
    difficulty: "Easy",
    featured: true,
    bestValue: true,
    destinations: ["Masai Mara"],
    coverImage: easymara,
  }
];

const KenyaSafari = () => {
  // Parse the season price data from the file
  

  const [selectedSeason, setSelectedSeason] = useState("01.07-31.10.2025"); // Peak season by default
  const [displayCount, setDisplayCount] = useState(6);
  const [filter, setFilter] = useState('all');
  
  // Filter functions
  const filteredPackages = safariPackages
    .filter(pkg => {
      if (filter === 'featured') return pkg.featured;
      if (filter === 'budget') return pkg.bestValue || (pkg.seasons && pkg.seasons[0].sharedPrice < 1500);
      if (filter === 'luxury') return pkg.seasons && pkg.seasons[0].sharedPrice > 2500;
      return true;
    });

  // Get current price based on selected season
  const getCurrentPrice = (pkg) => {
    if (!pkg.seasons) return null;
    const season = pkg.seasons.find(s => s.period === selectedSeason);
    return season ? season.sharedPrice : null;
  };

  return (
    <div className="bg-eggshell min-h-screen">
      
      <header className="relative w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${kenyahero})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Kenya Safaris</h1>
      <p className="text-xl text-white max-w-3xl mx-auto">
        Experience the beauty and majesty of Kenya's wildlife and landscapes with our premium safari packages.
      </p>
    </div>
  </header>
<div className="container mx-auto px-4 py-12">
        {/* Season Selector */}
        <div className="mb-10 max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-3 text-cafe-noir">Select Travel Season:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {["02.01-30.03.2025", "01.04-30.06.2025", "01.07-31.10.2025", "01.11-15.12.2025"].map(period => (
              <button
                key={period}
                onClick={() => setSelectedSeason(period)}
                className={`py-2 px-4 rounded-lg transition-all ${
                  selectedSeason === period 
                    ? 'bg-hunyadi-yellow text-white shadow-md' 
                    : 'bg-cornsilk text-cafe-noir hover:bg-gold-metallic hover:text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
          <div className="mt-2 text-sm text-gray-600 text-center">
            {selectedSeason === "01.07-31.10.2025" && 
              <span className="font-medium text-claret">Peak Season - Great Migration</span>
            }
            {selectedSeason === "01.04-30.06.2025" && 
              <span className="font-medium text-asparagus">Green Season - Best Value</span>
            }
          </div>
        </div>
        
        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <button 
            onClick={() => setFilter('all')}
            className={`py-2 px-6 rounded-full ${
              filter === 'all' 
                ? 'bg-cafe-noir text-white' 
                : 'bg-french-gray text-cafe-noir hover:bg-moss-green hover:text-white'
            }`}
          >
            All Safaris
          </button>
          <button 
            onClick={() => setFilter('featured')}
            className={`py-2 px-6 rounded-full ${
              filter === 'featured' 
                ? 'bg-cafe-noir text-white' 
                : 'bg-french-gray text-cafe-noir hover:bg-moss-green hover:text-white'
            }`}
          >
            Featured
          </button>
          <button 
            onClick={() => setFilter('budget')}
            className={`py-2 px-6 rounded-full ${
              filter === 'budget' 
                ? 'bg-cafe-noir text-white' 
                : 'bg-french-gray text-cafe-noir hover:bg-moss-green hover:text-white'
            }`}
          >
            Budget-Friendly
          </button>
          <button 
            onClick={() => setFilter('luxury')}
            className={`py-2 px-6 rounded-full ${
              filter === 'luxury' 
                ? 'bg-cafe-noir text-white' 
                : 'bg-french-gray text-cafe-noir hover:bg-moss-green hover:text-white'
            }`}
          >
            Luxury
          </button>
        </div>

        {/* Safari Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.slice(0, displayCount).map((safari) => {
            const currentPrice = getCurrentPrice(safari);
            
            return (
              <div 
                key={safari.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl transform hover:-translate-y-1"
              >
                <div className="relative h-100">
                  <img 
                    src={safari.coverImage} 
                    alt={safari.name} 
                    className="w-full h-full object-cover"
                  />
                  {safari.featured && (
                    <div className="absolute top-4 left-4 bg-gold-metallic text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  {safari.bestValue && (
                    <div className="absolute top-4 right-4 bg-moss-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </div>
                  )}
                  {currentPrice && (
                    <div className="absolute bottom-4 right-4 bg-cafe-noir text-white px-4 py-2 rounded-lg text-lg font-bold">
                      ${currentPrice.toFixed(2)}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <h2 className="text-xl font-bold text-cafe-noir flex-grow">{safari.name}</h2>
                    <span className="text-xs bg-alice-blue text-cafe-noir px-2 py-1 rounded">
                      {safari.id}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-sm">
                    <span className="bg-cornsilk text-cafe-noir px-3 py-1 rounded-full">
                      {safari.duration}
                    </span>
                    <span className="ml-2 bg-alice-blue text-cafe-noir px-3 py-1 rounded-full">
                      {safari.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{safari.description}</p>
                  
                  {safari.destinations && (
                    <div className="mb-4">
                      <h3 className="font-medium text-cafe-noir mb-2">Destinations:</h3>
                      <div className="flex flex-wrap gap-2">
                        {safari.destinations.map((dest, idx) => (
                          <span key={idx} className="bg-columbia-blue text-xs px-2 py-1 rounded">
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h3 className="font-medium text-cafe-noir mb-2">Highlights:</h3>
                    <ul className="space-y-1">
                      {safari.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-hunyadi-yellow mr-2">•</span>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </li>
                      ))}
                      {safari.highlights.length > 3 && (
                        <li className="text-sm text-princeton-orange">+ more</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full bg-hunyadi-yellow hover:bg-princeton-orange text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                      <span>View Details</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Load More Button */}
        {filteredPackages.length > displayCount && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setDisplayCount(prev => prev + 3)}
              className="bg-cafe-noir hover:bg-moss-green text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Load More Safaris
            </button>
          </div>
        )}
        
        {/* Season Notes */}
        <div className="mt-16 bg-cornsilk rounded-xl p-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-cafe-noir mb-4">Travel Seasons Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-cafe-noir mb-2">Peak Season (July-October)</h4>
              <p className="text-sm text-gray-700">
                The best wildlife viewing time coinciding with the Great Wildebeest Migration in the Masai Mara.
                Higher prices reflect the premium experience and guaranteed wildlife sightings.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-cafe-noir mb-2">Green Season (April-June)</h4>
              <p className="text-sm text-gray-700">
                Excellent value with lower prices and fewer tourists. Landscapes are lush and green,
                perfect for photography. Some afternoon rains possible.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-cafe-noir mb-2">Shoulder Season (Jan-March)</h4>
              <p className="text-sm text-gray-700">
                Good wildlife viewing with moderate pricing. Warm days and cooler nights with generally dry conditions.
                Bird watching is excellent during this period.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-cafe-noir mb-2">Low Season (Nov-Dec)</h4>
              <p className="text-sm text-gray-700">
                Short rains may occur but often don't impact game drives. Good value pricing with the
                benefit of fewer visitors in the parks. Lush landscapes starting to emerge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KenyaSafari;