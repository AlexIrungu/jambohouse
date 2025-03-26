import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter, MapPin, Calendar, Users, Clock } from 'lucide-react';

const SafariPackage = ({ 
  name, 
  code, 
  duration, 
  destinations, 
  highlights, 
  accommodations, 
  price 
}) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="font-bold text-xl text-gray-800">{name}</h3>
        <p className="text-sm text-blue-600 font-medium">Tour Code: {code}</p>
      </div>
      <span className="text-lg font-bold text-green-600">${price.toFixed(2)}</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div className="flex items-center text-gray-600">
        <Clock className="mr-2" size={18} />
        <span>{duration} days</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="mr-2" size={18} />
        <span>{destinations.join(', ')}</span>
      </div>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-700 mb-2">Package Highlights:</h4>
      <ul className="list-disc pl-5 text-gray-600">
        {highlights.map((highlight, index) => (
          <li key={index} className="mb-1">{highlight}</li>
        ))}
      </ul>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-700 mb-2">Accommodations:</h4>
      <div className="space-y-2">
        {accommodations.map((acc, index) => (
          <div key={index} className="flex items-start">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
              Day {acc.day}
            </span>
            <span className="text-gray-600">{acc.name}</span>
          </div>
        ))}
      </div>
    </div>

    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
      Book This Safari
    </button>
  </div>
);

const SafariPricelist = () => {
  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'price', direction: 'asc' });
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Safari packages data extracted from the brochure
  const safariPackages = [
    {
      id: 1,
      name: 'Grand Kenya Safari',
      code: 'JT001',
      duration: 10,
      category: 'Classic',
      price: 3500,
      destinations: ['Nairobi', 'Samburu', 'Mount Kenya', 'Lake Nakuru', 'Masai Mara', 'Amboseli'],
      highlights: [
        'Game drives in multiple national parks',
        'Visit to the Great Rift Valley',
        'Views of Mount Kilimanjaro',
        'Optional balloon ride in Masai Mara',
        'Diverse wildlife viewing opportunities'
      ],
      accommodations: [
        { day: 1, name: 'Nairobi Serena Hotel' },
        { day: 2, name: 'Samburu Simba Lodge' },
        { day: 4, name: 'Serena Mountain Lodge' },
        { day: 5, name: 'Flamingo Hill Tented Camp' },
        { day: 6, name: 'Mara Serena Lodge' },
        { day: 8, name: 'Amboseli Serena Lodge' }
      ]
    },
    {
      id: 2,
      name: 'Twiga Safari',
      code: 'JT003',
      duration: 10,
      category: 'Classic',
      price: 3200,
      destinations: ['Nairobi', 'Samburu', 'Aberdare', 'Lake Nakuru', 'Masai Mara', 'Amboseli'],
      highlights: [
        'Visit to Aberdare National Park',
        'Game drives in Samburu Reserve',
        'Optional balloon safari',
        'Views of Mount Kenya',
        'Photography opportunities'
      ],
      accommodations: [
        { day: 1, name: 'The Stanley Hotel' },
        { day: 2, name: 'Sarova Shaba Lodge' },
        { day: 4, name: 'The Ark Lodge' },
        { day: 5, name: 'Sarova Lion Hill Lodge' },
        { day: 6, name: 'Sarova Mara Camp' },
        { day: 8, name: 'Oltukai Lodge' }
      ]
    },
    {
      id: 3,
      name: 'Best of East Africa',
      code: 'JT035',
      duration: 13,
      category: 'Luxury',
      price: 6500,
      destinations: ['Nairobi', 'Samburu', 'Aberdare', 'Lake Nakuru', 'Masai Mara', 'Serengeti', 'Ngorongoro', 'Lake Manyara'],
      highlights: [
        'Luxury tented camps',
        'Visit to Serengeti National Park',
        'Ngorongoro Crater tour',
        'Cross-border Kenya/Tanzania experience',
        'Exclusive wildlife viewing'
      ],
      accommodations: [
        { day: 1, name: 'Fairmont Norfolk Hotel' },
        { day: 2, name: 'Samburu Intrepids Camp' },
        { day: 4, name: 'The Fairmont Ark Lodge' },
        { day: 6, name: 'Fairmont Mara Safari Club' },
        { day: 8, name: 'Kirawira Camp' },
        { day: 10, name: 'Ngorongoro Serena Lodge' }
      ]
    },
    {
      id: 4,
      name: 'Kilimanjaro Safari',
      code: 'JT022',
      duration: 3,
      category: 'Mt. Kilimanjaro',
      price: 1200,
      destinations: ['Amboseli'],
      highlights: [
        'Views of Mount Kilimanjaro',
        'Game drives in Amboseli National Park',
        'Photography of elephants with Kilimanjaro backdrop',
        'Seasonal swamps and marshes wildlife'
      ],
      accommodations: [
        { day: 1, name: 'Amboseli Serena Lodge' },
        { day: 2, name: 'Amboseli Serena Lodge' }
      ]
    },
    {
      id: 5,
      name: 'Classic Rwanda Safari',
      code: 'JT045',
      duration: 6,
      category: 'Rwanda',
      price: 4200,
      destinations: ['Kigali', 'Nyungwe', 'Lake Kivu', 'Ruhengeri'],
      highlights: [
        'Gorilla trekking in Volcanoes National Park',
        'Chimpanzee tracking in Nyungwe Forest',
        'Visit to King\'s Palace at Nyanza',
        'Lake Kivu boat journey',
        'Cultural experiences'
      ],
      accommodations: [
        { day: 1, name: 'Gisakura Guest House' },
        { day: 3, name: 'Lake Kivu Serena Hotel' },
        { day: 4, name: 'Gorilla Mountain View Lodge' },
        { day: 5, name: 'Novotel Umubano/Kigali Serena' }
      ]
    }
  ];

  const categories = ['All', ...new Set(safariPackages.map(pkg => pkg.category))];

  const filteredItems = safariPackages.filter(item => 
    (item.name.toLowerCase().includes(filter.toLowerCase()) ||
    item.category.toLowerCase().includes(filter.toLowerCase())) &&
    (selectedCategory === 'All' || item.category === selectedCategory)
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Jambo Safari Packages</h2>
      <p className="text-center text-gray-600 mb-8">Your Tour Operator in East Africa</p>
      
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input 
            type="text" 
            placeholder="Search safaris..." 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Filter className="absolute left-3 top-3.5 text-gray-400" size={20} />
        </div>
        
        <div className="flex space-x-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <button 
            onClick={() => requestSort('price')}
            className="flex items-center px-4 py-3 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors"
          >
            Price 
            {sortConfig.key === 'price' && (
              sortConfig.direction === 'asc' 
                ? <ChevronUp className="ml-1" size={16} /> 
                : <ChevronDown className="ml-1" size={16} />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {sortedItems.length > 0 ? (
          sortedItems.map(pkg => (
            <SafariPackage 
              key={pkg.id}
              name={pkg.name}
              code={pkg.code}
              duration={pkg.duration}
              destinations={pkg.destinations}
              highlights={pkg.highlights}
              accommodations={pkg.accommodations}
              price={pkg.price}
            />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No safari packages found matching your criteria</p>
            <button 
              onClick={() => {
                setFilter('');
                setSelectedCategory('All');
              }}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafariPricelist;