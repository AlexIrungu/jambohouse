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
  Clock,
  Phone
} from 'lucide-react';

const CarHireCard = ({ image, name, speed, price, seats, type }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-french-gray/30">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image || "https://placehold.co/400x320/eee/ccc?text=Vehicle+Image"} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cafe-noir/70 to-transparent"></div>
        <div className="absolute top-3 right-3 bg-princeton-orange text-white rounded-lg px-3 py-1 text-sm font-medium">
          {type}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-cafe-noir">{name}</h3>
          <div className="text-lg font-bold text-claret">${price}<span className="text-sm font-normal text-french-gray">/day</span></div>
        </div>
        
        <div className="flex items-center mt-3 text-french-gray">
          <Users className="mr-2 text-asparagus" size={16} />
          <span className="text-sm">{speed}</span>
        </div>
        
        {seats && (
          <div className="mt-2 flex items-center text-sm text-french-gray">
            <Shield className="mr-2 text-moss-green" size={16} />
            <span>{seats}</span>
          </div>
        )}

        <button className="w-full mt-4 px-4 py-2 bg-hunyadi-yellow text-cafe-noir font-medium rounded-lg hover:bg-gold-metallic transition-colors flex items-center justify-center">
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
      image: "",
      speed: "5 Seater",
      price: 100,
      seats: "Inclusive of Fuel and Driver"
    },
    {
      name: "Minivan",
      type: "Van",
      image: "",
      speed: "8 Seater",
      price: 150,
      seats: "Inclusive of Fuel and Driver"
    },
    {
      name: "Coaster Bus",
      type: "Bus",
      image: "",
      speed: "25 Seater",
      price: 200,
      seats: "Inclusive of Fuel and Driver"
    },
    {
      name: "Overland Truck",
      type: "Truck",
      image: "",
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
    <div className="bg-gradient-to-b from-cornsilk to-eggshell min-h-screen py-16">
      {/* Add a style tag for the pattern background */}
      <style jsx>{`
        .bg-pattern {
          background-color: #ffffff;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e4a435' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-cafe-noir">Vehicle Hire</h2>
              <p className="mt-2 text-lg text-brown-sugar">
                Find the perfect transport for your East African adventure
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-french-gray/20">
              <Clock className="text-princeton-orange mr-2" size={20} />
              <span className="text-sm font-medium text-cafe-noir">24/7 Support & Booking</span>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-french-gray/20 hover:border-french-gray/30 transition-all hover:shadow-md">
            <div className="bg-alice-blue p-3 rounded-full inline-flex mb-4">
              <Shield className="text-asparagus" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-cafe-noir">Safe & Reliable</h3>
              <p className="text-brown-sugar text-sm mt-1">All vehicles maintained to the highest standards</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-french-gray/20 hover:border-french-gray/30 transition-all hover:shadow-md">
            <div className="bg-mindaro p-3 rounded-full inline-flex mb-4">
              <Zap className="text-hunyadi-yellow" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-cafe-noir">Quick Booking</h3>
              <p className="text-brown-sugar text-sm mt-1">Simple process with instant confirmation</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-french-gray/20 hover:border-french-gray/30 transition-all hover:shadow-md">
            <div className="bg-atomic-tangerine/20 p-3 rounded-full inline-flex mb-4">
              <MapPin className="text-atomic-tangerine" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-cafe-noir">Local Expertise</h3>
              <p className="text-brown-sugar text-sm mt-1">Professional drivers with in-depth knowledge</p>
            </div>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="mb-10 p-6 bg-white rounded-2xl shadow-sm border border-french-gray/20">
          <h3 className="text-lg font-semibold mb-4 text-cafe-noir">Find Your Vehicle</h3>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Search by name or type..." 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full p-3 pl-10 border border-french-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow bg-eggshell/50"
              />
              <Search className="absolute left-3 top-3 text-brown-sugar" size={20} />
            </div>
            
            <div className="relative min-w-[150px]">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full appearance-none p-3 pr-10 border border-french-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow bg-eggshell/50 text-cafe-noir"
              >
                {carTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 text-brown-sugar pointer-events-none" size={20} />
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
          <div className="text-center py-12 bg-white rounded-xl border border-french-gray/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cornsilk rounded-full mb-4">
              <Car className="text-brown-sugar" size={32} />
            </div>
            <h3 className="text-lg font-medium text-cafe-noir">No vehicles found</h3>
            <p className="text-brown-sugar mt-2">Try adjusting your search or filters</p>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-cafe-noir to-brown-sugar rounded-2xl p-8 text-center text-white relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-pattern"></div>
          <h3 className="text-2xl font-bold mb-2 relative z-10">Need a custom transport solution?</h3>
          <p className="mb-6 relative z-10 max-w-lg mx-auto">Contact our team for personalized options for larger groups or special requirements</p>
          <button className="bg-hunyadi-yellow text-cafe-noir px-6 py-3 rounded-lg font-medium hover:bg-gold-metallic transition-colors flex items-center mx-auto relative z-10">
            <Phone size={18} className="mr-2" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarHire;