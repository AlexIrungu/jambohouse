const FeaturesBar = () => (
    <div className="bg-green-900 text-white py-4">
      <div className="container mx-auto grid grid-cols-5 gap-4 text-center px-4">
        {[
          { icon: HomeIcon, title: 'Responsible Travel', desc: 'Get Private vehicles for your safari, small choices' },
          { icon: Plane, title: 'Flexibility', desc: 'Your time is our timing. Plan with ease' },
          { icon: Globe, title: 'Customizable', desc: 'Get to enjoy Bespoke Safaris based on your needs' },
          { icon: Users, title: 'Travel Experts', desc: 'Our experts for over 20 years have been planning safaris' },
          { icon: Award, title: 'Finest Guides', desc: 'You will be in good hands, Guaranteed memorable experience' }
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <feature.icon className="mb-2" size={32} />
            <h3 className="font-bold">{feature.title}</h3>
            <p className="text-xs text-green-200">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );