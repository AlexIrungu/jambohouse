import React from 'react';
import { Star } from 'lucide-react';

const CarHireCard = ({ image, name, speed, price, seats }) => {
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
        <div className="flex justify-between items-center">
          <div className="text-gray-600">
            <p className="text-sm">Speed: {speed}</p>
            {seats && <p className="text-sm">{seats}</p>}
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-green-600">Price: ${price}/day</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarHire = () => {
  const cars = [
    {
      name: "Saloon",
      image: "/api/placeholder/400/250",
      speed: "5 Seater",
      price: 100,
      seats: "Inclusive of Fuel and Driver"
    },
    {
      name: "Minivan",
      image: "/api/placeholder/400/250",
      speed: "8 Seater Van",
      price: 150,
      seats: "Inclusive of Fuel and Driver"
    },
    {
      name: "Coaster Bus",
      image: "/api/placeholder/400/250",
      speed: "25 Seater",
      price: 200,
      seats: "Inclusive of Fuel and Driver"
    },
    {
      name: "Overland Truck",
      image: "/api/placeholder/400/250",
      speed: "30 km/hr",
      price: 400,
      seats: null
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Car Hire Options
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarHireCard 
            key={index}
            name={car.name}
            image={car.image}
            speed={car.speed}
            price={car.price}
            seats={car.seats}
          />
        ))}
      </div>
    </div>
  );
};

export default CarHire;