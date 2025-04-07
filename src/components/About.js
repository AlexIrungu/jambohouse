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
  Shield
} from 'lucide-react';
import rhino from '../assets/rhino.jpg';

const About = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-amber-600" />,
      title: "Custom Safari Packages",
      description: "Tailored experiences designed to meet your specific preferences and desires."
    },
    {
      icon: <Users className="h-6 w-6 text-amber-600" />,
      title: "Expert Support",
      description: "Our knowledgeable team is available 24/7 to assist with any inquiries."
    },
    {
      icon: <Award className="h-6 w-6 text-amber-600" />,
      title: "Over 20+ Years of Experience",
      description: "Decades of expertise creating unforgettable African adventures."
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-600" />,
      title: "Local Knowledge",
      description: "Authentic insights that only true locals can provide."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-amber-900 sm:text-5xl lg:text-6xl">
              About Jambo Travelhouse Holidays
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-amber-800">
              Your premier gateway to authentic African safari experiences
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-white"></div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* About Us Description */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500"></div>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Jambo Travelhouse Holidays is a premier tour and travel company in Kenya. We are deeply passionate about Africa's rich cultural heritage, stunning landscapes, and incredible wildlife. Our mission is to share the beauty and wonder of this continent with travelers from around the world.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With over two decades of experience, we have developed unparalleled expertise in creating memorable safari experiences. Our team consists of local experts who understand Africa's diverse landscapes, cultures, and wildlife better than anyone else.
            </p>
            <p className="text-lg text-gray-700">
              We pride ourselves on our attention to detail, personalized service, and commitment to sustainable tourism that benefits local communities and preserves natural environments.
            </p>
          </div>
          
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="h-96 bg-amber-200 flex items-center justify-center">
              <img src={rhino} alt="Safari landscape" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600">
              We understand Africa safaris better than anyone else
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 rounded-2xl bg-amber-800 px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to Experience the Magic of Africa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
            Let us help you create unforgettable memories in the heart of Africa.
          </p>
          <div className="mt-8">
            <button className="rounded-md bg-white px-8 py-3 text-base font-semibold text-amber-800 shadow-sm hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400">
              Plan Your Safari Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;