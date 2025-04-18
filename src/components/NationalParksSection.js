import React, { useState, useEffect } from 'react';
import { 
  ThumbsUp, 
  Heart, 
  Share2, 
  Map, 
  Calendar, 
  Award, 
  Info, 
  ArrowRight, 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Star,
  Users,
  MapPin,
  Clock,
  Sun,
  Moon,
  Cloud,
  Check,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NationalParksSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedParkId, setExpandedParkId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPark, setSelectedPark] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const parks = [
    // Tanzania Parks
    {
      id: 1,
      name: "Serengeti National Park",
      country: "Tanzania",
      region: "Northern Tanzania",
      description: "Home to the Great Migration, with endless plains and abundant wildlife including lions, elephants, and zebras.",
      fullDescription: "The Serengeti is Tanzania's oldest and most popular national park. Its name means 'endless plains' in the Maasai language. The park is famous for its annual migration of over 1.5 million wildebeest and 250,000 zebra. The ecosystem is also home to the 'Big Five' (elephant, lion, leopard, buffalo, rhino) and offers spectacular viewing opportunities year-round.",
      bestTimeToVisit: "June to October for the Great Migration river crossings",
      activities: ["Game drives", "Hot air balloon safaris", "Walking safaris", "Bird watching"],
      accomodation: ["Luxury lodges", "Tented camps", "Public campsites"],
      rating: 4.9,
      reviews: 1250,
      category: "tanzania",
      idealDuration: "3-7 days",
      difficulty: "Easy",
      highlights: ["Great Migration", "Big Five", "Endless Plains", "Sunset Views"],
      images: [
        "/api/placeholder/610/405",
        "/api/placeholder/620/410",
        "/api/placeholder/630/415"
      ],
      popularCombinations: ["Ngorongoro Conservation Area", "Tarangire National Park"],
      bestSeasons: {
        dry: "June-October",
        wet: "November-May",
        peak: "July-September"
      }
    },
    {
      id: 2,
      name: "Ngorongoro Conservation Area",
      country: "Tanzania",
      region: "Northern Tanzania",
      description: "A UNESCO World Heritage Site featuring a massive volcanic caldera with incredible wildlife density.",
      fullDescription: "The Ngorongoro Crater is often called 'Africa's Eden' and the '8th Natural Wonder of the World.' It's a deep volcanic crater and the largest unflooded and unbroken caldera in the world. The crater floor is home to approximately 25,000 large animals including black rhinos, hippos, and the densest known population of lions. The conservation area is also home to traditional Maasai pastoralists.",
      bestTimeToVisit: "June to September for clear skies and dry weather",
      activities: ["Game drives", "Cultural visits to Maasai villages", "Hiking", "Photography"],
      accomodation: ["Crater rim lodges", "Coffee farm stays", "Luxury tented camps"],
      rating: 4.8,
      reviews: 980,
      category: "tanzania",
      idealDuration: "2-3 days",
      difficulty: "Easy",
      highlights: ["Crater Views", "Big Five", "Maasai Culture", "Flamingos at Lake Magadi"],
      images: [
        "/api/placeholder/620/410",
        "/api/placeholder/630/415",
        "/api/placeholder/640/420"
      ],
      popularCombinations: ["Serengeti National Park", "Lake Manyara"],
      bestSeasons: {
        dry: "June-October",
        wet: "November-May",
        peak: "July-August"
      }
    },
    {
      id: 3,
      name: "Tarangire National Park",
      country: "Tanzania",
      region: "Northern Tanzania",
      description: "Famous for its massive elephant herds, ancient baobab trees, and seasonal marshes.",
      fullDescription: "Tarangire National Park is the sixth largest national park in Tanzania and is known for its elephant migration, diverse wildlife, and giant baobab trees. The park is named after the Tarangire River which crosses through the park and is the primary source of water for wild animals during the dry season. During this time, the concentration of animals around the river is almost unparalleled in Africa.",
      bestTimeToVisit: "July to October for best wildlife viewing",
      activities: ["Game drives", "Walking safaris", "Bird watching", "Night safaris"],
      accomodation: ["Tree house lodges", "Safari camps", "Luxury tents"],
      rating: 4.6,
      reviews: 780,
      category: "tanzania",
      idealDuration: "2-3 days",
      difficulty: "Easy",
      highlights: ["Elephant Herds", "Baobab Trees", "River Landscapes", "Bird Diversity"],
      images: [
        "/api/placeholder/630/415",
        "/api/placeholder/640/420",
        "/api/placeholder/650/425"
      ],
      popularCombinations: ["Serengeti National Park", "Ngorongoro Conservation Area"],
      bestSeasons: {
        dry: "June-October",
        wet: "November-May",
        peak: "July-September"
      }
    },
    
    // Kenya Parks
    {
      id: 4,
      name: "Masai Mara National Reserve",
      country: "Kenya",
      region: "Southwestern Kenya",
      description: "The northern extension of the Serengeti, famous for its exceptional populations of big cats and the Great Migration.",
      fullDescription: "The Masai Mara is one of Africa's most magnificent game reserves. The reserve is famous for its exceptional population of game and the annual Great Migration of wildebeest, zebra, and Thomson's gazelle from the Serengeti every year from July to October. The Mara has one of the highest lion densities in the world and is where over two million wildebeest, zebra, and antelope migrate annually.",
      bestTimeToVisit: "July to October for the Great Migration",
      activities: ["Game drives", "Hot air balloon safaris", "Masai village visits", "Photographic safaris"],
      accomodation: ["Luxury tented camps", "Safari lodges", "Bush camps"],
      rating: 4.9,
      reviews: 1150,
      category: "kenya",
      idealDuration: "3-4 days",
      difficulty: "Easy",
      highlights: ["Great Migration", "Big Cats", "Savannah Landscape", "Balloon Safaris"],
      images: [
        "/api/placeholder/640/420",
        "/api/placeholder/650/425",
        "/api/placeholder/660/430"
      ],
      popularCombinations: ["Amboseli National Park", "Lake Nakuru"],
      bestSeasons: {
        dry: "June-October",
        wet: "November-May",
        peak: "July-September"
      }
    },
    {
      id: 5,
      name: "Amboseli National Park",
      country: "Kenya",
      region: "Southern Kenya",
      description: "Known for large elephant herds and spectacular views of Mount Kilimanjaro across the border in Tanzania.",
      fullDescription: "Amboseli National Park offers some of the best wildlife viewing in Kenya with the backdrop of Africa's highest mountain, Mount Kilimanjaro. The park is famous for being the best place in Africa to get close to free-ranging elephants, with over 1,500 elephants in the park's ecosystem. The park also features five different habitats including the dried-up bed of Lake Amboseli, wetlands, savannah, and woodlands.",
      bestTimeToVisit: "June to October and January to February",
      activities: ["Game drives", "Elephant research visits", "Bird watching", "Photography"],
      accomodation: ["Luxury lodges", "Tented camps", "Budget accommodations"],
      rating: 4.7,
      reviews: 870,
      category: "kenya",
      idealDuration: "2-3 days",
      difficulty: "Easy",
      highlights: ["Mt. Kilimanjaro Views", "Elephant Herds", "Marshlands", "Cultural Encounters"],
      images: [
        "/api/placeholder/650/425",
        "/api/placeholder/660/430",
        "/api/placeholder/670/435"
      ],
      popularCombinations: ["Masai Mara", "Tsavo National Parks"],
      bestSeasons: {
        dry: "June-October & Jan-Feb",
        wet: "March-May & Nov-Dec",
        peak: "July-October"
      }
    },
    {
      id: 6,
      name: "Tsavo National Parks",
      country: "Kenya",
      region: "Southern Kenya",
      description: "Kenya's largest protected area comprising Tsavo East and Tsavo West, with diverse landscapes and wildlife.",
      fullDescription: "Tsavo East and Tsavo West National Parks together form one of the largest wildlife conservation areas in the world. Tsavo East is known for its herds of dust-red elephants, rhino, buffalo, lion, leopard, and crocodiles. Tsavo West is more mountainous and wetter, with palm-lined rivers, lush plains, and the famous Mzima Springs where hippos and crocodiles can be observed from an underwater viewing chamber.",
      bestTimeToVisit: "June to October and January to February",
      activities: ["Game drives", "Walking safaris", "Underwater viewing at Mzima Springs", "Rock climbing"],
      accomodation: ["Safari lodges", "Tented camps", "Public campsites"],
      rating: 4.6,
      reviews: 760,
      category: "kenya",
      idealDuration: "3-4 days",
      difficulty: "Moderate",
      highlights: ["Red Elephants", "Mzima Springs", "Lava Flows", "Diverse Landscapes"],
      images: [
        "/api/placeholder/660/430",
        "/api/placeholder/670/435",
        "/api/placeholder/680/440"
      ],
      popularCombinations: ["Amboseli National Park", "Diani Beach"],
      bestSeasons: {
        dry: "June-October & Jan-Feb",
        wet: "March-May & Nov-Dec",
        peak: "July-August"
      }
    },
    
    // Rwanda Parks
    {
      id: 7,
      name: "Volcanoes National Park",
      country: "Rwanda",
      region: "Northwestern Rwanda",
      description: "Misty forests home to endangered mountain gorillas and golden monkeys.",
      fullDescription: "Volcanoes National Park lies along the Virunga Mountains and is home to the endangered mountain gorilla. Made famous by the work of Dian Fossey, the park offers a unique opportunity to observe these gentle giants in their natural habitat. The park protects about 340 mountain gorillas – approximately half of the world's remaining population. The park also harbors golden monkeys, spotted hyenas, buffaloes, and over 200 bird species.",
      bestTimeToVisit: "June to September and December to February",
      activities: ["Gorilla trekking", "Golden monkey tracking", "Hiking", "Cultural experiences"],
      accomodation: ["Luxury lodges", "Mid-range hotels", "Budget guesthouses"],
      rating: 4.9,
      reviews: 890,
      category: "rwanda",
      idealDuration: "3-4 days",
      difficulty: "Challenging",
      highlights: ["Mountain Gorillas", "Golden Monkeys", "Volcano Trekking", "Dian Fossey's Karisoke Research Center"],
      images: [
        "/api/placeholder/670/435",
        "/api/placeholder/680/440",
        "/api/placeholder/690/445"
      ],
      popularCombinations: ["Nyungwe Forest", "Lake Kivu"],
      bestSeasons: {
        dry: "June-September & Dec-Feb",
        wet: "March-May & Oct-Nov",
        peak: "July-August"
      }
    },
    {
      id: 8,
      name: "Akagera National Park",
      country: "Rwanda",
      region: "Eastern Rwanda",
      description: "Rwanda's only savannah park featuring lakes, marshes, and diverse wildlife including the Big Five.",
      fullDescription: "Akagera National Park is Central Africa's largest protected wetland and the last remaining refuge for savannah-adapted species in Rwanda. The park has undergone a remarkable transformation since 2010, with the reintroduction of lions in 2015 and rhinos in 2017, making it a Big Five destination once again. The park features scenic savannah plains, woodlands, lakes, swamps, and rolling hills.",
      bestTimeToVisit: "June to September (dry season)",
      activities: ["Game drives", "Boat safaris", "Bird watching", "Behind-the-scenes conservation tours"],
      accomodation: ["Luxury safari lodge", "Mid-range accommodations", "Public campsite"],
      rating: 4.7,
      reviews: 560,
      category: "rwanda",
      idealDuration: "2-3 days",
      difficulty: "Easy",
      highlights: ["Big Five", "Wetland Ecosystems", "Conservation Success", "Boat Safaris"],
      images: [
        "/api/placeholder/680/440",
        "/api/placeholder/690/445",
        "/api/placeholder/700/450"
      ],
      popularCombinations: ["Volcanoes National Park", "Kigali City Tour"],
      bestSeasons: {
        dry: "June-September & Dec-Feb",
        wet: "March-May & Oct-Nov",
        peak: "July-August"
      }
    },
    {
      id: 9,
      name: "Nyungwe Forest National Park",
      country: "Rwanda",
      region: "Southwestern Rwanda",
      description: "One of Africa's oldest rainforests, home to chimpanzees, colobus monkeys, and a remarkable canopy walkway.",
      fullDescription: "Nyungwe Forest National Park is one of Africa's best preserved montane rainforests and one of the oldest on the continent. The forest is home to 13 primate species including chimpanzees and the Rwenzori colobus monkeys that can move in troops of up to 400 individuals. The park features East Africa's only canopy walkway, suspended 70 meters above the forest floor, offering an exhilarating perspective of the rainforest canopy.",
      bestTimeToVisit: "May to September (drier months)",
      activities: ["Chimpanzee trekking", "Canopy walkway", "Waterfall hikes", "Bird watching"],
      accomodation: ["Luxury forest lodge", "Mid-range accommodations"],
      rating: 4.8,
      reviews: 650,
      category: "rwanda",
      idealDuration: "2-3 days",
      difficulty: "Moderate",
      highlights: ["Canopy Walkway", "Chimpanzees", "Colobus Monkeys", "Waterfalls"],
      images: [
        "/api/placeholder/690/445",
        "/api/placeholder/700/450",
        "/api/placeholder/710/455"
      ],
      popularCombinations: ["Volcanoes National Park", "Lake Kivu"],
      bestSeasons: {
        dry: "May-September",
        wet: "October-April",
        peak: "June-August"
      }
    }
  ];
  
  useEffect(() => {
    // Generate recommendations based on popular parks
    const topRatedParks = [...parks]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
    setRecommendations(topRatedParks);
  }, []);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const openParkDetails = (park) => {
    setSelectedPark(park);
    setCurrentImageIndex(0);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPark(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedPark) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedPark.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedPark) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedPark.images.length - 1 : prevIndex - 1
      );
    }
  };

  const filteredParks = activeTab === 'all' ? parks : parks.filter(park => park.category === activeTab);

  const toggleParkExpansion = (id) => {
    if (expandedParkId === id) {
      setExpandedParkId(null);
    } else {
      setExpandedParkId(id);
    }
  };

  return (
    <section className="py-16 bg-cornsilk bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-16 bg-brown-sugar mr-4"></div>
            <p className="text-brown-sugar font-medium uppercase tracking-wider">Discover East Africa</p>
            <div className="h-1 w-16 bg-brown-sugar ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cafe-noir">Iconic National Parks</h2>
          <p className="text-cafe-noir text-lg mb-8">Explore the breathtaking wildlife sanctuaries across Kenya, Tanzania, and Rwanda, each offering unique ecosystems and unforgettable safari experiences.</p>
          
          {/* Country Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === 'all' ? 'bg-moss-green text-white' : 'bg-white text-cafe-noir hover:bg-moss-green hover:bg-opacity-20'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Parks
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === 'kenya' ? 'bg-moss-green text-white' : 'bg-white text-cafe-noir hover:bg-moss-green hover:bg-opacity-20'
              }`}
              onClick={() => setActiveTab('kenya')}
            >
              Kenya
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === 'tanzania' ? 'bg-moss-green text-white' : 'bg-white text-cafe-noir hover:bg-moss-green hover:bg-opacity-20'
              }`}
              onClick={() => setActiveTab('tanzania')}
            >
              Tanzania
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === 'rwanda' ? 'bg-moss-green text-white' : 'bg-white text-cafe-noir hover:bg-moss-green hover:bg-opacity-20'
              }`}
              onClick={() => setActiveTab('rwanda')}
            >
              Rwanda
            </button>
          </div>
        </div>

        {/* Featured Recommendations */}
        {activeTab === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-cafe-noir mb-6 text-center">Featured Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendations.map((park) => (
                <div key={`rec-${park.id}`} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-eggshell">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={park.images[0]} 
                      alt={park.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white mb-1">
                        <Star size={16} className="text-hunyadi-yellow mr-1 fill-hunyadi-yellow" />
                        <span className="font-bold">{park.rating}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">Editor's Choice</span>
                      </div>
                      <h4 className="text-white font-bold text-lg">{park.name}</h4>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-sm text-french-gray mb-2">
                      <MapPin size={14} className="mr-1" />
                      <span>{park.country}, {park.region}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {park.highlights.slice(0, 2).map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-eggshell text-cafe-noir px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => openParkDetails(park)}
                      className="w-full bg-asparagus hover:bg-moss-green text-white py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredParks.map((park) => (
            <div key={park.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={park.images[0]} 
                  alt={park.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-cafe-noir shadow-md">
                  {park.country}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div className="bg-hunyadi-yellow text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <ThumbsUp size={14} className="mr-1" />
                    <span>{park.rating}</span>
                  </div>
                  <div className="bg-white text-cafe-noir px-3 py-1 rounded-full text-sm ml-2">
                    {park.reviews} reviews
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-cafe-noir">{park.name}</h3>
                  <div className="flex space-x-2">
                    <button 
                      className={`${favorites.includes(park.id) ? 'text-claret' : 'text-asparagus hover:text-moss-green'}`}
                      onClick={() => toggleFavorite(park.id)}
                    >
                      <Heart size={18} fill={favorites.includes(park.id) ? '#990033' : 'none'} />
                    </button>
                    <button className="text-asparagus hover:text-moss-green">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center text-french-gray mb-4 text-sm">
                  <Map size={14} className="mr-1" />
                  <span>{park.region}</span>
                </div>
                
                <p className="text-cafe-noir mb-4">{park.description}</p>
                
                {expandedParkId === park.id && (
                  <div className="mt-4 pt-4 border-t border-eggshell animate-fadeIn">
                    <p className="text-cafe-noir mb-4">{park.fullDescription}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-asparagus font-medium mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>Best Time to Visit</span>
                      </div>
                      <p className="text-sm text-cafe-noir">{park.bestTimeToVisit}</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-asparagus font-medium mb-2">
                        <Award size={16} className="mr-2" />
                        <span>Activities</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {park.activities.map((activity, idx) => (
                          <span key={idx} className="text-xs bg-eggshell text-cafe-noir px-3 py-1 rounded-full">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-asparagus font-medium mb-2">
                        <Info size={16} className="mr-2" />
                        <span>Accommodation Options</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {park.accomodation.map((option, idx) => (
                          <span key={idx} className="text-xs bg-eggshell text-cafe-noir px-3 py-1 rounded-full">
                            {option}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-6">
                  <button 
                    className="text-asparagus hover:text-moss-green font-medium inline-flex items-center group"
                    onClick={() => openParkDetails(park)}
                  >
                    Explore Details
                    <ArrowRight 
                      className="ml-2 transition-transform group-hover:translate-x-1" 
                      size={16} 
                    />
                  </button>
                  
                  <Link 
                    to="/enquire" 
                    className="bg-moss-green hover:bg-asparagus text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center"
                  >
                    <Camera size={16} className="mr-2" />
                    Plan Safari
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center bg-brown-sugar hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all">
            View All Parks
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>

        {/* Modal */}
        {showModal && selectedPark && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="relative">
                {/* Image Gallery */}
                <div className="relative h-72 md:h-96">
                  <img 
                    src={selectedPark.images[currentImageIndex]} 
                    alt={selectedPark.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all"
                  >
                    <ChevronLeft size={20} className="text-cafe-noir" />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all"
                  >
                    <ChevronRight size={20} className="text-cafe-noir" />
                  </button>
                  
                  {/* Image counter */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white rounded-full px-3 py-1 text-sm">
                    {currentImageIndex + 1} / {selectedPark.images.length}
                  </div>
                  
                  {/* Close button */}
                  <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-eggshell transition-colors"
                  >
                    <X size={20} className="text-cafe-noir" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-cafe-noir">{selectedPark.name}</h2>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center text-hunyadi-yellow">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < Math.floor(selectedPark.rating) ? "fill-hunyadi-yellow" : "text-french-gray"} 
                            />
                          ))}
                          <span className="ml-1 text-cafe-noir font-bold">{selectedPark.rating}</span>
                        </div>
                        <span className="mx-2 text-french-gray">•</span>
                        <span className="text-cafe-noir">{selectedPark.reviews} reviews</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 mt-2 md:mt-0">
                      <button 
                        className={`flex items-center px-3 py-1 rounded-full border ${
                          favorites.includes(selectedPark.id) 
                            ? 'border-claret text-claret bg-claret bg-opacity-10' 
                            : 'border-asparagus text-asparagus hover:bg-asparagus hover:bg-opacity-10'
                        }`}
                        onClick={() => toggleFavorite(selectedPark.id)}
                      >
                        <Heart 
                          size={16} 
                          className="mr-1" 
                          fill={favorites.includes(selectedPark.id) ? '#990033' : 'none'} 
                        />
                        <span>{favorites.includes(selectedPark.id) ? 'Saved' : 'Save'}</span>
                      </button>
                      <button className="flex items-center px-3 py-1 rounded-full border border-asparagus text-asparagus hover:bg-asparagus hover:bg-opacity-10">
                        <Share2 size={16} className="mr-1" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center">
                      <MapPin size={18} className="text-asparagus mr-2" />
                      <div>
                        <p className="text-sm text-french-gray">Location</p>
                        <p className="font-medium text-cafe-noir">{selectedPark.region}, {selectedPark.country}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={18} className="text-asparagus mr-2" />
                      <div>
                        <p className="text-sm text-french-gray">Ideal Duration</p>
                        <p className="font-medium text-cafe-noir">{selectedPark.idealDuration}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Compass size={18} className="text-asparagus mr-2" />
                      <div>
                        <p className="text-sm text-french-gray">Difficulty</p>
                        <p className="font-medium text-cafe-noir">{selectedPark.difficulty}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-2">About {selectedPark.name}</h3>
                    <p className="text-cafe-noir">{selectedPark.fullDescription}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-3">Season Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-eggshell rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Sun size={18} className="text-hunyadi-yellow mr-2" />
                          <h4 className="font-medium text-cafe-noir">Dry Season</h4>
                        </div>
                        <p className="text-sm text-cafe-noir">{selectedPark.bestSeasons.dry}</p>
                      </div>
                      <div className="bg-eggshell rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Cloud size={18} className="text-columbia-blue mr-2" />
                          <h4 className="font-medium text-cafe-noir">Wet Season</h4>
                        </div>
                        <p className="text-sm text-cafe-noir">{selectedPark.bestSeasons.wet}</p>
                      </div>
                      <div className="bg-eggshell rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Users size={18} className="text-asparagus mr-2" />
                          <h4 className="font-medium text-cafe-noir">Peak Season</h4>
                        </div>
                        <p className="text-sm text-cafe-noir">{selectedPark.bestSeasons.peak}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-3">Highlights</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {selectedPark.highlights.map((highlight, idx) => (
                        <div key={idx} className="bg-moss-green bg-opacity-10 rounded-lg p-3 flex items-center">
                          <Check size={16} className="text-moss-green mr-2 flex-shrink-0" />
                          <span className="text-sm text-cafe-noir">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-3">Activities</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPark.activities.map((activity, idx) => (
                        <span key={idx} className="bg-eggshell text-cafe-noir px-4 py-2 rounded-full text-sm">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-3">Accommodation</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPark.accomodation.map((option, idx) => (
                        <span key={idx} className="bg-eggshell text-cafe-noir px-4 py-2 rounded-full text-sm">
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-3">Popular Combinations</h3>
                    <p className="text-cafe-noir mb-2">This park pairs well with visits to:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPark.popularCombinations.map((park, idx) => (
                        <span key={idx} className="bg-asparagus bg-opacity-10 text-asparagus px-4 py-2 rounded-full text-sm font-medium">
                          {park}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-eggshell pt-6 flex justify-between items-center">
                    <div>
                      <p className="text-cafe-noir">Want to explore {selectedPark.name}?</p>
                      <p className="text-french-gray text-sm">Our experts will help you plan the perfect safari</p>
                    </div>
                    <Link
                      to="/enquire" 
                      className="bg-brown-sugar hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center"
                    >
                      <Camera size={18} className="mr-2" />
                      Plan Your Safari
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NationalParksSection;