import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Check, 
  ChevronDown, 
  Info, 
  Map, 
  Mountain, 
  Users, 
  CreditCard,
  Phone,
  Mail,
  User
} from 'lucide-react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const RwandaBookingForm = ({ tourData }) => {
  const { tourId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isLoadingPackage, setIsLoadingPackage] = useState(true);
  const [formStep, setFormStep] = useState(1);
  const [selectedSeason, setSelectedSeason] = useState('high');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    travelDate: '',
    adults: 2,
    children: 0,
    accommodationType: 'shared',
    specialRequirements: '',
    preferredContact: 'email',
    heardAboutUs: '',
    agreeToTerms: false,
    newsletterSignup: false,
    paymentMethod: 'card'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [emailjsConfig] = useState({
    serviceId: 'service_fzr2b56', // Replace with your Service ID
    templateId: 'template_fhatkrh', // Replace with your Template ID
    publicKey: 'MlSlATzRbsw08c1XI', // Replace with your Public Key
  });

  // Season information
  const seasons = [
    { 
      id: 'high', 
      name: 'High Season (Jul-Oct)',
      description: 'Peak wildlife viewing with optimal weather conditions.'
    },
    { 
      id: 'low', 
      name: 'Low Season (Nov-Jun)',
      description: 'Fewer tourists and lower rates.'
    }
  ];

  useEffect(() => {
    setIsLoadingPackage(true);
    
    // First try to get from location state
    if (location.state?.selectedPackage) {
      setSelectedPackage(location.state.selectedPackage);
      setIsLoadingPackage(false);
      return;
    }
    
    // If not in state, find by ID from tourData
    if (tourId && tourData && tourData.tour_packages) {
      const foundPackage = tourData.tour_packages.find(
        tour => tour.tour_code === tourId
      );
      
      if (foundPackage) {
        // Convert to the format expected by the form
        const basePrice = 1000 + ((foundPackage.duration.days || 5) * 500);
        
        const destinations = foundPackage.itinerary 
          ? [...new Set(
              foundPackage.itinerary
                .filter(day => day.location !== "Departure")
                .map(day => day.location.split('/')[0])
            )]
          : [foundPackage.destination];
          
        // Ensure highlights is always an array
        let highlights = [];
        if (foundPackage.highlight) {
          highlights.push(foundPackage.highlight);
        }
        if (foundPackage.itinerary) {
          highlights = highlights.concat(
            foundPackage.itinerary.flatMap(day => day.activities || []).slice(0, 5)
          );
        }
          
        const formattedTour = {
          id: foundPackage.tour_code,
          code: foundPackage.tour_code,
          name: foundPackage.name,
          destinations,
          duration: foundPackage.duration.variable 
            ? "Customizable" 
            : `${foundPackage.duration.nights} Nights / ${foundPackage.duration.days} Days`,
          durationDays: foundPackage.duration.days,
          durationNights: foundPackage.duration.nights,
          difficulty: foundPackage.highlight && foundPackage.highlight.includes("Gorilla") ? "Moderate" : "Moderate-Challenging",
          description: foundPackage.description,
          itinerary: foundPackage.itinerary || [],
          highlights: highlights.length > 0 ? highlights : ['Gorilla Trekking', 'Wildlife Viewing', 'Scenic Landscapes'], // Default highlights if none found
          pricing: {
            high: {
              shared: basePrice,
              single: basePrice * 1.5
            },
            low: {
              shared: basePrice * 0.85,
              single: basePrice * 1.3
            }
          }
        };
        
        setSelectedPackage(formattedTour);
        setIsLoadingPackage(false);
      }
    }
  }, [tourId, location.state, tourData]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    if (!selectedPackage) return 0;
    
    const basePrice = formData.accommodationType === 'shared' 
      ? selectedPackage.pricing[selectedSeason].shared
      : selectedPackage.pricing[selectedSeason].single;
      
    const totalAdults = parseInt(formData.adults) || 0;
    const totalChildren = parseInt(formData.children) || 0;
    const childDiscount = 0.5; // 50% discount for children
    
    return (basePrice * totalAdults) + (basePrice * childDiscount * totalChildren);
  };

  // Format price for display
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  // Validate form based on current step
  const validateForm = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required';
      if (!formData.travelDate) newErrors.travelDate = 'Travel date is required';
    }
    
    if (step === 2) {
      if (parseInt(formData.adults) < 1) newErrors.adults = 'At least 1 adult is required';
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    return newErrors;
  };

  // Handle form submission
  // 4. Replace your handleSubmit function with this:
const handleSubmit = (e) => {
  e.preventDefault();
  
  const formErrors = validateForm(formStep);
  setErrors(formErrors);
  
  if (Object.keys(formErrors).length === 0) {
    if (formStep < 3) {
      setFormStep(formStep + 1);
      window.scrollTo(0, 0);
    } else {
      // Submit the form
      setIsSubmitting(true);
      
      // Prepare data for EmailJS
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        nationality: formData.nationality,
        travelDate: new Date(formData.travelDate).toLocaleDateString('en-US', 
          { year: 'numeric', month: 'long', day: 'numeric' }),
        adults: formData.adults,
        children: formData.children,
        accommodationType: formData.accommodationType === 'shared' ? 'Shared Room' : 'Single Room',
        specialRequirements: formData.specialRequirements || 'None',
        preferredContact: formData.preferredContact,
        heardAboutUs: formData.heardAboutUs || 'Not specified',
        packageName: selectedPackage.name,
        packageCode: selectedPackage.code,
        destinations: selectedPackage.destinations.join(', '),
        duration: selectedPackage.duration,
        season: selectedSeason === 'high' ? 'High Season (Jul-Oct)' : 'Low Season (Nov-Jun)',
        totalPrice: formatPrice(calculateTotalPrice()),
        paymentMethod: formData.paymentMethod === 'card' ? 'Credit Card' : 'Bank Transfer'
      };
      
      // Send email using EmailJS
      emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
        setIsSubmitting(false);
        setShowConfirmation(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setIsSubmitting(false);
        // Handle error - you might want to show an error message to the user
        alert('There was an error sending your booking. Please try again or contact us directly.');
      });
    }
  }
};

  // Go back to previous step
  const goBack = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
      window.scrollTo(0, 0);
    }
  };

  if (!selectedPackage) {
    return (
      <div className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Loading safari package...</h2>
            <p className="text-gray-600">Please wait while we load your selected safari package.</p>
          </div>
        </div>
      </div>
    );
  }

  // Show confirmation screen after successful submission
  if (showConfirmation) {
    return (
      <div className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center bg-green-100 p-4 rounded-full mb-4">
                <Check className="text-green-600 w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600 text-lg mb-6">Thank you for booking your Rwanda safari experience!</p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Your Booking Details</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Safari Package</h4>
                  <p className="text-gray-700 mb-1">{selectedPackage.name}</p>
                  <p className="text-gray-600 text-sm mb-3">{selectedPackage.code}</p>
                  
                  <h4 className="font-semibold text-amber-800 mb-2">Travel Information</h4>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Departure Date:</span> {new Date(formData.travelDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Duration:</span> {selectedPackage.duration}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Season:</span> {selectedSeason === 'high' ? 'High Season' : 'Low Season'}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Contact Information</h4>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Name:</span> {formData.fullName}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Email:</span> {formData.email}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Phone:</span> {formData.phone}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Nationality:</span> {formData.nationality}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-yellow-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-amber-800">Total Amount</h4>
                    <p className="text-gray-600 text-sm">
                      {formData.adults} Adult{formData.adults !== 1 ? 's' : ''}, {formData.children} Child{formData.children !== 1 ? 'ren' : ''}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-amber-900">{formatPrice(calculateTotalPrice())}</p>
                    <p className="text-gray-600 text-sm">Payment Method: {formData.paymentMethod === 'card' ? 'Credit Card' : 'Bank Transfer'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1"><Check className="w-4 h-4" /></span>
                  <span>We've sent a confirmation email to {formData.email} with all your booking details.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1"><Check className="w-4 h-4" /></span>
                  <span>A safari specialist will contact you within 24 hours to finalize your booking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1"><Check className="w-4 h-4" /></span>
                  <span>For gorilla permits, we'll require a deposit of 30% to secure your booking.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Link to="/">
                <button className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-bold transition">
                  Return to Homepage
                </button>
              </Link>
              <Link to="/rwanda-safaris">
                <button className="bg-white border border-amber-900 text-amber-900 hover:bg-amber-50 px-6 py-3 rounded-lg font-bold transition">
                  Browse More Safaris
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">Book Your Rwanda Safari</h1>
              <p className="text-gray-600">Complete the form below to reserve your adventure</p>
            </div>
            <div className="shrink-0">
              <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
                {selectedPackage.code}
              </span>
            </div>
          </div>
        </div>
        
        {/* Progress Steps */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-6">
          <div className="flex justify-between">
            <div className={`flex flex-col items-center flex-1 ${formStep >= 1 ? 'text-amber-900' : 'text-gray-400'}`}>
              <div className={`rounded-full h-10 w-10 flex items-center justify-center mb-2 ${
                formStep >= 1 ? 'bg-amber-900 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                1
              </div>
              <span className="text-xs md:text-sm font-medium">Personal Details</span>
            </div>
            <div className="flex-1 flex items-center">
              <div className={`h-1 w-full ${formStep >= 2 ? 'bg-amber-900' : 'bg-gray-200'}`}></div>
            </div>
            <div className={`flex flex-col items-center flex-1 ${formStep >= 2 ? 'text-amber-900' : 'text-gray-400'}`}>
              <div className={`rounded-full h-10 w-10 flex items-center justify-center mb-2 ${
                formStep >= 2 ? 'bg-amber-900 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
              <span className="text-xs md:text-sm font-medium">Trip Requirements</span>
            </div>
            <div className="flex-1 flex items-center">
              <div className={`h-1 w-full ${formStep >= 3 ? 'bg-amber-900' : 'bg-gray-200'}`}></div>
            </div>
            <div className={`flex flex-col items-center flex-1 ${formStep >= 3 ? 'text-amber-900' : 'text-gray-400'}`}>
              <div className={`rounded-full h-10 w-10 flex items-center justify-center mb-2 ${
                formStep >= 3 ? 'bg-amber-900 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                3
              </div>
              <span className="text-xs md:text-sm font-medium">Review & Pay</span>
            </div>
          </div>
        </div>
        
        {/* Main Form Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Details */}
                {formStep === 1 && (
                  <>
                    <h2 className="text-xl font-bold text-amber-900 mb-6">Personal Information</h2>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`pl-10 w-full p-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600`}
                          placeholder="As it appears on your passport"
                        />
                      </div>
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`pl-10 w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600`}
                            placeholder="your@email.com"
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`pl-10 w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600`}
                            placeholder="Include country code"
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="nationality">
                          Nationality
                        </label>
                        <select
                          id="nationality"
                          name="nationality"
                          value={formData.nationality}
                          onChange={handleInputChange}
                          className={`w-full p-3 border ${errors.nationality ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 bg-white`}
                        >
                          <option value="">Select your nationality</option>
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Japan">Japan</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="travelDate">
                          Preferred Travel Date
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="date"
                            id="travelDate"
                            name="travelDate"
                            value={formData.travelDate}
                            onChange={handleInputChange}
                            className={`pl-10 w-full p-3 border ${errors.travelDate ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600`}
                          />
                        </div>
                        {errors.travelDate && <p className="text-red-500 text-sm mt-1">{errors.travelDate}</p>}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-amber-900 focus:ring-amber-900"
                          />
                          <span className="text-gray-700">Email</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-amber-900 focus:ring-amber-900"
                          />
                          <span className="text-gray-700">Phone</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="whatsapp"
                            checked={formData.preferredContact === 'whatsapp'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-amber-900 focus:ring-amber-900"
                          />
                          <span className="text-gray-700">WhatsApp</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="heardAboutUs">
                        How did you hear about us?
                      </label>
                      <select
                        id="heardAboutUs"
                        name="heardAboutUs"
                        value={formData.heardAboutUs}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 bg-white"
                      >
                        <option value="">Please select</option>
                        <option value="Google">Google</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Friend">Friend or Family</option>
                        <option value="Travel Agent">Travel Agent</option>
                        <option value="Travel Show">Travel Show</option>
                        <option value="Magazine">Magazine or Newspaper</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </>
                )}
                
                {/* Step 2: Trip Requirements */}
                {formStep === 2 && (
                  <>
                    <h2 className="text-xl font-bold text-amber-900 mb-6">Trip Requirements</h2>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                      <h3 className="font-semibold text-amber-900 mb-2">Selected Safari Package</h3>
                      <h4 className="text-lg font-bold text-amber-800 mb-1">{selectedPackage.name}</h4>
                      <p className="text-gray-600 mb-4">{selectedPackage.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="flex items-center gap-1 text-amber-800">
                            <Calendar className="w-4 h-4 text-green-600" />
                            <span className="font-medium">Duration:</span> {selectedPackage.duration}
                          </span>
                        </div>
                        <div>
                          <span className="flex items-center gap-1 text-amber-800">
                            <Mountain className="w-4 h-4 text-green-600" />
                            <span className="font-medium">Difficulty:</span> {selectedPackage.difficulty}
                          </span>
                        </div>
                        <div>
                          <span className="flex items-center gap-1 text-amber-800">
                            <Map className="w-4 h-4 text-green-600" />
                            <span className="font-medium">Destinations:</span> {selectedPackage.destinations.join(', ')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-amber-900 mb-4">Your Travel Season</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {seasons.map(season => (
                          <div 
                            key={season.id}
                            className={`p-4 rounded-lg cursor-pointer transition border-2 ${
                              selectedSeason === season.id 
                                ? 'border-yellow-600 bg-yellow-50' 
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                            onClick={() => setSelectedSeason(season.id)}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                selectedSeason === season.id ? 'bg-yellow-600' : 'border-2 border-gray-300'
                              }`}>
                                {selectedSeason === season.id && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <h4 className="font-semibold text-amber-900">{season.name}</h4>
                            </div>
                            <p className="text-gray-600 text-sm">{season.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="adults">
                          Number of Adults
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Users className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="number"
                            id="adults"
                            name="adults"
                            min="1"
                            max="10"
                            value={formData.adults}
                            onChange={handleInputChange}
                            className={`pl-10 w-full p-3 border ${errors.adults ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600`}
                            />
                          </div>
                          {errors.adults && <p className="text-red-500 text-sm mt-1">{errors.adults}</p>}
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2" htmlFor="children">
                            Number of Children
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Users className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="number"
                              id="children"
                              name="children"
                              min="0"
                              max="10"
                              value={formData.children}
                              onChange={handleInputChange}
                              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">
                          Accommodation Preference
                        </label>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div 
                            className={`p-4 rounded-lg cursor-pointer transition border-2 ${
                              formData.accommodationType === 'shared' 
                                ? 'border-yellow-600 bg-yellow-50' 
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange({ target: { name: 'accommodationType', value: 'shared' } })}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                formData.accommodationType === 'shared' ? 'bg-yellow-600' : 'border-2 border-gray-300'
                              }`}>
                                {formData.accommodationType === 'shared' && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <h4 className="font-semibold text-amber-900">Shared Room</h4>
                            </div>
                            <p className="text-gray-600 text-sm">Double or twin room shared with your travel companion.</p>
                          </div>
                          
                          <div 
                            className={`p-4 rounded-lg cursor-pointer transition border-2 ${
                              formData.accommodationType === 'single' 
                                ? 'border-yellow-600 bg-yellow-50' 
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange({ target: { name: 'accommodationType', value: 'single' } })}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                formData.accommodationType === 'single' ? 'bg-yellow-600' : 'border-2 border-gray-300'
                              }`}>
                                {formData.accommodationType === 'single' && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <h4 className="font-semibold text-amber-900">Single Room</h4>
                            </div>
                            <p className="text-gray-600 text-sm">Private room for one person (additional supplement applies).</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="specialRequirements">
                          Special Requirements
                        </label>
                        <textarea
                          id="specialRequirements"
                          name="specialRequirements"
                          value={formData.specialRequirements}
                          onChange={handleInputChange}
                          placeholder="Dietary restrictions, accessibility needs, or any other special requirements..."
                          rows="4"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        ></textarea>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-start mb-4">
                          <div className="flex items-center h-5">
                            <input
                              id="agreeToTerms"
                              name="agreeToTerms"
                              type="checkbox"
                              checked={formData.agreeToTerms}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                            />
                          </div>
                          <div className="ml-3">
                            <label htmlFor="agreeToTerms" className="text-gray-700">
                              I agree to the <a href="#" className="text-amber-600 underline">Terms and Conditions</a>
                            </label>
                            {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="newsletterSignup"
                              name="newsletterSignup"
                              type="checkbox"
                              checked={formData.newsletterSignup}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                            />
                          </div>
                          <div className="ml-3">
                            <label htmlFor="newsletterSignup" className="text-gray-700">
                              Sign up for our newsletter to receive special offers and updates
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Step 3: Review & Payment */}
                  {formStep === 3 && (
                    <>
                      <h2 className="text-xl font-bold text-amber-900 mb-6">Review and Payment</h2>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                        <h3 className="font-semibold text-amber-900 mb-4">Booking Summary</h3>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between border-b border-yellow-200 pb-3">
                            <div>
                              <h4 className="font-semibold text-amber-900">{selectedPackage.name}</h4>
                              <p className="text-gray-600 text-sm">{selectedPackage.code}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-amber-900">{formatPrice(calculateTotalPrice())}</p>
                              <p className="text-gray-600 text-sm">
                                {formData.adults} Adult{formData.adults !== 1 ? 's' : ''}, {formData.children} Child{formData.children !== 1 ? 'ren' : ''}
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 pb-3">
                            <div>
                              <h5 className="text-sm font-medium text-amber-800 mb-1">Contact Information</h5>
                              <p className="text-gray-700">{formData.fullName}</p>
                              <p className="text-gray-700">{formData.email}</p>
                              <p className="text-gray-700">{formData.phone}</p>
                            </div>
                            
                            <div>
                              <h5 className="text-sm font-medium text-amber-800 mb-1">Trip Details</h5>
                              <p className="text-gray-700">
                                Departure: {new Date(formData.travelDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                              </p>
                              <p className="text-gray-700">
                                Season: {selectedSeason === 'high' ? 'High Season' : 'Low Season'}
                              </p>
                              <p className="text-gray-700">
                                Accommodation: {formData.accommodationType === 'shared' ? 'Shared' : 'Single'} Room
                              </p>
                            </div>
                          </div>
                          
                          {formData.specialRequirements && (
                            <div className="border-t border-yellow-200 pt-3">
                              <h5 className="text-sm font-medium text-amber-800 mb-1">Special Requirements</h5>
                              <p className="text-gray-700">{formData.specialRequirements}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="font-semibold text-amber-900 mb-4">Payment Method</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div 
                            className={`p-4 rounded-lg cursor-pointer transition border-2 ${
                              formData.paymentMethod === 'card' 
                                ? 'border-yellow-600 bg-yellow-50' 
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange({ target: { name: 'paymentMethod', value: 'card' } })}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                formData.paymentMethod === 'card' ? 'bg-yellow-600' : 'border-2 border-gray-300'
                              }`}>
                                {formData.paymentMethod === 'card' && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-amber-900" />
                                <h4 className="font-semibold text-amber-900">Credit Card</h4>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm">Secure payment with Visa, Mastercard, or American Express</p>
                          </div>
                          
                          <div 
                            className={`p-4 rounded-lg cursor-pointer transition border-2 ${
                              formData.paymentMethod === 'transfer' 
                                ? 'border-yellow-600 bg-yellow-50' 
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange({ target: { name: 'paymentMethod', value: 'transfer' } })}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                formData.paymentMethod === 'transfer' ? 'bg-yellow-600' : 'border-2 border-gray-300'
                              }`}>
                                {formData.paymentMethod === 'transfer' && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <h4 className="font-semibold text-amber-900">Bank Transfer</h4>
                            </div>
                            <p className="text-gray-600 text-sm">Pay via bank transfer (details will be provided)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg mb-6">
                        <div className="flex items-start gap-3">
                          <div className="text-green-600 mt-1">
                            <Info className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-green-800 mb-1">Important Information</h4>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• A 30% deposit is required to secure your booking and gorilla permits.</li>
                              <li>• Full payment is due 60 days before your departure date.</li>
                              <li>• Gorilla permits are subject to availability and are non-refundable.</li>
                              <li>• We recommend purchasing travel insurance for your trip.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Form Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {formStep > 1 ? (
                      <button
                        type="button"
                        onClick={goBack}
                        className="bg-white border border-amber-900 text-amber-900 hover:bg-amber-50 px-6 py-3 rounded-lg font-bold transition"
                      >
                        Back
                      </button>
                    ) : (
                      <div></div>
                    )}
                    
                    <button
                      type="submit"
                      className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-bold transition flex items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          {formStep < 3 ? 'Continue' : 'Complete Booking'}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Right Column - Package Details */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h2 className="text-lg font-bold text-amber-900 mb-4">Package Overview</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">{selectedPackage.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{selectedPackage.code}</p>
                    
                    <div className="bg-green-50 p-3 rounded-lg mb-3">
                      <h4 className="text-sm font-medium text-green-800 mb-2">Highlights</h4>
                      <ul className="space-y-2">
                        {selectedPackage.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-green-600 mt-1"><Check className="w-4 h-4" /></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-medium text-amber-800 mb-3">Price Breakdown</h4>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-gray-700 text-sm">
                        <span>Package Base Price:</span>
                        <span>{formatPrice(formData.accommodationType === 'shared' 
                          ? selectedPackage.pricing[selectedSeason].shared
                          : selectedPackage.pricing[selectedSeason].single)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between text-gray-700 text-sm">
                        <span>{formData.adults} Adult{formData.adults !== 1 ? 's' : ''}:</span>
                        <span>{formatPrice(formData.accommodationType === 'shared' 
                          ? selectedPackage.pricing[selectedSeason].shared * formData.adults
                          : selectedPackage.pricing[selectedSeason].single * formData.adults)}
                        </span>
                      </div>
                      
                      {parseInt(formData.children) > 0 && (
                        <div className="flex justify-between text-gray-700 text-sm">
                          <span>{formData.children} Child{formData.children !== 1 ? 'ren' : ''}:</span>
                          <span>{formatPrice(formData.accommodationType === 'shared' 
                            ? selectedPackage.pricing[selectedSeason].shared * formData.children * 0.5
                            : selectedPackage.pricing[selectedSeason].single * formData.children * 0.5)}
                          </span>
                        </div>
                      )}
                      
                      {formData.accommodationType === 'single' && (
                        <div className="flex justify-between text-gray-700 text-sm">
                          <span>Single Room Supplement:</span>
                          <span>Included</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-200 pt-3 flex justify-between">
                      <span className="font-semibold text-amber-900">Total:</span>
                      <span className="font-bold text-amber-900">{formatPrice(calculateTotalPrice())}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-start gap-2">
                      <div className="text-amber-600 mt-1">
                        <Info className="w-5 h-5" />
                      </div>
                      <p className="text-gray-600 text-sm">
                        Prices are per person and include accommodations, meals, park fees, and guided activities as specified in the itinerary.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 shadow-md">
                <h2 className="text-lg font-bold text-green-800 mb-4">Need Help?</h2>
                <p className="text-gray-700 mb-4">
                  Our safari specialists are here to help you plan your perfect Rwanda adventure.
                </p>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-green-800 font-medium hover:text-green-700 transition mb-2">
                  <Phone className="w-5 h-5" />
                  +1 (234) 567-890
                </a>
                <a href="mailto:safaris@example.com" className="flex items-center gap-2 text-green-800 font-medium hover:text-green-700 transition">
                  <Mail className="w-5 h-5" />
                  safaris@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RwandaBookingForm;