import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, FilterIcon, Share2Icon, BookmarkIcon, ArrowLeftIcon } from 'lucide-react';

// Individual BlogPost component to display a single post
const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        // First try to get from localStorage
        const savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
        const cachedPost = savedPosts.find(p => p.slug === slug);
        
        if (cachedPost) {
          setPost(cachedPost);
          setIsLoading(false);
          return;
        }
        
        // If not in localStorage, fetch from API
        const response = await axios.get(
          `https://jambotravelhouseholidays.com/wp-json/wp/v2/posts?slug=${slug}&_embed=true`
        );
        
        if (response.data && response.data.length > 0) {
          const postData = response.data[0];
          const formattedPost = {
            id: postData.id,
            title: postData.title.rendered,
            content: postData.content.rendered,
            author: postData._embedded?.author?.[0]?.name || 'Jambo',
            date: new Date(postData.date).toLocaleDateString(),
            imageUrl: postData._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/api/placeholder/800/400',
            categories: postData._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || [],
            slug: postData.slug
          };
          setPost(formattedPost);
        } else {
          throw new Error("Post not found");
        }
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);
  
  if (isLoading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
  
  if (error || !post) return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <button 
        onClick={() => navigate('/blog')}
        className="flex items-center text-blue-500 hover:text-blue-700 mb-8"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to Blog
      </button>
      <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
        <p className="text-red-700">Error loading post: {error || "Post not found"}</p>
        <p className="text-gray-700 mt-2">We couldn't find the post you're looking for.</p>
      </div>
    </div>
  );
  
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-blue-500 hover:text-blue-700 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Blog
        </button>
        
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-64 md:h-96 object-cover"
          />
          
          <div className="p-8">
            {post.categories && post.categories.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.categories.map((category, index) => (
                  <span key={index} className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {category}
                  </span>
                ))}
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-6 text-gray-600">
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

// Saved posts component
const SavedPosts = () => {
  const [savedPosts, setSavedPosts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const saved = localStorage.getItem('savedPosts');
    setSavedPosts(saved ? JSON.parse(saved) : []);
  }, []);
  
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-blue-500 hover:text-blue-700 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Blog
        </button>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Saved Posts</h1>
        
        {savedPosts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-xl text-gray-600">You haven't saved any posts yet.</p>
            <button 
              onClick={() => navigate('/blog')}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Browse Posts
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="font-bold text-xl mb-2 hover:text-blue-600">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-50 flex justify-between items-center">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-blue-500 hover:text-blue-700 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                  <button
                    onClick={() => {
                      const newSavedPosts = savedPosts.filter(p => p.id !== post.id);
                      localStorage.setItem('savedPosts', JSON.stringify(newSavedPosts));
                      setSavedPosts(newSavedPosts);
                    }}
                    className="text-gray-500 hover:text-red-600"
                    aria-label="Remove from saved"
                  >
                    <BookmarkIcon className="h-5 w-5 fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Main Blog component
const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [savedPosts, setSavedPosts] = useState(() => {
    // Load saved posts from localStorage if available
    const saved = localStorage.getItem('savedPosts');
    return saved ? JSON.parse(saved) : [];
  });
  
  const postsPerPage = 6;

  // Debounced search function
  const debouncedSearch = useCallback((term) => {
    const handler = setTimeout(() => {
      setSearchTerm(term);
      setCurrentPage(1); // Reset to first page when searching
    }, 500);
    
    return () => clearTimeout(handler);
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `https://jambotravelhouseholidays.com/wp-json/wp/v2/categories`
        );
        setCategories(response.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  // Fetch posts based on current filters
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const params = {
          _embed: true,
          per_page: postsPerPage,
          page: currentPage,
        };

        if (searchTerm) {
          params.search = searchTerm;
        }

        if (selectedCategory !== 'all') {
          params.categories = selectedCategory;
        }

        const response = await axios.get(
          `https://jambotravelhouseholidays.com/wp-json/wp/v2/posts`, 
          { params }
        );
        
        // Format posts
        const formattedPosts = response.data.map(post => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 150) + '...',
          content: post.content.rendered,
          author: post._embedded?.author?.[0]?.name || 'Jambo',
          date: new Date(post.date).toLocaleDateString(),
          imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/api/placeholder/600/400',
          categories: post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || [],
          slug: post.slug
        }));

        // Set total pages from WordPress headers
        const totalPagesHeader = response.headers['x-wp-totalpages'];
        setTotalPages(parseInt(totalPagesHeader, 10) || 1);

        setBlogPosts(formattedPosts);
        
        // Cache the posts in localStorage for offline access
        localStorage.setItem(`blogPosts_${currentPage}_${searchTerm}_${selectedCategory}`, 
          JSON.stringify(formattedPosts));
        localStorage.setItem(`totalPages_${searchTerm}_${selectedCategory}`, 
          totalPagesHeader || 1);
          
        setIsLoading(false);
      } catch (err) {
        // Try to load from cache if available
        const cachedPosts = localStorage.getItem(`blogPosts_${currentPage}_${searchTerm}_${selectedCategory}`);
        const cachedPages = localStorage.getItem(`totalPages_${searchTerm}_${selectedCategory}`);
        
        if (cachedPosts) {
          setBlogPosts(JSON.parse(cachedPosts));
          setTotalPages(parseInt(cachedPages, 10) || 1);
          setIsLoading(false);
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      }
    };

    fetchPosts();
  }, [currentPage, searchTerm, selectedCategory]);

  // Save posts for offline reading
  const toggleSavePost = (post) => {
    setSavedPosts(prev => {
      const isSaved = prev.some(p => p.id === post.id);
      let newSavedPosts;
      
      if (isSaved) {
        newSavedPosts = prev.filter(p => p.id !== post.id);
      } else {
        newSavedPosts = [...prev, post];
      }
      
      localStorage.setItem('savedPosts', JSON.stringify(newSavedPosts));
      return newSavedPosts;
    });
  };

  const isPostSaved = (postId) => {
    return savedPosts.some(p => p.id === postId);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return (
      <div className="flex justify-center mt-12 mb-8">
        <nav className="flex items-center space-x-2">
          <button
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
            className="p-2 bg-gray-200 rounded-md disabled:opacity-50"
            aria-label="First page"
          >
            <span className="sr-only">First</span>
            ««
          </button>
          
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 bg-gray-200 rounded-md disabled:opacity-50"
            aria-label="Previous page"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md ${
                currentPage === number 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label={`Page ${number}`}
              aria-current={currentPage === number ? 'page' : null}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 bg-gray-200 rounded-md disabled:opacity-50"
            aria-label="Next page"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 bg-gray-200 rounded-md disabled:opacity-50"
            aria-label="Last page"
          >
            <span className="sr-only">Last</span>
            »»
          </button>
        </nav>
      </div>
    );
  };

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error && blogPosts.length === 0) return (
    <div className="text-center py-12 px-6">
      <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-8">
        <p className="text-red-700">Error loading posts: {error}</p>
        <p className="text-gray-700 mt-2">We're unable to connect to the blog server. Please check your connection or try again later.</p>
      </div>
      
      {savedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Saved Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {savedPosts.map(post => (
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
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
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
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Safari Insights & Adventures
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Explore the Wild: Discover Untold Stories from the Heart of Africa's Wilderness
          </p>
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <p className="text-gray-800 leading-relaxed">
              Dive into our collection of captivating stories, expert wildlife guides, 
              conservation insights, and breathtaking journeys that bring the magic of 
              safari experiences directly to you. From up-close animal encounters to 
              behind-the-scenes conservation efforts, our blog is your window to the 
              extraordinary world of African wildlife and exploration.
            </p>
          </div>
        </header>
        
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="relative w-full md:w-auto flex-grow md:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search posts..."
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FilterIcon className="h-5 w-5 text-gray-400" />
              </div>
              <select 
                onChange={handleCategoryChange}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-md w-full md:w-auto focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <Link 
              to="/blog/saved"
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <BookmarkIcon className="h-5 w-5 mr-2 text-blue-500" />
              <span className="hidden sm:inline">Saved</span>
              <span className="inline sm:hidden">({savedPosts.length})</span>
            </Link>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        {blogPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No posts found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-56 object-cover"
                  />
                  <button
                    onClick={() => toggleSavePost(post)}
                    className={`absolute top-4 right-4 p-2 rounded-full ${
                      isPostSaved(post.id) 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white text-gray-700'
                    }`}
                    aria-label={isPostSaved(post.id) ? "Unsave post" : "Save post"}
                  >
                    <BookmarkIcon className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  {post.categories && post.categories.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.categories.slice(0, 3).map((category, index) => (
                        <span key={index} className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <h2 className="font-bold text-xl mb-3 line-clamp-2 hover:text-blue-600">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-gray-700 mb-5 flex-grow">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                  
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Share post"
                  >
                    <Share2Icon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && renderPagination()}
      </div>
    </div>
  );
};

// BlogContainer component with routes
const BlogContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/saved" element={<SavedPosts />} />
      <Route path="/:slug" element={<BlogPost />} />
    </Routes>
  );
};

export default BlogContainer;