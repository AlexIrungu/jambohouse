import React, { useState } from 'react';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "When is the best time to go on safari?",
      answer: "The best time depends on your destination and what you want to see. Generally, dry seasons (June-October) offer better wildlife viewing as animals gather around water sources."
    },
    {
      id: 2,
      question: "How far in advance should I book?",
      answer: "We recommend booking 6-12 months in advance, especially for peak season travel or if you have specific lodges in mind."
    },
    {
      id: 3,
      question: "What should I pack for a safari?",
      answer: "Lightweight, neutral-colored clothing, hat, sunscreen, binoculars, camera, and any personal medications. We provide a detailed packing list after booking."
    },
    {
      id: 4,
      question: "Are safaris safe for children?",
      answer: "Many safaris are family-friendly, but age restrictions may apply for certain activities. We offer specialized family safaris with appropriate accommodations and activities for children."
    },
    {
      id: 5,
      question: "What vaccinations do I need?",
      answer: "Requirements vary by country. Common recommendations include Hepatitis A & B, Typhoid, and Yellow Fever. Some regions require malaria prophylaxis. Please consult your healthcare provider for personalized advice."
    },
    {
      id: 6,
      question: "Can dietary restrictions be accommodated?",
      answer: "Yes, most lodges can accommodate dietary restrictions with advance notice. Please inform us of any dietary requirements when booking so we can make appropriate arrangements."
    }
  ];

  const toggleItem = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="py-20 max-w-3xl mx-auto bg-cornsilk rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-cafe-noir to-brown-sugar p-6 text-cornsilk text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="mt-2 text-sm opacity-80">Everything you need to know about our safari tours</p>
      </div>

      <div className="p-6">
        {faqs.map((faq, index) => (
          <div 
            key={faq.id}
            className={`mb-4 border-b border-asparagus last:border-b-0 pb-4 ${expandedIndex === index ? 'bg-alice-blue bg-opacity-30 rounded-lg' : ''}`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center py-2 px-4 focus:outline-none"
            >
              <span className="font-medium text-cafe-noir text-lg text-left">{faq.question}</span>
              <span className="text-moss-green">
                {expandedIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>
            <div 
              className={`transition-all duration-300 overflow-hidden ${
                expandedIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="p-4 text-cafe-noir text-opacity-80">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-alice-blue bg-opacity-25 text-center">
        <p className="text-cafe-noir text-sm">
          Still have questions? <span className="text-brown-sugar font-medium cursor-pointer hover:underline">Contact us</span> for more information.
        </p>
      </div>
    </div>
  );
};

export default FAQ;