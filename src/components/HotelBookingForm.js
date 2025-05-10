import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Add useLocation
import { X, Calendar, Users, Clock, CreditCard, Mail, Phone, User, MapPin, Tag, Globe, ChevronDown, ArrowRight, AlertCircle, Star, Check } from 'lucide-react';

export default function HotelBookingForm() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the location object
  const [selectedHotel, setSelectedHotel] = useState(location.state?.hotel || null); // Get hotel from state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    adults: 2,
    children: 0,
    roomType: '',
    specialRequests: '',
    paymentMethod: 'creditCard',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [roomOptions, setRoomOptions] = useState([]);
  
  // Initialize form with hotel data
  useEffect(() => {
    if (selectedHotel) {
      // Set room options based on hotel contract rates or default options
      if (selectedHotel.hasContractRates) {
        const firstLocation = Object.keys(selectedHotel.contractRates).filter(key => key !== 'extras')[0];
        if (firstLocation) {
          const residencyType = Object.keys(selectedHotel.contractRates[firstLocation])[0];
          const accommodations = Object.keys(selectedHotel.contractRates[firstLocation][residencyType]);
          setRoomOptions(accommodations);
          setFormData(prev => ({ ...prev, roomType: accommodations[0] || '' }));
        }
      } else {
        const defaultOptions = ['Standard Room', 'Deluxe Room', 'Suite'];
        setRoomOptions(defaultOptions);
        setFormData(prev => ({ ...prev, roomType: defaultOptions[0] }));
      }
    }

    if (!selectedHotel) {
        // Redirect back if no hotel is selected
        navigate('/directory');
      }
  }, [selectedHotel, navigate]);

  // Date helpers
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  
  const formatDate = (date) => date.toISOString().split('T')[0];
  const minCheckInDate = formatDate(today);
  const minCheckOutDate = formatDate(tomorrow);

  const calculateDuration = () => {
    if (!formData.checkInDate || !formData.checkOutDate) return 0;
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    return Math.ceil((checkOut - checkIn) / (1000 * 3600 * 24));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setErrors(prev => ({ ...prev, [name]: undefined }));
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
      return;
    }
    
    if (name === 'checkInDate') {
      if (formData.checkOutDate && new Date(value) >= new Date(formData.checkOutDate)) {
        const newCheckOut = new Date(value);
        newCheckOut.setDate(newCheckOut.getDate() + 1);
        setFormData(prev => ({ 
          ...prev, 
          [name]: value,
          checkOutDate: formatDate(newCheckOut)
        }));
        return;
      }
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.checkInDate) newErrors.checkInDate = "Check-in date is required";
      if (!formData.checkOutDate) newErrors.checkOutDate = "Check-out date is required";
      if (formData.adults < 1) newErrors.adults = "At least 1 adult is required";
      if (!formData.roomType) newErrors.roomType = "Please select a room type";
    }
    
    if (currentStep === 2) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    }
    
    if (currentStep === 3) {
      if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required";
      if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsComplete(true);
      }, 1500);
    }
  };

  const calculateEstimatedPrice = () => {
    if (!selectedHotel || !formData.roomType) return "Contact for price";
    
    const nights = calculateDuration();
    if (nights <= 0) return "Select dates";
    
    // Simplified pricing logic - replace with your actual pricing calculation
    const basePrices = {
      'Standard Room': 150,
      'Deluxe Room': 250,
      'Suite': 400
    };
    
    const price = basePrices[formData.roomType] || 200;
    return `$${(price * nights).toLocaleString()}`;
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={selectedHotel.imageUrl || "/placeholder-hotel.jpg"} 
                alt={selectedHotel.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-cafe-noir">{selectedHotel.name}</h3>
                <div className="flex items-center text-sm text-french-gray">
                  <MapPin size={14} className="mr-1" />
                  {selectedHotel.location}
                </div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < selectedHotel.rating ? "text-gold-metallic" : "text-french-gray"} 
                      fill={i < selectedHotel.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-cafe-noir">Check-in Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    min={minCheckInDate}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${errors.checkInDate ? 'border-claret' : 'border-french-gray'} focus:ring-2 focus:ring-hunyadi-yellow`}
                  />
                  <Calendar className="absolute left-3 top-2.5 text-cafe-noir" size={18} />
                </div>
                {errors.checkInDate && <p className="text-xs text-claret">{errors.checkInDate}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-cafe-noir">Check-out Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    min={formData.checkInDate || minCheckOutDate}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${errors.checkOutDate ? 'border-claret' : 'border-french-gray'} focus:ring-2 focus:ring-hunyadi-yellow`}
                  />
                  <Calendar className="absolute left-3 top-2.5 text-cafe-noir" size={18} />
                </div>
                {errors.checkOutDate && <p className="text-xs text-claret">{errors.checkOutDate}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-cafe-noir">Adults</label>
                <div className="relative">
                  <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${errors.adults ? 'border-claret' : 'border-french-gray'} focus:ring-2 focus:ring-hunyadi-yellow`}
                  />
                  <Users className="absolute left-3 top-2.5 text-cafe-noir" size={18} />
                </div>
                {errors.adults && <p className="text-xs text-claret">{errors.adults}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-cafe-noir">Children</label>
                <div className="relative">
                  <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    min="0"
                    max="10"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-french-gray focus:ring-2 focus:ring-hunyadi-yellow"
                  />
                  <Users className="absolute left-3 top-2.5 text-cafe-noir" size={18} />
                </div>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-cafe-noir">Room Type</label>
                <div className="relative">
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${errors.roomType ? 'border-claret' : 'border-french-gray'} focus:ring-2 focus:ring-hunyadi-yellow`}
                  >
                    {roomOptions.map((room) => (
                      <option key={room} value={room}>{room}</option>
                    ))}
                  </select>
                  <Tag className="absolute left-3 top-2.5 text-cafe-noir" size={18} />
                </div>
                {errors.roomType && <p className="text-xs text-claret">{errors.roomType}</p>}
              </div>
              
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-medium text-cafe-noir">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-french-gray focus:ring-2 focus:ring-hunyadi-yellow"
                  placeholder="Any special requirements..."
                />
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cafe-noir">Guest Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-cafe-noir">First Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${errors.firstName ? 'border-claret' : 'border-french-gray'} focus:ring-2 focus:ring-hunyadi-yellow`}
                    placeholder="Your first name"
                  />
                  <User className="absolute left-3 top-2.5 text-cafe-noir" size={18} />
                </div>
                {errors.firstName && <p className="text-xs text-claret">{errors.firstName}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-cafe-noir">Last Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${errors.lastName ? 'border-claret' : 'border-french-gray'} focus:ring-2 focus:ring-hunyadi-yellow`}
                    placeholder="Your last name"
                  />
                  <User className="absolute left-3 top-2.5 text-cafe-noir" size={18} />
                </div>
                {errors.lastName && <p className="text-xs text-claret">{errors.lastName}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-cafe-noir">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${errors.email ? 'border-claret' : 'border-french-gray'} focus:ring-2 focus:ring-hunyadi-yellow`}
                    placeholder="your.email@example.com"
                  />
                  <Mail className="absolute left-3 top-2.5 text-cafe-noir" size={18} />
                </div>
                {errors.email && <p className="text-xs text-claret">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-cafe-noir">Phone</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${errors.phone ? 'border-claret' : 'border-french-gray'} focus:ring-2 focus:ring-hunyadi-yellow`}
                    placeholder="+1 (123) 456-7890"
                  />
                  <Phone className="absolute left-3 top-2.5 text-cafe-noir" size={18} />
                </div>
                {errors.phone && <p className="text-xs text-claret">{errors.phone}</p>}
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cafe-noir">Review & Payment</h3>
            
            <div className="bg-cornsilk bg-opacity-30 rounded-lg p-4">
              <h4 className="font-medium text-cafe-noir mb-3">Booking Summary</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-french-gray">Property:</span>
                  <span className="text-sm font-medium">{selectedHotel.name}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-french-gray">Location:</span>
                  <span className="text-sm">{selectedHotel.location}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-french-gray">Check-in:</span>
                  <span className="text-sm">{formData.checkInDate}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-french-gray">Check-out:</span>
                  <span className="text-sm">{formData.checkOutDate}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-french-gray">Room Type:</span>
                  <span className="text-sm">{formData.roomType}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-french-gray">Guests:</span>
                  <span className="text-sm">{formData.adults} Adults, {formData.children} Children</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-french-gray">Duration:</span>
                  <span className="text-sm">{calculateDuration()} Nights</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-french-gray">Price Estimate:</span>
                  <span className="text-sm font-medium text-brown-sugar">{calculateEstimatedPrice()}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-cafe-noir">Payment Method</h4>
              
              <div className="space-y-3">
                {['creditCard', 'bankTransfer', 'payLater'].map((method) => (
                  <div key={method} className="flex items-center gap-3">
                    <input
                      type="radio"
                      id={method}
                      name="paymentMethod"
                      value={method}
                      checked={formData.paymentMethod === method}
                      onChange={handleChange}
                      className="w-4 h-4 text-hunyadi-yellow focus:ring-brown-sugar"
                    />
                    <label htmlFor={method} className="text-sm font-medium text-cafe-noir flex items-center gap-2">
                      {method === 'creditCard' && <CreditCard size={16} />}
                      {method === 'bankTransfer' && <Globe size={16} />}
                      {method === 'payLater' && <Clock size={16} />}
                      {method === 'creditCard' ? 'Credit Card' : 
                       method === 'bankTransfer' ? 'Bank Transfer' : 'Pay Later'}
                    </label>
                  </div>
                ))}
                {errors.paymentMethod && <p className="text-xs text-claret">{errors.paymentMethod}</p>}
              </div>
              
              <div className="pt-4">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-hunyadi-yellow focus:ring-brown-sugar"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-cafe-noir">
                    I agree to the <a href="/terms" className="text-hunyadi-yellow hover:underline">terms</a> and <a href="/privacy" className="text-hunyadi-yellow hover:underline">privacy policy</a>
                  </label>
                </div>
                {errors.agreeToTerms && <p className="text-xs text-claret ml-6">{errors.agreeToTerms}</p>}
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  const renderSuccessContent = () => (
    <div className="text-center py-6">
      <div className="w-16 h-16 bg-moss-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check size={32} className="text-moss-green" />
      </div>
      <h3 className="text-xl font-bold text-cafe-noir mb-2">Booking Confirmed!</h3>
      <p className="text-french-gray mb-6">Your reservation at {selectedHotel.name} has been received.</p>
      
      <div className="bg-cornsilk bg-opacity-30 rounded-lg p-4 text-left mb-6">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex justify-between">
            <span className="text-sm text-french-gray">Booking Reference:</span>
            <span className="text-sm font-medium">{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-french-gray">Guest Name:</span>
            <span className="text-sm">{formData.firstName} {formData.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-french-gray">Check-in:</span>
            <span className="text-sm">{formData.checkInDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-french-gray">Check-out:</span>
            <span className="text-sm">{formData.checkOutDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-french-gray">Room Type:</span>
            <span className="text-sm">{formData.roomType}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-french-gray p-4 mb-6">
        <div className="flex items-center gap-2 text-cafe-noir mb-2">
          <Mail size={16} />
          <span className="font-medium">Confirmation Sent</span>
        </div>
        <p className="text-sm text-slate-600">
          We've sent a confirmation to <span className="font-medium">{formData.email}</span> with your booking details.
        </p>
      </div>
      
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-hunyadi-yellow text-white rounded-lg hover:bg-brown-sugar transition-colors"
      >
        Return to Home
      </button>
    </div>
  );

  const renderStepsIndicator = () => (
    <div className="flex items-center justify-center mb-6">
      {[1, 2, 3].map((stepNumber) => (
        <div key={stepNumber} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step === stepNumber ? 'bg-hunyadi-yellow text-white' :
            step > stepNumber ? 'bg-brown-sugar text-white' : 'bg-cornsilk text-cafe-noir'
          }`}>
            {step > stepNumber ? (
              <Check size={16} />
            ) : (
              stepNumber
            )}
          </div>
          
          {stepNumber < 3 && (
            <div className={`w-12 h-1 ${step > stepNumber ? 'bg-brown-sugar' : 'bg-cornsilk'}`}></div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden my-8">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-cafe-noir">
            {isComplete ? 'Booking Complete' : 'Book Your Stay'}
          </h2>
          <button 
            onClick={() => navigate('/directory')}
            className="p-1.5 rounded-full hover:bg-cornsilk transition-colors"
          >
            <X size={20} className="text-cafe-noir" />
          </button>
        </div>
        
        {!isComplete && (
          <div className="flex items-center gap-2 text-sm text-french-gray mb-6">
            <MapPin size={14} />
            <span>{selectedHotel.name}, {selectedHotel.location}</span>
          </div>
        )}

        {isComplete ? (
          renderSuccessContent()
        ) : (
          <form onSubmit={handleSubmit}>
            {renderStepsIndicator()}
            {renderStepContent()}
            
            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 bg-eggshell text-cafe-noir rounded-lg hover:bg-cornsilk transition-colors"
                >
                  Back
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => navigate('/directory')}
                  className="px-4 py-2 bg-eggshell text-cafe-noir rounded-lg hover:bg-cornsilk transition-colors"
                >
                  Cancel
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-4 py-2 bg-hunyadi-yellow text-white rounded-lg hover:bg-brown-sugar transition-colors flex items-center gap-1"
                >
                  Next <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-hunyadi-yellow text-white rounded-lg hover:bg-brown-sugar transition-colors flex items-center gap-1 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Booking <ArrowRight size={16} />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}