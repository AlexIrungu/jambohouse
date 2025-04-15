import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ChevronLeft, 
  PhoneCall, 
  Mail, 
  User, 
  CreditCard, 
  Check, 
  Shield, 
  AlertCircle,
  Info,
  CalendarClock
} from 'lucide-react';



const BookingForm = () => {
    
  const { carId } = useParams();
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'fullDay',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    pickupLocation: '',
    specialRequests: '',
    agreeToTerms: false
  });
  const [formErrors, setFormErrors] = useState({});

  // Fetch car data based on the carId from URL
  useEffect(() => {
    // Mock API call - in a real application, this would be an actual API call
    const fetchCarById = () => {
      setLoading(true);
      
      // This should be the same car data from your CarHire component
      const cars = [
        {
          id: '1',
          name: "Toyota Alphard",
          type: "Luxury",
          image: "/api/placeholder/400/320",
          seating: "Max 5 pax",
          transferPrice: 5000,
          halfDayPrice: 10500,
          fullDayPrice: 16000,
          safariPrice: null,
          notes: "Ideal for airport transfers"
        },
        {
          id: '2',
          name: "Safari Van",
          type: "Safari",
          image: "https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/11/Kenya-29.sept_.-05-Arve-Ofsteras-0891665817669.png.webp",
          seating: "Max 7 pax",
          transferPrice: 7000,
          halfDayPrice: 15000,
          fullDayPrice: 20000,
          safariPrice: 23000,
          notes: "Pop-up roof for game viewing"
        },
        {
          id: '3',
          name: "4x4 Land Cruiser",
          type: "Safari",
          image: "https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/09/car1.jpg.webp",
          seating: "Max 7 pax",
          transferPrice: 8000,
          halfDayPrice: 18000,
          fullDayPrice: 26000,
          safariPrice: 28500,
          notes: "Pop-up roof, ideal for off-road"
        },
        {
          id: '4',
          name: "Coaster Bus",
          type: "Bus",
          image: "https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/11/1548686311.png.webp",
          seating: "22-26 pax",
          transferPrice: 10000,
          halfDayPrice: 15000,
          fullDayPrice: 25000,
          safariPrice: "On Request",
          notes: "Great for group travel"
        },
        {
          id: '5',
          name: "Overland Truck",
          type: "Truck",
          image: "https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/11/Overland-truck-for-hire-Nairobi.jpg",
          seating: "24+ pax",
          transferPrice: "On Request",
          halfDayPrice: "On Request",
          fullDayPrice: "On Request",
          safariPrice: "On Request",
          notes: "Long distance travel only"
        },
        {
          id: '6',
          name: "Saloon Car",
          type: "Sedan",
          image: "https://www.jambotravelhouseholidays.com/wp-content/uploads/2022/11/1548690936.png.webp",
          seating: "Max 3 pax",
          transferPrice: 3900,
          halfDayPrice: 6500,
          fullDayPrice: 10400,
          safariPrice: null,
          notes: "Comfortable for city transfers"
        }
      ];
      
      const car = cars.find(car => car.id === carId);
      setSelectedCar(car || null);
      setLoading(false);
    };
    
    fetchCarById();
  }, [carId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error message when field is updated
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (formStep === 1) {
      if (!formData.firstName.trim()) errors.firstName = 'First name is required';
      if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Invalid email format';
      }
      if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    } else if (formStep === 2) {
      if (!formData.pickupDate) errors.pickupDate = 'Pickup date is required';
      if (!formData.pickupTime) errors.pickupTime = 'Pickup time is required';
      if (!formData.pickupLocation.trim()) errors.pickupLocation = 'Pickup location is required';
      
      if (formData.serviceType !== 'transfer' && !formData.returnDate) {
        errors.returnDate = 'Return date is required';
      }
      if (formData.serviceType !== 'transfer' && !formData.returnTime) {
        errors.returnTime = 'Return time is required';
      }
    }
    
    return errors;
  };

  const handleNextStep = () => {
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setFormStep(formStep + 1);
    } else {
      setFormErrors(errors);
    }
  };

  const handlePrevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (!formData.agreeToTerms) {
      setFormErrors(prev => ({
        ...prev,
        agreeToTerms: 'You must agree to the terms and conditions'
      }));
      return;
    }
    
    if (Object.keys(errors).length === 0) {
      // Submit form logic would go here in a real application
      console.log('Form submitted:', formData);
      setFormStep(4); // Move to confirmation step
    } else {
      setFormErrors(errors);
    }
  };

  const calculatePrice = () => {
    if (!selectedCar) return 0;
    
    switch (formData.serviceType) {
      case 'transfer':
        return selectedCar.transferPrice;
      case 'halfDay':
        return selectedCar.halfDayPrice;
      case 'fullDay':
        return selectedCar.fullDayPrice;
      case 'safari':
        return selectedCar.safariPrice || "On Request";
      default:
        return selectedCar.fullDayPrice;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cornsilk to-eggshell py-16 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="bg-hunyadi-yellow/50 h-12 w-48 rounded-lg mb-4 mx-auto"></div>
          <div className="bg-hunyadi-yellow/30 h-6 w-64 rounded-lg mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!selectedCar) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cornsilk to-eggshell py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-french-gray/20 text-center">
            <div className="text-5xl text-cafe-noir mb-4">😕</div>
            <h2 className="text-2xl font-bold text-cafe-noir mb-4">Vehicle Not Found</h2>
            <p className="text-brown-sugar mb-6">Sorry, we couldn't find the vehicle you're looking for.</p>
            <Link 
              to="/car-hire" 
              className="inline-flex items-center bg-hunyadi-yellow px-6 py-3 rounded-lg text-cafe-noir font-medium hover:bg-gold-metallic transition-colors"
            >
              <ChevronLeft size={18} className="mr-2" />
              Return to Vehicle Selection
            </Link>
          </div>
        </div>
      </div>
    );
  }

 

  return (
    <div className="min-h-screen bg-gradient-to-b from-cornsilk to-eggshell py-16">
      <style jsx>{`
        .bg-pattern {
          background-color: #ffffff;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e4a435' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/car-hire" 
            className="inline-flex items-center text-brown-sugar hover:text-cafe-noir transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Vehicle Selection
          </Link>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cafe-noir">Book Your Vehicle</h1>
          <p className="text-brown-sugar mt-2">Complete the form below to confirm your booking</p>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-french-gray/20 overflow-hidden">
              {/* Progress Steps */}
              <div className="w-full flex border-b border-french-gray/20">
                <div 
                  className={`flex-1 text-center py-4 font-medium ${formStep >= 1 ? 'text-cafe-noir bg-cornsilk' : 'text-french-gray bg-eggshell/50'}`}
                >
                  <span className="hidden md:inline">1. Personal Information</span>
                  <span className="md:hidden">1. Personal</span>
                </div>
                <div 
                  className={`flex-1 text-center py-4 font-medium ${formStep >= 2 ? 'text-cafe-noir bg-cornsilk' : 'text-french-gray bg-eggshell/50'}`}
                >
                  <span className="hidden md:inline">2. Booking Details</span>
                  <span className="md:hidden">2. Details</span>
                </div>
                <div 
                  className={`flex-1 text-center py-4 font-medium ${formStep >= 3 ? 'text-cafe-noir bg-cornsilk' : 'text-french-gray bg-eggshell/50'}`}
                >
                  <span className="hidden md:inline">3. Review & Confirm</span>
                  <span className="md:hidden">3. Review</span>
                </div>
              </div>
              
              {/* Form Content */}
              <div className="p-6 md:p-8">
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-cafe-noir mb-6">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-cafe-noir font-medium mb-2">First Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full p-3 border rounded-lg bg-eggshell/50 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow ${formErrors.firstName ? 'border-claret' : 'border-french-gray/30'}`}
                          />
                          {formErrors.firstName && (
                            <p className="text-claret text-sm mt-1">{formErrors.firstName}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-cafe-noir font-medium mb-2">Last Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`w-full p-3 border rounded-lg bg-eggshell/50 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow ${formErrors.lastName ? 'border-claret' : 'border-french-gray/30'}`}
                          />
                          {formErrors.lastName && (
                            <p className="text-claret text-sm mt-1">{formErrors.lastName}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-cafe-noir font-medium mb-2">Email Address</label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full p-3 border rounded-lg bg-eggshell/50 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow ${formErrors.email ? 'border-claret' : 'border-french-gray/30'}`}
                        />
                        {formErrors.email && (
                          <p className="text-claret text-sm mt-1">{formErrors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-cafe-noir font-medium mb-2">Phone Number</label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full p-3 border rounded-lg bg-eggshell/50 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow ${formErrors.phone ? 'border-claret' : 'border-french-gray/30'}`}
                          placeholder="+254..."
                        />
                        {formErrors.phone && (
                          <p className="text-claret text-sm mt-1">{formErrors.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-cafe-noir mb-6">Booking Details</h2>
                    
                    <div>
                      <label className="block text-cafe-noir font-medium mb-2">Service Type</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${formData.serviceType === 'transfer' ? 'border-hunyadi-yellow bg-cornsilk/50 ring-2 ring-hunyadi-yellow/50' : 'border-french-gray/30 bg-white hover:bg-eggshell/50'}`}>
                          <input
                            type="radio"
                            name="serviceType"
                            value="transfer"
                            checked={formData.serviceType === 'transfer'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center border ${formData.serviceType === 'transfer' ? 'border-hunyadi-yellow' : 'border-french-gray'}`}>
                            {formData.serviceType === 'transfer' && (
                              <div className="w-3 h-3 rounded-full bg-hunyadi-yellow"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-cafe-noir">Airport Transfer</p>
                            <p className="text-sm text-brown-sugar">KES {selectedCar.transferPrice}</p>
                          </div>
                        </label>
                        
                        <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${formData.serviceType === 'halfDay' ? 'border-hunyadi-yellow bg-cornsilk/50 ring-2 ring-hunyadi-yellow/50' : 'border-french-gray/30 bg-white hover:bg-eggshell/50'}`}>
                          <input
                            type="radio"
                            name="serviceType"
                            value="halfDay"
                            checked={formData.serviceType === 'halfDay'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center border ${formData.serviceType === 'halfDay' ? 'border-hunyadi-yellow' : 'border-french-gray'}`}>
                            {formData.serviceType === 'halfDay' && (
                              <div className="w-3 h-3 rounded-full bg-hunyadi-yellow"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-cafe-noir">Half Day (5 hrs)</p>
                            <p className="text-sm text-brown-sugar">KES {selectedCar.halfDayPrice}</p>
                          </div>
                        </label>
                        
                        <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${formData.serviceType === 'fullDay' ? 'border-hunyadi-yellow bg-cornsilk/50 ring-2 ring-hunyadi-yellow/50' : 'border-french-gray/30 bg-white hover:bg-eggshell/50'}`}>
                          <input
                            type="radio"
                            name="serviceType"
                            value="fullDay"
                            checked={formData.serviceType === 'fullDay'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center border ${formData.serviceType === 'fullDay' ? 'border-hunyadi-yellow' : 'border-french-gray'}`}>
                            {formData.serviceType === 'fullDay' && (
                              <div className="w-3 h-3 rounded-full bg-hunyadi-yellow"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-cafe-noir">Full Day (10 hrs)</p>
                            <p className="text-sm text-brown-sugar">KES {selectedCar.fullDayPrice}</p>
                          </div>
                        </label>
                        
                        {selectedCar.safariPrice && (
                          <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${formData.serviceType === 'safari' ? 'border-hunyadi-yellow bg-cornsilk/50 ring-2 ring-hunyadi-yellow/50' : 'border-french-gray/30 bg-white hover:bg-eggshell/50'}`}>
                            <input
                              type="radio"
                              name="serviceType"
                              value="safari"
                              checked={formData.serviceType === 'safari'}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center border ${formData.serviceType === 'safari' ? 'border-hunyadi-yellow' : 'border-french-gray'}`}>
                              {formData.serviceType === 'safari' && (
                                <div className="w-3 h-3 rounded-full bg-hunyadi-yellow"></div>
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-cafe-noir">Safari Use (Per Day)</p>
                              <p className="text-sm text-brown-sugar">
                                {typeof selectedCar.safariPrice === 'number' 
                                  ? `KES ${selectedCar.safariPrice}` 
                                  : selectedCar.safariPrice}
                              </p>
                            </div>
                          </label>
                        )}
                      </div>
                    </div>
                    
                    {/* Date/Time Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="pickupDate" className="block text-cafe-noir font-medium mb-2">Pickup Date</label>
                        <div className="relative">
                          <input
                            type="date"
                            id="pickupDate"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleInputChange}
                            className={`w-full p-3 border rounded-lg bg-eggshell/50 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow ${formErrors.pickupDate ? 'border-claret' : 'border-french-gray/30'}`}
                            min={new Date().toISOString().split('T')[0]}
                          />
                          {formErrors.pickupDate && (
                            <p className="text-claret text-sm mt-1">{formErrors.pickupDate}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="pickupTime" className="block text-cafe-noir font-medium mb-2">Pickup Time</label>
                        <div className="relative">
                          <input
                            type="time"
                            id="pickupTime"
                            name="pickupTime"
                            value={formData.pickupTime}
                            onChange={handleInputChange}
                            className={`w-full p-3 border rounded-lg bg-eggshell/50 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow ${formErrors.pickupTime ? 'border-claret' : 'border-french-gray/30'}`}
                          />
                          {formErrors.pickupTime && (
                            <p className="text-claret text-sm mt-1">{formErrors.pickupTime}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {formData.serviceType !== 'transfer' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="returnDate" className="block text-cafe-noir font-medium mb-2">Return Date</label>
                          <div className="relative">
                            <input
                              type="date"
                              id="returnDate"
                              name="returnDate"
                              value={formData.returnDate}
                              onChange={handleInputChange}
                              className={`w-full p-3 border rounded-lg bg-eggshell/50 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow ${formErrors.returnDate ? 'border-claret' : 'border-french-gray/30'}`}
                              min={formData.pickupDate || new Date().toISOString().split('T')[0]}
                            />
                            {formErrors.returnDate && (
                              <p className="text-claret text-sm mt-1">{formErrors.returnDate}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="returnTime" className="block text-cafe-noir font-medium mb-2">Return Time</label>
                          <div className="relative">
                            <input
                              type="time"
                              id="returnTime"
                              name="returnTime"
                              value={formData.returnTime}
                              onChange={handleInputChange}
                              className={`w-full p-3 border rounded-lg bg-eggshell/50 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow ${formErrors.returnTime ? 'border-claret' : 'border-french-gray/30'}`}
                            />
                            {formErrors.returnTime && (
                              <p className="text-claret text-sm mt-1">{formErrors.returnTime}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="pickupLocation" className="block text-cafe-noir font-medium mb-2">Pickup Location</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="pickupLocation"
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleInputChange}
                          className={`w-full p-3 border rounded-lg bg-eggshell/50 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow ${formErrors.pickupLocation ? 'border-claret' : 'border-french-gray/30'}`}
                          placeholder="Hotel name, address, or airport..."
                        />
                        {formErrors.pickupLocation && (
                          <p className="text-claret text-sm mt-1">{formErrors.pickupLocation}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="specialRequests" className="block text-cafe-noir font-medium mb-2">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-french-gray/30 rounded-lg bg-eggshell/50 focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow focus:border-hunyadi-yellow h-32"
                        placeholder="Any special requirements or preferences..."
                      ></textarea>
                    </div>
                  </div>
                )}
                
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-cafe-noir mb-6">Review Your Booking</h2>
                    
                    <div className="bg-eggshell/50 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-cafe-noir mb-3">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-brown-sugar">Full Name</p>
                          <p className="font-medium text-cafe-noir">{formData.firstName} {formData.lastName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-brown-sugar">Contact</p>
                          <p className="font-medium text-cafe-noir">{formData.email}</p>
                          <p className="font-medium text-cafe-noir">{formData.phone}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-eggshell/50 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-cafe-noir mb-3">Booking Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <p className="text-sm text-brown-sugar">Vehicle</p>
                          <p className="font-medium text-cafe-noir">{selectedCar.name}</p>
                          <p className="text-sm text-brown-sugar">{selectedCar.seating}</p>
                        </div>
                        <div>
                          <p className="text-sm text-brown-sugar">Service Type</p>
                          <p className="font-medium text-cafe-noir">
                            {formData.serviceType === 'transfer' && 'Airport Transfer'}
                            {formData.serviceType === 'halfDay' && 'Half Day (5 hrs)'}
                            {formData.serviceType === 'fullDay' && 'Full Day (10 hrs)'}
                            {formData.serviceType === 'safari' && 'Safari Use (Per Day)'}
                          </p>
                          <p className="text-sm font-medium text-hunyadi-yellow">
                            {typeof calculatePrice() === 'number' 
                              ? `KES ${calculatePrice().toLocaleString()}` 
                              : calculatePrice()}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-eggshell/50 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-cafe-noir mb-3">Schedule</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-start">
                            <Calendar size={18} className="text-hunyadi-yellow mt-0.5 mr-2" />
                            <div>
                              <p className="text-sm text-brown-sugar">Pickup Date & Time</p>
                              <p className="font-medium text-cafe-noir">
                                {new Date(formData.pickupDate).toLocaleDateString('en-US', { 
                                  weekday: 'short', 
                                  day: 'numeric', 
                                  month: 'long', 
                                  year: 'numeric' 
                                })}
                              </p>
                              <p className="font-medium text-cafe-noir">
                                {formData.pickupTime}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {formData.serviceType !== 'transfer' && (
                          <div>
                            <div className="flex items-start">
                              <CalendarClock size={18} className="text-hunyadi-yellow mt-0.5 mr-2" />
                              <div>
                                <p className="text-sm text-brown-sugar">Return Date & Time</p>
                                <p className="font-medium text-cafe-noir">
                                  {formData.returnDate && new Date(formData.returnDate).toLocaleDateString('en-US', { 
                                    weekday: 'short', 
                                    day: 'numeric', 
                                    month: 'long', 
                                    year: 'numeric' 
                                  })}
                                </p>
                                <p className="font-medium text-cafe-noir">
                                  {formData.returnTime}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex items-start">
                          <MapPin size={18} className="text-hunyadi-yellow mt-0.5 mr-2" />
                          <div>
                            <p className="text-sm text-brown-sugar">Pickup Location</p>
                            <p className="font-medium text-cafe-noir">{formData.pickupLocation}</p>
                          </div>
                        </div>
                      </div>
                      
                      {formData.specialRequests && (
                        <div className="mt-4">
                          <div className="flex items-start">
                            <Info size={18} className="text-hunyadi-yellow mt-0.5 mr-2" />
                            <div>
                              <p className="text-sm text-brown-sugar">Special Requests</p>
                              <p className="font-medium text-cafe-noir">{formData.specialRequests}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-cornsilk/60 rounded-lg p-4 border border-french-gray/20">
                      <h3 className="text-lg font-medium text-cafe-noir mb-3">Payment & Policies</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CreditCard size={18} className="text-hunyadi-yellow mt-0.5 mr-2" />
                          <p className="text-sm text-brown-sugar">Payment will be collected upon vehicle pickup.</p>
                        </li>
                        <li className="flex items-start">
                          <Shield size={18} className="text-hunyadi-yellow mt-0.5 mr-2" />
                          <p className="text-sm text-brown-sugar">
                            Cancellations made at least 24 hours before pickup time are fully refundable.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle size={18} className="text-hunyadi-yellow mt-0.5 mr-2" />
                          <p className="text-sm text-brown-sugar">
                            A 50% deposit may be required for certain bookings.
                          </p>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex items-start mt-6">
                      <div className="flex items-center h-5">
                        <input
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-hunyadi-yellow focus:ring-hunyadi-yellow border-french-gray/30 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agreeToTerms" className="text-brown-sugar cursor-pointer">
                          I agree to the <span className="text-hunyadi-yellow hover:underline">Terms & Conditions</span> and <span className="text-hunyadi-yellow hover:underline">Privacy Policy</span>
                        </label>
                        {formErrors.agreeToTerms && (
                          <p className="text-claret text-sm mt-1">{formErrors.agreeToTerms}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {formStep === 4 && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-hunyadi-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={32} className="text-hunyadi-yellow" />
                    </div>
                    <h2 className="text-2xl font-bold text-cafe-noir mb-2">Booking Confirmed!</h2>
                    <p className="text-brown-sugar mb-8">
                      Thank you for your booking. We've sent a confirmation to your email.
                    </p>
                    
                    <div className="bg-eggshell/50 rounded-lg p-4 text-left mb-8">
                      <h3 className="text-lg font-medium text-cafe-noir mb-3">Booking Reference</h3>
                      <p className="text-3xl font-bold text-cafe-noir text-center my-2">
                        {/* Generate a random booking reference */}
                        {`JTH-${Math.random().toString(36).substring(2, 7).toUpperCase()}`}
                      </p>
                      <p className="text-sm text-brown-sugar text-center">
                        Please keep this reference number for your records
                      </p>
                    </div>
                    
                    <div className="bg-eggshell/50 rounded-lg p-4 text-left mb-8">
                      <h3 className="text-lg font-medium text-cafe-noir mb-3">What's Next?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Mail size={18} className="text-hunyadi-yellow mt-0.5 mr-2" />
                          <p className="text-sm text-brown-sugar">
                            Check your email for a booking confirmation with all details.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <PhoneCall size={18} className="text-hunyadi-yellow mt-0.5 mr-2" />
                          <p className="text-sm text-brown-sugar">
                            Our team will contact you to confirm your booking and arrange payment.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <Users size={18} className="text-hunyadi-yellow mt-0.5 mr-2" />
                          <p className="text-sm text-brown-sugar">
                            Your driver will meet you at your pickup location on the scheduled date and time.
                          </p>
                        </li>
                      </ul>
                    </div>
                    
                    <Link
                      to="/car-hire"
                      className="inline-flex items-center bg-hunyadi-yellow px-6 py-3 rounded-lg text-cafe-noir font-medium hover:bg-gold-metallic transition-colors"
                    >
                      Return to Vehicle Selection
                    </Link>
                  </div>
                )}
                
                {/* Form Buttons */}
                {formStep < 4 && (
                  <div className="flex justify-between mt-8">
                    {formStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center px-5 py-2.5 border border-french-gray/30 rounded-lg text-cafe-noir hover:bg-eggshell/70 transition-colors"
                      >
                        <ChevronLeft size={18} className="mr-1" />
                        Back
                      </button>
                    ) : (
                      <div></div>
                    )}
                    
                    {formStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center px-6 py-3 bg-hunyadi-yellow rounded-lg text-cafe-noir font-medium hover:bg-gold-metallic transition-colors"
                      >
                        Next Step
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="inline-flex items-center px-6 py-3 bg-hunyadi-yellow rounded-lg text-cafe-noir font-medium hover:bg-gold-metallic transition-colors"
                      >
                        Confirm Booking
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Summary Section */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm border border-french-gray/20 overflow-hidden sticky top-8">
              <div className="bg-pattern p-6">
                <h3 className="text-xl font-semibold text-cafe-noir mb-2">Your Booking</h3>
                <p className="text-brown-sugar">Summary of your vehicle rental details</p>
              </div>
              
              <div className="p-6">
                <div className="flex items-center pb-4 border-b border-french-gray/20">
                  <img 
                    src={selectedCar.image.startsWith('http') ? selectedCar.image : "/api/placeholder/400/320"} 
                    alt={selectedCar.name} 
                    className="w-20 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-cafe-noir">{selectedCar.name}</h4>
                    <p className="text-sm text-brown-sugar">{selectedCar.type} • {selectedCar.seating}</p>
                  </div>
                </div>
                
                <div className="py-4 border-b border-french-gray/20">
                  <h4 className="text-sm font-medium text-cafe-noir mb-2">Pricing</h4>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-brown-sugar">
                      {formData.serviceType === 'transfer' && 'Airport Transfer'}
                      {formData.serviceType === 'halfDay' && 'Half Day (5 hrs)'}
                      {formData.serviceType === 'fullDay' && 'Full Day (10 hrs)'}
                      {formData.serviceType === 'safari' && 'Safari Use (Per Day)'}
                    </p>
                    <p className="font-medium text-cafe-noir">
                      {typeof calculatePrice() === 'number' 
                        ? `KES ${calculatePrice().toLocaleString()}` 
                        : calculatePrice()}
                    </p>
                  </div>
                  <p className="text-xs text-brown-sugar">
                    {selectedCar.notes}
                  </p>
                </div>
                
                <div className="py-4">
                  <h4 className="text-sm font-medium text-cafe-noir mb-3">Need assistance?</h4>
                  <div className="flex items-center mb-3">
                    <PhoneCall size={16} className="text-hunyadi-yellow mr-2" />
                    <p className="text-brown-sugar">+254 722 123 456</p>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="text-hunyadi-yellow mr-2" />
                    <p className="text-brown-sugar">booking@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;