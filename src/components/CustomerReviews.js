import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ThumbsUp, ThumbsDown, Flag } from 'lucide-react';

export default function CustomerReviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showMoreMobile, setShowMoreMobile] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Robert Chris",
      country: "GF",
      flag: "🇬🇫",
      visited: "January 2025",
      reviewed: "Feb 8, 2025",
      email: "Email Robert Chris",
      ageRange: "35-50 years of age",
      experienceLevel: "over 5 safaris",
      title: "A great company ever!!",
      rating: 5,
      content: "Great experience with Jambo Travel House holidays. We had a 3 days with Jambo Travel House holidays. Ngorongoro, Serengeti and Lake Manyara. I would like to appreciate the organization and the guides. Very well prepared",
      helpful: 12,
      notHelpful: 2
    },
    {
      id: 2,
      name: "June Titus",
      country: "ZA",
      flag: "🇿🇦",
      visited: "October 2024",
      reviewed: "Jan 29, 2025",
      email: "Email JUNE TITUS",
      ageRange: "35-50 years of age",
      experienceLevel: "2-5 safaris",
      title: "Job well done!",
      rating: 5,
      content: "It has been such a pleasure to work with Mark Song and the Jambo Team. Mark showed professionalism at all times, even going above and beyond to make sure that our Annual Meeting was successful. Things were running smoothly with the logistics of having participants across two hotels. It was a pleasure dealing with Mark and would definitely recommend Jambo Travel House.",
      helpful: 8,
      notHelpful: 0
    },
    {
      id: 3,
      name: "Jennifer and John",
      country: "US",
      flag: "🇺🇸",
      visited: "June 2024",
      reviewed: "Jun 29, 2024",
      email: "Email Jennifer and John",
      ageRange: "50-65 years of age",
      experienceLevel: "first safari",
      title: "Trip of a Lifetime!",
      rating: 5,
      content: "We are very pleased in all aspects with our trip. Jambo Travel took care of everything and made it easy for us to show up and be taken care of. They left nothing out, and we were pampered from beginning to end. Joseph, our tour guide was fabulous, too! He never tired of our endless questions and was a very positive and knowledgeable person. He became like part of our family by the end of the trip. Our game drives brought us up close with not only the \"Big 5\", but the \"Special 5\" as well. We were able to view a variety of animals ranging from the cute dik-diks to the majestic oryx of the beautiful Rift Valley. We experienced the culture of the Maasai people and truly enjoyed all the arrangements made by Jambo Travel.",
      helpful: 24,
      notHelpful: 1
    },
    {
      id: 4,
      name: "Anne-Marie",
      country: "NO",
      flag: "🇳🇴",
      visited: "November 2023",
      reviewed: "Apr 12, 2024",
      email: "Email Anne-Marie",
      ageRange: "65+ years of age",
      experienceLevel: "first safari",
      title: "Excellent service and performance for the whole trip",
      rating: 5,
      content: "We had an unforgettable tour with Jambo Travel House. Reliability is excellent and the service was very good.",
      helpful: 7,
      notHelpful: 0
    },
    {
      id: 5,
      name: "Eli",
      country: "NO",
      flag: "🇳🇴",
      visited: "October 2023",
      reviewed: "Apr 12, 2024",
      email: "Email Eli",
      ageRange: "65+ years of age",
      experienceLevel: "over 5 safaris",
      title: "Excellent good drivers who drives safely",
      rating: 5,
      content: "We have used Jambo Travel for many years and we feel safe traveling with them. The drivers are experienced and have good knowledge about the country and wildlife. They are service minded. We travelled from Nairobi to Muhoroni-Kisumu and Masai Mara. We are really recommending Jambo Travel.",
      helpful: 15,
      notHelpful: 2,
      images: [
        "/images/review-photo-1.jpg",
        "/images/review-photo-2.jpg", 
        "/images/review-photo-3.jpg"
      ]
    }
  ];

  const itemsPerPage = 3;
  const pageCount = Math.ceil(reviews.length / itemsPerPage);
  
  const paginatedReviews = reviews.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(pageCount - 1, prev + 1));
  };

  const RatingStars = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "fill-gold-metallic text-gold-metallic" : "text-french-gray"} 
          />
        ))}
        <span className="ml-2 text-cafe-noir font-medium">{rating}/5</span>
      </div>
    )
  };

  return (
    <div className="bg-eggshell py-12 px-4 md:px-8 lg:px-12 rounded-lg">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-cafe-noir mb-3">Customer Reviews</h2>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={24} 
                    className="fill-gold-metallic text-gold-metallic"
                  />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-cafe-noir">5.0 out of 5</span>
            </div>
            <p className="text-md text-french-gray">{reviews.length} verified reviews</p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto py-2 md:py-0 scrollbar-hide max-w-full md:max-w-none">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeFilter === 'all' 
                  ? 'bg-cafe-noir text-eggshell' 
                  : 'bg-white text-cafe-noir border border-french-gray'
              }`}
            >
              All Reviews
            </button>
            <button 
              onClick={() => setActiveFilter('5star')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeFilter === '5star' 
                  ? 'bg-cafe-noir text-eggshell' 
                  : 'bg-white text-cafe-noir border border-french-gray'
              }`}
            >
              5 Star Reviews
            </button>
            <button 
              onClick={() => setActiveFilter('photos')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeFilter === 'photos' 
                  ? 'bg-cafe-noir text-eggshell' 
                  : 'bg-white text-cafe-noir border border-french-gray'
              }`}
            >
              With Photos
            </button>
          </div>
        </div>
      </div>
      
      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-french-gray/20 flex flex-col">
            {/* Review Header */}
            <div className="p-6 pb-3 border-b border-french-gray/10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-moss-green/20 rounded-full flex items-center justify-center text-moss-green font-bold text-lg mr-3">
                    {review.name.split(' ')[0][0]}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-cafe-noir">{review.name}</h3>
                      <span className="ml-2">{review.flag}</span>
                    </div>
                    <p className="text-xs text-french-gray mt-1">
                      {review.ageRange} | {review.experienceLevel}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-french-gray">Visited: {review.visited}</p>
                  <p className="text-xs text-french-gray">Reviewed: {review.reviewed}</p>
                </div>
              </div>
              <h4 className="font-semibold text-cafe-noir text-lg mb-2">"{review.title}"</h4>
              <RatingStars rating={review.rating} />
            </div>
            
            {/* Review Content */}
            <div className="p-6 flex-grow">
              <p className="text-cafe-noir/80 text-sm">
                {showMoreMobile && review.id === 3 
                  ? review.content 
                  : review.content.length > 200 && !showMoreMobile
                  ? review.content.substring(0, 200) + '...'
                  : review.content}
              </p>
              {review.content.length > 200 && review.id === 3 && (
                <button 
                  onClick={() => setShowMoreMobile(!showMoreMobile)}
                  className="text-moss-green font-medium text-sm mt-2 md:hidden"
                >
                  {showMoreMobile ? 'Show less' : 'Read more'}
                </button>
              )}
            </div>
            
            {/* Review Images if any */}
            {review.images && (
              <div className="px-6 pb-4">
                <div className="flex gap-2 overflow-x-auto py-2">
                  {review.images.map((img, idx) => (
                    <div key={idx} className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                      <img src="/api/placeholder/64/64" alt="Review photo" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Review Actions */}
            <div className="p-6 pt-2 mt-auto border-t border-french-gray/10 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-xs text-cafe-noir hover:text-moss-green transition">
                  <ThumbsUp size={14} className="mr-1" />
                  <span>Helpful {review.helpful > 0 && `(${review.helpful})`}</span>
                </button>
                <button className="flex items-center text-xs text-cafe-noir hover:text-claret transition">
                  <ThumbsDown size={14} className="mr-1" />
                  <span>Not helpful</span>
                </button>
              </div>
              <button className="text-xs text-cafe-noir hover:text-moss-green flex items-center transition">
                <Flag size={14} className="mr-1" />
                <span className="hidden sm:inline">Report</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-french-gray">
            Showing {currentPage * itemsPerPage + 1}-{Math.min((currentPage + 1) * itemsPerPage, reviews.length)} of {reviews.length} reviews
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrevious} 
            disabled={currentPage === 0}
            className={`p-2 rounded-full ${currentPage === 0 ? 'text-french-gray bg-eggshell cursor-not-allowed' : 'text-cafe-noir bg-white hover:bg-moss-green/10'} border border-french-gray/20`}
          >
            <ChevronLeft size={18} />
          </button>
          
          {[...Array(pageCount)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
                currentPage === idx 
                  ? 'bg-cafe-noir text-white font-medium' 
                  : 'bg-white text-cafe-noir hover:bg-moss-green/10 border border-french-gray/20'
              }`}
            >
              {idx + 1}
            </button>
          ))}
          
          <button 
            onClick={handleNext} 
            disabled={currentPage === pageCount - 1}
            className={`p-2 rounded-full ${currentPage === pageCount - 1 ? 'text-french-gray bg-eggshell cursor-not-allowed' : 'text-cafe-noir bg-white hover:bg-moss-green/10'} border border-french-gray/20`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-12 bg-columbia-blue/20 p-6 md:p-8 rounded-lg border border-columbia-blue/30 text-center">
        <h3 className="text-xl font-semibold text-cafe-noir mb-2">Ready for your own safari adventure?</h3>
        <p className="text-cafe-noir/80 mb-4">Join our satisfied customers who have experienced unforgettable journeys with Jambo Travel House</p>
        <button className="bg-moss-green hover:bg-moss-green/90 text-white font-medium py-3 px-6 rounded-md transition-all shadow-md hover:shadow-lg">
          Start Planning Your Safari
        </button>
      </div>
    </div>
  );
}