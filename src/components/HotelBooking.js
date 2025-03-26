import React from 'react';
import { Star } from 'lucide-react';

const HotelCard = ({ image, name, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 border border-gray-200">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
        </div>
        <button className="w-full mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

const HotelBooking = () => {
  const hotels = [
    {
      name: "Serena Beach Resort & Spa",
      image: "/api/placeholder/400/250"
    },
    {
      name: "The Karen Blixen Restaurant",
      image: "/api/placeholder/400/250"
    },
    {
      name: "The Carnivore Restaurant",
      image: "/api/placeholder/400/250"
    },
    {
      name: "Severin Sea Lodge",
      image: "/api/placeholder/400/250"
    },
    {
      name: "Pinewood Beach Resort & Spa",
      image: "/api/placeholder/400/250"
    },
    {
      name: "Leopard Point Beach Resort, Malindi",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Hotel Booking
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <HotelCard 
            key={index}
            name={hotel.name}
            image={hotel.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelBooking;