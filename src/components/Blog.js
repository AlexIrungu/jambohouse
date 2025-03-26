import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

// Sample blog data (you'll replace this with your actual blog posts)
const blogPosts = [
  {
    id: 1,
    title: '5 Ways to get the Best Kenya Safari Prices When Traveling with Family',
    excerpt: 'Do you want to travel to East Africa and do a Kenya Safari? If yes, then here are so many things you must check and consider to get the best Kenya Safari prices.',
    author: 'Jambo',
    date: 'January 25, 2023',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    id: 2,
    title: '7 Celebrities who visited and enjoyed safari Kenya',
    excerpt: 'The reality is that safari Kenya is in many aspects tourist lists. Kenya is a beautiful country and other than its amazing landscapes, the country is well-known for offering the best safari destinations.',
    author: 'Jambo',
    date: 'January 16, 2023',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    id: 3,
    title: '10 Safari In Kenya facts you Should Know',
    excerpt: 'Kenya is a leader in East Africa when it comes to safari and tourism. People enjoy visiting the country for many reasons. The main ones being the wildlife, however, there are many other facts in Kenya.',
    author: 'Jambo',
    date: 'January 17, 2023',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    id: 4,
    title: '5 Unique things that make the best safari Kenya memories',
    excerpt: 'A safari is quite an interesting country to visit and experience a safari. Since it is the most attractive safari destination in East Africa, you also get the best safari Kenya experiences. Offer more...',
    author: 'Jambo',
    date: 'February 20, 2023',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    id: 5,
    title: 'Best Ways for Couples to Enjoy Safari Kenya Tours',
    excerpt: 'Kenya has continuously proved to be one of the best safari destinations in the world. Safari Kenya Tours offers the best experiences for different types of people. Whether you are a solo traveler...',
    author: 'Jambo',
    date: 'January 16, 2023',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    id: 6,
    title: '10 Things You Should Never Do On a Wildlife Safari Kenya',
    excerpt: 'Kenya is the number one safer destination and is the best place to get a comprehensive African safari experience. You will experience African wild and untamed side deep in the Savannah...',
    author: 'Jambo',
    date: 'January 17, 2023',
    imageUrl: '/api/placeholder/600/400'
  }
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Safari Blog</h1>
      
      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="font-bold text-xl mb-2 hover:text-blue-600">
                <a href={`/blog/${post.id}`}>{post.title}</a>
              </h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.author}</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="flex items-center space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 bg-gray-200 rounded-md disabled:opacity-50"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(blogPosts.length / postsPerPage)}
            className="p-2 bg-gray-200 rounded-md disabled:opacity-50"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Blog;