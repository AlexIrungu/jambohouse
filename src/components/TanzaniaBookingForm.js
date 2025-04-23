import React, { useState, useEffect } from 'react';
import { Calendar, CreditCard, Users, MapPin, Clock, ChevronDown, MessageSquare, Info, Check, AlertCircle } from 'lucide-react';
import { useParams, useLocation } from 'react-router-dom';
import { safariPackages } from './TanzaniaPackages';

const TanzaniaBookingForm = ({ }) => {
    // Then use them in your component:
const location = useLocation();
      // Get package ID from URL params
  const { packageId } = useParams();
    // Get state passed from navigation
    const { selectedPackage, selectedSeason } = location.state || {};
  // Default to a package if none is selected (for demo purposes)
  const defaultPackage = {
    id: "JT028",
    name: "East Africa Odysseys",
    duration: "9 days / 8 nights",
    type: "Classic",
    difficulty: "Moderate",
    description: "Experience the wonders of Nairobi, Amboseli, Ngorongoro, Serengeti, Tarangire",
    destinations: ["Nairobi", "Amboseli", "Ngorongoro", "Serengeti", "Tarangire"],
    pricing: {
      "Jan-Mar": { shared: 3200, single: 4100 },
      "Apr-Jun": { shared: 2800, single: 3600 },
      "Jul-Oct": { shared: 3900, single: 4900 },
      "Nov-Dec": { shared: 3100, single: 3950 }
    }
  };

    // Find the package in safariPackages if not passed in state
    const packageData = selectedPackage || safariPackages.find(pkg => pkg.id === packageId);
    const season = selectedSeason || "Jan-Mar";

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    travelDates: {
      startDate: '',
      endDate: ''
    },
    travelers: {
      adults: 2,
      children: 0,
      childrenAges: []
    },
    accommodationType: 'shared',
    specialRequests: {
      dietary: [],
      medical: '',
      other: ''
    },
    activities: [],
    payment: {
      method: 'card',
      deposit: true
    },
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Calculate the total price based on accommodationType and travelers
  const calculateTotalPrice = () => {
    const basePricePerPerson = packageData.pricing[season][formData.accommodationType];
    const adultTotal = basePricePerPerson * formData.travelers.adults;
    
    // Children pricing (75% of adult price)
    const childDiscount = 0.75;
    const childTotal = basePricePerPerson * childDiscount * formData.travelers.children;
    
    return adultTotal + childTotal;
  };

  // Calculate the deposit amount (25% of total)
  const calculateDeposit = () => {
    return calculateTotalPrice() * 0.25;
  };

  // Popular activities based on destinations
  const getPopularActivities = () => {
    const destinationActivities = {
      'Serengeti': ['Balloon Safari', 'Game Drives', 'Migration Viewing'],
      'Ngorongoro': ['Crater Tour', 'Cultural Visit', 'Walking Safari'],
      'Kilimanjaro': ['Hiking', 'Nature Walk', 'Cultural Experience'],
      'Tarangire': ['Elephant Watching', 'Night Game Drive'],
      'Lake Manyara': ['Bird Watching', 'Canoe Safari'],
      'Amboseli': ['Elephant Interaction', 'Photography Hide'],
      'Nairobi': ['National Park Visit', 'Giraffe Center']
    };
    
    // Collect activities based on package destinations
    const activities = [];
    packageData.destinations.forEach(destination => {
      if (destinationActivities[destination]) {
        activities.push(...destinationActivities[destination]);
      }
    });
    
    // Add general activities
    const generalActivities = ['Cultural Tour', 'Photography Session', 'Sundowner Experience'];
    
    // Remove duplicates and limit to 8 options
    return [...new Set([...activities, ...generalActivities])].slice(0, 8);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      // Handle nested fields
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else if (type === 'checkbox' && name === 'agreeToTerms') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle travelers count changes
  const handleTravelersChange = (type, action) => {
    setFormData(prev => {
      const travelers = {...prev.travelers};
      
      if (action === 'increment') {
        travelers[type] = travelers[type] + 1;
      } else if (action === 'decrement' && travelers[type] > 0) {
        travelers[type] = travelers[type] - 1;
      }
      
      // Update childrenAges array size
      if (type === 'children') {
        if (action === 'increment') {
          travelers.childrenAges = [...travelers.childrenAges, ''];
        } else if (action === 'decrement' && travelers.childrenAges.length > 0) {
          travelers.childrenAges.pop();
        }
      }
      
      return {...prev, travelers};
    });
  };

  // Handle child age change
  const handleChildAgeChange = (index, value) => {
    setFormData(prev => {
      const newChildrenAges = [...prev.travelers.childrenAges];
      newChildrenAges[index] = value;
      
      return {
        ...prev,
        travelers: {
          ...prev.travelers,
          childrenAges: newChildrenAges
        }
      };
    });
  };

  // Handle dietary restrictions
  const handleDietaryChange = (restriction) => {
    setFormData(prev => {
      const current = [...prev.specialRequests.dietary];
      
      if (current.includes(restriction)) {
        return {
          ...prev,
          specialRequests: {
            ...prev.specialRequests,
            dietary: current.filter(r => r !== restriction)
          }
        };
      } else {
        return {
          ...prev,
          specialRequests: {
            ...prev.specialRequests,
            dietary: [...current, restriction]
          }
        };
      }
    });
  };

  // Handle optional activities selection
  const handleActivityChange = (activity) => {
    setFormData(prev => {
      const current = [...prev.activities];
      
      if (current.includes(activity)) {
        return {
          ...prev,
          activities: current.filter(a => a !== activity)
        };
      } else {
        return {
          ...prev,
          activities: [...current, activity]
        };
      }
    });
  };

  // Validate form
  const validateForm = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    }
    
    if (step === 2) {
      if (!formData.travelDates.startDate) newErrors['travelDates.startDate'] = 'Start date is required';
      if (!formData.travelDates.endDate) newErrors['travelDates.endDate'] = 'End date is required';
      
      if (formData.travelers.adults < 1) newErrors['travelers.adults'] = 'At least 1 adult is required';
      
      // Validate child ages if any
      if (formData.travelers.children > 0) {
        formData.travelers.childrenAges.forEach((age, index) => {
          if (!age) newErrors[`childAge-${index}`] = 'Child age is required';
        });
      }
    }
    
    if (step === 3) {
      // Payment validation will be handled on submission
    }
    
    if (step === 4 && !formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm(4)) {
      console.log('Form submitted successfully:', formData);
      setShowSuccess(true);
      // In production, you would send this data to your server
    }
  };

  // Navigate to next step
  const nextStep = () => {
    if (validateForm(currentStep)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  // Navigate to previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  // Generate dates for the next 18 months
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 18; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
      dates.push({
        value: date.toISOString().split('T')[0].slice(0, 7),
        label: date.toLocaleString('default', { month: 'long', year: 'numeric' })
      });
    }
    
    return dates;
  };

  return (
    <div className="bg-eggshell min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Form Header */}
        <div className="bg-white rounded-t-xl shadow-lg overflow-hidden">
          <div className="relative h-[300px] bg-cafe-noir">
            <div className="absolute inset-0 bg-gradient-to-r from-cafe-noir/90 to-cafe-noir/70"></div>
            <div className="relative z-10 h-full flex flex-col justify-center p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-cornsilk mb-2">Book Your Tanzania Safari</h1>
              <h2 className="text-xl md:text-2xl font-medium text-hunyadi-yellow mb-6">{packageData.name}</h2>
              
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-columbia-blue" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-atomic-tangerine" />
                  <span>{packageData.destinations.join(', ')}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-mindaro" />
                  <span>{packageData.type} Safari</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="px-8 py-4 bg-white">
            <div className="flex justify-between items-center">
              {['Personal Details', 'Travel Information', 'Accommodations & Activities', 'Review & Payment'].map((step, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 ${
                    currentStep > index + 1 ? 'bg-moss-green text-white' :
                    currentStep === index + 1 ? 'bg-hunyadi-yellow text-cafe-noir' :
                    'bg-french-gray text-gray-600'
                  }`}>
                    {currentStep > index + 1 ? <Check className="h-5 w-5" /> : index + 1}
                  </div>
                  <span className={`text-xs text-center hidden sm:block ${
                    currentStep >= index + 1 ? 'text-cafe-noir font-medium' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                  
                  {/* Connector line (except for last item) */}
                  {index < 3 && (
                    <div className="hidden sm:block absolute h-0.5 bg-french-gray w-1/4" style={{ left: `${(index + 1) * 25 - 12.5}%` }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Form Content */}
        <div className="bg-white rounded-b-xl shadow-lg p-8">
          {showSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-moss-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-cafe-noir mb-4">Booking Request Submitted!</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Thank you for booking with us. We have received your booking request for the {packageData.name} safari.
                A confirmation email has been sent to {formData.email}. Our team will contact you within 24 hours.
              </p>
              <div className="bg-alice-blue rounded-lg p-6 max-w-md mx-auto text-left">
                <h3 className="font-bold text-cafe-noir mb-2">Booking Reference</h3>
                <p className="text-lg font-mono text-center bg-white py-2 border border-french-gray rounded mb-4">TZ-{Math.floor(100000 + Math.random() * 900000)}</p>
                <div className="text-sm text-gray-600">
                  <p>If you have any questions, please contact our team:</p>
                  <p className="mt-2"><strong>Email:</strong> bookings@jambotanzania.com</p>
                  <p><strong>Phone:</strong> +255 123 456 789</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-cafe-noir">Personal Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-cafe-noir font-medium mb-1">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-claret' : 'border-french-gray'} focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50`}
                        placeholder="Your first name"
                      />
                      {errors.firstName && <p className="text-claret text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-cafe-noir font-medium mb-1">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-claret' : 'border-french-gray'} focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50`}
                        placeholder="Your last name"
                      />
                      {errors.lastName && <p className="text-claret text-sm mt-1">{errors.lastName}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-cafe-noir font-medium mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-claret' : 'border-french-gray'} focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-claret text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-cafe-noir font-medium mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-claret' : 'border-french-gray'} focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50`}
                        placeholder="+1 234 567 8900"
                      />
                      {errors.phone && <p className="text-claret text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="nationality" className="block text-cafe-noir font-medium mb-1">Nationality *</label>
                      <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.nationality ? 'border-claret' : 'border-french-gray'} focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50`}
                        placeholder="Your nationality"
                      />
                      {errors.nationality && <p className="text-claret text-sm mt-1">{errors.nationality}</p>}
                    </div>
                  </div>
                  
                  <div className="bg-alice-blue rounded-lg p-4 flex items-start">
                    <Info className="h-5 w-5 text-moss-green mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">
                      Your personal information is used exclusively for booking purposes and communication regarding your safari. 
                      We respect your privacy and never share your details with third parties not involved in your travel arrangements.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Step 2: Travel Information */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-cafe-noir">Travel Information</h2>
                  
                  <div className="bg-cornsilk rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-3 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-hunyadi-yellow" />
                      Preferred Travel Dates
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="startDate" className="block text-cafe-noir font-medium mb-1">Start Date *</label>
                        <div className="relative">
                          <select
                            id="startDate"
                            name="travelDates.startDate"
                            value={formData.travelDates.startDate}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 pr-10 rounded-lg border appearance-none ${errors['travelDates.startDate'] ? 'border-claret' : 'border-french-gray'} focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50`}
                          >
                            <option value="">Select a month</option>
                            {generateAvailableDates().map((date) => (
                              <option key={date.value} value={date.value}>{date.label}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>
                        {errors['travelDates.startDate'] && <p className="text-claret text-sm mt-1">{errors['travelDates.startDate']}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="endDate" className="block text-cafe-noir font-medium mb-1">End Date *</label>
                        <div className="relative">
                          <select
                            id="endDate"
                            name="travelDates.endDate"
                            value={formData.travelDates.endDate}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 pr-10 rounded-lg border appearance-none ${errors['travelDates.endDate'] ? 'border-claret' : 'border-french-gray'} focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50`}
                          >
                            <option value="">Select a month</option>
                            {generateAvailableDates().map((date) => (
                              <option key={date.value} value={date.value}>{date.label}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>
                        {errors['travelDates.endDate'] && <p className="text-claret text-sm mt-1">{errors['travelDates.endDate']}</p>}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm text-cafe-noir flex items-start">
                      <Info className="h-4 w-4 text-hunyadi-yellow mr-2 flex-shrink-0 mt-0.5" />
                      <span>Select your preferred travel months. Exact dates will be confirmed based on availability.</span>
                    </div>
                  </div>
                  
                  <div className="bg-alice-blue rounded-lg p-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-moss-green" />
                      Number of Travelers
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-cafe-noir font-medium mb-3">Adults (18+ years) *</label>
                        <div className="flex items-center">
                          <button 
                            type="button" 
                            onClick={() => handleTravelersChange('adults', 'decrement')}
                            className="bg-french-gray/50 hover:bg-french-gray text-cafe-noir w-10 h-10 rounded-l-lg flex items-center justify-center"
                          >
                            -
                          </button>
                          <div className="w-16 h-10 flex items-center justify-center border-t border-b border-french-gray bg-white text-cafe-noir font-medium">
                            {formData.travelers.adults}
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleTravelersChange('adults', 'increment')}
                            className="bg-french-gray/50 hover:bg-french-gray text-cafe-noir w-10 h-10 rounded-r-lg flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        {errors['travelers.adults'] && <p className="text-claret text-sm mt-1">{errors['travelers.adults']}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-cafe-noir font-medium mb-3">Children (0-17 years)</label>
                        <div className="flex items-center">
                          <button 
                            type="button" 
                            onClick={() => handleTravelersChange('children', 'decrement')}
                            className="bg-french-gray/50 hover:bg-french-gray text-cafe-noir w-10 h-10 rounded-l-lg flex items-center justify-center"
                          >
                            -
                          </button>
                          <div className="w-16 h-10 flex items-center justify-center border-t border-b border-french-gray bg-white text-cafe-noir font-medium">
                            {formData.travelers.children}
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleTravelersChange('children', 'increment')}
                            className="bg-french-gray/50 hover:bg-french-gray text-cafe-noir w-10 h-10 rounded-r-lg flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      {/* Child ages inputs */}
                      {formData.travelers.children > 0 && (
                        <div className="mt-4">
                          <label className="block text-cafe-noir font-medium mb-2">Child Ages</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {Array.from({ length: formData.travelers.children }).map((_, index) => (
                              <div key={index}>
                                <label className="text-sm text-gray-600">Child {index + 1}</label>
                                <select
                                  value={formData.travelers.childrenAges[index] || ''}
                                  onChange={(e) => handleChildAgeChange(index, e.target.value)}
                                  className={`w-full px-3 py-2 rounded border ${errors[`childAge-${index}`] ? 'border-claret' : 'border-french-gray'}`}
                                >
                                  <option value="">Select age</option>
                                  <option value="infant">Under 2 years</option>
                                  <option value="child">2-12 years</option>
                                  <option value="teen">13-17 years</option>
                                </select>
                                {errors[`childAge-${index}`] && <p className="text-claret text-xs mt-1">{errors[`childAge-${index}`]}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-cornsilk rounded-lg p-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-3">Special Requirements</h3>
                    
                    <div className="mb-6">
                      <label className="block text-cafe-noir font-medium mb-2">Dietary Restrictions</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut Allergy', 'Halal'].map((diet) => (
                          <div key={diet} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`diet-${diet}`}
                              checked={formData.specialRequests.dietary.includes(diet)}
                              onChange={() => handleDietaryChange(diet)}
                              className="h-5 w-5 text-moss-green rounded focus:ring-hunyadi-yellow mr-2"
                            />
                            <label htmlFor={`diet-${diet}`} className="text-gray-700">{diet}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="medicalInfo" className="block text-cafe-noir font-medium mb-2">Medical Information</label>
                      <textarea
                        id="medicalInfo"
                        name="specialRequests.medical"
                        value={formData.specialRequests.medical}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-french-gray focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50"
                        placeholder="Please share any medical conditions or mobility issues we should be aware of"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Accommodations & Activities */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-cafe-noir">Accommodations & Activities</h2>
                  
                  <div className="bg-alice-blue rounded-lg p-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-4">Accommodation Preference</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className={`border-2 rounded-lg p-4 cursor-pointer flex ${
                        formData.accommodationType === 'shared' ? 'border-moss-green bg-moss-green/10' : 'border-french-gray'
                      }`}>
                        <input
                          type="radio"
                          name="accommodationType"
                          value="shared"
                          checked={formData.accommodationType === 'shared'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex-shrink-0 mr-4">
                          <div className={`w-6 h-6 rounded-full border ${
                            formData.accommodationType === 'shared' ? 'border-moss-green' : 'border-gray-400'
                          } flex items-center justify-center`}>
                            {formData.accommodationType === 'shared' && (
                              <div className="w-3 h-3 rounded-full bg-moss-green"></div>
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-cafe-noir">Shared Room</h4>
                          <p className="text-sm text-gray-600">Twin/Double room, perfect for couples or friends traveling together</p>
                          <p className="mt-2 font-medium text-cafe-noir">${packageData.pricing[season].shared} per person</p>
                        </div>
                      </label>
                      
                      <label className={`border-2 rounded-lg p-4 cursor-pointer flex ${
                        formData.accommodationType === 'single' ? 'border-moss-green bg-moss-green/10' : 'border-french-gray'
                      }`}>
                        <input
                          type="radio"
                          name="accommodationType"
                          value="single"
                          checked={formData.accommodationType === 'single'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex-shrink-0 mr-4">
                          <div className={`w-6 h-6 rounded-full border ${
                            formData.accommodationType === 'single' ? 'border-moss-green' : 'border-gray-400'
                          } flex items-center justify-center`}>
                            {formData.accommodationType === 'single' && (
                              <div className="w-3 h-3 rounded-full bg-moss-green"></div>
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-cafe-noir">Private Room</h4>
                          <p className="text-sm text-gray-600">Single room for solo travelers or those preferring privacy</p>
                          <p className="mt-2 font-medium text-cafe-noir">${packageData.pricing[season].single} per person</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-cornsilk rounded-lg p-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-4">Optional Activities</h3>
                    <p className="text-gray-600 mb-4">Select any additional activities you'd like to include:</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {getPopularActivities().map((activity) => (
                        <div key={activity} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`activity-${activity}`}
                            checked={formData.activities.includes(activity)}
                            onChange={() => handleActivityChange(activity)}
                            className="h-5 w-5 text-moss-green rounded focus:ring-hunyadi-yellow mr-2"
                          />
                          <label htmlFor={`activity-${activity}`} className="text-gray-700">{activity}</label>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <label htmlFor="otherRequests" className="block text-cafe-noir font-medium mb-2">Other Special Requests</label>
                      <textarea
                        id="otherRequests"
                        name="specialRequests.other"
                        value={formData.specialRequests.other}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-french-gray focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50"
                        placeholder="Any other special requests or information you'd like us to know"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 4: Review & Payment */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-cafe-noir">Review & Payment</h2>
                  
                  {/* Booking Summary */}
                  <div className="bg-alice-blue rounded-lg p-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-4">Booking Summary</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-cafe-noir mb-2">Package</h4>
                        <p className="text-gray-600">{packageData.name}</p>
                        <p className="text-gray-600 text-sm">{packageData.duration}</p>
                        <p className="text-gray-600 text-sm">Destinations: {packageData.destinations.join(', ')}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-cafe-noir mb-2">Travel Dates</h4>
                        <p className="text-gray-600">
                          {formData.travelDates.startDate ? new Date(formData.travelDates.startDate + '-01').toLocaleString('default', { month: 'long', year: 'numeric' }) : 'Not selected'} 
                          {' - '}
                          {formData.travelDates.endDate ? new Date(formData.travelDates.endDate + '-01').toLocaleString('default', { month: 'long', year: 'numeric' }) : 'Not selected'}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-cafe-noir mb-2">Travelers</h4>
                        <p className="text-gray-600">{formData.travelers.adults} Adults</p>
                        {formData.travelers.children > 0 && (
                          <p className="text-gray-600">{formData.travelers.children} Children</p>
                        )}
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-cafe-noir mb-2">Accommodation</h4>
                        <p className="text-gray-600">{formData.accommodationType === 'shared' ? 'Shared Room' : 'Private Room'}</p>
                      </div>
                      
                      {formData.activities.length > 0 && (
                        <div className="md:col-span-2">
                          <h4 className="font-medium text-cafe-noir mb-2">Optional Activities</h4>
                          <p className="text-gray-600">{formData.activities.join(', ')}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-french-gray">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Package Price</span>
                        <span className="font-medium text-cafe-noir">${packageData.pricing[season][formData.accommodationType]} per person</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Adults ({formData.travelers.adults})</span>
                        <span className="font-medium text-cafe-noir">${packageData.pricing[season][formData.accommodationType] * formData.travelers.adults}</span>
                      </div>
                      
                      {formData.travelers.children > 0 && (
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Children ({formData.travelers.children})</span>
                          <span className="font-medium text-cafe-noir">${Math.round(packageData.pricing[season][formData.accommodationType] * 0.75 * formData.travelers.children)}</span>
                        </div>
                      )}
                      
                      {formData.activities.length > 0 && (
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Optional Activities</span>
                          <span className="font-medium text-cafe-noir">Price on request</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center pt-4 border-t border-french-gray mt-4">
                        <span className="font-bold text-cafe-noir">Estimated Total</span>
                        <span className="font-bold text-cafe-noir text-lg">${calculateTotalPrice()}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Information */}
                  <div className="bg-cornsilk rounded-lg p-6">
                    <h3 className="text-lg font-bold text-cafe-noir mb-4">Payment Information</h3>
                    
                    <div className="mb-6">
                      <label className="block text-cafe-noir font-medium mb-2">Payment Method</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className={`border-2 rounded-lg p-4 cursor-pointer flex ${
                          formData.payment.method === 'card' ? 'border-moss-green bg-moss-green/10' : 'border-french-gray'
                        }`}>
                          <input
                            type="radio"
                            name="payment.method"
                            value="card"
                            checked={formData.payment.method === 'card'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="flex-shrink-0 mr-4">
                            <div className={`w-6 h-6 rounded-full border ${
                              formData.payment.method === 'card' ? 'border-moss-green' : 'border-gray-400'
                            } flex items-center justify-center`}>
                              {formData.payment.method === 'card' && (
                                <div className="w-3 h-3 rounded-full bg-moss-green"></div>
                              )}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <CreditCard className="h-5 w-5 text-gold-metallic mr-2" />
                              <h4 className="font-medium text-cafe-noir">Credit/Debit Card</h4>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Secure payment via credit or debit card</p>
                          </div>
                        </label>
                        
                        <label className={`border-2 rounded-lg p-4 cursor-pointer flex ${
                          formData.payment.method === 'bank' ? 'border-moss-green bg-moss-green/10' : 'border-french-gray'
                        }`}>
                          <input
                            type="radio"
                            name="payment.method"
                            value="bank"
                            checked={formData.payment.method === 'bank'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="flex-shrink-0 mr-4">
                            <div className={`w-6 h-6 rounded-full border ${
                              formData.payment.method === 'bank' ? 'border-moss-green' : 'border-gray-400'
                            } flex items-center justify-center`}>
                              {formData.payment.method === 'bank' && (
                                <div className="w-3 h-3 rounded-full bg-moss-green"></div>
                              )}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-cafe-noir">Bank Transfer</h4>
                            <p className="text-sm text-gray-600 mt-1">Pay via bank transfer (details will be provided)</p>
                          </div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="payment.deposit"
                          checked={formData.payment.deposit}
                          onChange={handleChange}
                          className="h-5 w-5 text-moss-green rounded focus:ring-hunyadi-yellow mr-2"
                        />
                        <span className="text-cafe-noir">
                          Pay 25% deposit now (${calculateDeposit()}) and the balance later
                        </span>
                      </label>
                      <p className="text-sm text-gray-600 mt-2 pl-7">
                        The remaining balance will be due 60 days before your travel date.
                      </p>
                    </div>
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div className="bg-white border border-french-gray rounded-lg p-6">
                    <div className="flex items-start mb-4">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="h-5 w-5 text-moss-green rounded focus:ring-hunyadi-yellow mr-2 mt-1"
                      />
                      <div>
                        <label htmlFor="agreeToTerms" className="text-cafe-noir font-medium">
                          I agree to the Terms and Conditions *
                        </label>
                        <p className="text-sm text-gray-600 mt-1">
                          By checking this box, you confirm that you have read and agree to our 
                          <a href="#" className="text-moss-green hover:underline"> booking terms</a>,
                          <a href="#" className="text-moss-green hover:underline"> cancellation policy</a>, and
                          <a href="#" className="text-moss-green hover:underline"> privacy policy</a>.
                        </p>
                      </div>
                    </div>
                    {errors.agreeToTerms && <p className="text-claret text-sm">{errors.agreeToTerms}</p>}
                    
                    <div className="flex items-start mt-4 bg-alice-blue p-4 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-hunyadi-yellow mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        This is a booking request only. No payment will be processed until our team confirms availability and you approve the final itinerary. You'll receive a confirmation email within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Form Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-french-gray">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-cafe-noir text-cafe-noir font-medium rounded-lg hover:bg-cafe-noir/5 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow"
                  >
                    Previous
                  </button>
                ) : (
                  <div></div>
                )}
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-moss-green text-white font-medium rounded-lg hover:bg-moss-green/90 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-hunyadi-yellow text-cafe-noir font-bold rounded-lg hover:bg-hunyadi-yellow/90 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow"
                  >
                    Submit Booking Request
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default TanzaniaBookingForm;