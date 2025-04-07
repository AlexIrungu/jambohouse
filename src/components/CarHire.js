import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Users, 
  Car, 
  Calendar, 
  Filter, 
  ChevronDown,
  Search,
  Shield,
  Zap,
  Clock
} from 'lucide-react';

const CarHireCard = ({ image, name, speed, price, seats, type }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute top-3 right-3 bg-blue-600 text-white rounded-lg px-3 py-1 text-sm font-medium">
          {type}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <div className="text-lg font-bold text-blue-600">${price}<span className="text-sm font-normal text-gray-500">/day</span></div>
        </div>
        
        <div className="flex items-center mt-3 text-gray-600">
          <Users className="mr-2 text-blue-500" size={16} />
          <span className="text-sm">{speed}</span>
        </div>
        
        {seats && (
          <div className="mt-2 flex items-center text-sm text-gray-600">
            <Shield className="mr-2 text-green-500" size={16} />
            <span>{seats}</span>
          </div>
        )}

        <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
          <Car className="mr-2" size={16} />
          Book Now
        </button>
      </div>
    </div>
  );
};

const CarHire = () => {
  const [filter, setFilter] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const cars = [
    {
      name: "Saloon Car",
      type: "Sedan",
      image: "/api/placeholder/400/250?text=Saloon+Car",
      speed: "5 Seater",
      price: 100,
      seats: "Inclusive of Fuel and Driver"
    },
    {
      name: "Minivan",
      type: "Van",
      image: "/api/placeholder/400/250?text=Minivan",
      speed: "8 Seater",
      price: 150,
      seats: "Inclusive of Fuel and Driver"
    },
    {
      name: "Coaster Bus",
      type: "Bus",
      image: "/api/placeholder/400/250?text=Coaster+Bus",
      speed: "25 Seater",
      price: 200,
      seats: "Inclusive of Fuel and Driver"
    },
    {
      name: "Overland Truck",
      type: "Truck",
      image: "/api/placeholder/400/250?text=Overland+Truck",
      speed: "30 Seater",
      price: 400,
      seats: null
    }
  ];

  const carTypes = ['All', ...new Set(cars.map(car => car.type))];

  const filteredCars = cars.filter(car => 
    (car.name.toLowerCase().includes(filter.toLowerCase()) ||
    car.type.toLowerCase().includes(filter.toLowerCase())) &&
    (selectedType === 'All' || car.type === selectedType)
  );

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vehicle Hire</h2>
              <p className="mt-2 text-lg text-gray-600">
                Find the perfect transport for your East African adventure
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="text-blue-500 mr-2" size={20} />
              <span className="text-sm font-medium">24/7 Support & Booking</span>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Shield className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Safe & Reliable</h3>
              <p className="text-gray-600 text-sm mt-1">All vehicles maintained to the highest standards</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm flex items-start">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Zap className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Quick Booking</h3>
              <p className="text-gray-600 text-sm mt-1">Simple process with instant confirmation</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm flex items-start">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <MapPin className="text-amber-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Local Expertise</h3>
              <p className="text-gray-600 text-sm mt-1">Professional drivers with in-depth knowledge</p>
            </div>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="mb-10 p-6 bg-white rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Find Your Vehicle</h3>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Search by name or type..." 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
            
            <div className="relative min-w-[150px]">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full appearance-none p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {carTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car, index) => (
            <CarHireCard 
              key={index}
              name={car.name}
              image={car.image}
              speed={car.speed}
              price={car.price}
              seats={car.seats}
              type={car.type}
            />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Car className="text-gray-400" size={32} />
            </div>
            <h3 className="text-lg font-medium text-gray-800">No vehicles found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Need a custom transport solution?</h3>
          <p className="mb-6">Contact our team for personalized options for larger groups or special requirements</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarHire;