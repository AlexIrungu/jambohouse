import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Users, Globe, Compass, Clock, User, Send } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'sonner';

const Enquire = () => {
    const { 
        control, 
        register, 
        handleSubmit, 
        formState: { errors }, 
        reset 
    } = useForm();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                data,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );
            
            toast.success('Travel proposal submitted successfully!', {
                description: 'Our team will review your request and get back to you soon.',
            });
            reset();
        } catch (error) {
            toast.error('Submission failed', {
                description: 'Please try again or contact us directly.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-eggshell">
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="grid lg:grid-cols-3 gap-8 overflow-hidden rounded-3xl shadow-xl">
                    {/* Sidebar with Company Information */}
                    <div className="lg:col-span-1 bg-gradient-to-br from-cafe-noir to-asparagus text-white p-8 lg:p-12">
                        <div className="sticky top-12">
                            <div className="mb-12">
                                <h1 className="text-3xl lg:text-4xl font-bold mb-2">Jambo Travel</h1>
                                <div className="w-16 h-1 bg-princeton-orange mb-6"></div>
                                <p className="text-lg opacity-90 leading-relaxed">
                                    Discover the magic of Africa with personalized travel experiences crafted to create memories that last a lifetime.
                                </p>
                            </div>
                            
                            <div className="space-y-8 mb-12">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-cafe-noir/50 p-3 rounded-full">
                                        <Mail className="h-5 w-5 text-hunyadi-yellow" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-mindaro font-medium">Email Us</p>
                                        <p className="text-white">mark@jambotravelhouse.co.ke</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="bg-cafe-noir/50 p-3 rounded-full">
                                        <Phone className="h-5 w-5 text-hunyadi-yellow" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-mindaro font-medium">Call Us</p>
                                        <p className="text-white">+254 722 218901</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="bg-cafe-noir/50 p-3 rounded-full">
                                        <MapPin className="h-5 w-5 text-hunyadi-yellow" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-mindaro font-medium">Visit Us</p>
                                        <p className="text-white">Nairobi, Kenya</p>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block">
                                <div className="mt-12 p-6 bg-cafe-noir/30 rounded-xl">
                                    <h3 className="font-semibold text-hunyadi-yellow mb-2">Why Choose Us</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center space-x-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-princeton-orange"></div>
                                            <span className="text-sm">Local expertise & authentic experiences</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-princeton-orange"></div>
                                            <span className="text-sm">Sustainable & responsible tourism</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-princeton-orange"></div>
                                            <span className="text-sm">Personalized itineraries</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-princeton-orange"></div>
                                            <span className="text-sm">24/7 on-ground support</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="lg:col-span-2 bg-white p-6 lg:p-12">
                        <form 
                            onSubmit={handleSubmit(onSubmit)} 
                            className="max-w-3xl mx-auto space-y-8"
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-cafe-noir mb-2">
                                    Request Your Dream Safari
                                </h2>
                                <p className="text-french-gray max-w-md mx-auto">
                                    Fill out the form below and our travel experts will craft a personalized safari experience for you.
                                </p>
                            </div>

                            {/* Personal Information Section */}
                            <div className="bg-cornsilk p-6 rounded-xl shadow-sm">
                                <div className="flex items-center space-x-3 mb-6">
                                    <User className="h-5 w-5 text-moss-green" />
                                    <h3 className="text-lg font-semibold text-cafe-noir">Personal Information</h3>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-cafe-noir text-sm font-medium mb-2">
                                            First Name
                                        </label>
                                        <input 
                                            {...register('firstName', { required: 'First name is required' })}
                                            className="w-full px-4 py-3 border border-french-gray rounded-lg focus:ring-2 focus:ring-brown-sugar focus:border-transparent transition-all"
                                            placeholder="Enter your first name"
                                        />
                                        {errors.firstName && (
                                            <p className="text-claret text-xs mt-1">
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-cafe-noir text-sm font-medium mb-2">
                                            Last Name
                                        </label>
                                        <input 
                                            {...register('lastName', { required: 'Last name is required' })}
                                            className="w-full px-4 py-3 border border-french-gray rounded-lg focus:ring-2 focus:ring-brown-sugar focus:border-transparent transition-all"
                                            placeholder="Enter your last name"
                                        />
                                        {errors.lastName && (
                                            <p className="text-claret text-xs mt-1">
                                                {errors.lastName.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label className="block text-cafe-noir text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-4 w-4 text-brown-sugar" />
                                            </div>
                                            <input 
                                                type="email"
                                                {...register('email', { 
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                                className="w-full pl-10 pr-4 py-3 border border-french-gray rounded-lg focus:ring-2 focus:ring-brown-sugar focus:border-transparent transition-all"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-claret text-xs mt-1">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-cafe-noir text-sm font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Phone className="h-4 w-4 text-brown-sugar" />
                                            </div>
                                            <input 
                                                type="tel"
                                                {...register('phone', { 
                                                    required: 'Phone number is required',
                                                    pattern: {
                                                        value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                                                        message: "Invalid phone number"
                                                    }
                                                })}
                                                className="w-full pl-10 pr-4 py-3 border border-french-gray rounded-lg focus:ring-2 focus:ring-brown-sugar focus:border-transparent transition-all"
                                                placeholder="+1 (123) 456-7890"
                                            />
                                        </div>
                                        {errors.phone && (
                                            <p className="text-claret text-xs mt-1">
                                                {errors.phone.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Trip Preferences Section */}
                            <div className="bg-alice-blue p-6 rounded-xl shadow-sm">
                                <div className="flex items-center space-x-3 mb-6">
                                    <Globe className="h-5 w-5 text-moss-green" />
                                    <h3 className="text-lg font-semibold text-cafe-noir">Trip Preferences</h3>
                                </div>
                                
                                {/* Country Selection */}
                                <div className="mb-8">
                                    <label className="block text-cafe-noir text-sm font-medium mb-3">
                                        Destination Countries
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {['Kenya', 'Tanzania', 'Rwanda'].map((country) => (
                                            <label key={country} className="flex items-center p-3 border border-french-gray rounded-lg hover:border-brown-sugar hover:bg-cornsilk transition-all cursor-pointer">
                                                <Controller
                                                    name="countries"
                                                    control={control}
                                                    render={({ field: { value = [], onChange } }) => (
                                                        <input
                                                            type="checkbox"
                                                            value={country}
                                                            checked={value.includes(country)}
                                                            onChange={(e) => {
                                                                const updatedValue = e.target.checked
                                                                    ? [...value, country]
                                                                    : value.filter((v) => v !== country);
                                                                onChange(updatedValue);
                                                            }}
                                                            className="h-4 w-4 text-cafe-noir rounded focus:ring-2 focus:ring-brown-sugar"
                                                        />
                                                    )}
                                                />
                                                <span className="ml-3 text-cafe-noir">{country}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Travel Dates */}
                                <div className="mb-8">
                                    <label className="block text-cafe-noir text-sm font-medium mb-3">
                                        Preferred Travel Date
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Calendar className="h-4 w-4 text-brown-sugar" />
                                        </div>
                                        <Controller
                                            name="travelDate"
                                            control={control}
                                            rules={{ required: 'Travel date is required' }}
                                            render={({ field: { value, onChange } }) => (
                                                <input
                                                    type="date"
                                                    value={value}
                                                    onChange={onChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-french-gray rounded-lg focus:ring-2 focus:ring-brown-sugar focus:border-transparent transition-all"
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.travelDate && (
                                        <p className="text-claret text-xs mt-1">
                                            {errors.travelDate.message}
                                        </p>
                                    )}
                                </div>

                                {/* Trip Duration */}
                                <div className="mb-8">
                                    <div className="flex justify-between mb-3">
                                        <label className="block text-cafe-noir text-sm font-medium">
                                            Trip Duration
                                        </label>
                                        <Controller
                                            name="days"
                                            control={control}
                                            defaultValue={12}
                                            render={({ field: { value } }) => (
                                                <span className="text-sm font-semibold text-moss-green">{value} days</span>
                                            )}
                                        />
                                    </div>
                                    <Controller
                                        name="days"
                                        control={control}
                                        defaultValue={12}
                                        render={({ field: { value, onChange } }) => (
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Clock className="h-4 w-4 text-brown-sugar" />
                                                </div>
                                                <input
                                                    type="range"
                                                    min="1"
                                                    max="45"
                                                    value={value}
                                                    onChange={(e) => onChange(Number(e.target.value))}
                                                    className="w-full mt-2 h-2 bg-french-gray rounded-lg appearance-none cursor-pointer accent-cafe-noir"
                                                />
                                                <div className="flex justify-between text-xs text-cafe-noir mt-2">
                                                    <span>1 day</span>
                                                    <span>15 days</span>
                                                    <span>30 days</span>
                                                    <span>45 days</span>
                                                </div>
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Activities & Travel Group Section */}
                            <div className="bg-cornsilk p-6 rounded-xl shadow-sm">
                                <div className="flex items-center space-x-3 mb-6">
                                    <Compass className="h-5 w-5 text-moss-green" />
                                    <h3 className="text-lg font-semibold text-cafe-noir">Activities & Travel Group</h3>
                                </div>
                                
                                {/* Activities */}
                                <div className="mb-8">
                                    <label className="block text-cafe-noir text-sm font-medium mb-3">
                                        Preferred Activities
                                    </label>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                        {['Safari', 'Mountain Climbing', 'Beach Holiday', 'Chimpanzee Trekking', 'Gorilla Trekking', 'Cultural Tours'].map((activity) => (
                                            <label key={activity} className="flex items-center p-3 border border-french-gray rounded-lg hover:border-brown-sugar hover:bg-alice-blue transition-all cursor-pointer">
                                                <Controller
                                                    name="activities"
                                                    control={control}
                                                    render={({ field: { value = [], onChange } }) => (
                                                        <input
                                                            type="checkbox"
                                                            value={activity}
                                                            checked={value.includes(activity)}
                                                            onChange={(e) => {
                                                                const updatedValue = e.target.checked
                                                                    ? [...value, activity]
                                                                    : value.filter((v) => v !== activity);
                                                                onChange(updatedValue);
                                                            }}
                                                            className="h-4 w-4 text-cafe-noir rounded focus:ring-2 focus:ring-brown-sugar"
                                                        />
                                                    )}
                                                />
                                                <span className="ml-3 text-cafe-noir">{activity}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Travel Companions */}
                                <div className="mb-6">
                                    <label className="block text-cafe-noir text-sm font-medium mb-3">
                                        Travelling With
                                    </label>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                        {['Honeymoon', 'Family', 'Couple', 'Solo', 'Group of Friends', 'Other'].map((option) => (
                                            <label key={option} className="flex items-center p-3 border border-french-gray rounded-lg hover:border-brown-sugar hover:bg-alice-blue transition-all cursor-pointer">
                                                <Controller
                                                    name="travelWith"
                                                    control={control}
                                                    render={({ field: { value, onChange } }) => (
                                                        <input
                                                            type="radio"
                                                            value={option}
                                                            checked={value === option}
                                                            onChange={() => onChange(option)}
                                                            className="h-4 w-4 text-cafe-noir focus:ring-2 focus:ring-brown-sugar"
                                                        />
                                                    )}
                                                />
                                                <span className="ml-3 text-cafe-noir">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Kids Option */}
                                <div className="mb-6">
                                    <label className="block text-cafe-noir text-sm font-medium mb-3">
                                        Travelling with Kids?
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <label className="flex items-center p-3 border border-french-gray rounded-lg hover:border-brown-sugar hover:bg-alice-blue transition-all cursor-pointer">
                                            <Controller
                                                name="hasKids"
                                                control={control}
                                                defaultValue={false}
                                                render={({ field: { value, onChange } }) => (
                                                    <input
                                                        type="radio"
                                                        checked={value === true}
                                                        onChange={() => onChange(true)}
                                                        className="h-4 w-4 text-cafe-noir focus:ring-2 focus:ring-brown-sugar"
                                                    />
                                                )}
                                            />
                                            <span className="ml-3 text-cafe-noir">Yes</span>
                                        </label>
                                        <label className="flex items-center p-3 border border-french-gray rounded-lg hover:border-brown-sugar hover:bg-alice-blue transition-all cursor-pointer">
                                            <Controller
                                                name="hasKids"
                                                control={control}
                                                defaultValue={false}
                                                render={({ field: { value, onChange } }) => (
                                                    <input
                                                        type="radio"
                                                        checked={value === false}
                                                        onChange={() => onChange(false)}
                                                        className="h-4 w-4 text-cafe-noir focus:ring-2 focus:ring-brown-sugar"
                                                    />
                                                )}
                                            />
                                            <span className="ml-3 text-cafe-noir">No</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Number of Kids - conditional render */}
                                <Controller
                                    name="hasKids"
                                    control={control}
                                    defaultValue={false}
                                    render={({ field: { value } }) => (
                                        value && (
                                            <div className="mb-6">
                                                <label className="block text-cafe-noir text-sm font-medium mb-3">
                                                    How many kids?
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <Users className="h-4 w-4 text-brown-sugar" />
                                                    </div>
                                                    <Controller
                                                        name="kidsCount"
                                                        control={control}
                                                        defaultValue={1}
                                                        render={({ field }) => (
                                                            <input
                                                                type="number"
                                                                min="1"
                                                                max="10"
                                                                {...field}
                                                                className="w-full pl-10 pr-4 py-3 border border-french-gray rounded-lg focus:ring-2 focus:ring-brown-sugar focus:border-transparent transition-all"
                                                            />
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )}
                                />
                            </div>

                            {/* Additional Details */}
                            <div className="bg-alice-blue p-6 rounded-xl shadow-sm">
                                <div className="flex items-center space-x-3 mb-6">
                                    <Mail className="h-5 w-5 text-moss-green" />
                                    <h3 className="text-lg font-semibold text-cafe-noir">Additional Details</h3>
                                </div>
                                
                                <div>
                                    <label className="block text-cafe-noir text-sm font-medium mb-2">
                                        Special Requests or Additional Information
                                    </label>
                                    <textarea
                                        {...register('additionalDetails')}
                                        placeholder="Tell us about any special requirements, interests, or questions you have..."
                                        className="w-full px-4 py-3 border border-french-gray rounded-lg focus:ring-2 focus:ring-brown-sugar focus:border-transparent transition-all h-32"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-cafe-noir to-brown-sugar text-white py-4 px-8 rounded-xl hover:from-brown-sugar hover:to-cafe-noir transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Travel Proposal <Send className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Toaster richColors position="top-center" />
        </div>
    );
};

export default Enquire;