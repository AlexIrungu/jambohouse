import React from 'react';
import { 
  Home as HomeIcon, 
  Users, 
  Plane, 
  Globe, 
  CheckCircle, 
  Award 
} from 'lucide-react';





const About = () => {
  return (
    <div className="bg-white">
      
     
      
      <div className="container mx-auto px-4 py-16 grid grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="/api/placeholder/600/400?text=Tiger" 
            alt="Wildlife" 
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Find out more about Jambo Travelhouse Holidays
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Jambo Travelhouse Holidays is a tour and travel company in Kenya. We love Africa, love Africa's arts, offers, and represents and we want to share that with you.
            </p>
            
            <p>
              As a travel, we have gained a good set of skills that ensure we provide the best services.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                Why Choose Us?
              </h3>
              
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-600" size={20} />
                  Custom Safari Packages
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-600" size={20} />
                  Experts' Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-600" size={20} />
                  Over 20+ Years of Experience
                </li>
              </ul>
            </div>
            
            <p className="italic text-green-900">
              We understand Africa Safaris better than anyone else.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;