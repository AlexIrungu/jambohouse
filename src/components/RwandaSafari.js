import React, { useState } from 'react';

const RwandaSafari = () => {
  const [visiblePackages, setVisiblePackages] = useState(6);
  const [selectedSeason, setSelectedSeason] = useState('high');
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const rwandaSafaris = [
    {
      id: "JT045-1",
      code: "JT045",
      name: "Classic Rwanda Safari - Premium",
      type: "luxury",
      featured: true,
      duration: "7 Days / 6 Nights",
      destinations: ["Kigali", "Volcanoes National Park", "Lake Kivu", "Nyungwe"],
      description: "Experience the best of Rwanda with premium accommodations and exclusive wildlife encounters. This top mid-range safari offers the perfect blend of comfort and adventure.",
      highlights: [
        "Gorilla tracking with expert guides",
        "Luxury accommodations throughout",
        "Private transportation and dedicated guide",
        "Cultural immersion experiences"
      ],
      pricing: {
        high: {
          shared: 4582.18,
          single: 814.78
        },
        low: {
          shared: 4088.83,
          single: 732.55
        }
      },
      difficulty: "Moderate",
      bestValue: true
    },
    {
      id: "JT045-2",
      code: "JT045",
      name: "Classic Rwanda Safari - Mid-range",
      type: "midrange",
      featured: false,
      duration: "7 Days / 6 Nights",
      destinations: ["Kigali", "Volcanoes National Park", "Nyungwe"],
      description: "Discover Rwanda's beauty with comfortable mid-range accommodations. This safari provides excellent value while still offering exceptional wildlife experiences.",
      highlights: [
        "Gorilla trekking adventure",
        "Comfortable accommodations",
        "Guided nature walks",
        "Cultural village visits"
      ],
      pricing: {
        high: {
          shared: 2145.33,
          single: 478.40
        },
        low: {
          shared: 2145.33,
          single: 478.40
        }
      },
      difficulty: "Moderate",
      bestValue: false
    },
    {
      id: "JT045-3",
      code: "JT045",
      name: "Classic Rwanda Safari - Standard",
      type: "budget",
      featured: false,
      duration: "7 Days / 6 Nights",
      destinations: ["Kigali", "Volcanoes National Park"],
      description: "Experience Rwanda on a budget without compromising on wildlife encounters. This standard safari offers great value for conscious travelers.",
      highlights: [
        "Gorilla trekking experience",
        "Comfortable standard accommodations",
        "Group transportation with English-speaking guide",
        "Local cuisine experiences"
      ],
      pricing: {
        high: {
          shared: 1891.18,
          single: 321.43
        },
        low: {
          shared: 1891.18,
          single: 321.43
        }
      },
      difficulty: "Moderate-Challenging",
      bestValue: false
    },
    {
      id: "JT046-1",
      code: "JT046",
      name: "Two Nights / Three Days Gorilla in the Mist - Premium",
      type: "luxury",
      featured: true,
      duration: "3 Days / 2 Nights",
      destinations: ["Kigali", "Volcanoes National Park"],
      description: "A quick but profound gorilla trekking experience with premium accommodations at the Kigali Serena Hotel. Perfect for travelers with limited time.",
      highlights: [
        "Gorilla trek permit included ($2,242.50)",
        "Premium accommodation at Kigali Serena Hotel",
        "Private transportation",
        "Expert local guides"
      ],
      pricing: {
        high: {
          shared: 1188.53 + 2242.50,
          single: 396.18 + 2242.50
        },
        low: {
          shared: 1188.53 + 2242.50,
          single: 396.18 + 2242.50
        }
      },
      difficulty: "Challenging",
      bestValue: false
    },
    {
      id: "JT046-2",
      code: "JT046",
      name: "Two Nights / Three Days Gorilla in the Mist - Standard",
      type: "midrange",
      featured: false,
      duration: "3 Days / 2 Nights",
      destinations: ["Kigali", "Volcanoes National Park"],
      description: "An essential gorilla trekking adventure with comfortable accommodations at Umutomo Hotel. Experience the magnificence of mountain gorillas on this compact safari.",
      highlights: [
        "Gorilla trek permit included ($2,242.50)",
        "Comfortable accommodation at Umutomo Hotel",
        "Shared transportation",
        "Professional guides"
      ],
      pricing: {
        high: {
          shared: 889.53 + 2242.50,
          single: 1719.25 + 2242.50
        },
        low: {
          shared: 889.53 + 2242.50,
          single: 1719.25 + 2242.50
        }
      },
      difficulty: "Challenging",
      bestValue: true
    },
    {
      id: "JT047-1",
      code: "JT047",
      name: "Three Nights / Four Days Gorilla in the Mist - Premium",
      type: "luxury",
      featured: true,
      duration: "4 Days / 3 Nights",
      destinations: ["Kigali", "Volcanoes National Park"],
      description: "A more immersive gorilla trekking experience with luxury stays at Kigali Serena Hotel and Mountain Gorilla View Lodge. Perfect for wildlife enthusiasts.",
      highlights: [
        "Gorilla trek permit included ($2,242.50)",
        "Premium accommodations at Kigali Serena & Mountain Gorilla View Lodge",
        "Private transportation throughout",
        "Additional wildlife activities available"
      ],
      pricing: {
        high: {
          shared: 1450.15 + 2242.50,
          single: 530.72 + 2242.50
        },
        low: {
          shared: 1450.15 + 2242.50,
          single: 530.72 + 2242.50
        }
      },
      difficulty: "Challenging",
      bestValue: false
    },
    {
      id: "JT047-2",
      code: "JT047",
      name: "Three Nights / Four Days Gorilla in the Mist - Standard",
      type: "midrange",
      featured: false,
      duration: "4 Days / 3 Nights",
      destinations: ["Kigali", "Volcanoes National Park"],
      description: "A comprehensive gorilla trekking adventure with comfortable stays at Umutomo Hotel and Mountain Gorilla View Lodge. Excellent value for your Rwanda experience.",
      highlights: [
        "Gorilla trek permit included ($2,242.50)",
        "Comfortable accommodations at Umutomo Hotel & Mountain Gorilla View Lodge",
        "Shared transportation",
        "Expert gorilla tracking guides"
      ],
      pricing: {
        high: {
          shared: 1143.67 + 2242.50,
          single: 306.47 + 2242.50
        },
        low: {
          shared: 1143.67 + 2242.50,
          single: 306.47 + 2242.50
        }
      },
      difficulty: "Challenging",
      bestValue: true
    },
    {
      id: "ADDON-1",
      code: "ADDON",
      name: "Chimp Trek Experience",
      type: "addon",
      featured: false,
      duration: "1 Day Activity",
      destinations: ["Nyungwe Forest"],
      description: "Add a memorable chimpanzee tracking experience to any of our Rwanda safari packages. Encounter these fascinating primates in their natural habitat.",
      highlights: [
        "Professional chimp tracking guides",
        "Small group experience",
        "Transportation from lodge",
        "Safety briefing and equipment"
      ],
      pricing: {
        high: {
          shared: 134.55,
          single: 134.55
        },
        low: {
          shared: 134.55,
          single: 134.55
        }
      },
      difficulty: "Moderate",
      bestValue: false
    },
    {
      id: "ADDON-2",
      code: "ADDON",
      name: "Rwanda Nature Package",
      type: "addon",
      featured: false,
      duration: "1-2 Days Activities",
      destinations: ["Nyungwe Forest", "Volcanoes National Park"],
      description: "Enhance your Rwanda safari with our nature package including canopy walks, waterfall hikes, and colobus monkey trekking.",
      highlights: [
        "Canopy Hike ($89.70)",
        "Waterfall Hike ($74.75)",
        "Colobus Monkeys Trek ($89.70)",
        "Expert local naturalist guides"
      ],
      pricing: {
        high: {
          shared: 89.70 + 89.70 + 74.75,
          single: 89.70 + 89.70 + 74.75
        },
        low: {
          shared: 89.70 + 89.70 + 74.75,
          single: 89.70 + 89.70 + 74.75
        }
      },
      difficulty: "Easy to Moderate",
      bestValue: false
    }
  ];

  const seasons = [
    { id: 'high', name: 'High Season (Jul-Oct)', description: 'Peak wildlife viewing with optimal weather conditions. Perfect for gorilla trekking with clearer trails.' },
    { id: 'low', name: 'Low Season (Nov-Jun)', description: 'Fewer tourists and lower rates. Some trails may be muddier during rainy periods but still excellent wildlife viewing.' }
  ];

  const filters = [
    { id: 'all', name: 'All Safaris' },
    { id: 'featured', name: 'Featured' },
    { id: 'budget', name: 'Budget-Friendly' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'addon', name: 'Add-ons' }
  ];

  const filteredSafaris = rwandaSafaris.filter(safari => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'featured') return safari.featured;
    return safari.type === selectedFilter;
  });

  const getDifficultyColor = (difficulty) => {
    if (difficulty.includes('Easy')) return 'bg-moss-green';
    if (difficulty.includes('Moderate')) return 'bg-hunyadi-yellow';
    if (difficulty.includes('Challenging')) return 'bg-princeton-orange';
    return 'bg-moss-green';
  };

  const handleLoadMore = () => {
    setVisiblePackages(visiblePackages + 3);
  };

  return (
    <div className="bg-eggshell min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-cafe-noir h-96">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-eggshell mb-4">Discover Rwanda's Natural Wonders</h1>
          <p className="text-xl text-alice-blue mb-8 max-w-2xl">Experience unforgettable gorilla trekking, breathtaking landscapes, and vibrant culture in the Land of a Thousand Hills</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-hunyadi-yellow hover:bg-gold-metallic text-cafe-noir px-6 py-3 rounded-full font-semibold transition">Plan Your Safari</button>
            <button className="bg-transparent border-2 border-alice-blue text-alice-blue px-6 py-3 rounded-full font-semibold hover:bg-alice-blue hover:text-cafe-noir transition">View Travel Guide</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Season Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-cafe-noir mb-6 text-center">Rwanda Travel Seasons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {seasons.map(season => (
              <div 
                key={season.id}
                className={`p-6 rounded-lg shadow-md cursor-pointer transition-all ${selectedSeason === season.id ? 'bg-cornsilk border-2 border-hunyadi-yellow' : 'bg-white hover:shadow-lg'}`}
                onClick={() => setSelectedSeason(season.id)}
              >
                <h3 className="text-xl font-semibold text-cafe-noir flex items-center">
                  {selectedSeason === season.id && (
                    <span className="mr-2 text-hunyadi-yellow">✓</span>
                  )}
                  {season.name}
                </h3>
                <p className="text-french-gray mt-2">{season.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-5 py-2 rounded-full transition ${
                selectedFilter === filter.id
                  ? 'bg-cafe-noir text-eggshell'
                  : 'bg-french-gray text-cafe-noir hover:bg-moss-green hover:text-white'
              }`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Safari Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSafaris.slice(0, visiblePackages).map((safari) => (
            <div
              key={safari.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition hover:translate-y-[-5px]"
            >
              {/* Package Header */}
              <div className="bg-cafe-noir text-eggshell p-4 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-moss-green text-white text-xs px-2 py-1 rounded font-medium mb-2">
                      {safari.code}
                    </span>
                    <h2 className="text-xl font-bold leading-tight">{safari.name}</h2>
                  </div>
                  {safari.featured && (
                    <span className="bg-hunyadi-yellow text-cafe-noir text-xs px-2 py-1 rounded font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {safari.destinations.map((destination, index) => (
                    <span key={index} className="bg-brown-sugar bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                      {destination}
                    </span>
                  ))}
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-cafe-noir">{safari.duration}</span>
                  <span className={`text-xs px-2 py-1 rounded text-white font-medium ${getDifficultyColor(safari.difficulty)}`}>
                    {safari.difficulty}
                  </span>
                </div>
                
                <p className="text-french-gray mb-4 text-sm">{safari.description}</p>
                
                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-cafe-noir font-semibold mb-2 text-sm">Highlights:</h3>
                  <ul className="space-y-1">
                    {safari.highlights.map((highlight, index) => (
                      <li key={index} className="text-french-gray text-sm flex items-start">
                        <span className="text-moss-green mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Pricing */}
                <div className="bg-cornsilk rounded p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-cafe-noir font-semibold text-sm">Pricing ({selectedSeason === 'high' ? 'High Season' : 'Low Season'}):</h3>
                    {safari.bestValue && (
                      <span className="bg-claret text-white text-xs px-2 py-1 rounded">Best Value</span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-french-gray text-sm">Shared:</span>
                      <span className="text-cafe-noir font-bold">${safari.pricing[selectedSeason].shared.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-french-gray text-sm">Single Supplement:</span>
                      <span className="text-cafe-noir font-bold">${safari.pricing[selectedSeason].single.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className="w-full bg-moss-green hover:bg-asparagus text-white py-3 rounded-lg transition font-medium">
                  Book This Safari
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {filteredSafaris.length > visiblePackages && (
          <div className="text-center mt-12">
            <button 
              onClick={handleLoadMore}
              className="bg-transparent border-2 border-cafe-noir text-cafe-noir px-6 py-3 rounded-full font-semibold hover:bg-cafe-noir hover:text-eggshell transition"
            >
              Load More Packages
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RwandaSafari;