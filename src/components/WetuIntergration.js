import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Wetu Integration Component
const WetuIntegration = () => {
  const [destinations, setDestinations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Wetu API Configuration
  const WETU_API_BASE_URL = 'https://api.wetu.com/v1';
  const WETU_API_KEY = 'YOUR_WETU_API_KEY'; // Replace with your actual Wetu API key

  useEffect(() => {
    const fetchWetuData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch Destinations
        const destinationsResponse = await axios.get(`${WETU_API_BASE_URL}/destinations`, {
          headers: {
            'Authorization': `Bearer ${WETU_API_KEY}`
          }
        });

        // Fetch Hotels
        const hotelsResponse = await axios.get(`${WETU_API_BASE_URL}/hotels`, {
          headers: {
            'Authorization': `Bearer ${WETU_API_KEY}`
          }
        });

        setDestinations(destinationsResponse.data);
        setHotels(hotelsResponse.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchWetuData();
  }, []);

  // Handle destination selection
  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
  };

  // Filter hotels by selected destination
  const filteredHotels = selectedDestination
    ? hotels.filter(hotel => hotel.destinationId === selectedDestination.id)
    : hotels;

  if (isLoading) return <div>Loading Wetu data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Destinations and Hotels</h1>

      {/* Destinations Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Destination
        </label>
        <select 
          onChange={(e) => {
            const selected = destinations.find(
              dest => dest.id === parseInt(e.target.value)
            );
            handleDestinationSelect(selected);
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">All Destinations</option>
          {destinations.map(destination => (
            <option key={destination.id} value={destination.id}>
              {destination.name}
            </option>
          ))}
        </select>
      </div>

      {/* Hotels Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredHotels.map(hotel => (
          <div 
            key={hotel.id} 
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={hotel.imageUrl} 
              alt={hotel.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="font-bold text-xl mb-2">{hotel.name}</h2>
              <p className="text-gray-700 mb-4">{hotel.description}</p>
              
              {/* Additional Hotel Details */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {hotel.location}
                </span>
                <span className="text-sm font-bold text-green-600">
                  ${hotel.price}/night
                </span>
              </div>

              {/* Interactive Map Link */}
              <button 
                onClick={() => {
                  // Open map modal or navigate to map view
                  window.open(`https://maps.google.com/?q=${hotel.latitude},${hotel.longitude}`, '_blank');
                }}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                View on Map
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WetuIntegration;