import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        // Fetch specific post with full content and embedded resources
        const response = await axios.get(
          `https://jambotravelhouseholidays.com/wp-json/wp/v2/posts/${id}?_embed`
        );
        
        // Format post details
        const formattedPost = {
          id: response.data.id,
          title: response.data.title.rendered,
          content: response.data.content.rendered,
          author: response.data._embedded?.author?.[0]?.name || 'Jambo',
          date: new Date(response.data.date).toLocaleDateString(),
          imageUrl: response.data._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/api/placeholder/800/400'
        };

        setPost(formattedPost);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (isLoading) return <div className="text-center py-10">Loading post details...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!post) return <div className="text-center py-10">Post not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Post Image */}
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        {/* Post Title */}
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        {/* Post Meta */}
        <div className="flex justify-between items-center mb-6 text-gray-600">
          <span>By {post.author}</span>
          <span>{post.date}</span>
        </div>

        {/* Post Content */}
        <div 
          className="prose lg:prose-xl" 
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to Blog Button */}
        <div className="mt-8">
          <Link 
            to="/blog" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;