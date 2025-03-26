import React, { useState } from 'react';
import KenyaSafaris from './KenyaSafari';
import TanzaniaSafaris from './TanzaniaSafari';
import RwandaSafaris from './RwandaSafari';

const Safaris = () => {
  const [activeDestination, setActiveDestination] = useState('kenya');

  const destinations = [
    {
      id: 'kenya',
      name: 'Kenya',
      description: 'Home of the Great Wildebeest Migration and iconic national parks',
      backgroundImage: '/images/kenya-safari-bg.jpg',
      flagIcon: '🇰🇪'
    },
    {
      id: 'tanzania',
      name: 'Tanzania',
      description: 'Serengeti, Ngorongoro, and unparalleled wildlife experiences',
      backgroundImage: '/images/tanzania-safari-bg.jpg',
      flagIcon: '🇹🇿'
    },
    {
      id: 'rwanda',
      name: 'Rwanda',
      description: 'Mountain gorillas, lush landscapes, and unique wildlife encounters',
      backgroundImage: '/images/rwanda-safari-bg.jpg',
      flagIcon: '🇷🇼'
    }
  ];

  const renderDestinationComponent = () => {
    switch(activeDestination) {
      case 'kenya':
        return <KenyaSafaris />;
      case 'tanzania':
        return <TanzaniaSafaris />;
      case 'rwanda':
        return <RwandaSafaris />;
      default:
        return <KenyaSafaris />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${destinations.find(d => d.id === activeDestination).backgroundImage})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {destinations.find(d => d.id === activeDestination).flagIcon}{' '}
            {destinations.find(d => d.id === activeDestination).name} Safaris
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
            {destinations.find(d => d.id === activeDestination).description}
          </p>
        </div>
      </div>

      {/* Destination Selector */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          {destinations.map((destination) => (
            <button
              key={destination.id}
              onClick={() => setActiveDestination(destination.id)}
              className={`
                px-6 py-2 rounded-full transition-all duration-300 flex items-center space-x-2
                ${activeDestination === destination.id 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-green-800 border border-green-600 hover:bg-green-100'}
              `}
            >
              <span>{destination.flagIcon}</span>
              <span>{destination.name}</span>
            </button>
          ))}
        </div>

        {/* Safari Packages Container */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {renderDestinationComponent()}
        </div>
      </div>

      {/* Additional Call to Action */}
      <div className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Plan Your Dream African Safari</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Explore the breathtaking landscapes, incredible wildlife, and unforgettable experiences across East Africa.
        </p>
        <button className="bg-white text-green-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-100 transition">
          Contact Our Experts
        </button>
      </div>
    </div>
  );
};

export default Safaris;