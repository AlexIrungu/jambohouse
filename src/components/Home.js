

// const NewsletterSection = () => (
//   <section className="py-24 bg-green-700 text-white relative overflow-hidden">
//     <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FmYXJpJTIwc3Vuc2V0fGVufDB8fDB8fHww")' }}></div>
//     <div className="container mx-auto px-4 relative z-10">
//       <div className="max-w-4xl mx-auto text-center">
//         <div className="flex items-center justify-center mb-4">
//           <div className="h-1 w-12 bg-white mr-4 opacity-60"></div>
//           <p className="text-white font-medium uppercase tracking-wider">Stay Connected</p>
//           <div className="h-1 w-12 bg-white ml-4 opacity-60"></div>
//         </div>
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Safari Community</h2>
//         <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
//           Subscribe to receive exclusive offers, expert travel tips, and inspiring stories from the African wilderness.
//         </p>
        
//         <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
//           <input 
//             type="email" 
//             placeholder="Enter your email address" 
//             className="flex-grow py-4 px-6 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
//           />
//           <button className="bg-white text-green-800 hover:bg-green-100 px-8 py-4 rounded-full font-medium transition-all hover:scale-105 whitespace-nowrap">
//             Subscribe Now
//           </button>
//         </div>
        
//         <p className="mt-6 text-sm opacity-80">
//           By subscribing, you agree to our Privacy Policy and consent to receive updates from Wild Horizons.
//         </p>
//       </div>
//     </div>
//   </section>
// );





import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  MapPin, 
  Users, 
  CheckCircle,
  Star,
  Calendar,
  Clock,
  ArrowRight,
  Globe,
  Award,
  Target,
  ChevronLeft,
  ChevronRight,
  Compass,
  Camera,
  Heart,
  Leaf,
  Shield,
  Phone,
  Mail,
  ThumbsUp,
  Share2,
  Map,
  Info
} from 'lucide-react';
import marasunset from '../assets/marasunset.jpg';
import elephant from '../assets/elephant.jpg';
import FeaturesBar from './FeaturesBar'
import { PopularDestinations } from './Destinations';
import NationalParksSection from './NationalParksSection';

const HeroBanner = () => (
  <div 
    className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white"
    style={{
        backgroundImage: `url(${marasunset})`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.45)'
      }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
    <div className="text-center max-w-3xl px-4 relative z-10">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">One Step Away from Your Dream Safari</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
        Discover the magic of Africa. Unforgettable wildlife encounters and breathtaking landscapes await.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to='/enquire'>
        <button className="bg-asparagus hover:bg-moss-green px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all hover:scale-105 focus:ring-4 focus:ring-moss-green/50">
          Plan Your Safari
        </button>
        </Link>
        
        <Link to='/safaris'>
        <button className="bg-transparent border-2 border-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105">
          Explore Destinations
        </button>
        </Link>
        
      </div>
    </div>
    <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
      <ArrowRight className="transform rotate-90" size={32} />
    </div>
  </div>
);



const FeatureSection = () => (
  <section className="py-20 ">
    <div className="container mx-auto px-4">
      <div className="max-w-xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">Why Choose Jambo Travel House</h2>
        <div className="h-1 w-24 bg-asparagus mx-auto mb-6"></div>
        <p className="text-cafe-noir text-lg">We combine luxury and adventure to create unforgettable safari experiences that connect you with nature's most spectacular wonders.</p>
      </div>
     
     
       <FeaturesBar />
    </div>
   
  </section>
);

const AboutUsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 relative">
          <img 
            src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/1c/bd/6f.jpg" 
            alt="Safari Company Story" 
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
          <div className="absolute -bottom-8 -right-8 bg-moss-green text-white p-6 rounded-lg shadow-lg hidden md:block">
            <p className="text-3xl font-bold">20+</p>
            <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex items-center mb-4">
            <div className="h-1 w-12 bg-hunyadi-yellow mr-4"></div>
            <p className="text-hunyadi-yellow font-medium uppercase tracking-wider">Our Story</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">About Wild Horizons Safari</h2>
          <p className="text-cafe-noir mb-6 text-lg leading-relaxed">
            For over two decades, we've been crafting extraordinary African safari experiences that connect travelers with the raw beauty and incredible wildlife of the continent. Our journey began with a simple passion for Africa's wilderness and has evolved into a commitment to creating transformative adventures.
          </p>
          <p className="text-cafe-noir mb-8 text-lg leading-relaxed">
            Every safari we design combines luxury with authentic experiences, ensuring you not only witness Africa's magic but become part of its story.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-eggshell p-6 rounded-lg">
              <Globe className="text-princeton-orange mb-3" size={32} />
              <h4 className="font-bold text-lg mb-1 text-cafe-noir">Global Reach</h4>
              <p className="text-cafe-noir">Welcoming travelers from across the world</p>
            </div>
            <div className="bg-eggshell p-6 rounded-lg">
              <Award className="text-gold-metallic mb-3" size={32} />
              <h4 className="font-bold text-lg mb-1 text-cafe-noir">Award-Winning</h4>
              <p className="text-cafe-noir">Recognized for exceptional safari experiences</p>
            </div>
            <div className="bg-eggshell p-6 rounded-lg">
              <Target className="text-brown-sugar mb-3" size={32} />
              <h4 className="font-bold text-lg mb-1 text-cafe-noir">Personalized</h4>
              <p className="text-cafe-noir">Tailored journeys for every traveler</p>
            </div>
          </div>
          <Link to='/about'>
          <button className="bg-asparagus hover:bg-moss-green text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 inline-flex items-center group">
            Discover Our Full Story
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  </section>
);

const DestinationsSection = () => {
  const destinations = [
    {
      name: "Kenya",
      description: "Home to the iconic Masai Mara and the Great Migration, offering classic safari landscapes and rich cultural experiences.",
      image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww", // Using placeholder as per requirements
      highlights: ["Masai Mara", "Amboseli", "Lake Nakuru", "Samburu"],
      link: "/safaris/kenya"
    },
    {
      name: "Tanzania",
      description: "Experience the endless plains of Serengeti and the natural wonder of Ngorongoro Crater teeming with wildlife.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlcmVuZ2V0aXxlbnwwfHwwfHx8MA%3D%3D", // Using placeholder as per requirements
      highlights: ["Serengeti", "Ngorongoro", "Tarangire", "Mt. Kilimanjaro"],
      link: "/safaris/tanzania"
    },
    {
      name: "Rwanda",
      description: "Trek through misty forests to encounter endangered mountain gorillas in one of Africa's most beautiful countries.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cndhbmRhJTIwZ29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D", // Using placeholder as per requirements
      highlights: ["Volcanoes National Park", "Nyungwe Forest", "Lake Kivu", "Akagera"],
      link: "/safaris/rwanda"
    }
  ];

  return (
    <section className="py-20 bg-eggshell">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-princeton-orange mr-4"></div>
            <p className="text-princeton-orange font-medium uppercase tracking-wider">Where Dreams Begin</p>
            <div className="h-1 w-12 bg-princeton-orange ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">Explore Our Destinations</h2>
          <p className="text-cafe-noir text-lg">Discover the diverse landscapes and wildlife that make East Africa a premier safari destination.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/5]">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="mb-4 opacity-90">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={destination.link} 
                    className="bg-white text-cafe-noir hover:bg-cornsilk px-6 py-2 font-medium transition-all inline-flex items-center"
                  >
                    Explore {destination.name}
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};






const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Featured reviews from the full reviews collection
  const testimonials = [
    {
      quote: "We are very pleased in all aspects with our trip. Jambo Travel took care of everything and made it easy for us to show up and be taken care of. They left nothing out, and we were pampered from beginning to end. Joseph, our tour guide was fabulous, too!",
      author: "Jennifer and John",
      location: "United States",
      flag: "🇺🇸",
      rating: 5,
      title: "Trip of a Lifetime!",
      experienceLevel: "first safari"
    },
    {
      quote: "It has been such a pleasure to work with Mark Song and the Jambo Team. Mark showed professionalism at all times, even going above and beyond to make sure that our Annual Meeting was successful.",
      author: "June Titus",
      location: "South Africa",
      flag: "🇿🇦",
      rating: 5,
      title: "Job well done!",
      experienceLevel: "2-5 safaris"
    },
    {
      quote: "We have used Jambo Travel for many years and we feel safe traveling with them. The drivers are experienced and have good knowledge about the country and wildlife. They are service minded.",
      author: "Eli",
      location: "Norway",
      flag: "🇳🇴",
      rating: 5,
      title: "Excellent good drivers who drives safely",
      experienceLevel: "over 5 safaris"
    },
    {
      quote: "Great experience with Jambo Travel House holidays. We had a 3 days with Jambo Travel House holidays. Ngorongoro, Serengeti and Lake Manyara. I would like to appreciate the organization and the guides. Very well prepared.",
      author: "Robert Chris",
      location: "French Guiana",
      flag: "🇬🇫",
      rating: 5,
      title: "A great company ever!!",
      experienceLevel: "over 5 safaris"
    },
    {
      quote: "We had an unforgettable tour with Jambo Travel House. Reliability is excellent and the service was very good.",
      author: "Anne-Marie",
      location: "Norway",
      flag: "🇳🇴",
      rating: 5,
      title: "Excellent service and performance for the whole trip",
      experienceLevel: "first safari"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const RatingStars = ({ rating }) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "fill-gold-metallic text-gold-metallic" : "text-french-gray"} 
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-cornsilk relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -right-32 top-12 w-64 h-64 rounded-full bg-hunyadi-yellow opacity-10"></div>
      <div className="absolute left-12 -bottom-40 w-80 h-80 rounded-full bg-moss-green opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-princeton-orange mr-4"></div>
            <p className="text-princeton-orange font-medium uppercase tracking-wider">Guest Experiences</p>
            <div className="h-1 w-12 bg-princeton-orange ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">What Our Travelers Say</h2>
          <p className="text-cafe-noir text-lg">Real stories from real adventurers who experienced the magic of Africa with us.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="text-6xl text-hunyadi-yellow opacity-30 absolute top-6 left-8">"</div>
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-cornsilk bg-moss-green/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-moss-green">
                  {testimonials[currentIndex].author.split(' ')[0][0]}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold text-xl text-cafe-noir">{testimonials[currentIndex].title}</h4>
                  <span className="text-xl">{testimonials[currentIndex].flag}</span>
                </div>
                
                <RatingStars rating={testimonials[currentIndex].rating} />
                
                <p className="text-cafe-noir text-lg italic mb-6">
                  {testimonials[currentIndex].quote}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-cafe-noir">{testimonials[currentIndex].author}</h4>
                    <p className="text-cafe-noir/80">{testimonials[currentIndex].location}</p>
                  </div>
                  <div className="bg-eggshell py-1 px-3 rounded-full">
                    <span className="text-sm text-cafe-noir/70">{testimonials[currentIndex].experienceLevel}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide}
              className="bg-white hover:bg-hunyadi-yellow text-cafe-noir w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-hunyadi-yellow' : 'bg-cafe-noir opacity-30'} transition-all`}
                aria-label={`Go to review ${index + 1}`}
              ></button>
            ))}
            <button 
              onClick={nextSlide}
              className="bg-white hover:bg-hunyadi-yellow text-cafe-noir w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* View all reviews button */}
          <div className="flex justify-center mt-12">
            <Link 
              to="/reviews" 
              className="bg-moss-green hover:bg-moss-green/90 text-white font-medium py-3 px-6 rounded-md transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              View All Reviews
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => (
<section 
  className="py-24 relative bg-cover bg-center"
  style={{
    backgroundImage: `url(${elephant})`,
    backgroundBlendMode: 'overlay',
    backgroundColor: 'rgba(0,0,0,0.6)'
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-xl text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Begin Your African Adventure Today</h2>
      <p className="text-xl mb-8">Let us create a tailored safari experience that will exceed your expectations and create memories to last a lifetime.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-hunyadi-yellow hover:bg-gold-metallic text-cafe-noir px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all hover:scale-105">
          Plan Your Safari
        </button>
        <button className="bg-transparent border-2 border-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</section>
);




// This component is meant to be integrated into your existing Home page
const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        // Try to get from localStorage first for better performance
        const cachedPosts = localStorage.getItem('homepageBlogPosts');
        
        if (cachedPosts) {
          setPosts(JSON.parse(cachedPosts));
          setIsLoading(false);
        }
        
        // Fetch latest posts from API
        const response = await axios.get(
          'https://jambotravelhouseholidays.com/wp-json/wp/v2/posts', 
          { 
            params: {
              _embed: true,
              per_page: 3 // Only fetch 3 latest posts
            }
          }
        );
        
        // Format posts
        const formattedPosts = response.data.map(post => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 120) + '...',
          date: new Date(post.date).toLocaleDateString(),
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Safari',
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/api/placeholder/600/400',
          slug: post.slug
        }));

        setPosts(formattedPosts);
        setIsLoading(false);
        
        // Cache the result
        localStorage.setItem('homepageBlogPosts', JSON.stringify(formattedPosts));
        // Set expiry for cache (24 hours)
        localStorage.setItem('homepageBlogPostsExpiry', Date.now() + (24 * 60 * 60 * 1000));
        
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    // Check if cache is expired
    const cacheExpiry = localStorage.getItem('homepageBlogPostsExpiry');
    if (!cacheExpiry || Date.now() > parseInt(cacheExpiry)) {
      fetchPosts();
    } else {
      const cachedPosts = localStorage.getItem('homepageBlogPosts');
      if (cachedPosts) {
        setPosts(JSON.parse(cachedPosts));
      } else {
        fetchPosts();
      }
      setIsLoading(false);
    }
  }, []);

  // Fallback data if API fails and no cache exists
  const fallbackPosts = [
    {
      title: "Top 10 Wildlife Photography Tips for Your Safari",
      excerpt: "Capture breathtaking moments with these expert tips from professional wildlife photographers.",
      date: "Mar 15, 2025",
      category: "Photography",
      image: "/api/placeholder/500/300"
    },
    {
      title: "What to Pack for Your First African Safari Adventure",
      excerpt: "Essential items and expert recommendations for a comfortable and memorable safari experience.",
      date: "Feb 28, 2025",
      category: "Travel Tips",
      image: "/api/placeholder/500/300"
    },
    {
      title: "Conservation Success: Rhino Population Growing in Kenya",
      excerpt: "Learn about the positive impact of conservation efforts and how travelers can contribute.",
      date: "Jan 20, 2025",
      category: "Conservation",
      image: "/api/placeholder/500/300"
    }
  ];

  // Use fallback posts if loading failed or no posts were returned
  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  const navigate = useNavigate();

  // Handle navigation to blog page
  const handleBlogNavigation = () => {
    navigate('/blog');
  };

  return (
    <section className="py-20 bg-eggshell">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-moss-green mr-4"></div>
            <p className="text-asparagus font-medium uppercase tracking-wider">Safari Insights</p>
            <div className="h-1 w-12 bg-moss-green ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">From Our Blog</h2>
          <p className="text-brown-sugar text-lg">Expert advice, travel tips, and inspiring stories from the African wilderness.</p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-moss-green"></div>
          </div>
        ) : error ? (
          <div className="text-center py-6">
            <p className="text-red-600 mb-4">Unable to load latest blog posts.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fallbackPosts.map((post, index) => (
                <BlogPostCard key={index} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <button 
            onClick={handleBlogNavigation}
            className="bg-alice-blue hover:bg-columbia-blue text-cafe-noir px-8 py-4 rounded-full font-medium transition-all hover:scale-105 inline-flex items-center"
          >
            Visit Our Blog
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

// Separated blog post card component for cleaner code
const BlogPostCard = ({ post }) => {
  const navigate = useNavigate();
  
  // Handle navigation to individual blog post
  const handlePostClick = () => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <div className="bg-cornsilk rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-60 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-mindaro text-cafe-noir px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <span className="text-cafe-noir text-opacity-70 text-sm flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-cafe-noir">{post.title}</h3>
        <p className="text-brown-sugar mb-4">{post.excerpt}</p>
        <button 
          onClick={handlePostClick}
          className="text-princeton-orange hover:text-gold-metallic font-medium inline-flex items-center group"
        >
          Read More
          <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
        </button>
      </div>
    </div>
  );
};


const ContactSection = () => (
<section className="py-20 bg-eggshell">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 md:p-12 lg:p-16">
          <div className="flex items-center mb-6">
            <div className="h-1 w-12 bg-princeton-orange mr-4"></div>
            <p className="text-princeton-orange font-medium uppercase tracking-wider">Get in Touch</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">Contact Our Safari Experts</h2>
          <p className="text-cafe-noir text-lg mb-8">Have questions or ready to start planning your dream safari? Our experienced team is here to help you create the perfect African adventure.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start">
              <div className="bg-cornsilk p-3 rounded-full mr-4">
                <MapPin className="text-brown-sugar" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-cafe-noir mb-1">Our Office</h4>
                <p className="text-cafe-noir">123 Safari Avenue<br />Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cornsilk p-3 rounded-full mr-4">
                <Phone className="text-hunyadi-yellow" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-cafe-noir mb-1">Phone</h4>
                <p className="text-cafe-noir">+254 123 456 789<br />+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cornsilk p-3 rounded-full mr-4">
                <Mail className="text-moss-green" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-cafe-noir mb-1">Email</h4>
                <p className="text-cafe-noir">info@wildhorizons.com<br />bookings@wildhorizons.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cornsilk p-3 rounded-full mr-4">
                <Clock className="text-brown-sugar" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-cafe-noir mb-1">Office Hours</h4>
                <p className="text-cafe-noir">Monday - Friday<br />9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-cafe-noir font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-french-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-moss-green"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-cafe-noir font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-french-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-moss-green"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-cafe-noir font-medium mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 border border-french-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-moss-green"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-cafe-noir font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-3 border border-french-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-moss-green"
                placeholder="Tell us about your dream safari..."
              ></textarea>
            </div>
            <button type="submit" className="bg-asparagus hover:bg-moss-green text-white px-8 py-3 rounded-full font-medium transition-all">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="bg-cornsilk p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-cafe-noir mb-6">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              {[
                {
                  question: "When is the best time to go on safari?",
                  answer: "The best time depends on your destination and what you want to see. Generally, dry seasons (June-October) offer better wildlife viewing as animals gather around water sources."
                },
                {
                  question: "How far in advance should I book?",
                  answer: "We recommend booking 6-12 months in advance, especially for peak season travel or if you have specific lodges in mind."
                },
                {
                  question: "What should I pack for a safari?",
                  answer: "Lightweight, neutral-colored clothing, hat, sunscreen, binoculars, camera, and any personal medications. We provide a detailed packing list after booking."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-french-gray pb-6">
                  <h4 className="font-bold text-cafe-noir mb-2">{faq.question}</h4>
                  <p className="text-cafe-noir">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="text-princeton-orange mr-3" size={24} />
                <h4 className="font-bold text-xl text-cafe-noir">Did you know?</h4>
              </div>
              <p className="text-cafe-noir mb-4">
                Every safari booked with Wild Horizons contributes to local conservation efforts and community development projects across Africa.
              </p>
              <Link to="/conservation" className="text-moss-green hover:text-asparagus font-medium inline-flex items-center">
                Learn About Our Impact
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);



const Home = () => {

//   const [blogPosts, setBlogPosts] = useState([]);
// const [isLoadingPosts, setIsLoadingPosts] = useState(true);
// const [postsError, setPostsError] = useState(null);

// useEffect(() => {
//   const fetchPosts = async () => {
//     try {
//       setIsLoadingPosts(true);
      
//       // Try to get from localStorage first for better performance
//       const cachedPosts = localStorage.getItem('homepageBlogPosts');
//       const cacheExpiry = localStorage.getItem('homepageBlogPostsExpiry');
      
//       if (cachedPosts && cacheExpiry && Date.now() < parseInt(cacheExpiry)) {
//         setBlogPosts(JSON.parse(cachedPosts));
//         setIsLoadingPosts(false);
//         return;
//       }
      
//       // Fetch latest posts from API
//       const response = await axios.get(
//         'https://jambotravelhouseholidays.com/wp-json/wp/v2/posts', 
//         { 
//           params: {
//             _embed: true,
//             per_page: 3 // Only fetch 3 latest posts
//           }
//         }
//       );
      
//       // Format posts
//       const formattedPosts = response.data.map(post => ({
//         title: post.title.rendered,
//         excerpt: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 120) + '...',
//         date: new Date(post.date).toLocaleDateString(),
//         category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Safari',
//         image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/api/placeholder/600/400',
//         slug: post.slug
//       }));

//       setBlogPosts(formattedPosts);
//       setIsLoadingPosts(false);
      
//       // Cache the result
//       localStorage.setItem('homepageBlogPosts', JSON.stringify(formattedPosts));
//       // Set expiry for cache (24 hours)
//       localStorage.setItem('homepageBlogPostsExpiry', Date.now() + (24 * 60 * 60 * 1000));
      
//     } catch (err) {
//       console.error("Error fetching posts:", err);
//       setPostsError(err.message);
//       setIsLoadingPosts(false);
//     }
//   };

//   fetchPosts();
// }, []);

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

return (
  <div>
    <HeroBanner />
    <FeatureSection />
    <AboutUsSection />
    <DestinationsSection />
    {/* <NationalParksSection /> */}
  
    <PopularDestinations />
    <TestimonialsSection />
    <CallToActionSection />
    <BlogSection />
    <ContactSection />
    
    {/* <Footer /> */}
  </div>
);
};

export default Home;