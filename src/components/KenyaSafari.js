import React, { useState } from 'react';

const KenyaSafari = () => {
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Masai Mara Classic Safari",
      duration: "4 Days / 3 Nights",
      description: "Experience the world-famous Masai Mara National Reserve, home to the Great Wildebeest Migration and incredible wildlife.",
      highlights: [
        "Game drives in Masai Mara",
        "Witness the Great Wildebeest Migration",
        "Optional hot air balloon safari",
        "Cultural Maasai village visit"
      ],
      price: 1850,
      difficulty: "Moderate",
      coverImage: "/images/masai-mara-safari.jpg"
    },
    {
      id: 2,
      name: "Amboseli & Tsavo Adventure",
      duration: "5 Days / 4 Nights",
      description: "Explore two of Kenya's most iconic national parks with stunning views of Mount Kilimanjaro and diverse wildlife.",
      highlights: [
        "Elephant viewing in Amboseli",
        "Scenic landscapes of Tsavo East",
        "Photographic opportunities",
        "Diverse wildlife encounters"
      ],
      price: 2100,
      difficulty: "Easy",
      coverImage: "/images/amboseli-safari.jpg"
    },
    {
      id: 3,
      name: "Kenya Ultimate Wildlife Circuit",
      duration: "7 Days / 6 Nights",
      description: "Comprehensive safari covering multiple national parks including Samburu, Lake Nakuru, and Masai Mara.",
      highlights: [
        "Big Five wildlife viewing",
        "Scenic national parks",
        "Lake Nakuru's flamingo populations",
        "Diverse ecosystem exploration"
      ],
      price: 2750,
      difficulty: "Moderate to Challenging",
      coverImage: "/images/kenya-wildlife-circuit.jpg"
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Kenya Safari Packages</h1>
      
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

export default KenyaSafari;