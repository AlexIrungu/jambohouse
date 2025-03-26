import React, { useState } from 'react';

const TanzaniaSafari = () => {
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Serengeti & Ngorongoro Classic",
      duration: "5 Days / 4 Nights",
      description: "Experience the world-renowned Serengeti National Park and the incredible Ngorongoro Crater, a UNESCO World Heritage site.",
      highlights: [
        "Game drives in Serengeti",
        "Ngorongoro Crater exploration",
        "Witness the Great Wildebeest Migration",
        "Incredible wildlife photography"
      ],
      price: 2250,
      difficulty: "Moderate",
      coverImage: "/images/serengeti-safari.jpg"
    },
    {
      id: 2,
      name: "Tanzanian Northern Circuit",
      duration: "6 Days / 5 Nights",
      description: "Comprehensive safari covering Tarangire, Lake Manyara, Serengeti, and Ngorongoro for a complete Tanzanian wildlife experience.",
      highlights: [
        "Diverse national parks",
        "Tree-climbing lions in Lake Manyara",
        "Massive elephant herds in Tarangire",
        "Big Five wildlife viewing"
      ],
      price: 2600,
      difficulty: "Moderate",
      coverImage: "/images/tanzania-northern-circuit.jpg"
    },
    {
      id: 3,
      name: "Selous & Ruaha Wilderness Expedition",
      duration: "7 Days / 6 Nights",
      description: "Explore the less-traveled southern circuit, featuring pristine wilderness and incredible wildlife in Selous and Ruaha National Parks.",
      highlights: [
        "Remote wilderness experience",
        "Walking safaris",
        "Boat safaris in Selous",
        "Less crowded parks"
      ],
      price: 3100,
      difficulty: "Challenging",
      coverImage: "/images/selous-ruaha-safari.jpg"
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Tanzania Safari Packages</h1>
      
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

export default TanzaniaSafari;