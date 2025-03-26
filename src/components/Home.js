import React from 'react';
import { 
  Home as HomeIcon, 
  MapPin, 
  Users, 
  CheckCircle 
} from 'lucide-react';



const HeroBanner = () => (
  <div 
    className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-white"
    style={{
      backgroundImage: 'url("/api/placeholder/1920/1080")',
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}
  >
    <div className="text-center max-w-2xl">
      <h1 className="text-5xl font-bold mb-4">One Step Away from Your Dream Safari</h1>
      <p className="text-xl mb-6">
        Discover the magic of Africa. Unforgettable experiences await you.
      </p>
      <button className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-full text-lg">
        Plan Your Safari
      </button>
    </div>
  </div>
);

const FeatureSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-6 text-center">
        <div className="bg-green-50 p-6 rounded-lg">
          <HomeIcon className="mx-auto mb-4 text-green-700" size={48} />
          <h3 className="font-bold mb-2">Responsible Travel</h3>
          <p>We've been maintaining a difference for 20+ years</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <MapPin className="mx-auto mb-4 text-green-700" size={48} />
          <h3 className="font-bold mb-2">Customizable</h3>
          <p>Get to enjoy bespoke safaris based on your needs</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <Users className="mx-auto mb-4 text-green-700" size={48} />
          <h3 className="font-bold mb-2">Travel Experts</h3>
          <p>Our experts for over 20 years have been planning safaris</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <CheckCircle className="mx-auto mb-4 text-green-700" size={48} />
          <h3 className="font-bold mb-2">Finest Guides</h3>
          <p>You will be in good hands with our experienced guides</p>
        </div>
      </div>
    </div>
  </section>
);

const PopularPackages = () => (
  <section className="py-16 bg-green-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Packages</h2>
      <div className="grid grid-cols-3 gap-6">
        {['Tanzania', 'Kilimanjaro', 'Kenya'].map((destination, index) => (
          <div 
            key={destination} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img 
              src={`/api/placeholder/400/300?text=${destination}`} 
              alt={destination} 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {index === 0 && '7 Days Splendors of Tanzania'}
                {index === 1 && '3 Day Amboseli, Kilimanjaro Explore'}
                {index === 2 && '11 Day Kenya Game and Beach Safari'}
              </h3>
              <p className="text-gray-600 mb-4">
                {index === 0 && 'Explore the vast plains and beautiful national parks'}
                {index === 1 && 'Fun 3 days to experience the beauty of Mt. Kilimanjaro'}
                {index === 2 && 'Get to experience the magical game wildlife of Kenya'}
              </p>
              <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div>
     
      <HeroBanner />
      <FeatureSection />
      <PopularPackages />
    </div>
  );
};

export default Home;