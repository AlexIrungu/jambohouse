

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

// const Footer = () => (
//   <footer className="bg-gray-900 text-white">
//     <div className="container mx-auto px-4">
//       <div className="pt-16 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         <div>
//           <h3 className="text-2xl font-bold mb-6">Wild Horizons</h3>
//           <p className="mb-6 text-gray-400">
//             Crafting unforgettable safari experiences across Africa's most spectacular wilderness destinations since 2003.
//           </p>
//           <div className="flex space-x-4">
//             <a href="#" className="bg-gray-800 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
//               <span className="sr-only">Facebook</span>
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
//               </svg>
//             </a>
//             <a href="#" className="bg-gray-800 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
//               <span className="sr-only">Instagram</span>
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
//               </svg>
//             </a>
//             <a href="#" className="bg-gray-800 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
//               <span className="sr-only">Twitter</span>
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//               </svg>
//             </a>
//             <a href="#" className="bg-gray-800 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
//               <span className="sr-only">YouTube</span>
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
//               </svg>
//             </a>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="text-lg font-bold mb-6">Quick Links</h3>
//           <ul className="space-y-4">
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safari Destinations</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safari Packages</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
//           </ul>
//         </div>
        
//         <div>
//           <h3 className="text-lg font-bold mb-6">Top Destinations</h3>
//           <ul className="space-y-4">
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kenya</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tanzania</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">South Africa</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rwanda</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Botswana</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Uganda</a></li>
//           </ul>
//         </div>
        
//         <div>
//           <h3 className="text-lg font-bold mb-6">Contact Us</h3>
//           <ul className="space-y-4">
//             <li className="flex items-start">
//               <MapPin className="text-green-600 mr-3 mt-1 flex-shrink-0" size={18} />
//               <span className="text-gray-400">123 Savanna Road<br />Nairobi, Kenya</span>
//             </li>
//             <li className="flex items-center">
//               <Clock className="text-green-600 mr-3 flex-shrink-0" size={18} />
//               <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
//             </li>
//             <li className="flex items-center">
//               <Phone className="text-green-600 mr-3 flex-shrink-0" size={18} />
//               <a href="tel:+254123456789" className="text-gray-400 hover:text-white transition-colors">+254 123 456 789</a>
//             </li>
//             <li className="flex items-center">
//               <Mail className="text-green-600 mr-3 flex-shrink-0" size={18} />
//               <a href="mailto:info@wildhorizons.com" className="text-gray-400 hover:text-white transition-colors">info@wildhorizons.com</a>
//             </li>
//           </ul>
//         </div>
//       </div>
      
//       <div className="py-6 border-t border-gray-800 text-center text-gray-400 text-sm">
//         <p>&copy; {new Date().getFullYear()} Wild Horizons Safari. All rights reserved.</p>
//       </div>
//     </div>
//   </footer>
// );

// function Home() {
//   return (
//     <div className="font-sans">
//       <HeroBanner />
//       <FeatureSection />
//       <AboutUsSection />
//       <DestinationsSection />
//       <PopularPackages />
//       <PackagesSection />
//       <NationalParksSection />
//       <TestimonialsSection />
//       <BlogSection />
//       <NewsletterSection />
//       <Footer />
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
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
  Mail
} from 'lucide-react';
import marasunset from '../assets/marasunset.jpg';
import elephant from '../assets/elephant.jpg';
import FeaturesBar from './FeaturesBar'

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
        <button className="bg-asparagus hover:bg-moss-green px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all hover:scale-105 focus:ring-4 focus:ring-moss-green/50">
          Plan Your Safari
        </button>
        <button className="bg-transparent border-2 border-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105">
          Explore Destinations
        </button>
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
     
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-asparagus">
          <div className="bg-eggshell p-4 rounded-full inline-flex mb-6">
            <Leaf className="text-cafe-noir" size={32} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-cafe-noir">Responsible Travel</h3>
          <p className="text-cafe-noir">Our commitment to sustainable tourism practices ensures we protect the environments we love for future generations.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-hunyadi-yellow">
          <div className="bg-eggshell p-4 rounded-full inline-flex mb-6">
            <MapPin className="text-cafe-noir" size={32} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-cafe-noir">Customizable Journeys</h3>
          <p className="text-cafe-noir">Every safari is tailored to your preferences, creating a personalized adventure that meets your unique desires.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-moss-green">
          <div className="bg-eggshell p-4 rounded-full inline-flex mb-6">
            <Users className="text-cafe-noir" size={32} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-cafe-noir">Expert Guides</h3>
          <p className="text-cafe-noir">Our passionate guides have decades of combined experience and intimate knowledge of Africa's wilderness.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brown-sugar">
          <div className="bg-eggshell p-4 rounded-full inline-flex mb-6">
            <Shield className="text-cafe-noir" size={32} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-cafe-noir">Safety Assured</h3>
          <p className="text-cafe-noir">Your wellbeing is our priority, with comprehensive safety protocols and 24/7 support throughout your journey.</p>
        </div>
      </div> */}
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
          <button className="bg-asparagus hover:bg-moss-green text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 inline-flex items-center group">
            Discover Our Full Story
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
          </button>
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
      image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww",
      highlights: ["Masai Mara", "Amboseli", "Lake Nakuru", "Samburu"],
      link: "/safaris/kenya"
    },
    {
      name: "Tanzania",
      description: "Experience the endless plains of Serengeti and the natural wonder of Ngorongoro Crater teeming with wildlife.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlcmVuZ2V0aXxlbnwwfHwwfHx8MA%3D%3D",
      highlights: ["Serengeti", "Ngorongoro", "Tarangire", "Mt. Kilimanjaro"],
      link: "/safaris/tanzania"
    },
    {
      name: "Rwanda",
      description: "Trek through misty forests to encounter endangered mountain gorillas in one of Africa's most beautiful countries.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cndhbmRhJTIwZ29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
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
                  <a 
                    href={destination.link} 
                    className="bg-white text-cafe-noir hover:bg-cornsilk px-6 py-2 font-medium transition-all inline-flex items-center"
                  >
                    Explore {destination.name}
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NationalParksSection = () => {
  const parks = [
    {
      name: "Serengeti National Park",
      country: "Tanzania",
      description: "Home to the Great Migration, with endless plains and abundant wildlife.",
      image: "https://images.unsplash.com/photo-1547970964-2642397ef116?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VyZW5nZXRpfGVufDB8fDB8fHww"
    },
    {
      name: "Masai Mara National Reserve",
      country: "Kenya",
      description: "The northern extension of the Serengeti, famous for its exceptional populations of big cats.",
      image: "https://images.unsplash.com/photo-1607324772302-715d6ac303f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww"
    },
    {
      name: "Kruger National Park",
      country: "South Africa",
      description: "One of Africa's largest game reserves with an unparalleled diversity of wildlife.",
      image: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a3J1Z2VyfGVufDB8fDB8fHww"
    },
    {
      name: "Volcanoes National Park",
      country: "Rwanda",
      description: "Misty forests home to endangered mountain gorillas and golden monkeys.",
      image: "https://images.unsplash.com/photo-1568668392383-58c369615742?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ3YW5kYSUyMGdvcmlsbGF8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Ngorongoro Conservation Area",
      country: "Tanzania",
      description: "A UNESCO World Heritage Site featuring a massive volcanic caldera.",
      image: "https://images.unsplash.com/photo-1615964201064-6ff9a1bf1c76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5nb3Jvbmdvcm8lMjBjcmF0ZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Chobe National Park",
      country: "Botswana",
      description: "Famous for its massive elephant herds and spectacular river safaris.",
      image: "https://images.unsplash.com/photo-1548625361-1adcab316530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvYmUlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-brown-sugar mr-4"></div>
            <p className="text-brown-sugar font-medium uppercase tracking-wider">Wildlife Encounters</p>
            <div className="h-1 w-12 bg-brown-sugar ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">Featured National Parks</h2>
          <p className="text-cafe-noir text-lg">Explore Africa's most iconic wildlife sanctuaries, each offering unique ecosystems and unforgettable experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parks.map((park, index) => (
            <div key={index} className="group bg-cornsilk rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={park.image} 
                  alt={park.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/80 text-cafe-noir px-3 py-1 rounded-full text-sm font-medium">
                  {park.country}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cafe-noir">{park.name}</h3>
                <p className="text-cafe-noir mb-4">{park.description}</p>
                <button className="text-asparagus hover:text-moss-green font-medium inline-flex items-center group">
                  Explore Park
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PopularPackages = () => {
  const packages = [
    {
      destination: 'Tanzania',
      title: '7 Days Serengeti & Ngorongoro',
      description: 'Witness the incredible wildlife of Northern Tanzania',
      difficulty: 'Moderate',
      price: '$2,800',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlcmVuZ2V0aXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      destination: 'Kenya',
      title: '10 Days Kenya Wildlife Circuit',
      description: 'Explore Masai Mara, Amboseli, and Lake Nakuru',
      difficulty: 'Challenging',
      price: '$3,200',
      image: 'https://images.unsplash.com/photo-1592670130915-d3dcd94675a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFzYWklMjBtYXJhJTJDJTIwYW1ib3NlbGl8ZW58MHx8MHx8fDA%3D'
    },
    {
      destination: 'South Africa',
      title: '5 Days Kruger National Park',
      description: 'Classic safari experience in world-renowned park',
      difficulty: 'Easy',
      price: '$1,950',
      image: 'https://images.unsplash.com/photo-1506356033580-9c0c4d2ea0e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtydWdlcnxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  return (
    <div className="py-20 bg-eggshell">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-hunyadi-yellow mr-4"></div>
            <p className="text-hunyadi-yellow font-medium uppercase tracking-wider">Popular Choices</p>
            <div className="h-1 w-12 bg-hunyadi-yellow ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">Bestselling Safari Packages</h2>
          <p className="text-cafe-noir text-lg">Our most sought-after adventures, loved by travelers worldwide for their perfect blend of wildlife and comfort.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden h-[500px] rounded-2xl shadow-xl flex flex-col"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${pkg.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>
  
              <div className="relative z-10 text-white flex flex-col justify-end h-full p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
                      {pkg.difficulty}
                    </span>
                    <span className="bg-hunyadi-yellow px-4 py-1 rounded-full text-sm font-medium text-cafe-noir">
                      {pkg.price}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold">{pkg.title}</h3>
                  
                  <p className="text-white/90 mb-6">{pkg.description}</p>
                  
                  <button className="w-full bg-white text-cafe-noir py-3 rounded-full hover:bg-cornsilk transition-colors font-medium inline-flex items-center justify-center group">
                    Explore {pkg.destination}
                    <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PackagesSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <div className="h-1 w-12 bg-moss-green mr-4"></div>
          <p className="text-moss-green font-medium uppercase tracking-wider">Curated Experiences</p>
          <div className="h-1 w-12 bg-moss-green ml-4"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">Our Safari Experiences</h2>
        <p className="text-cafe-noir text-lg">Handcrafted safari journeys designed to fulfill your African adventure dreams.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Luxury Wilderness Escape",
            duration: "10 Days",
            price: "$4,500",
            highlights: ["Private game drives", "Luxury eco-lodges", "Gourmet dining"],
            rating: 5,
            style: "border-t-asparagus",
            bgImage: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwc2FmYXJpfGVufDB8fDB8fHww"
          },
          {
            title: "Family Wildlife Adventure",
            duration: "7 Days",
            price: "$2,800",
            highlights: ["Kid-friendly activities", "Educational programs", "Safe & comfortable"],
            rating: 4,
            style: "border-t-hunyadi-yellow",
            bgImage: "https://images.unsplash.com/photo-1551706872-300f019d89f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwc2FmYXJpfGVufDB8fDB8fHww"
          },
          {
            title: "Photography Safari Expedition",
            duration: "8 Days",
            price: "$3,200",
            highlights: ["Professional guides", "Prime wildlife locations", "Camera workshops"],
            rating: 5,
            style: "border-t-brown-sugar",
            bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHklMjBzYWZhcml8ZW58MHx8MHx8fDA%3D"
          }
        ].map((pkg, index) => (
          <div 
            key={index} 
            className={`rounded-xl shadow-xl overflow-hidden group border-t-4 ${pkg.style} bg-white hover:shadow-2xl transition-all transform hover:-translate-y-1`}
          >
            <div className="h-48 relative overflow-hidden">
              <img 
                src={pkg.bgImage} 
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute top-4 right-4 bg-white text-cafe-noir px-4 py-1 rounded-full text-sm font-bold">
                {pkg.price}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-cafe-noir mb-2">{pkg.title}</h3>
              
              <div className="flex items-center mb-4 text-gold-metallic">
              {[...Array(pkg.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
                <span className="text-cafe-noir ml-2 text-sm">
                  ({pkg.rating}.0)
                </span>
              </div>
              
              <div className="flex items-center text-cafe-noir mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{pkg.duration}</span>
              </div>
              
              <ul className="mb-6">
                {pkg.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center mb-2 text-cafe-noir">
                  <CheckCircle size={16} className="text-moss-green mr-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-asparagus hover:bg-moss-green text-white py-3 rounded-full transition-all font-medium inline-flex items-center justify-center group">
              View Details
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
    
    <div className="text-center mt-12">
      <button className="bg-transparent border-2 border-cafe-noir hover:bg-cafe-noir hover:text-white text-cafe-noir px-8 py-3 rounded-full font-medium transition-all inline-flex items-center group">
        Browse All Safari Packages
        <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
      </button>
    </div>
  </div>
</section>
);

const TestimonialsSection = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const testimonials = [
  {
    quote: "Our safari with Wild Horizons was absolutely life-changing. The guides were incredibly knowledgeable, the accommodations were luxurious, and the wildlife encounters were beyond our wildest dreams.",
    author: "Sarah & James Thompson",
    location: "United Kingdom",
    image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    quote: "As a wildlife photographer, I've been on many safaris, but none compare to the experience provided by Wild Horizons. They knew exactly where to take us for the perfect shots, and their commitment to conservation was evident throughout.",
    author: "Michael Chen",
    location: "Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    quote: "Taking our children on a family safari was the best decision we ever made. The team at Wild Horizons made sure everyone was comfortable, safe, and engaged. Our kids still talk about it every day!",
    author: "The Rodriguez Family",
    location: "United States",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
};

return (
  <section className="py-20 bg-cornsilk relative">
    <div className="container mx-auto px-4">
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
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-cornsilk">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-cafe-noir text-lg italic mb-6">
                {testimonials[currentIndex].quote}
              </p>
              <h4 className="font-bold text-xl text-cafe-noir">{testimonials[currentIndex].author}</h4>
              <p className="text-cafe-noir">{testimonials[currentIndex].location}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button 
            onClick={prevSlide}
            className="bg-white hover:bg-hunyadi-yellow text-cafe-noir w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-hunyadi-yellow' : 'bg-cafe-noir opacity-30'} transition-all`}
            ></button>
          ))}
          <button 
            onClick={nextSlide}
            className="bg-white hover:bg-hunyadi-yellow text-cafe-noir w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
          >
            <ChevronRight size={24} />
          </button>
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

const BlogSection = () => {
  const posts = [
    {
      title: "Top 10 Wildlife Photography Tips for Your Safari",
      excerpt: "Capture breathtaking moments with these expert tips from professional wildlife photographers.",
      date: "Mar 15, 2025",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1520692814158-3ea6e21dfa54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGxpZmUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "What to Pack for Your First African Safari Adventure",
      excerpt: "Essential items and expert recommendations for a comfortable and memorable safari experience.",
      date: "Feb 28, 2025",
      category: "Travel Tips",
      image: "https://images.unsplash.com/photo-1623830551066-43658be9005b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FmYXJpJTIwYmFnfGVufDB8fDB8fHww"
    },
    {
      title: "Conservation Success: Rhino Population Growing in Kenya",
      excerpt: "Learn about the positive impact of conservation efforts and how travelers can contribute.",
      date: "Jan 20, 2025",
      category: "Conservation",
      image: "https://images.unsplash.com/photo-1556760544-74068565f05c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmhpbm98ZW58MHx8MHx8fDA%3D"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-cornsilk rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                <button className="text-princeton-orange hover:text-gold-metallic font-medium inline-flex items-center group">
                  Read More
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-alice-blue hover:bg-columbia-blue text-cafe-noir px-8 py-4 rounded-full font-medium transition-all hover:scale-105 inline-flex items-center">
            Visit Our Blog
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>
    </section>
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

// const Footer = () => (
// <footer className="bg-cafe-noir text-cornsilk pt-16 pb-8">
//   <div className="container mx-auto px-4">

      
//       <div>
//         <h4 className="text-xl font-bold mb-6">Quick Links</h4>
//         <ul className="space-y-3">
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">Home</a></li>
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">About Us</a></li>
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">Safari Packages</a></li>
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">Destinations</a></li>
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">Travel Tips</a></li>
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">Contact Us</a></li>
//         </ul>
//       </div>
      
//       <div>
//         <h4 className="text-xl font-bold mb-6">Popular Destinations</h4>
//         <ul className="space-y-3">
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">Masai Mara, Kenya</a></li>
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">Serengeti, Tanzania</a></li>
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">Kruger National Park, South Africa</a></li>
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">Okavango Delta, Botswana</a></li>
//           <li><a href="#" className="hover:text-hunyadi-yellow transition-colors">Volcanoes National Park, Rwanda</a></li>
//         </ul>
//       </div>
      
//       <div>
//         <h4 className="text-xl font-bold mb-6">Newsletter</h4>
//         <p className="mb-4">Subscribe to receive updates on special offers and safari tips.</p>
//         <form className="mb-4">
//           <div className="flex">
//             <input 
//               type="email" 
//               placeholder="Your email address" 
//               className="px-4 py-3 bg-white/10 rounded-l-lg focus:outline-none w-full"
//             />
//             <button 
//               type="submit"
//               className="bg-hunyadi-yellow hover:bg-gold-metallic text-cafe-noir px-4 rounded-r-lg"
//             >
//               <ArrowRight size={20} />
//             </button>
//           </div>
//         </form>
//         <p className="text-sm text-cornsilk/80">By subscribing you agree to our Privacy Policy</p>
//       </div>
//     </div>
    
//     <div className="border-t border-cornsilk/20 pt-8 flex flex-col md:flex-row justify-between items-center">
//       <p>&copy; {new Date().getFullYear()} Wild Horizons Safari. All rights reserved.</p>
//       <div className="flex space-x-6 mt-4 md:mt-0">
//         <a href="#" className="text-sm text-cornsilk/80 hover:text-cornsilk transition-colors">Terms & Conditions</a>
//         <a href="#" className="text-sm text-cornsilk/80 hover:text-cornsilk transition-colors">Privacy Policy</a>
//         <a href="#" className="text-sm text-cornsilk/80 hover:text-cornsilk transition-colors">Cookie Policy</a>
//       </div>
//     </div>
//   </div>
// </footer>
// );

const Home = () => {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

return (
  <div>
    <HeroBanner />
    <FeatureSection />
    <AboutUsSection />
    <DestinationsSection />
    <NationalParksSection />
    <PopularPackages />
    <PackagesSection />
    <TestimonialsSection />
    <CallToActionSection />
    <BlogSection />
    <ContactSection />
    
    {/* <Footer /> */}
  </div>
);
};

export default Home;