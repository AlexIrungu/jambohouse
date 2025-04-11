import React from 'react';
import { Briefcase, Ship, Sliders, User, CloudSun } from 'lucide-react';

const FeaturesBar = () => {
  const features = [
    {
      icon: <Briefcase size={36} className="text-hunyadi-yellow" />,
      title: "RESPONSIBLE TRAVEL",
      description: "We have been making a difference for 30 years thanks to you, our guests!"
    },
    {
      icon: <Ship size={36} className="text-hunyadi-yellow" />,
      title: "FLEXIBILITY",
      description: "Your time is our timing. Plan with ease."
    },
    {
      icon: <Sliders size={36} className="text-hunyadi-yellow" />,
      title: "CUSTOMIZABLE",
      description: "Get to enjoy Bespoke Safaris based on your needs"
    },
    {
      icon: <User size={36} className="text-hunyadi-yellow" />,
      title: "TRAVEL EXPERTS",
      description: "Our experts for over 20 years have been planning and making safaris"
    },
    {
      icon: <CloudSun size={36} className="text-hunyadi-yellow" />,
      title: "FINEST GUIDES",
      description: "You will be in good hands. Guaranteed memorable experience"
    }
  ];

  return (
    <section className="relative py-16 bg-cafe-noir bg-opacity-90 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cafe-noir to-cafe-noir opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-hunyadi-yellow font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-eggshell text-sm leading-relaxed mx-auto max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;