import React, { useState } from 'react';

const Enquire = () => {
    const [formData, setFormData] = useState({
        countries: [],
        activities: [],
        days: 12,
        travelWith: '',
        travelDate: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                [name]: checked
                    ? [...prev[name], value]
                    : prev[name].filter((item) => item !== value),
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Request Travel Proposal
                </h2>

                {/* Country Selection */}
                <div className="space-y-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        What country/countries do you want to visit?
                    </label>
                    <div className="flex flex-wrap gap-4">
                        {['Kenya', 'Tanzania', 'Uganda'].map((country) => (
                            <label key={country} className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="countries"
                                    value={country}
                                    onChange={handleChange}
                                    className="form-checkbox h-5 w-5 text-green-600"
                                />
                                <span className="ml-2 text-gray-700">{country}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Activities */}
                <div className="space-y-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        What do you want to do?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {['Safari', 'Mountain Climbing', 'Beach Holiday', 'Chimpanzee Trekking', 'Gorilla Trekking'].map((activity) => (
                            <label key={activity} className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="activities"
                                    value={activity}
                                    onChange={handleChange}
                                    className="form-checkbox h-5 w-5 text-green-600"
                                />
                                <span className="ml-2 text-gray-700">{activity}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Number of Days */}
                <div className="space-y-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        How many days do you want to travel?
                    </label>
                    <div className="flex items-center space-x-4">
                        <input
                            type="range"
                            name="days"
                            min="1"
                            max="21"
                            value={formData.days}
                            onChange={handleChange}
                            className="flex-grow appearance-none w-full h-2 bg-green-200 rounded-md outline-none slider-thumb"
                        />
                        <span className="text-gray-700 font-medium w-16 text-right">
                            {formData.days} days
                        </span>
                    </div>
                </div>

                {/* Travel With */}
                <div className="space-y-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Who are you travelling with?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {['Honeymoon', 'Family', 'Couple', 'Solo', 'Group of Friends', 'Other'].map((option) => (
                            <label key={option} className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="travelWith"
                                    value={option}
                                    onChange={handleChange}
                                    className="form-radio h-5 w-5 text-green-600"
                                />
                                <span className="ml-2 text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Travel Date */}
                <div className="space-y-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        When do you want to travel?
                    </label>
                    <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-300 font-semibold"
                >
                    Submit Travel Proposal
                </button>
            </form>
        </div>
    );
};

export default Enquire;

// {/* <style>
//     /* Custom slider thumb for range input */
//     .slider-thumb::-webkit-slider-thumb {
//         @apply appearance-none w-6 h-6 bg-green-600 rounded-full cursor-pointer;
//     }
//     .slider-thumb::-moz-range-thumb {
//         @apply appearance-none w-6 h-6 bg-green-600 rounded-full cursor-pointer;
//     }
// </style> */}