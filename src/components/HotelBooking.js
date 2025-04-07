import React, { useState, useEffect } from 'react';
import { 
  Star, 
  MapPin, 
  Users, 
  Car, 
  Calendar, 
  Filter, 
  ChevronDown,
  Search,
  Coffee,
  Wifi,
  Utensils,
  Waves,
  Umbrella,
  Sparkles,
  Heart
} from 'lucide-react';

// Amenity icon mapping
const amenityIcons = {
  "Spa": <Sparkles size={16} />,
  "Beach": <Waves size={16} />,
  "Pool": <Umbrella size={16} />,
  "Dining": <Utensils size={16} />,
  "Historic": <Coffee size={16} />,
  "BBQ": <Utensils size={16} />,
  "Wellness": <Sparkles size={16} />,
  "Eco": <Umbrella size={16} />,
  "Wifi": <Wifi size={16} />
};

const HotelCard = ({ image, name, rating, location, amenities, price }) => {
  const [favorited, setFavorited] = useState(false);
  
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <button 
          className={`absolute top-4 right-4 p-2 rounded-full ${favorited ? 'bg-red-500' : 'bg-white/80'} transition-colors`}
          onClick={() => setFavorited(!favorited)}
        >
          <Heart size={20} className={favorited ? 'text-white fill-current' : 'text-gray-500'} />
        </button>
        
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center mb-1 text-yellow-400">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            {[...Array(5 - rating)].map((_, i) => (
              <Star key={i} size={16} className="text-gray-300" />
            ))}
            <span className="ml-2 text-sm text-white/90">{rating} stars</span>
          </div>
          <h3 className="text-2xl font-bold drop-shadow-lg">{name}</h3>
          <div className="flex items-center mt-1">
            <MapPin className="mr-1 text-blue-300" size={14} />
            <span className="text-sm text-blue-100">{location}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-wrap gap-1">
            {amenities.map((amenity, index) => (
              <span 
                key={index} 
                className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full flex items-center"
              >
                {amenityIcons[amenity] && <span className="mr-1">{amenityIcons[amenity]}</span>}
                {amenity}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-900">
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-gray-500 text-sm ml-1">/ night</span>
          </div>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterDrawer = ({ 
  onClose, 
  isOpen, 
  amenityFilters, 
  setAmenityFilters,
  priceRange,
  setPriceRange,
  ratingFilter,
  setRatingFilter
}) => {
  const allAmenities = ["Beach", "Pool", "Spa", "Dining", "Historic", "BBQ", "Wellness", "Eco", "Wifi"];
  
  const toggleAmenity = (amenity) => {
    if (amenityFilters.includes(amenity)) {
      setAmenityFilters(amenityFilters.filter(a => a !== amenity));
    } else {
      setAmenityFilters([...amenityFilters, amenity]);
    }
  };
  
  return (
    <div className={`fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Filter Options</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Price Range</h4>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">${priceRange[0]}</span>
            <span className="text-gray-600">${priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="50"
            max="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Rating</h4>
          <div className="flex gap-2">
            {[3, 4, 5].map(stars => (
              <button
                key={stars}
                onClick={() => setRatingFilter(ratingFilter === stars ? null : stars)}
                className={`flex items-center px-3 py-2 rounded-lg border ${ratingFilter === stars ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
              >
                <span className="mr-1">{stars}+</span>
                <Star size={16} className="text-yellow-400" fill="currentColor" />
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-3">Amenities</h4>
          <div className="grid grid-cols-2 gap-2">
            {allAmenities.map(amenity => (
              <button
                key={amenity}
                onClick={() => toggleAmenity(amenity)}
                className={`flex items-center px-3 py-2 rounded-lg border ${amenityFilters.includes(amenity) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
              >
                {amenityIcons[amenity] && <span className="mr-2">{amenityIcons[amenity]}</span>}
                {amenity}
              </button>
            ))}
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="w-full mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

const HotelBooking = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [amenityFilters, setAmenityFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [ratingFilter, setRatingFilter] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(1);

  // Simulated hotels data with additional properties
  const hotels = [
    {
      name: "Serena Beach Resort & Spa",
      image: "/api/placeholder/400/250?text=Serena+Beach+Resort",
      location: "Mombasa, Kenya",
      rating: 5,
      amenities: ["Spa", "Beach", "Pool", "Wifi"],
      price: 299
    },
    {
      name: "The Karen Blixen Restaurant",
      image: "/api/placeholder/400/250?text=Karen+Blixen+Restaurant",
      location: "Nairobi, Kenya",
      rating: 4,
      amenities: ["Dining", "Historic", "Wifi"],
      price: 150
    },
    {
      name: "The Carnivore Restaurant",
      image: "/api/placeholder/400/250?text=Carnivore+Restaurant",
      location: "Nairobi, Kenya",
      rating: 4,
      amenities: ["Dining", "BBQ"],
      price: 120
    },
    {
      name: "Severin Sea Lodge",
      image: "/api/placeholder/400/250?text=Severin+Sea+Lodge",
      location: "Diani Beach, Kenya",
      rating: 4,
      amenities: ["Beach", "Pool", "Spa", "Wifi"],
      price: 230
    },
    {
      name: "Pinewood Beach Resort & Spa",
      image: "/api/placeholder/400/250?text=Pinewood+Beach+Resort",
      location: "Mombasa, Kenya",
      rating: 4,
      amenities: ["Spa", "Beach", "Wellness", "Wifi"],
      price: 250
    },
    {
      name: "Leopard Point Beach Resort",
      image: "/api/placeholder/400/250?text=Leopard+Point+Resort",
      location: "Malindi, Kenya",
      rating: 3,
      amenities: ["Beach", "Eco"],
      price: 180
    },
    {
      name: "Maasai Mara Serena Safari Lodge",
      image: "/api/placeholder/400/250?text=Maasai+Mara+Lodge",
      location: "Maasai Mara, Kenya",
      rating: 5,
      amenities: ["Eco", "Pool", "Wifi"],
      price: 350
    },
    {
      name: "Nairobi Serena Hotel",
      image: "/api/placeholder/400/250?text=Nairobi+Serena",
      location: "Nairobi, Kenya",
      rating: 5,
      amenities: ["Pool", "Spa", "Dining", "Wifi"],
      price: 280
    },
    {
      name: "Fairmont Mount Kenya Safari Club",
      image: "/api/placeholder/400/250?text=Fairmont+Mount+Kenya",
      location: "Mount Kenya, Kenya",
      rating: 5,
      amenities: ["Pool", "Spa", "Dining", "Eco"],
      price: 320
    }
  ];

  // Filtered hotels based on search, rating, amenities and price
  const filteredHotels = hotels.filter(hotel => {
    // Search filter
    const matchesSearch = 
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Rating filter
    const matchesRating = ratingFilter ? hotel.rating >= ratingFilter : true;
    
    // Amenity filter
    const matchesAmenities = amenityFilters.length === 0 || 
      amenityFilters.every(amenity => hotel.amenities.includes(amenity));
    
    // Price filter
    const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
    
    return matchesSearch && matchesRating && matchesAmenities && matchesPrice;
  });

  // Sort hotels
  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortConfig.key === 'price') {
      return sortConfig.direction === 'asc' ? a.price - b.price : b.price - a.price;
    }
    
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Sort options in the dropdown
  const sortOptions = [
    { key: 'name', label: 'Name' },
    { key: 'rating', label: 'Rating' },
    { key: 'price', label: 'Price' }
  ];

  const toggleSortDirection = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key ? (prev.direction === 'asc' ? 'desc' : 'asc') : 'asc'
    }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Discover Kenya</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect accommodations for your East African adventure
          </p>
        </div>

        {/* Search and filter section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search hotels or locations..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
            
            <div className="relative">
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
            
            <div className="relative">
              <select 
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
              <Users className="absolute left-3 top-3 text-gray-400" size={20} />
              <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setIsFilterOpen(true)}
                className="flex-1 flex items-center justify-center px-4 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <Filter className="mr-2" size={18} />
                Filters
              </button>
              
              <div className="relative group">
                <button 
                  className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ChevronDown className={`mr-2 transition-transform ${sortConfig.direction === 'desc' ? 'rotate-180' : ''}`} size={18} />
                  Sort
                </button>
                
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                  {sortOptions.map(option => (
                    <button
                      key={option.key}
                      onClick={() => toggleSortDirection(option.key)}
                      className={`w-full text-left px-4 py-2 hover:bg-blue-50 ${sortConfig.key === option.key ? 'font-medium text-blue-600' : ''}`}
                    >
                      {option.label} {sortConfig.key === option.key && (
                        sortConfig.direction === 'asc' ? '↑' : '↓'
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-700">
            {sortedHotels.length} {sortedHotels.length === 1 ? 'property' : 'properties'} found
          </h3>
          
          {amenityFilters.length > 0 && (
            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-500">Filtered by:</span>
              {amenityFilters.map(amenity => (
                <span 
                  key={amenity}
                  className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full flex items-center"
                >
                  {amenity}
                  <button 
                    onClick={() => setAmenityFilters(amenityFilters.filter(a => a !== amenity))}
                    className="ml-1 text-blue-500 hover:text-blue-700"
                  >
                    &times;
                  </button>
                </span>
              ))}
              
              <button 
                onClick={() => setAmenityFilters([])}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Hotel Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedHotels.map((hotel, index) => (
            <HotelCard 
              key={index}
              name={hotel.name}
              image={hotel.image}
              rating={hotel.rating}
              location={hotel.location}
              amenities={hotel.amenities}
              price={hotel.price}
            />
          ))}
        </div>
        
        {sortedHotels.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium text-gray-700 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your filters or search criteria</p>
          </div>
        )}
      </div>
      
      {/* Filter drawer */}
      <FilterDrawer 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        amenityFilters={amenityFilters}
        setAmenityFilters={setAmenityFilters}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      
      {/* Overlay for filter drawer */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsFilterOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default HotelBooking;