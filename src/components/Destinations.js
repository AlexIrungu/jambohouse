import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, CheckCircle } from 'lucide-react';

const PopularDestinations = () => {
  const destinations = [
    {
      country: "Kenya",
      title: "Masai Mara",
      description: "Experience the iconic Masai Mara ecosystem with its abundant wildlife and breathtaking landscapes of the African savannah.",
      category: "Wildlife Safari",
      price: "From $1,549",
      image: "https://images.unsplash.com/photo-1554990772-0bea55d510d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww"
    },
    {
      country: "Tanzania",
      title: "Serengeti",
      description: "Witness the Great Migration and explore the endless plains of the Serengeti, home to Africa's most spectacular wildlife displays.",
      category: "Wildlife Safari",
      price: "From $1,083",
      image: "https://images.unsplash.com/photo-1580145575237-75fec2a0320b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VyZW5nZXRpfGVufDB8fDB8fHww"
    },
    {
      country: "Rwanda",
      title: "Volcanoes National Park",
      description: "Trek through misty forests to encounter endangered mountain gorillas in their natural habitat in this pristine wildlife sanctuary.",
      category: "Gorilla Trek",
      price: "From $3,132",
      image: "https://images.unsplash.com/photo-1662612732223-1fe6ea43263e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sY2Fub2VzJTIwcndhbmRhfGVufDB8fDB8fHww"
    }
  ];

  return (
    <div className="py-20 bg-eggshell">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-hunyadi-yellow mr-4"></div>
            <p className="text-hunyadi-yellow font-medium uppercase tracking-wider">Featured Destinations</p>
            <div className="h-1 w-12 bg-hunyadi-yellow ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">Discover Africa's Wonders</h2>
          <p className="text-cafe-noir text-lg">Explore our handpicked destinations that offer unforgettable safari experiences across Eastern Africa.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden h-[500px] rounded-2xl shadow-xl flex flex-col"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>
  
              <div className="relative z-10 text-white flex flex-col justify-end h-full p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
                      {destination.category}
                    </span>
                    <span className="bg-hunyadi-yellow px-4 py-1 rounded-full text-sm font-medium text-cafe-noir">
                      {destination.price}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold">{destination.title}</h3>
                  
                  <p className="text-white/90 mb-6">{destination.description}</p>
                  
                  <Link to={`/destinations/${destination.country.toLowerCase()}/${destination.title.toLowerCase().replace(/\s+/g, '-')}`} className="w-full bg-white text-cafe-noir py-3 rounded-full hover:bg-cornsilk transition-colors font-medium inline-flex items-center justify-center group">
                    Explore {destination.title}
                    <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/destinations" className="bg-transparent border-2 border-cafe-noir hover:bg-cafe-noir hover:text-white text-cafe-noir px-8 py-3 rounded-full font-medium transition-all inline-flex items-center group">
            View All Destinations
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const AllDestinations = () => {
  const allDestinations = [
    {
      title: "Masai Mara",
      country: "Kenya",
      duration: "3-7 Days",
      price: "From $1,549",
      highlights: [
        "Big Five game viewing",
        "Witness river crossings during migration season",
        "Hot air balloon safaris available",
        "Cultural visits to Maasai villages"
      ],
      rating: 5,
      style: "border-t-asparagus",
      bgImage: "https://images.unsplash.com/photo-1554990772-0bea55d510d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww"
    },
    {
      title: "Amboseli",
      country: "Kenya",
      duration: "3-5 Days",
      price: "From $1,320",
      highlights: [
        "Spectacular views of Mt. Kilimanjaro",
        "Large elephant herds",
        "Excellent bird watching",
        "Scenic photography opportunities"
      ],
      rating: 4,
      style: "border-t-hunyadi-yellow",
      bgImage: "https://images.unsplash.com/photo-1631646109206-4b5616964f84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1ib3NlbGl8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Serengeti",
      country: "Tanzania",
      duration: "4-8 Days",
      price: "From $1,083",
      highlights: [
        "Witness the Great Migration",
        "Abundant year-round wildlife",
        "Iconic acacia landscapes",
        "Balloon safaris available"
      ],
      rating: 5,
      style: "border-t-brown-sugar",
      bgImage: "https://images.unsplash.com/photo-1580145575237-75fec2a0320b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VyZW5nZXRpfGVufDB8fDB8fHww"
    },
    {
      title: "Ngorongoro Crater",
      country: "Tanzania",
      duration: "2-4 Days",
      price: "From $1,425",
      highlights: [
        "UNESCO World Heritage Site",
        "Natural enclosure with abundant wildlife",
        "All Big Five in one location",
        "Spectacular crater views"
      ],
      rating: 5,
      style: "border-t-asparagus",
      bgImage: "https://images.unsplash.com/photo-1566296524462-e0a341bf65e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmdvcm9uZ29yb3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Volcanoes National Park",
      country: "Rwanda",
      duration: "3-5 Days",
      price: "From $3,132",
      highlights: [
        "Mountain gorilla trekking",
        "Golden monkey tracking",
        "Hiking opportunities",
        "Cultural experiences"
      ],
      rating: 5,
      style: "border-t-hunyadi-yellow",
      bgImage: "https://images.unsplash.com/photo-1662612732223-1fe6ea43263e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sY2Fub2VzJTIwcndhbmRhfGVufDB8fDB8fHww"
    },
    {
      title: "Akagera National Park",
      country: "Rwanda",
      duration: "2-4 Days",
      price: "From $1,280",
      highlights: [
        "Big Five safaris",
        "Boat safaris on Lake Ihema",
        "Diverse ecosystems",
        "Conservation success story"
      ],
      rating: 4,
      style: "border-t-brown-sugar",
      bgImage: "https://images.unsplash.com/photo-1665070385454-5e0c4421a38c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWthZ2VyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-moss-green mr-4"></div>
            <p className="text-moss-green font-medium uppercase tracking-wider">Explore Africa</p>
            <div className="h-1 w-12 bg-moss-green ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">All African Destinations</h2>
          <p className="text-cafe-noir text-lg">Discover our complete collection of carefully selected destinations across Eastern Africa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allDestinations.map((destination, index) => (
            <div 
              key={index} 
              className={`rounded-xl shadow-xl overflow-hidden group border-t-4 ${destination.style} bg-white hover:shadow-2xl transition-all transform hover:-translate-y-1`}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={destination.bgImage} 
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 right-4 bg-white text-cafe-noir px-4 py-1 rounded-full text-sm font-bold">
                  {destination.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cafe-noir mb-2">{destination.title}</h3>
                <p className="text-moss-green font-medium mb-2">{destination.country}</p>
                
                <div className="flex items-center mb-4 text-gold-metallic">
                  {[...Array(destination.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                  <span className="text-cafe-noir ml-2 text-sm">
                    ({destination.rating}.0)
                  </span>
                </div>
                
                <div className="flex items-center text-cafe-noir mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{destination.duration}</span>
                </div>
                
                <ul className="mb-6">
                  {destination.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center mb-2 text-cafe-noir">
                      <CheckCircle size={16} className="text-moss-green mr-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/destinations/${destination.country.toLowerCase()}/${destination.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="w-full bg-asparagus hover:bg-moss-green text-white py-3 rounded-full transition-all font-medium inline-flex items-center justify-center group"
                >
                  View Details
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main component that will be imported in other files
const Destinations = () => {
  return (
    <>
      <PopularDestinations />
      <AllDestinations />
    </>
  );
};

export { PopularDestinations, AllDestinations, Destinations as default };