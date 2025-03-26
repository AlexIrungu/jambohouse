import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

const PricelistItem = ({ name, description, price, category }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <span className="text-blue-600 font-semibold mt-2 block">${price.toFixed(2)}</span>
      </div>
      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
        {category}
      </span>
    </div>
  </div>
);

const Pricelist = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Masai Mara Safari', description: '3-day safari experience in Masai Mara', price: 1200, category: 'Safari' },
    { id: 2, name: 'Serengeti Adventure', description: '5-day wildlife adventure in Serengeti', price: 2500, category: 'Safari' },
    { id: 3, name: 'Luxury Lodge Stay', description: 'All-inclusive luxury stay at Ngorongoro Serena Lodge', price: 800, category: 'Accommodation' },
    { id: 4, name: 'Amboseli National Park Tour', description: '2-day guided tour in Amboseli with game drives', price: 900, category: 'Safari' },
    { id: 5, name: 'Balloon Safari Experience', description: 'Hot air balloon safari over the Mara with champagne breakfast', price: 500, category: 'Activity' }
  ]);

  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'price', direction: 'asc' });

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(filter.toLowerCase()) ||
    item.category.toLowerCase().includes(filter.toLowerCase())
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
    <div className="max-w-2xl mx-auto p-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Jambo Pricelist</h2>
      
      <div className="mb-4 flex items-center">
        <div className="relative flex-grow mr-2">
          <input 
            type="text" 
            placeholder="Search items..." 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 pl-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Filter className="absolute left-2 top-3 text-gray-400" size={20} />
        </div>
      </div>

      <div className="flex justify-end mb-4 space-x-2">
        <button 
          onClick={() => requestSort('price')}
          className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
        >
          Sort by Price 
          {sortConfig.key === 'price' && (
            sortConfig.direction === 'asc' 
              ? <ChevronUp className="ml-1" size={16} /> 
              : <ChevronDown className="ml-1" size={16} />
          )}
        </button>
      </div>

      <div>
        {sortedItems.length > 0 ? (
          sortedItems.map(item => (
            <PricelistItem 
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              category={item.category}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No items found</p>
        )}
      </div>
    </div>
  );
};

export default Pricelist;
