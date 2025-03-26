import React from 'react';
import { 
  Home as HomeIcon, 
  MapPin, 
  Users, 
  CheckCircle,
  Star,
  Calendar,
  Clock,
  ArrowRight
} from 'lucide-react';

const HeroBanner = () => (
  <div 
    className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-white"
    style={{
      backgroundImage: 'url("/api/placeholder/1920/1080")',
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}
  >
    <div className="text-center max-w-2xl">
      <h1 className="text-5xl font-bold mb-4">One Step Away from Your Dream Safari</h1>
      <p className="text-xl mb-6">
        Discover the magic of Africa. Unforgettable experiences await you.
      </p>
      <button className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-full text-lg">
        Plan Your Safari
      </button>
    </div>
  </div>
);

const FeatureSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-6 text-center">
        <div className="bg-green-50 p-6 rounded-lg">
          <HomeIcon className="mx-auto mb-4 text-green-700" size={48} />
          <h3 className="font-bold mb-2">Responsible Travel</h3>
          <p>We've been maintaining a difference for 20+ years</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <MapPin className="mx-auto mb-4 text-green-700" size={48} />
          <h3 className="font-bold mb-2">Customizable</h3>
          <p>Get to enjoy bespoke safaris based on your needs</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <Users className="mx-auto mb-4 text-green-700" size={48} />
          <h3 className="font-bold mb-2">Travel Experts</h3>
          <p>Our experts for over 20 years have been planning safaris</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <CheckCircle className="mx-auto mb-4 text-green-700" size={48} />
          <h3 className="font-bold mb-2">Finest Guides</h3>
          <p>You will be in good hands with our experienced guides</p>
        </div>
      </div>
    </div>
  </section>
);

const PopularPackages = () => (
  <section className="py-16 bg-green-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Packages</h2>
      <div className="grid grid-cols-3 gap-6">
        {['Tanzania', 'Kilimanjaro', 'Kenya'].map((destination, index) => (
          <div 
            key={destination} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img 
              src={`/api/placeholder/400/300?text=${destination}`} 
              alt={destination} 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {index === 0 && '7 Days Splendors of Tanzania'}
                {index === 1 && '3 Day Amboseli, Kilimanjaro Explore'}
                {index === 2 && '11 Day Kenya Game and Beach Safari'}
              </h3>
              <p className="text-gray-600 mb-4">
                {index === 0 && 'Explore the vast plains and beautiful national parks'}
                {index === 1 && 'Fun 3 days to experience the beauty of Mt. Kilimanjaro'}
                {index === 2 && 'Get to experience the magical game wildlife of Kenya'}
              </p>
              <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PackagesSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Safari Packages</h2>
      <div className="grid grid-cols-3 gap-8">
        {[
          {
            title: "Luxury Safari Experience",
            duration: "10 Days",
            price: "$3,500",
            highlights: ["Private game drives", "5-star lodges", "Hot air balloon ride"],
            rating: 5
          },
          {
            title: "Family Safari Adventure",
            duration: "7 Days",
            price: "$2,200",
            highlights: ["Kid-friendly activities", "Family lodges", "Educational tours"],
            rating: 4
          },
          {
            title: "Budget Safari Package",
            duration: "5 Days",
            price: "$1,500",
            highlights: ["Group game drives", "Comfortable camps", "All meals included"],
            rating: 4
          }
        ].map((pkg, index) => (
          <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{pkg.title}</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{pkg.price}</span>
              </div>
              
              <div className="flex items-center mb-3 text-yellow-500">
                {[...Array(pkg.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{pkg.duration}</span>
              </div>
              
              <ul className="mb-6">
                {pkg.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded flex items-center justify-center">
                Book Now <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-2 rounded-full font-medium transition-colors">
          View All Packages
        </button>
      </div>
    </div>
  </section>
);

const NewsSection = () => (
  <section className="py-16 bg-green-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Safari News</h2>
      <div className="grid grid-cols-3 gap-8">
        {[
          {
            title: "New Conservation Efforts in Serengeti",
            excerpt: "Learn about the latest initiatives to protect wildlife in Tanzania's most famous park.",
            date: "May 15, 2023",
            readTime: "4 min read"
          },
          {
            title: "Best Time to Visit Masai Mara for Migration",
            excerpt: "Discover the optimal months to witness the great wildebeest migration in Kenya.",
            date: "April 28, 2023",
            readTime: "6 min read"
          },
          {
            title: "Sustainable Safari Lodges You'll Love",
            excerpt: "Explore eco-friendly accommodation options that don't compromise on luxury.",
            date: "March 10, 2023",
            readTime: "5 min read"
          }
        ].map((article, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src={`/api/placeholder/400/250?text=News+${index+1}`} 
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{article.date}</span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" /> {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <button className="text-green-600 font-medium flex items-center hover:text-green-500">
                Read More <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Travelers Say</h2>
      <div className="grid grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Johnson",
            location: "New York, USA",
            quote: "Our family safari was beyond expectations. The guides were knowledgeable and made sure we saw all the Big Five!",
            rating: 5,
            date: "April 2023"
          },
          {
            name: "Michael Brown",
            location: "London, UK",
            quote: "The luxury lodges were incredible. Waking up to giraffes outside our window was a dream come true.",
            rating: 5,
            date: "March 2023"
          },
          {
            name: "Emma Wilson",
            location: "Sydney, Australia",
            quote: "As a solo traveler, I felt completely safe and well taken care of. Can't wait to book my next safari!",
            rating: 4,
            date: "February 2023"
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex mb-3 text-yellow-500">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="italic mb-4">"{testimonial.quote}"</p>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FeatureSection />
      <PopularPackages />
      <PackagesSection />
      <NewsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;