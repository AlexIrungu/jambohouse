import React, { useState } from 'react';

const RwandaSafari = () => {
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Gorilla Trekking Expedition",
      duration: "4 Days / 3 Nights",
      description: "Intimate gorilla tracking experience in Volcanoes National Park, home to the endangered mountain gorillas.",
      highlights: [
        "Gorilla tracking permit included",
        "Expert local guides",
        "Scenic mountain landscapes",
        "Unique wildlife encounter"
      ],
      price: 2750,
      difficulty: "Challenging",
      coverImage: "/images/rwanda-gorilla-trek.jpg"
    },
    {
      id: 2,
      name: "Rwanda Wildlife & Cultural Discovery",
      duration: "5 Days / 4 Nights",
      description: "Combine gorilla trekking with Akagera National Park's wildlife and immersive cultural experiences.",
      highlights: [
        "Gorilla tracking",
        "Big Five wildlife in Akagera",
        "Traditional Rwandan cultural visits",
        "Scenic lake and savanna landscapes"
      ],
      price: 3200,
      difficulty: "Moderate to Challenging",
      coverImage: "/images/rwanda-wildlife-safari.jpg"
    },
    {
      id: 3,
      name: "Rwanda Comprehensive Nature Expedition",
      duration: "7 Days / 6 Nights",
      description: "Ultimate Rwanda experience covering gorilla trekking, wildlife, cultural sites, and conservation areas.",
      highlights: [
        "Multiple gorilla tracking opportunities",
        "Chimpanzee tracking in Nyungwe Forest",
        "Lake Kivu scenic tour",
        "In-depth cultural immersion"
      ],
      price: 4100,
      difficulty: "Challenging",
      coverImage: "/images/rwanda-comprehensive-safari.jpg"
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Rwanda Safari Packages</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((safari) => (
          <div 
            key={safari.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img 
                src={safari.coverImage} 
                alt={safari.name} 
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                ${safari.price}
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-green-700">{safari.name}</h2>
              <p className="text-gray-600 mb-4">{safari.description}</p>
              
              <div className="mb-4">
                <span className="font-medium text-gray-700">Duration:</span>
                <span className="ml-2 text-gray-600">{safari.duration}</span>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Highlights:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {safari.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm">{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Difficulty: {safari.difficulty}
                </span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RwandaSafari;