import { useState, useEffect } from 'react';
import { Search, MapPin, Star, Filter, ChevronDown, X, Info, Globe, Wifi, Coffee, CreditCard, Calendar, Users, Sunrise, Sunset, DollarSign, Tag, Compass, PanelLeft } from 'lucide-react';
import { hotelData } from './HotelData'; // Import the comprehensive hotel data
import { useNavigate } from 'react-router-dom'; // Add this import

// Main component
export default function HotelDirectory() {
  const navigate = useNavigate(); // Add this hook
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterPrice, setPriceFilter] = useState('All');
  const [hasContractRates, setHasContractRates] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);
  const [isContractFilterOpen, setIsContractFilterOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [selectedRatesLocation, setSelectedRatesLocation] = useState(null);
  const [selectedResidency, setSelectedResidency] = useState('nonResident');
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState('peak');
  
  // Extract unique categories from hotel data
  const uniqueCategories = ['All', ...new Set(hotelData.map(hotel => hotel.category))].sort();
  
  // Extract unique price categories
  const priceCategories = ['All', 'Budget', 'Mid-range', 'Premium', 'Ultra Luxury'];
  
  // Seasons mapping for display
  const seasonMap = {
    peak: 'Peak Season',
    shoulder: 'Shoulder Season',
    low: 'Low Season',
    christmas: 'Christmas & New Year'
  };
  
  // Initialize with our comprehensive data
  useEffect(() => {
    setHotels(hotelData);
  }, []);
  
  // Reset selected rates data when hotel changes
  useEffect(() => {
    if (selectedHotel && selectedHotel.hasContractRates) {
      const firstLocation = Object.keys(selectedHotel.contractRates).filter(key => key !== 'extras')[0];
      setSelectedRatesLocation(firstLocation);
      
      if (firstLocation) {
        const residencyOptions = Object.keys(selectedHotel.contractRates[firstLocation]);
        setSelectedResidency(residencyOptions[0]);
        
        if (residencyOptions[0]) {
          const accommodationOptions = Object.keys(selectedHotel.contractRates[firstLocation][residencyOptions[0]]);
          setSelectedAccommodation(accommodationOptions[0]);
        }
      }
    }
  }, [selectedHotel]);
  
  // Filter hotels based on search term, category, price and contract rates
  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || hotel.category === filterCategory;
    const matchesPrice = filterPrice === 'All' || hotel.priceCategory === filterPrice;
    const matchesContract = !hasContractRates || hotel.hasContractRates === true;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesContract;
  });
  
  // Function to display appropriate amenity icon
  const getAmenityIcon = (amenity) => {
    if (amenity.toLowerCase().includes('wi-fi')) return <Wifi size={16} />;
    if (amenity.toLowerCase().includes('restaurant')) return <Coffee size={16} />;
    if (amenity.toLowerCase().includes('pool')) return <img src="/api/placeholder/16/16" alt="Pool" />;
    if (amenity.toLowerCase().includes('spa')) return <img src="/api/placeholder/16/16" alt="Spa" />;
    if (amenity.toLowerCase().includes('game')) return <Compass size={16} />;
    return <Info size={16} />;
  };
  
  // Get price display for rates
  const getPrice = (rateObject, type) => {
    if (!rateObject) return 'N/A';
    
    if (typeof rateObject === 'object' && !Array.isArray(rateObject)) {
      return rateObject[type] || 'N/A';
    }
    
    return rateObject;
  };
  
  return (
    <div className="min-h-screen bg-alice-blue">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-cafe-noir to-brown-sugar">
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <img src="/api/placeholder/1600/600" alt="Safari landscape" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Jambo Travel House Holidays</h1>
          <p className="text-xl text-cornsilk max-w-2xl">Experience the majesty of East Africa's wildlife and landscapes with our handpicked collection of luxury safari accommodations</p>
          <div className="mt-8 flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-fit px-6 py-3 border border-white border-opacity-30">
            <Globe size={24} className="text-mindaro mr-3" />
            <span className="text-white text-lg font-medium">Unforgettable Safari Experiences Since 1995</span>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="bg-white py-6 shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-2/5">
              <input
                type="text"
                placeholder="Search accommodations by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-french-gray focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow"
              />
              <Search className="absolute left-3 top-3.5 text-cafe-noir" size={20} />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-cafe-noir"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              {/* Category Filter */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setIsFilterOpen(!isFilterOpen);
                    setIsPriceFilterOpen(false);
                    setIsContractFilterOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-moss-green text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <Filter size={18} />
                  <span className="hidden sm:inline">Category:</span> {filterCategory}
                  <ChevronDown size={18} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isFilterOpen && (
                  <div className="absolute z-30 mt-1 w-56 max-h-64 overflow-y-auto bg-white rounded-md shadow-lg border border-french-gray">
                    <ul className="py-1">
                      {uniqueCategories.map(category => (
                        <li 
                          key={category}
                          className={`px-4 py-2 cursor-pointer hover:bg-cornsilk transition-colors ${filterCategory === category ? 'bg-cornsilk text-cafe-noir font-medium' : ''}`}
                          onClick={() => {
                            setFilterCategory(category);
                            setIsFilterOpen(false);
                          }}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Price Filter */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setIsPriceFilterOpen(!isPriceFilterOpen);
                    setIsFilterOpen(false);
                    setIsContractFilterOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-hunyadi-yellow text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <CreditCard size={18} />
                  <span className="hidden sm:inline">Price:</span> {filterPrice}
                  <ChevronDown size={18} className={`transition-transform ${isPriceFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isPriceFilterOpen && (
                  <div className="absolute z-30 mt-1 w-48 bg-white rounded-md shadow-lg border border-french-gray">
                    <ul className="py-1">
                      {priceCategories.map(price => (
                        <li 
                          key={price}
                          className={`px-4 py-2 cursor-pointer hover:bg-cornsilk transition-colors ${filterPrice === price ? 'bg-cornsilk text-cafe-noir font-medium' : ''}`}
                          onClick={() => {
                            setPriceFilter(price);
                            setIsPriceFilterOpen(false);
                          }}
                        >
                          {price}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Contract Rates Filter */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setIsContractFilterOpen(!isContractFilterOpen);
                    setIsFilterOpen(false);
                    setIsPriceFilterOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 ${hasContractRates ? 'bg-brown-sugar' : 'bg-french-gray'} text-white rounded-lg hover:bg-opacity-90 transition-all`}
                >
                  <Tag size={18} />
                  <span className="hidden sm:inline">Contract Rates</span>
                  <ChevronDown size={18} className={`transition-transform ${isContractFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isContractFilterOpen && (
                  <div className="absolute z-30 mt-1 w-48 bg-white rounded-md shadow-lg border border-french-gray">
                    <ul className="py-1">
                      <li 
                        className={`px-4 py-2 cursor-pointer hover:bg-cornsilk transition-colors ${!hasContractRates ? 'bg-cornsilk text-cafe-noir font-medium' : ''}`}
                        onClick={() => {
                          setHasContractRates(false);
                          setIsContractFilterOpen(false);
                        }}
                      >
                        All Properties
                      </li>
                      <li 
                        className={`px-4 py-2 cursor-pointer hover:bg-cornsilk transition-colors ${hasContractRates ? 'bg-cornsilk text-cafe-noir font-medium' : ''}`}
                        onClick={() => {
                          setHasContractRates(true);
                          setIsContractFilterOpen(false);
                        }}
                      >
                        With Contract Rates
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Clear Filters Button */}
              {(filterCategory !== 'All' || filterPrice !== 'All' || searchTerm || hasContractRates) && (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setFilterCategory('All');
                    setPriceFilter('All');
                    setHasContractRates(false);
                  }}
                  className="flex items-center gap-1 px-3 py-2 bg-claret text-white rounded-lg hover:bg-opacity-90"
                >
                  <X size={16} />
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Hotels Section */}
      {filterCategory === 'All' && filterPrice === 'All' && searchTerm === '' && !hasContractRates && (
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-cafe-noir flex items-center">
                <Star className="text-gold-metallic mr-2" /> Featured Safari Properties
              </h2>
              <span className="text-sm text-french-gray bg-eggshell px-3 py-1 rounded-full">
                Hand-selected by our experts
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.filter(hotel => hotel.featured).slice(0, 6).map(hotel => (
  <div 
    key={hotel.id}
    className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-french-gray border-opacity-20 h-80"
  >
    {/* Full-size image background */}
    <img 
      src={hotel.imageUrl || "/api/placeholder/400/300"} 
      alt={hotel.name} 
      className="w-full h-full object-cover"
    />
    
    {/* Dark gradient overlay to make text readable */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
    
    {/* Rating badge */}
    <div className="absolute top-4 right-4 bg-gold-metallic text-white px-2 py-1 rounded-full flex items-center z-10">
      <Star size={16} className="mr-1" />
      <span>{hotel.rating}</span>
    </div>
    
    {/* Contract rates badge */}
    {hotel.hasContractRates && (
      <div className="absolute top-4 left-4 bg-brown-sugar bg-opacity-90 text-white px-2 py-1 rounded-full text-xs flex items-center z-10">
        <Tag size={14} className="mr-1" />
        Contract Rates
      </div>
    )}
    
    {/* Content overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
      <h3 className="text-xl font-semibold text-white mb-1">{hotel.name}</h3>
      <div className="flex items-center text-gray-200 mb-2">
        <MapPin size={16} className="mr-1" />
        <span>{hotel.location}</span>
      </div>
      <p className="text-sm text-gray-300 mb-3 line-clamp-2">{hotel.description.substring(0, 100)}...</p>
      
      {/* Amenities */}
      <div className="flex flex-wrap gap-2 mb-3">
        {hotel.amenities.slice(0, 3).map((amenity, index) => (
          <span key={index} className="flex items-center text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
            {getAmenityIcon(amenity)}
            <span className="ml-1">{amenity}</span>
          </span>
        ))}
        {hotel.amenities.length > 3 && (
          <span className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
            +{hotel.amenities.length - 3} more
          </span>
        )}
      </div>
      
      {/* Bottom row */}
      <div className="flex justify-between items-center">
        <span className={`text-xs font-medium px-2 py-1 rounded-full
          ${hotel.priceCategory === 'Budget' ? 'bg-moss-green bg-opacity-60 text-white' : 
            hotel.priceCategory === 'Mid-range' ? 'bg-hunyadi-yellow bg-opacity-60 text-white' : 
            hotel.priceCategory === 'Premium' ? 'bg-brown-sugar bg-opacity-60 text-white' : 
            'bg-claret bg-opacity-60 text-white'}`}
        >
          {hotel.priceCategory}
        </span>
        
        <button 
          onClick={() => navigate('/hotel-booking', { state: { hotel: hotel } })}
          className="px-3 py-1 bg-hunyadi-yellow text-white rounded-lg hover:bg-brown-sugar transition-colors text-sm font-medium"
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
))}
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => window.scrollTo({top: document.getElementById('all-properties').offsetTop - 100, behavior: 'smooth'})}
                className="px-5 py-2.5 bg-hunyadi-yellow text-white rounded-lg hover:bg-brown-sugar transition-colors flex items-center gap-2"
              >
                View All Properties <ChevronDown size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Main Hotel Listing Section */}
      <section id="all-properties" className="py-8 bg-alice-blue">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-cafe-noir">
              {searchTerm || filterCategory !== 'All' || filterPrice !== 'All' || hasContractRates ? 'Search Results' : 'All Safari Properties'}
            </h2>
            <span className="text-french-gray bg-white px-3 py-1 rounded-full text-sm">
              Showing {filteredHotels.length} {filteredHotels.length === 1 ? 'property' : 'properties'}
            </span>
          </div>

          {filteredHotels.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <h3 className="text-xl font-semibold text-cafe-noir mb-2">No properties found</h3>
              <p className="text-french-gray mb-4">Try adjusting your search criteria or filters</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setFilterCategory('All');
                  setPriceFilter('All');
                  setHasContractRates(false);
                }}
                className="px-4 py-2 bg-hunyadi-yellow text-white rounded-lg hover:bg-opacity-90 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHotels.map(hotel => (
  <div 
    key={hotel.id}
    className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-french-gray border-opacity-20 h-80"
  >
    {/* Full-size image background */}
    <img 
      src={hotel.imageUrl || "/api/placeholder/400/300"} 
      alt={hotel.name} 
      className="w-full h-full object-cover"
    />
    
    {/* Dark gradient overlay to make text readable */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
    
    {/* Rating badge */}
    <div className="absolute top-4 right-4 bg-cafe-noir text-white px-2 py-1 rounded-full flex items-center z-10">
      <Star size={16} className="mr-1" />
      <span>{hotel.rating}</span>
    </div>
    
    {/* Featured badge */}
    {hotel.featured && (
      <div className="absolute top-4 left-4 bg-gold-metallic text-white px-2 py-1 rounded-full text-xs z-10">
        Featured
      </div>
    )}
    
    {/* Contract rates badge */}
    {hotel.hasContractRates && (
      <div className="absolute bottom-16 left-4 bg-brown-sugar bg-opacity-90 text-white px-2 py-1 rounded-full text-xs flex items-center z-10">
        <Tag size={14} className="mr-1" />
        Contract Rates
      </div>
    )}
    
    {/* Content overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
      <h3 className="text-xl font-semibold text-white mb-1">{hotel.name}</h3>
      <div className="flex items-center text-gray-200 mb-2">
        <MapPin size={16} className="mr-1" />
        <span>{hotel.location}</span>
      </div>
      <p className="text-sm text-gray-300 mb-3 line-clamp-2">{hotel.description.substring(0, 100)}...</p>
      
      {/* Amenities */}
      <div className="flex flex-wrap gap-2 mb-3">
        {hotel.amenities.slice(0, 3).map((amenity, index) => (
          <span key={index} className="flex items-center text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
            {getAmenityIcon(amenity)}
            <span className="ml-1">{amenity}</span>
          </span>
        ))}
        {hotel.amenities.length > 3 && (
          <span className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
            +{hotel.amenities.length - 3} more
          </span>
        )}
      </div>
      
      {/* Bottom row */}
      <div className="flex justify-between items-center">
        <span className={`text-xs font-medium px-2 py-1 rounded-full
          ${hotel.priceCategory === 'Budget' ? 'bg-moss-green bg-opacity-60 text-white' : 
            hotel.priceCategory === 'Mid-range' ? 'bg-hunyadi-yellow bg-opacity-60 text-white' : 
            hotel.priceCategory === 'Premium' ? 'bg-brown-sugar bg-opacity-60 text-white' : 
            'bg-claret bg-opacity-60 text-white'}`}
        >
          {hotel.priceCategory}
        </span>
        
        <button 
          onClick={() => navigate('/hotel-booking', { state: { hotel: hotel } })}
          className="px-3 py-1 bg-hunyadi-yellow text-white rounded-lg hover:bg-brown-sugar transition-colors text-sm font-medium"
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
))}
            </div>
          )}
        </div>
      </section>

      {/* Hotel Detail Modal */}
      {selectedHotel && (
  <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 overflow-y-auto">
    <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl max-h-screen overflow-hidden">
      {/* Modal header and image section */}
      <div className="relative h-64 md:h-80">
        <img src={selectedHotel.imageUrl || "/api/placeholder/1200/600"} alt={selectedHotel.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <button 
          onClick={() => setSelectedHotel(null)}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-cornsilk transition-colors"
        >
          <X size={20} className="text-cafe-noir" />
        </button>
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className="bg-cafe-noir bg-opacity-80 text-white px-3 py-1.5 rounded-full flex items-center">
            <Star size={16} className="mr-1 text-gold-metallic" />
            <span>{selectedHotel.rating}</span>
          </div>
          {selectedHotel.hasContractRates && (
            <div className="bg-brown-sugar bg-opacity-80 text-white px-3 py-1.5 rounded-full flex items-center text-sm">
              <Tag size={14} className="mr-1" />
              Contract Rates
            </div>
          )}
          {selectedHotel.featured && (
            <div className="bg-gold-metallic bg-opacity-90 text-white px-3 py-1.5 rounded-full text-sm">
              Featured Property
            </div>
          )}
        </div>
        <div className="absolute bottom-4 right-4">
          <span className={`text-sm font-medium px-3 py-1.5 rounded-full
            ${selectedHotel.priceCategory === 'Budget' ? 'bg-moss-green bg-opacity-90 text-white' : 
              selectedHotel.priceCategory === 'Mid-range' ? 'bg-hunyadi-yellow bg-opacity-90 text-white' : 
              selectedHotel.priceCategory === 'Premium' ? 'bg-brown-sugar bg-opacity-90 text-white' : 
              'bg-claret bg-opacity-90 text-white'}`}
          >
            {selectedHotel.priceCategory}
          </span>
        </div>
      </div>
      
      {/* Tabs section */}
      <div className="bg-eggshell px-6 py-2 border-b border-french-gray flex gap-1">
        <button 
          className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === 'details' ? 'bg-white text-cafe-noir' : 'text-french-gray hover:text-cafe-noir'}`}
          onClick={() => setActiveTab('details')}
        >
          Property Details
        </button>
        {selectedHotel.hasContractRates && (
          <button 
            className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === 'rates' ? 'bg-white text-cafe-noir' : 'text-french-gray hover:text-cafe-noir'}`}
            onClick={() => setActiveTab('rates')}
          >
            Contract Rates
          </button>
        )}
      </div>
      
      {/* Content Area */}
      <div className="p-6 max-h-96 overflow-y-auto">
        {activeTab === 'details' ? (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-cafe-noir mb-2 md:mb-0">{selectedHotel.name}</h2>
            </div>
            <div className="flex items-center text-french-gray mb-4">
              <MapPin size={18} className="mr-2" />
              <span>{selectedHotel.location}</span>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-cafe-noir mb-2">About this property</h3>
              <p className="text-slate-600">{selectedHotel.description}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-cafe-noir mb-3">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {selectedHotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-french-gray">
                    {getAmenityIcon(amenity)}
                    <span className="ml-2">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between pt-4 border-t border-french-gray border-opacity-20">
              <span className="text-cafe-noir">
                <span className="font-semibold">Category:</span> {selectedHotel.category}
              </span>
              <button 
                className="px-4 py-2 bg-hunyadi-yellow text-white rounded-lg hover:bg-brown-sugar transition-colors"
                onClick={() => setActiveTab('rates')}
                disabled={!selectedHotel.hasContractRates}
              >
                {selectedHotel.hasContractRates ? 'View Rates' : 'Contact For Rates'}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-cafe-noir mb-4">Contract Rates - {selectedHotel.name}</h2>
            
            {selectedHotel.hasContractRates && (
              <div className="space-y-6">
                {/* Rate Type Selection */}
                <div className="bg-eggshell p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Rate Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(selectedHotel.contractRates).map((rateType) => (
                      <button
                        key={rateType}
                        onClick={() => setSelectedRatesLocation(rateType)}
                        className={`px-4 py-2 rounded-full text-sm ${
                          selectedRatesLocation === rateType
                            ? 'bg-brown-sugar text-white'
                            : 'bg-white text-cafe-noir'
                        }`}
                      >
                        {rateType.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedRatesLocation && (
                  <div className="space-y-6">
                    {/* Resident/Non-Resident Toggle */}
                    {['resident', 'nonResident'].some(opt => 
                      Object.keys(selectedHotel.contractRates[selectedRatesLocation]).includes(opt)
                    ) && (
                      <div className="bg-eggshell p-4 rounded-lg">
                        <div className="flex bg-white rounded-full p-1">
                          {['resident', 'nonResident'].map(residency => (
                            selectedHotel.contractRates[selectedRatesLocation][residency] && (
                              <button
                                key={residency}
                                className={`px-4 py-1 text-sm rounded-full transition-all ${
                                  selectedResidency === residency 
                                    ? 'bg-brown-sugar text-white' 
                                    : 'text-cafe-noir'
                                }`}
                                onClick={() => setSelectedResidency(residency)}
                              >
                                {residency === 'nonResident' ? 'Non-Resident' : 'Resident'} Rates
                              </button>
                            )
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Room Type Selection */}
                    {selectedResidency && (
                      <div className="bg-white rounded-lg border border-french-gray overflow-hidden">
                        <div className="border-b border-french-gray flex overflow-x-auto">
                          {Object.keys(
                            selectedHotel.contractRates[selectedRatesLocation][selectedResidency]
                          ).map((roomType) => (
                            <button
                              key={roomType}
                              className={`px-4 py-2 whitespace-nowrap ${
                                selectedAccommodation === roomType
                                  ? 'bg-cornsilk text-cafe-noir font-medium'
                                  : 'text-french-gray hover:bg-eggshell'
                              }`}
                              onClick={() => setSelectedAccommodation(roomType)}
                            >
                              {roomType.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </button>
                          ))}
                        </div>

                        {/* Rate Display */}
                        {selectedAccommodation && (
                          <div className="p-4">
                            <h4 className="font-medium text-cafe-noir mb-4">
                              {selectedAccommodation.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Rates
                            </h4>

                            {/* Season Selection */}
                            {['peak', 'high', 'low', 'shoulder', 'regular', 'festive'].some(season => 
                              typeof selectedHotel.contractRates[selectedRatesLocation][selectedResidency][selectedAccommodation] === 'object' &&
                              season in selectedHotel.contractRates[selectedRatesLocation][selectedResidency][selectedAccommodation]
                            ) && (
                              <div className="mb-4">
                                <div className="flex bg-eggshell rounded-full p-1 mb-4">
                                  {Object.keys(
                                    selectedHotel.contractRates[selectedRatesLocation][selectedResidency][selectedAccommodation]
                                  ).map(season => (
                                    <button
                                      key={season}
                                      className={`px-3 py-1 text-xs rounded-full transition-all ${
                                        selectedSeason === season
                                          ? 'bg-white shadow-sm text-cafe-noir'
                                          : 'text-french-gray'
                                      }`}
                                      onClick={() => setSelectedSeason(season)}
                                    >
                                      {seasonMap[season] || season}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Rate Values */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {(() => {
                                const rateData = selectedHotel.contractRates[selectedRatesLocation][selectedResidency][selectedAccommodation];
                                const displayData = selectedSeason ? rateData[selectedSeason] : rateData;
                                
                                if (typeof displayData === 'object' && !Array.isArray(displayData)) {
                                  return Object.entries(displayData).map(([rateKey, rateValue]) => (
                                    <div key={rateKey} className="bg-cornsilk bg-opacity-30 p-4 rounded-lg">
                                      <h5 className="text-sm font-medium text-cafe-noir mb-2 capitalize">
                                        {rateKey.replace(/([A-Z])/g, ' $1')}
                                      </h5>
                                      {typeof rateValue === 'object' ? (
                                        Object.entries(rateValue).map(([subKey, subValue]) => (
                                          <div key={subKey} className="mb-1">
                                            <span className="font-medium">{subKey}: </span>
                                            <span className="text-brown-sugar">
                                              {selectedResidency === 'nonResident' ? '$' : 'KES '}
                                              {subValue}
                                            </span>
                                          </div>
                                        ))
                                      ) : (
                                        <div className="flex items-baseline">
                                          <span className="text-2xl font-bold text-hunyadi-yellow">
                                            {selectedResidency === 'nonResident' ? '$' : 'KES '}
                                            {rateValue}
                                          </span>
                                          <span className="text-xs text-french-gray ml-1">/ night</span>
                                        </div>
                                      )}
                                    </div>
                                  ));
                                }
                                return (
                                  <div className="bg-cornsilk bg-opacity-30 p-4 rounded-lg">
                                    <div className="flex items-baseline">
                                      <span className="text-2xl font-bold text-hunyadi-yellow">
                                        {selectedResidency === 'nonResident' ? '$' : 'KES '}
                                        {displayData}
                                      </span>
                                      <span className="text-xs text-french-gray ml-1">/ night</span>
                                    </div>
                                  </div>
                                );
                              })()}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Extras Section */}
                {selectedHotel.contractRates.extras && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-cafe-noir mb-4">Additional Services & Extras</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(selectedHotel.contractRates.extras).map(([extra, price]) => (
                        <div key={extra} className="bg-white rounded-lg p-3 border border-french-gray flex justify-between items-center">
                          <span className="text-sm capitalize">{extra.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-medium text-brown-sugar">
                            {typeof price === 'object' ? (
                              Object.entries(price).map(([key, val]) => (
                                <div key={key}>
                                  {key}: {selectedResidency === 'nonResident' ? '$' : 'KES '}{val}
                                </div>
                              ))
                            ) : (
                              `${selectedResidency === 'nonResident' ? '$' : 'KES '}${price}`
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Policies Section */}
                {selectedHotel.contractRates.policies && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-cafe-noir mb-4">Policies</h3>
                    <div className="bg-white rounded-lg p-4 border border-french-gray">
                      {Object.entries(selectedHotel.contractRates.policies).map(([policy, details]) => (
                        <div key={policy} className="mb-3">
                          <h4 className="font-medium text-cafe-noir capitalize">
                            {policy.replace(/([A-Z])/g, ' $1')}:
                          </h4>
                          {typeof details === 'object' ? (
                            Object.entries(details).map(([key, value]) => (
                              <div key={key} className="ml-4">
                                <span className="font-medium">{key}: </span>
                                <span>{value}</span>
                              </div>
                            ))
                          ) : (
                            <p className="ml-4">{details}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Terms & Conditions */}
                {selectedHotel.contractRates.termsAndConditions && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-cafe-noir mb-4">Terms & Conditions</h3>
                    <div className="bg-white rounded-lg p-4 border border-french-gray">
                      {Object.entries(selectedHotel.contractRates.termsAndConditions).map(([term, condition]) => (
                        <div key={term} className="mb-3">
                          <h4 className="font-medium text-cafe-noir capitalize">
                            {term.replace(/([A-Z])/g, ' $1')}:
                          </h4>
                          {typeof condition === 'object' ? (
                            <ul className="list-disc ml-6">
                              {Object.entries(condition).map(([key, value]) => (
                                <li key={key}>
                                  <span className="font-medium">{key}: </span>
                                  <span>{value}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="ml-4">{condition}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-french-gray flex justify-between items-center">
                  <div className="text-sm text-french-gray">
                    <p>Rates are subject to change and availability. Terms and conditions apply.</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 bg-eggshell text-cafe-noir rounded-lg hover:bg-opacity-90 transition-colors"
                      onClick={() => setActiveTab('details')}
                    >
                      Back to Details
                    </button>
                    <button
                      className="px-4 py-2 bg-hunyadi-yellow text-white rounded-lg hover:bg-brown-sugar transition-colors"
                      onClick={() => alert(`Booking form for ${selectedHotel.name} would open here`)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
)}

     
    </div>
  );
}