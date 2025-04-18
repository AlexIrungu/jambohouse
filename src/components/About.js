import React from 'react';
import {
  Home,
  Users,
  Plane,
  Globe,
  CheckCircle,
  Award,
  MapPin,
  Calendar,
  Shield,
  PlaneTakeoff,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom'
import rhino from '../assets/rhino.jpg'
import flam from '../assets/karibukenya.jpg'
import leo from '../assets/easymara.jpg'
import hero from '../assets/ngorongoro.avif'

const About = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-hunyadi-yellow" />,
      title: "Custom Safari Packages",
      description: "Get a chance to plan your own safari. Think about Time, Destinations, Accommodation, Food, Transport, Parks, and Budget. On your terms."
    },
    {
      icon: <Users className="h-6 w-6 text-hunyadi-yellow" />,
      title: "Experts' Support",
      description: "Get your safaris planned by the best. Let our experts help you plan your safari."
    },
    {
      icon: <Award className="h-6 w-6 text-hunyadi-yellow" />,
      title: "20+ Years of Experience",
      description: "Over two decades of expertise creating the best tour & travel packages."
    },
    {
      icon: <Shield className="h-6 w-6 text-hunyadi-yellow" />,
      title: "Quality & Integrity",
      description: "We stand for quality, integrity, flexibility, ethical standards, and value."
    }
  ];

  return (
    <div className="bg-eggshell">
      {/* Hero Section with Background Image */}
      <div className="relative h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-cafe-noir/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-eggshell sm:text-5xl lg:text-6xl">
              About Jambo Travelhouse Holidays
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-cornsilk">
              Your premier gateway to authentic African safari experiences
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Adapted from Image 1 */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cafe-noir">Why Us?</h2>
            <div className="mt-2 h-1 w-20 bg-princeton-orange mx-auto"></div>
          </div>
          
          <div className="lg:grid lg:grid-cols-2 gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <p className="text-lg text-gray-700 mb-6">
                At Jambo Travelhouse Holidays we seek to understand your needs and dreams, and make it a reality. For over 20 years, we have been turning traveller's dreams into reality through well planned and experienced safaris.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="bg-alice-blue rounded-lg p-6 shadow-md transition-all hover:shadow-lg border-l-4 border-hunyadi-yellow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-cornsilk rounded-full p-2">
                        {feature.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-cafe-noir">{feature.title}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 relative">
              <div className="col-span-2 row-span-2">
                <img src={rhino} alt="Safari rhino" className="rounded-lg shadow-lg object-cover w-full h-full" />
              </div>
              <div className="col-span-1">
                <img src="https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhZmFyaSUyMHZlaGljbGV8ZW58MHx8MHx8fDA%3D" alt="Safari vehicle" className="rounded-lg shadow-lg object-cover w-full h-full" />
              </div>
              <div className="col-span-1">
                <img src={flam} alt="Flamingos" className="rounded-lg shadow-lg object-cover w-full h-full" />
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center">
            <div className="inline-flex items-center bg-cornsilk rounded-full px-6 py-2 text-cafe-noir">
              <Award className="h-6 w-6 text-princeton-orange mr-2" />
              <span className="font-semibold">
                We Have <span className="text-hunyadi-yellow font-bold">20+ Years</span> Of Experience To Give You The Best Tour & Travel Packages
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section - Adapted from Image 2 */}
      <div className="py-16 bg-gradient-to-b from-white to-eggshell">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="mb-10 lg:mb-0 overflow-hidden rounded-2xl shadow-xl">
              <img src={leo} alt="Tiger" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-cafe-noir mb-6">
                Find out more about Jambo Travelhouse Holidays
              </h2>
              <div className="h-1 w-20 bg-princeton-orange mb-8"></div>
              
              <p className="text-lg text-gray-700 mb-6 font-medium text-moss-green">
                We love Africa. We love what Africa has, offers, and represents and we want to share that with you.
              </p>
              
              <p className="text-gray-700 mb-6">
                Jambo Travelhousse Holidays is a tour and travel company in Kenya. We have been planning and offering tour and travel solutions to dreamers and doers, travellers for more than 20 years. As a result, we have gained a good set of skills that ensure we provide the best services.
              </p>
              
              <p className="text-gray-700 mb-6">
                We stand for quality, integrity, flexibility, ethical standards, and value.
              </p>
              
              <p className="text-lg font-semibold text-cafe-noir italic">
                We understand Africa Safaris better than anyone else.
              </p>
              
              <div className="mt-8 flex space-x-4">
                <button className="bg-hunyadi-yellow hover:bg-princeton-orange text-white font-bold py-3 px-6 rounded-lg shadow transition-all flex items-center">
                  <PlaneTakeoff className="mr-2 h-5 w-5" />
                  Plan Your Safari
                </button>
                <button className="bg-white hover:bg-alice-blue text-cafe-noir font-bold py-3 px-6 rounded-lg shadow border border-cafe-noir transition-all flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-moss-green text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <div className="mt-2 h-1 w-20 bg-princeton-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-xl bg-cafe-noir/50 p-6 shadow-md border border-hunyadi-yellow/30 transition-all hover:shadow-lg hover:bg-cafe-noir/70"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-hunyadi-yellow/20 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-cornsilk">{feature.title}</h3>
                <p className="mt-2 text-french-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action
      <div className="bg-gradient-to-r from-princeton-orange to-hunyadi-yellow py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-12 text-center shadow-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to Experience the Magic of Africa?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Let us help you create unforgettable memories in the heart of Africa.
            </p>
            <div className="mt-8">
              <Link to="/enquire">
              <button className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-cafe-noir shadow-sm hover:bg-cornsilk transition-all focus:outline-none focus:ring-2 focus:ring-white">
                Plan Your Safari Today
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;