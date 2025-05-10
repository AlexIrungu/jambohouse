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
  Phone,
  Fuel,
  DollarSign,
  Route,
  PlaneLanding
} from 'lucide-react';
import { Link } from 'react-router-dom'



const CarHireCard = ({ id, image, name, type, seating, price, transferPrice, fullDayPrice, halfDayPrice, notes, safariPrice }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-french-gray/30">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image || "/api/placeholder/400/320"} 
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
          <div className="text-lg font-bold text-claret">KES {fullDayPrice}<span className="text-sm font-normal text-french-gray">/day</span></div>
        </div>
        
        <div className="flex items-center mt-3 text-french-gray">
          <Users className="mr-2 text-asparagus" size={16} />
          <span className="text-sm">{seating}</span>
        </div>
        
        {notes && (
          <div className="mt-2 flex items-center text-sm text-french-gray">
            <Shield className="mr-2 text-moss-green" size={16} />
            <span>{notes}</span>
          </div>
        )}

        <div className="mt-4 flex flex-col space-y-2">
          <button 
            className="w-full px-4 py-2 bg-hunyadi-yellow text-cafe-noir font-medium rounded-lg hover:bg-gold-metallic transition-colors flex items-center justify-center"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "View Details"}
          </button>
          
          <Link
  to={`/booking-form/${id}`}
  className="w-full px-4 py-2 bg-cafe-noir text-white font-medium rounded-lg hover:bg-brown-sugar transition-colors flex items-center justify-center"
>
  Book Now
</Link>
        </div>
        
        {showDetails && (
          <div className="mt-4 p-4 bg-eggshell rounded-lg">
            <h4 className="font-medium text-cafe-noir mb-2">Price Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <PlaneLanding size={14} className="mr-1 text-brown-sugar" />
                  <span>Airport Transfer:</span>
                </div>
                <span className="font-medium">KES {transferPrice}</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1 text-brown-sugar" />
                  <span>Half-Day (5 hrs):</span>
                </div>
                <span className="font-medium">KES {halfDayPrice}</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1 text-brown-sugar" />
                  <span>Full-Day (10 hrs):</span>
                </div>
                <span className="font-medium">KES {fullDayPrice}</span>
              </div>
              {safariPrice && (
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Route size={14} className="mr-1 text-brown-sugar" />
                    <span>Safari Use (Per Day):</span>
                  </div>
                  <span className="font-medium">KES {safariPrice}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CarHire = () => {
  const [filter, setFilter] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  // Updated fleet information from the PDF
  const cars = [
    {
      id: '1',
      name: "Toyota Alphard",
      type: "Luxury",
      image: "",
      seating: "Max 5 pax",
      transferPrice: 5000,
      halfDayPrice: 10500,
      fullDayPrice: 16000,
      safariPrice: null,
      notes: "Ideal for airport transfers"
    },
    {
      id: '2',
      name: "Safari Van",
      type: "Safari",
      image: "https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/11/Kenya-29.sept_.-05-Arve-Ofsteras-0891665817669.png.webp",
      seating: "Max 7 pax",
      transferPrice: 7000,
      halfDayPrice: 15000,
      fullDayPrice: 20000,
      safariPrice: 23000,
      notes: "Pop-up roof for game viewing"
    },
    {
      id: '3',
      name: "4x4 Land Cruiser",
      type: "Safari",
      image: "https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/09/car1.jpg.webp",
      seating: "Max 7 pax",
      transferPrice: 8000,
      halfDayPrice: 18000,
      fullDayPrice: 26000,
      safariPrice: 28500,
      notes: "Pop-up roof, ideal for off-road"
    },
    {
      id: '4',
      name: "Coaster Bus",
      type: "Bus",
      image: "https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/11/1548686311.png.webp",
      seating: "22-26 pax",
      transferPrice: 10000,
      halfDayPrice: 15000,
      fullDayPrice: 25000,
      safariPrice: "On Request",
      notes: "Great for group travel"
    },
    {
      id: '5',
      name: "Overland Truck",
      type: "Truck",
      image: "https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/11/Overland-truck-for-hire-Nairobi.jpg",
      seating: "24+ pax",
      transferPrice: "On Request",
      halfDayPrice: "On Request",
      fullDayPrice: "On Request",
      safariPrice: "On Request",
      notes: "Long distance travel only"
    },
    {
      id: '6',
      name: "Saloon Car",
      type: "Sedan",
      image: "https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/11/1548690936.png.webp",
      seating: "Max 3 pax",
      transferPrice: 3900,
      halfDayPrice: 6500,
      fullDayPrice: 10400,
      safariPrice: null,
      notes: "Comfortable for city transfers"
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
              <h2 className="text-3xl md:text-4xl font-bold text-cafe-noir">Jambo Travel Fleet</h2>
              <p className="mt-2 text-lg text-brown-sugar">
                Professional drivers and quality vehicles for all your East African transport needs
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
              <h3 className="font-semibold text-lg text-cafe-noir">Professional Drivers</h3>
              <p className="text-brown-sugar text-sm mt-1">All vehicles come with our experienced drivers</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-french-gray/20 hover:border-french-gray/30 transition-all hover:shadow-md">
            <div className="bg-mindaro p-3 rounded-full inline-flex mb-4">
              <Zap className="text-hunyadi-yellow" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-cafe-noir">Diverse Fleet</h3>
              <p className="text-brown-sugar text-sm mt-1">From luxury transfers to safari adventures</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-french-gray/20 hover:border-french-gray/30 transition-all hover:shadow-md">
            <div className="bg-atomic-tangerine/20 p-3 rounded-full inline-flex mb-4">
              <MapPin className="text-atomic-tangerine" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-cafe-noir">Flexible Options</h3>
              <p className="text-brown-sugar text-sm mt-1">Half-day, full-day, and safari packages available</p>
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
  {filteredCars.map((car) => {
    console.log(`Rendering car with ID: ${car.id}, Name: ${car.name}`);
    
    return (
      <CarHireCard 
        key={car.id}
        id={car.id}  // This was missing before - now properly passing the ID
        name={car.name}
        image={car.image}
        type={car.type}
        seating={car.seating}
        transferPrice={car.transferPrice}
        halfDayPrice={car.halfDayPrice}
        fullDayPrice={car.fullDayPrice}
        safariPrice={car.safariPrice}
        notes={car.notes}
      />
    );
  })}
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

        
        {/* Rental Terms */}
        <div className="mt-16 p-6 bg-white rounded-2xl shadow-sm border border-french-gray/20">
          <h3 className="text-xl font-bold mb-4 text-cafe-noir">General Terms & Conditions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <h4 className="font-medium text-cafe-noir flex items-center">
                  <Shield className="mr-2 text-asparagus" size={16} />
                  Driver-Only Hire
                </h4>
                <p className="text-brown-sugar text-sm mt-1 ml-6">All vehicles are hired strictly with our professional drivers. Self-drive is not permitted.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-cafe-noir flex items-center">
                  <Clock className="mr-2 text-hunyadi-yellow" size={16} />
                  Operating Hours
                </h4>
                <p className="text-brown-sugar text-sm mt-1 ml-6">Half-Day: Up to 5 consecutive hours</p>
                <p className="text-brown-sugar text-sm mt-1 ml-6">Full-Day: Up to 10 consecutive hours</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-cafe-noir flex items-center">
                  <DollarSign className="mr-2 text-claret" size={16} />
                  Booking & Confirmation
                </h4>
                <p className="text-brown-sugar text-sm mt-1 ml-6">A 50% deposit is required to confirm the booking. The balance must be cleared before the start of the service.</p>
              </div>
            </div>
            
            <div>
              <div className="mb-4">
                <h4 className="font-medium text-cafe-noir flex items-center">
                  <Car className="mr-2 text-princeton-orange" size={16} />
                  Vehicle Substitution
                </h4>
                <p className="text-brown-sugar text-sm mt-1 ml-6">In the event of unforeseen circumstances, a similar or upgraded vehicle may be provided at no extra cost.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-cafe-noir flex items-center">
                  <Shield className="mr-2 text-moss-green" size={16} />
                  Insurance
                </h4>
                <p className="text-brown-sugar text-sm mt-1 ml-6">All vehicles are fully insured. However, passengers are encouraged to have personal travel insurance.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-cafe-noir flex items-center">
                  <Fuel className="mr-2 text-atomic-tangerine" size={16} />
                  Fuel Policy
                </h4>
                <p className="text-brown-sugar text-sm mt-1 ml-6">Fuel costs may or may not be included—please confirm at the time of booking.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-cafe-noir to-brown-sugar rounded-2xl p-8 text-center text-white relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-pattern"></div>
          <h3 className="text-2xl font-bold mb-2 relative z-10">Need a custom transport solution?</h3>
          <p className="mb-6 relative z-10 max-w-lg mx-auto">Contact our team for personalized options for larger groups or special requirements</p>
          <Link to='/contact'>
          <button className="bg-hunyadi-yellow text-cafe-noir px-6 py-3 rounded-lg font-medium hover:bg-gold-metallic transition-colors flex items-center mx-auto relative z-10">
            <Phone size={18} className="mr-2" />
            Contact Us
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CarHire;