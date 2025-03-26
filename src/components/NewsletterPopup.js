import React, { useState, useEffect } from 'react';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if the popup has been shown before
    const hasSeenPopup = localStorage.getItem('newsletterPopupShown');
    
    // Show popup only if user hasn't seen it before
    if (!hasSeenPopup) {
      // Delay popup to avoid immediate interruption
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('newsletterPopupShown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate email
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Here you would typically send the email to your backend
    console.log('Submitting email:', email);
    
    // Simulated subscription logic
    try {
      // Uncomment and replace with your actual subscription method
      // await subscribeToNewsletter(email);
      
      alert('Thank you for subscribing!');
      setIsOpen(false);
    } catch (err) {
      setError('Subscription failed. Please try again.');
    }
  };

  // If popup is not open, return null
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md mx-4 rounded-lg shadow-xl p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600">
            Stay updated with our latest news and exclusive offers!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <div className="flex flex-col space-y-2">
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>

            <button 
              type="button" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition duration-300"
            >
              No Thanks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;