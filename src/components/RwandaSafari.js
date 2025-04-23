import React, { useState } from 'react';
import { Calendar, Mountain, Check, MapPin, ArrowRight, DollarSign, Star, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom'

 // JSON data for all tour packages
 export const tourData = {
  "tour_packages": [
    {
      "tour_code": "JT046",
      "name": "Two Nights/Three Days Gorillas in the Midst",
      "destination": "Rwanda",
      "duration": {
        "nights": 2,
        "days": 3
      },
      "highlight": "Mountain Gorilla Tracking",
      "itinerary": [
        {
          "day": 1,
          "location": "Kigali",
          "accommodation": "Novotel Umubano/Kigali Serena",
          "board": "BB",
          "activities": ["Flight Transfer", "City Tour", "Genocide Memorial Museum Visit", "Leisure"]
        },
        {
          "day": 2,
          "location": "Ruhengeri/Kigali",
          "accommodation": "Novotel Umubano/Kigali Serena",
          "board": "L-BB",
          "activities": ["Gorilla Trekking", "Visit Twin Lakes Butera & Ruhondo"]
        },
        {
          "day": 3,
          "location": "Departure",
          "activities": ["Transfer to Airport", "Departure Flight"]
        }
      ],
      "description": "Visit the mountain gorilla population in Parc National des Volcans, currently with only 700 individuals remaining."
    },
    {
      "tour_code": "JT047",
      "name": "Three Nights/Four Days Gorillas in the Midst",
      "destination": "Rwanda",
      "duration": {
        "nights": 3,
        "days": 4
      },
      "highlight": "Mountain Gorilla Tracking",
      "itinerary": [
        {
          "day": 1,
          "location": "Kigali",
          "accommodation": "Novotel Umubano/Kigali Serena",
          "board": "BB",
          "activities": ["Flight Transfer", "City Tour", "Genocide Memorial Museum Visit", "Leisure"]
        },
        {
          "day": 2,
          "location": "Ruhengeri/Kigali",
          "accommodation": "Gorilla Mountain View Lodge",
          "board": "",
          "activities": ["Gorilla Trekking", "Visit Twin Lakes"]
        },
        {
          "day": 3,
          "location": "Ruhengeri/Kigali",
          "accommodation": "Novotel Umubano/Kigali Serena",
          "board": "L-BB",
          "activities": ["Second Gorilla Trekking", "Different Gorilla Family"]
        },
        {
          "day": 4,
          "location": "Departure",
          "activities": ["Transfer to Airport", "Departure Flight"]
        }
      ],
      "description": "Extended gorilla tracking experience with visits to different gorilla families in Parc National des Volcans."
    },
    {
      "tour_code": "JT045",
      "name": "Classic Rwanda Safari",
      "destination": "Rwanda",
      "duration": {
        "nights": 5,
        "days": 6
      },
      "highlight": "Chimps and Gorilla Tracking",
      "itinerary": [
        {
          "day": 1,
          "location": "Nyungwe",
          "accommodation": "Gisakura Guest House",
          "board": "LDBB",
          "activities": ["Flight Transfer", "Visit Butare", "King's Palace", "National Museum"]
        },
        {
          "day": 2,
          "location": "Nyungwe",
          "accommodation": "Gisakura Guest House",
          "board": "LDBB",
          "activities": ["Chimpanzee and Primate Tracking", "Tea Plantation Visit"]
        },
        {
          "day": 3,
          "location": "Lake Kivu",
          "accommodation": "Lake Kivu Serena",
          "board": "LDBB",
          "activities": ["Second Chimp Tracking Attempt", "Drive to Lake Kivu"]
        },
        {
          "day": 4,
          "location": "Ruhengeri/Kinigi",
          "accommodation": "Gorilla Mountain View Lodge",
          "board": "LDBB",
          "activities": ["Leisure at Lake", "Drive to Ruhengeri"]
        },
        {
          "day": 5,
          "location": "Kigali",
          "accommodation": "Novotel Umubano/Kigali Serena",
          "board": "L-BB",
          "activities": ["Gorilla Tracking", "Twin Lakes Visit", "Drive to Kigali"]
        },
        {
          "day": 6,
          "location": "Departure",
          "activities": ["Transfer to Airport", "Departure Flight"]
        }
      ],
      "description": "Comprehensive safari combining chimps in Nyungwe Forest, Lake Kivu, and mountain gorillas in Virunga Mountains."
    },
    {
      "tour_code": "JT044",
      "name": "Machame Route",
      "destination": "Tanzania",
      "duration": {
        "nights": 7,
        "days": 8
      },
      "highlight": "Kilimanjaro Climbing",
      "itinerary": [
        {
          "day": 1,
          "location": "Moshi",
          "accommodation": "Springland Hotel/Similar",
          "board": "DBB",
          "activities": ["Transfer from Nairobi/Arusha", "Pre-climb Briefing"]
        },
        {
          "day": 2,
          "location": "Machame",
          "accommodation": "Machame Camp",
          "board": "LDBB",
          "activities": ["Begin Climb through Rainforest", "5-6 Hour Trek"]
        },
        {
          "day": 3,
          "location": "Shira",
          "accommodation": "Shira Camp",
          "board": "LDBB",
          "activities": ["6 Hour Ascent", "Reach 3800m Altitude"]
        },
        {
          "day": 4,
          "location": "Barranco",
          "accommodation": "Barranco Camp",
          "board": "LDBB",
          "activities": ["Climb to Lava Tower", "Descent to Barranco Valley"]
        },
        {
          "day": 5,
          "location": "Barafu",
          "accommodation": "Barafu Camp",
          "board": "LDBB",
          "activities": ["Climb Barranco Wall", "6-7 Hour Trek", "Night Summit Preparation"]
        },
        {
          "day": 6,
          "location": "Mweka",
          "accommodation": "Mweka Camp",
          "board": "LDBB",
          "activities": ["Early Summit Attempt", "Reach Uhuru Peak (5895m)", "Descent via Stella Point"]
        },
        {
          "day": 7,
          "location": "Moshi",
          "accommodation": "Springland Hotel/Similar",
          "board": "DBB",
          "activities": ["Final Descent", "Certificate Collection", "Return to Hotel"]
        },
        {
          "day": 8,
          "location": "Departure",
          "activities": ["Transfer to Airport", "Departure"]
        }
      ],
      "description": "Popular and scenic Kilimanjaro climbing route via Machame with good acclimatization profile."
    },
    {
      "tour_code": "JT043",
      "name": "Marangu Route",
      "destination": "Tanzania",
      "duration": {
        "nights": 6,
        "days": 7
      },
      "highlight": "Kilimanjaro Climbing",
      "itinerary": [
        {
          "day": 1,
          "location": "Moshi",
          "accommodation": "Springland Hotel/Similar",
          "board": "DBB",
          "activities": ["Transfer from Nairobi/Arusha", "Pre-climb Briefing"]
        },
        {
          "day": 2,
          "location": "Mandara",
          "accommodation": "Mandara Hut",
          "board": "LDBB",
          "activities": ["Drive to Marangu Gate", "5 Hour Forest Trek"]
        },
        {
          "day": 3,
          "location": "Horombo",
          "accommodation": "Horombo Hut",
          "board": "LDBB",
          "activities": ["Trek through Moorland", "6 Hour Walk"]
        },
        {
          "day": 4,
          "location": "Kibo",
          "accommodation": "Kibo Hut",
          "board": "LDBB",
          "activities": ["Cross Alpine Desert", "Acclimatization Day"]
        },
        {
          "day": 5,
          "location": "Horombo",
          "accommodation": "Horombo Hut",
          "board": "LDBB",
          "activities": ["Midnight Summit Attempt", "Reach Uhuru Peak (5895m)", "Descent to Horombo"]
        },
        {
          "day": 6,
          "location": "Moshi",
          "accommodation": "Springland Hotel/Similar",
          "board": "DBB",
          "activities": ["Descent to Marangu Gate", "Certificate Collection", "Return to Hotel"]
        },
        {
          "day": 7,
          "location": "Departure",
          "activities": ["Transfer to Airport", "Departure"]
        }
      ],
      "description": "The easiest and most popular route up Kilimanjaro with hut accommodations along the way."
    },
    {
      "tour_code": "JT048",
      "name": "Rwanda Gorilla Trekking",
      "destination": "Rwanda",
      "duration": {
        "nights": 3,
        "days": 4
      },
      "highlight": "Mountain Gorilla Tracking",
      "description": "Specialized eco-friendly gorilla trekking safaris with professional guides in the Virunga Mountains, where gorillas share 97% of our DNA. Tracking may take up to 2-4 hours with viewing time limited to one hour per visit.",
      "itinerary": [
        {
          "day": 1,
          "location": "Kigali",
          "accommodation": "Kigali Serena",
          "board": "BB",
          "activities": ["Airport Transfer", "City Tour", "Cultural Experience"]
        },
        {
          "day": 2,
          "location": "Volcanoes National Park",
          "accommodation": "Gorilla Mountain View Lodge",
          "board": "FB",
          "activities": ["Transfer to Park", "Park Briefing", "Nature Walks"]
        },
        {
          "day": 3,
          "location": "Volcanoes National Park",
          "accommodation": "Gorilla Mountain View Lodge",
          "board": "FB",
          "activities": ["Gorilla Trekking", "Cultural Village Visit"]
        },
        {
          "day": 4,
          "location": "Departure",
          "activities": ["Return to Kigali", "Departure Flight"]
        }
      ]
    },
    {
      "tour_code": "JT049",
      "name": "Kilimanjaro Climbing - Alternative Routes",
      "destination": "Tanzania",
      "duration": {
        "nights": 6,
        "days": 7
      },
      "highlight": "Kilimanjaro Climbing",
      "description": "Mount Kilimanjaro stands at 5,895 meters and features six routes: Marangu, Machame, Shira, Rongai, Lemosho, and the Northern Circuit. The mountain has three volcanic cones: Kibo (5,895m), Mawenzi (5,149m), and Shira (3,962m).",
      "itinerary": [
        {
          "day": 1,
          "location": "Moshi",
          "accommodation": "Mountain Hotel",
          "board": "BB",
          "activities": ["Airport Transfer", "Equipment Check", "Briefing"]
        },
        {
          "day": 2,
          "location": "First Camp",
          "accommodation": "Mountain Camp",
          "board": "FB",
          "activities": ["Begin Trek", "Forest Zone"]
        },
        {
          "day": 3,
          "location": "Second Camp",
          "accommodation": "Mountain Camp",
          "board": "FB",
          "activities": ["Ascent", "Acclimatization"]
        },
        {
          "day": 4,
          "location": "High Camp",
          "accommodation": "Mountain Camp",
          "board": "FB",
          "activities": ["High Altitude Trek", "Summit Preparation"]
        },
        {
          "day": 5,
          "location": "Summit Day",
          "accommodation": "Descent Camp",
          "board": "FB",
          "activities": ["Summit Push", "Reach Uhuru Peak", "Begin Descent"]
        },
        {
          "day": 6,
          "location": "Moshi",
          "accommodation": "Mountain Hotel",
          "board": "BB",
          "activities": ["Final Descent", "Certificate Ceremony"]
        },
        {
          "day": 7,
          "location": "Departure",
          "activities": ["Airport Transfer", "Departure"]
        }
      ]
    }
  ],
  "gorilla_tracking_info": {
    "location": "Parc National des Volcans (Volcanoes National Park)",
    "distance_from_kigali": "91 km NW (2 hours drive)",
    "gorilla_population": "Approximately 700 individuals",
    "altitude_range": "3500m - 4507m",
    "habituated_families": 4,
    "visitor_limitations": {
      "people_per_family": 8,
      "total_daily_visitors": 32
    },
    "visit_rules": [
      "No spitting in the park",
      "No littering",
      "No coughing in direction of gorillas",
      "Only speak in whispers",
      "Do not point at gorillas",
      "Maintain 7m distance from gorillas",
      "No consuming food near gorillas",
      "If you get close to a gorilla, sit very still",
      "If a gorilla charges, do not look directly at it",
      "Stand perfectly still until the guide asks you to move back"
    ],
    "essentials": [
      "Long pants",
      "Good hiking boots",
      "Light waterproof coat",
      "Cap/hat",
      "Camera (no flash)",
      "Drinking water"
    ]
  }
};
export const rwandaPackages = tourData.tour_packages;
const RwandaSafari = () => {
 

  // Enhanced data structure for UI display
  const destinationImages = {
    "Kigali": "/api/placeholder/800/500",
    "Volcanoes National Park": "/api/placeholder/800/500",
    "Lake Kivu": "/api/placeholder/800/500",
    "Nyungwe": "/api/placeholder/800/500",
    "Nyungwe Forest": "/api/placeholder/800/500",
    "Ruhengeri": "/api/placeholder/800/500",
    "Tanzania": "/api/placeholder/800/500",
    "Kilimanjaro": "/api/placeholder/800/500",
    "Moshi": "/api/placeholder/800/500"
  };

  // Convert the tour packages to the format expected by the UI
  const allSafaris = tourData.tour_packages.map((tour, index) => {
    // Extract locations from itinerary
    const destinations = tour.itinerary 
      ? [...new Set(
          tour.itinerary
            .filter(day => day.location !== "Departure")
            .map(day => day.location.split('/')[0])
        )]
      : [tour.destination];

    // For pricing data (since it's not in the original JSON)
    const basePrice = 1000 + ((tour.duration.days || 5) * 500);
    
    return {
      id: index + 1,
      code: tour.tour_code.replace('???', String(48 + index - 6)),
      name: tour.name,
      destinations,
      duration: tour.duration.variable 
        ? "Customizable" 
        : `${tour.duration.nights} Nights / ${tour.duration.days} Days`,
      difficulty: tour.highlight.includes("Gorilla") ? "Moderate" : "Moderate-Challenging",
      description: tour.description,
      featured: index === 0 || index === 6, // First tour and customizable gorilla tour are featured
      bestValue: index === 1, // Second tour is best value
      type: tour.destination === "Tanzania" ? "luxury" 
           : tour.highlight.includes("Gorilla") && tour.duration?.days <= 4 ? "featured" 
           : "midrange",
      itinerary: tour.itinerary || [],
      highlights: [
        tour.highlight,
        ...(tour.itinerary 
          ? tour.itinerary.flatMap(day => day.activities).slice(0, 5)
          : tour.routes || [])
      ],
      pricing: {
        high: {
          shared: basePrice,
          single: basePrice * 1.5
        },
        low: {
          shared: basePrice * 0.85,
          single: basePrice * 1.3
        }
      }
    };
  });

  const [visiblePackages, setVisiblePackages] = useState(8); // Increased to show all packages initially
  const [selectedSeason, setSelectedSeason] = useState('high');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  
  // Season information with enhanced descriptions and icons
  const seasons = [
    { 
      id: 'high', 
      name: 'High Season (Jul-Oct)', 
      icon: <Sun className="w-4 h-4" />,
      description: 'Peak wildlife viewing with optimal weather conditions. Perfect for gorilla trekking with clearer trails. Expect higher prices but exceptional experiences with more wildlife sightings.',
      tips: ['Book permits 3-6 months in advance', 'Pack light rain gear for occasional showers', 'Early morning treks offer best photo opportunities']
    },
    { 
      id: 'low', 
      name: 'Low Season (Nov-Jun)', 
      icon: <Moon className="w-4 h-4" />,
      description: 'Fewer tourists and lower rates. Some trails may be muddier during rainy periods but still excellent wildlife viewing. The landscape is lush and green providing beautiful photography opportunities.',
      tips: ['More availability for permits', 'Pack waterproof boots and rain gear', 'Enjoy discounted accommodation rates']
    }
  ];

  // Enhanced filter options
  const filters = [
    { id: 'all', name: 'All Safaris' },
    { id: 'featured', name: 'Featured' },
    { id: 'budget', name: 'Budget-Friendly' },
    { id: 'midrange', name: 'Mid-Range' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'rwanda', name: 'Rwanda' },
    { id: 'tanzania', name: 'Tanzania' }
  ];

  // Filter safaris based on selected criteria
  const filteredSafaris = allSafaris.filter(safari => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'featured') return safari.featured;
    if (selectedFilter === 'rwanda') return safari.destinations.some(d => d.includes('Rwanda')) || safari.destinations.some(d => ['Kigali', 'Ruhengeri', 'Nyungwe', 'Lake Kivu', 'Volcanoes National Park'].includes(d));
    if (selectedFilter === 'tanzania') return safari.destinations.some(d => d.includes('Tanzania')) || safari.destinations.some(d => ['Kilimanjaro', 'Moshi'].includes(d));
    return safari.type === selectedFilter;
  });

  // Get color based on difficulty level
  const getDifficultyColor = (difficulty) => {
    if (difficulty.includes('Easy')) return 'bg-green-600';
    if (difficulty === 'Moderate') return 'bg-yellow-600';
    if (difficulty.includes('Moderate-Challenging')) return 'bg-orange-600';
    if (difficulty.includes('Challenging')) return 'bg-red-700';
    return 'bg-green-600';
  };

  // Get similar packages based on current selection
  const getSimilarPackages = (safari) => {
    if (!safari) return [];
    
    return allSafaris
      .filter(item => 
        item.id !== safari.id && 
        (item.type === safari.type || 
         item.destinations.some(dest => safari.destinations.includes(dest)))
      )
      .slice(0, 3);
  };

  // Handle load more button click
  const handleLoadMore = () => {
    setVisiblePackages(visiblePackages + 3);
  };

  // Handle package click to show detailed view
  const handlePackageClick = (safari) => {
    setSelectedPackage(safari);
    setShowDetailModal(true);
  };

  // Close detailed view modal
  const closeDetailModal = () => {
    setShowDetailModal(false);
  };

  // Format price for display
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[100vh] bg-amber-900">
        {/* Background image */}
        <img 
          src="https://images.unsplash.com/photo-1605559911928-e03606ea0dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJ3YW5kYXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Rwanda Landscape"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover Rwanda's Natural Wonders</h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-3xl">Experience unforgettable gorilla trekking, breathtaking landscapes, and vibrant culture in the Land of a Thousand Hills</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to='/enquire'>
            <button className="bg-yellow-600 hover:bg-yellow-500 text-amber-900 px-6 py-3 rounded-full font-bold transition transform hover:scale-105 shadow-lg">
              Plan Your Safari
            </button>

            </Link>
            
            <Link to='/rwandashow'>
            <button className="bg-transparent border-2 border-gray-200 text-gray-200 px-6 py-3 rounded-full font-bold hover:bg-gray-200 hover:text-amber-900 transition transform hover:scale-105">
              View Travel Guide
            </button>
            </Link>
            
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Season Selection with Enhanced Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Choose Your Rwanda Travel Season</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {seasons.map(season => (
              <div 
                key={season.id}
                className={`p-6 rounded-xl shadow-lg cursor-pointer transition-all transform hover:scale-105 ${
                  selectedSeason === season.id 
                    ? 'bg-yellow-50 border-2 border-yellow-600' 
                    : 'bg-white hover:shadow-xl'
                }`}
                onClick={() => setSelectedSeason(season.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-full ${
                    selectedSeason === season.id ? 'bg-yellow-600 text-white' : 'bg-gray-100'
                  }`}>
                    {season.icon}
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">
                    {season.name}
                  </h3>
                  {selectedSeason === season.id && (
                    <span className="ml-auto text-yellow-600">
                      <Check className="w-4 h-4" />
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 text-base">{season.description}</p>
                
                <div className="bg-blue-50 bg-opacity-40 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Travel Tips:</h4>
                  <ul className="space-y-2">
                    {season.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">
                          <Check className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full transition transform hover:scale-105 shadow-md text-base font-semibold ${
                selectedFilter === filter.id
                  ? 'bg-amber-900 text-white shadow-lg'
                  : 'bg-white text-amber-900 hover:bg-green-600 hover:text-white'
              }`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Safari Packages Grid with Enhanced Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSafaris.slice(0, visiblePackages).map((safari) => (
            <div
              key={safari.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
              onClick={() => handlePackageClick(safari)}
            >
              {/* Package Image/Header */}
              <div className="relative h-48 bg-amber-900">
                <img 
                  src={safari.destinations[0] ? destinationImages[safari.destinations[0]] || "/api/placeholder/400/300" : "/api/placeholder/400/300"}
                  alt={safari.destinations[0] || "Safari destination"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                
                {/* Package Type & Featured Badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
                    {safari.code}
                  </span>
                  {safari.featured && (
                    <span className="inline-flex items-center gap-1 bg-yellow-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
                      <Star className="w-4 h-4" />
                      Featured
                    </span>
                  )}
                </div>
                
                {/* Best Value Badge */}
                {safari.bestValue && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-red-700 text-white px-3 py-1 rounded-full font-semibold shadow-md">
                      Best Value
                    </span>
                  </div>
                )}
                
                {/* Package Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-xl font-bold text-white leading-tight">{safari.name}</h2>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                {/* Duration & Difficulty */}
                <div className="flex justify-between items-center mb-4">
                  <span className="flex items-center gap-1 text-amber-900 font-semibold">
                    <Calendar className="w-4 h-4 text-green-600" />
                    {safari.duration}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full text-white font-semibold ${getDifficultyColor(safari.difficulty)}`}>
                    <div className="flex items-center gap-1">
                      <Mountain className="w-4 h-4" />
                      {safari.difficulty}
                    </div>
                  </span>
                </div>
                
                {/* Destinations */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {safari.destinations.map((destination, index) => (
                      <span key={index} className="inline-flex items-center gap-1 bg-yellow-50 text-amber-900 text-sm px-2 py-1 rounded-full">
                        <MapPin className="w-3 h-3 text-amber-700" />
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Short Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {safari.description}
                </p>
                
                {/* Price & View Details */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">From per person (shared)</p>
                    <p className="text-xl font-bold text-amber-900">
                      {formatPrice(safari.pricing[selectedSeason].shared)}
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-1 text-green-600 hover:text-yellow-600 font-semibold transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {filteredSafaris.length > visiblePackages && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-amber-900 text-white px-6 py-3 rounded-full font-bold transition hover:bg-amber-800 transform hover:scale-105 shadow-lg"
              onClick={handleLoadMore}
            >
              Load More Safaris
            </button>
          </div>
        )}
      </div>

      {/* Detailed View Modal */}
      {showDetailModal && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto relative">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition"
              onClick={closeDetailModal}
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Header Image */}
            <div className="relative h-64">
              <img 
                src={selectedPackage.destinations[0] ? destinationImages[selectedPackage.destinations[0]] || "/api/placeholder/1200/400" : "/api/placeholder/1200/400"}
                alt={selectedPackage.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              
              {/* Package Type & Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
                  {selectedPackage.code}
                </span>
                
                {selectedPackage.featured && (
                  <span className="inline-flex items-center gap-1 bg-yellow-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
                    <Star className="w-4 h-4" />
                    Featured
                  </span>
                )}
                
                {selectedPackage.bestValue && (
                  <span className="inline-block bg-red-700 text-white px-3 py-1 rounded-full font-semibold shadow-md">
                    Best Value
                  </span>
                )}
              </div>
              
              {/* Title Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedPackage.name}</h2>
                <div className="flex flex-wrap gap-4 text-white">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedPackage.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mountain className="w-4 h-4" />
                    {selectedPackage.difficulty}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    From {formatPrice(selectedPackage.pricing[selectedSeason].shared)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="md:col-span-2">
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">Overview</h3>
                    <p className="text-gray-600">{selectedPackage.description}</p>
                  </div>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedPackage.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">
                            <Check className="w-4 h-4" />
                          </span>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Itinerary if available */}
                  {selectedPackage.itinerary && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-amber-900 mb-3">Itinerary</h3>
                      {selectedPackage.itinerary.map((day, idx) => (
                        <div key={idx} className="mb-3 border-b border-gray-200 pb-3 last:border-0">
                          <h4 className="font-semibold text-amber-800">Day {day.day}: {day.location}</h4>
                          {day.accommodation && (
                            <p className="text-gray-600 text-sm">
                              <span className="font-medium">Accommodation:</span> {day.accommodation}
                            </p>
                          )}
                          {day.board && (
                            <p className="text-gray-600 text-sm">
                              <span className="font-medium">Board:</span> {day.board}
                            </p>
                          )}
                          <div className="mt-2">
                            <span className="font-medium text-gray-700">Activities:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {day.activities.map((activity, actIdx) => (
                                <span key={actIdx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                                  {activity}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Destinations */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">Destinations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedPackage.destinations.map((destination, index) => (
                        <div key={index} className="relative h-32 rounded-lg overflow-hidden group">
                          <img 
                            src={destinationImages[destination] || "/api/placeholder/400/300"}
                            alt={destination}
                            className="w-full h-full object-cover transition group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h4 className="text-white font-bold text-lg">{destination}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div>
                  {/* Price Box */}
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6 shadow-md">
                    <h3 className="text-lg font-bold text-amber-900 mb-3">Pricing</h3>
                    
                    {/* Season Toggle */}
                    <div className="flex border rounded overflow-hidden mb-4">
                      {seasons.map(season => (
                        <button
                          key={season.id}
                          className={`flex-1 py-2 px-2 text-center text-sm font-semibold ${
                            selectedSeason === season.id 
                              ? 'bg-yellow-600 text-white' 
                              : 'bg-white text-amber-900'
                          }`}
                          onClick={() => setSelectedSeason(season.id)}
                        >
                          {season.icon}
                          <span className="ml-1">{season.id.charAt(0).toUpperCase() + season.id.slice(1)}</span>
                        </button>
                      ))}
                    </div>
                    
                    {/* Pricing Details */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Per person (shared):</span>
                        <span className="font-bold text-amber-900">{formatPrice(selectedPackage.pricing[selectedSeason].shared)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Single occupancy:</span>
                        <span className="font-bold text-amber-900">{formatPrice(selectedPackage.pricing[selectedSeason].single)}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        * Prices include accommodation, activities, and specified meals.
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mb-6">
                  <Link 
  to={`/safaris/rwanda/book/${selectedPackage.code}`}
  state={{ selectedPackage: selectedPackage }}
  className="w-full"
>
  <button className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-bold shadow-md transition transform hover:scale-105">
    Book This Safari
  </button>
</Link>
                    
                  </div>
                  
                  {/* Enquiry Button */}
                  <div className="mb-6">
                    <button className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 rounded-lg font-bold shadow-md transition transform hover:scale-105">
                      Enquire Now
                    </button>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-amber-900 mb-3">Important Information</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">
                          <Check className="w-4 h-4" />
                        </span>
                        <span>Gorilla permits require advance booking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">
                          <Check className="w-4 h-4" />
                        </span>
                        <span>Moderate fitness level required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">
                          <Check className="w-4 h-4" />
                        </span>
                        <span>Customization available upon request</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Similar Packages */}
              {getSimilarPackages(selectedPackage).length > 0 && (
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Similar Safari Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {getSimilarPackages(selectedPackage).map((safari) => (
                      <div
                        key={safari.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer border border-gray-100"
                        onClick={() => {
                          setSelectedPackage(safari);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <div className="relative h-32">
                          <img 
                            src={safari.destinations[0] ? destinationImages[safari.destinations[0]] || "/api/placeholder/400/200" : "/api/placeholder/400/200"}
                            alt={safari.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <h4 className="text-white font-bold">{safari.name}</h4>
                          </div>
                        </div>
                        <div className="p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">{safari.duration}</span>
                            <span className="text-sm font-bold text-amber-900">{formatPrice(safari.pricing[selectedSeason].shared)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Footer CTA */}
              <div className="mt-6 text-center">
                <button
                  className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded-full font-bold hover:bg-green-600 hover:text-white transition shadow-md"
                  onClick={closeDetailModal}
                >
                  Back to All Safaris
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default RwandaSafari;