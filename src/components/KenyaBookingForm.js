import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Users, Map, DollarSign, Phone, Mail, Info, Calendar as CalendarIcon, CreditCard, Check } from 'lucide-react';
// import emailjs from 'emailjs-com';
import { safariPackages } from './KenyaSafari';

const KenyaBookingForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate()
  
  // Get safari details from URL state or find by ID
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState("01.07-31.10.2025"); // Default to peak season
  const [roomType, setRoomType] = useState("shared");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    specialRequests: '',
    travelDate: '',
    paymentMethod: 'creditCard',
    agreeToTerms: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPackage, setIsLoadingPackage] = useState(true);

  // Find safari package either from state or from ID
  useEffect(() => {
    setIsLoadingPackage(true);
    
    const packageFromState = location.state?.selectedPackage;
    
    if (packageFromState) {
      setSelectedPackage(packageFromState);
      setIsLoadingPackage(false);
      return;
    }
    
    if (id && safariPackages && safariPackages.length > 0) {
      const foundPackage = safariPackages.find(pkg => pkg.id === id);
      setSelectedPackage(foundPackage || null);
      setIsLoadingPackage(false);
    }
  }, [id, location.state, safariPackages]);
  
  if (isLoadingPackage) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Loading safari package...</h2>
          <p className="text-gray-600 mb-6">Please wait while we load your selected safari package.</p>
        </div>
      </div>
    );
  }

  // Calculate total price
  const calculateTotalPrice = () => {
    if (!selectedPackage || !selectedPackage.seasons) return 0;
    
    const season = selectedPackage.seasons.find(s => s.period === selectedSeason);
    if (!season) return 0;
    
    let basePrice = season.sharedPrice;
    
    // Add single supplement if solo traveler
    if (roomType === "single" && adults === 1) {
      basePrice += season.singleSupplement;
    }
    
    // Calculate for all adults
    const totalAdultsCost = basePrice * adults;
    
    // Children at 70% of adult price
    const childrenCost = children > 0 ? (basePrice * 0.7) * children : 0;
    
    return totalAdultsCost + childrenCost;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    // Step 1 validation
    if (currentStep === 1) {
      if (!formData.travelDate) errors.travelDate = 'Please select a travel date';
      if (adults < 1) errors.adults = 'At least 1 adult is required';
    }
    
    // Step 2 validation
    if (currentStep === 2) {
      if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!formData.phone.trim()) errors.phone = 'Phone number is required';
      if (!formData.nationality.trim()) errors.nationality = 'Nationality is required';
    }
    
    // Step 3 validation
    if (currentStep === 3) {
      if (!formData.paymentMethod) errors.paymentMethod = 'Please select a payment method';
      if (!formData.agreeToTerms) errors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (validateForm()) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Prepare data for emailjs
    const templateParams = {
      package_name: selectedPackage?.name || 'Unknown Package',
      package_id: selectedPackage?.id || 'Unknown ID',
      travel_date: formData.travelDate,
      season: selectedSeason,
      adults: adults,
      children: children,
      room_type: roomType,
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      nationality: formData.nationality,
      special_requests: formData.specialRequests,
      payment_method: formData.paymentMethod,
      total_price: calculateTotalPrice().toFixed(2)
    };
    
    try {
      // Replace with your actual EmailJS service ID, template ID and user ID
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID');
      
      // For demo purposes, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to submit booking. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedPackage) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Package Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the safari package you're looking for.</p>
          <button 
            onClick={() => navigate('/safaris/kenya')}
            className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Browse Kenya Safaris
          </button>
        </div>
      </div>
    );
  }

  if (formSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto text-center">
          <div className="bg-green-100 text-green-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for booking the {selectedPackage.name} safari. We've sent a confirmation to your email at {formData.email}.
            Our team will contact you shortly to finalize the details.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Booking Reference:</span>
              <span className="font-medium">{`KS-${Date.now().toString().slice(-6)}`}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-bold text-amber-600">${calculateTotalPrice().toFixed(2)}</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/safaris/kenya')}
            className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Browse More Safaris
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cornsilk min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-moss-green">Book Your Kenya Safari</h1>
            <p className="text-gray-600">{selectedPackage.name} - {selectedPackage.duration}</p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex-1 relative">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto z-10 relative ${
                      currentStep >= step 
                        ? 'bg-hunyadi-yellow text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step}
                  </div>
                  <div className="text-center mt-2 text-sm font-medium text-gray-600">
                    {step === 1 && 'Trip Details'}
                    {step === 2 && 'Personal Info'}
                    {step === 3 && 'Payment'}
                  </div>
                  {step < 3 && (
                    <div 
                      className={`absolute top-5 w-full h-0.5 ${
                        currentStep > step ? 'bg-hunyadi-yellow' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Package Summary */}
            <div className="bg-moss-green text-white p-6">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <img 
                    src={selectedPackage.coverImage} 
                    alt={selectedPackage.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <h2 className="text-2xl font-bold mb-2">{selectedPackage.name}</h2>
                  <div className="flex flex-wrap gap-3 mb-2">
                    <div className="flex items-center text-sm bg-white/20 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedPackage.duration}
                    </div>
                    {selectedPackage.destinations && (
                      <div className="flex items-center text-sm bg-white/20 px-3 py-1 rounded-full">
                        <Map className="w-4 h-4 mr-1" />
                        {selectedPackage.destinations.join(', ')}
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
                    <span className="text-sm">From:</span>
                    <span className="text-2xl font-bold ml-2">${calculateTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              {/* Step 1: Trip Details */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Trip Details</h3>
                  
                  {/* Season Selector */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Select Season
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        {
                          period: "02.01-30.03.2025",
                          name: "Shoulder Season",
                          icon: "🌤️",
                        },
                        {
                          period: "01.04-30.06.2025",
                          name: "Green Season",
                          icon: "🌿",
                        },
                        { period: "01.07-31.10.2025", name: "Peak Season", icon: "🦁" },
                        { period: "01.11-15.12.2025", name: "Low Season", icon: "☂️" },
                      ].map(({ period, name, icon }) => (
                        <button
                          type="button"
                          key={period}
                          onClick={() => setSelectedSeason(period)}
                          className={`py-3 px-4 rounded-xl transition-all flex flex-col items-center ${
                            selectedSeason === period
                              ? "bg-hunyadi-yellow text-white shadow-md"
                              : "bg-gray-50 text-gray-700 hover:bg-hunyadi-yellow/10"
                          }`}
                        >
                          <span className="text-2xl mb-1">{icon}</span>
                          <span className="font-medium">{name}</span>
                          <span className="text-xs mt-1 opacity-80">{period}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Travel Date */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Travel Date
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <CalendarIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleInputChange}
                        className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50 ${
                          formErrors.travelDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    {formErrors.travelDate && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.travelDate}</p>
                    )}
                  </div>
                  
                  {/* Travelers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Number of Adults
                      </label>
                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => adults > 1 && setAdults(adults - 1)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-l-lg"
                        >
                          -
                        </button>
                        <div className="flex items-center justify-center bg-gray-50 px-8">
                          {adults}
                        </div>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-r-lg"
                        >
                          +
                        </button>
                      </div>
                      {formErrors.adults && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.adults}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Number of Children (under 12)
                      </label>
                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => children > 0 && setChildren(children - 1)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-l-lg"
                        >
                          -
                        </button>
                        <div className="flex items-center justify-center bg-gray-50 px-8">
                          {children}
                        </div>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-r-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Room Type */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-2">
                      Room Preference
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setRoomType("shared")}
                        className={`p-4 rounded-xl flex items-center gap-3 border-2 transition ${
                          roomType === "shared" 
                            ? "border-hunyadi-yellow bg-hunyadi-yellow/10" 
                            : "border-gray-200 hover:border-hunyadi-yellow/50"
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          roomType === "shared" ? "bg-hunyadi-yellow text-white" : "bg-gray-200"
                        }`}>
                          {roomType === "shared" && <Check className="w-4 h-4" />}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium">Shared Room</h4>
                          <p className="text-sm text-gray-500">Double/Twin occupancy</p>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setRoomType("single")}
                        className={`p-4 rounded-xl flex items-center gap-3 border-2 transition ${
                          roomType === "single" 
                            ? "border-hunyadi-yellow bg-hunyadi-yellow/10" 
                            : "border-gray-200 hover:border-hunyadi-yellow/50"
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          roomType === "single" ? "bg-hunyadi-yellow text-white" : "bg-gray-200"
                        }`}>
                          {roomType === "single" && <Check className="w-4 h-4" />}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium">Single Room</h4>
                          <p className="text-sm text-gray-500">Private room (supplement applies)</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`px-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50 ${
                          formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.fullName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`px-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50 ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (123) 456-7890"
                        className={`px-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50 ${
                          formErrors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Nationality
                      </label>
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        placeholder="e.g. American"
                        className={`px-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50 ${
                          formErrors.nationality ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.nationality && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.nationality}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Special Requests or Requirements
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="E.g., dietary restrictions, mobility assistance, special occasions..."
                      rows="4"
                      className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50"
                    ></textarea>
                  </div>
                </div>
              )}
              
              {/* Step 3: Payment Information */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Payment Information</h3>
                  
                  {/* Price Summary */}
                  <div className="bg-gray-50 p-6 rounded-xl mb-8">
                    <h4 className="text-lg font-bold mb-4 text-gray-800">Booking Summary</h4>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Package</span>
                        <span>{selectedPackage.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Travel Date</span>
                        <span>{formData.travelDate || "Not selected"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Season</span>
                        <span>{selectedSeason}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span>{selectedPackage.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Room Type</span>
                        <span>{roomType === "shared" ? "Shared (Double/Twin)" : "Single"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Adults</span>
                        <span>{adults}</span>
                      </div>
                      {children > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Children</span>
                          <span>{children}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Total Price</span>
                        <span className="text-2xl font-bold text-hunyadi-yellow">${calculateTotalPrice().toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        30% deposit ($
                        {(calculateTotalPrice() * 0.3).toFixed(2)}) required to confirm booking
                      </p>
                    </div>
                  </div>
                  
                  {/* Payment Options */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-3">
                      Select Payment Method
                    </label>
                    <div className="space-y-3">
                      <label className={`block p-4 border rounded-xl cursor-pointer transition ${
                        formData.paymentMethod === 'creditCard' 
                          ? 'border-hunyadi-yellow bg-hunyadi-yellow/5' 
                          : 'border-gray-200 hover:border-hunyadi-yellow/50'
                      }`}>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="creditCard"
                            checked={formData.paymentMethod === 'creditCard'}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <div>
                            <span className="font-medium">Credit Card</span>
                            <p className="text-sm text-gray-500 mt-1">
                              Pay securely with Visa, MasterCard, or American Express
                            </p>
                          </div>
                          <div className="ml-auto flex items-center space-x-2">
                            <span className="bg-blue-500 text-white p-1 rounded w-10 h-6 flex items-center justify-center text-xs font-bold">VISA</span>
                            <span className="bg-red-500 text-white p-1 rounded w-10 h-6 flex items-center justify-center text-xs font-bold">MC</span>
                            <span className="bg-gray-700 text-white p-1 rounded w-10 h-6 flex items-center justify-center text-xs font-bold">AMEX</span>
                          </div>
                        </div>
                      </label>
                      
                      <label className={`block p-4 border rounded-xl cursor-pointer transition ${
                        formData.paymentMethod === 'bankTransfer' 
                          ? 'border-hunyadi-yellow bg-hunyadi-yellow/5' 
                          : 'border-gray-200 hover:border-hunyadi-yellow/50'
                      }`}>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="bankTransfer"
                            checked={formData.paymentMethod === 'bankTransfer'}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <div>
                            <span className="font-medium">Bank Transfer</span>
                            <p className="text-sm text-gray-500 mt-1">
                              Transfer the deposit directly to our bank account
                            </p>
                          </div>
                        </div>
                      </label>
                      
                      <label className={`block p-4 border rounded-xl cursor-pointer transition ${
                        formData.paymentMethod === 'paypal' 
                          ? 'border-hunyadi-yellow bg-hunyadi-yellow/5' 
                          : 'border-gray-200 hover:border-hunyadi-yellow/50'
                      }`}>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={formData.paymentMethod === 'paypal'}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <div>
                            <span className="font-medium">PayPal</span>
                            <p className="text-sm text-gray-500 mt-1">
                              Fast and secure payment with PayPal
                            </p>
                          </div>
                          <div className="ml-auto">
                            <span className="bg-blue-600 text-white p-1 rounded w-16 h-6 flex items-center justify-center text-xs font-bold">PayPal</span>
                          </div>
                        </div>
                      </label>
                    </div>
                    {formErrors.paymentMethod && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.paymentMethod}</p>
                    )}
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div className="mb-8">
                    <label className={`flex items-start cursor-pointer ${
                      formErrors.agreeToTerms ? 'text-red-500' : ''
                    }`}>
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm">
                        I agree to the <a href="#" className="text-hunyadi-yellow hover:underline">terms and conditions</a>, including the cancellation policy and understand that a 30% non-refundable deposit is required to confirm my booking.
                      </span>
                    </label>
                    {formErrors.agreeToTerms && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.agreeToTerms}</p>
                    )}
                  </div>
                </div>
              )}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div></div> // Empty div to maintain flex layout
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-hunyadi-yellow hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-hunyadi-yellow hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors relative"
                  >
                    {isLoading ? (
                      <>
                        <span className="opacity-0">Confirm Booking</span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KenyaBookingForm;