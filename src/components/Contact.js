import React from 'react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-cafe-noir mb-4">Contact Us</h1>
        <p className="text-lg text-moss-green mb-8">
          We're here to help plan your perfect African safari experience. Reach out to us with any questions or to start planning your trip.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-eggshell p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-cafe-noir mb-4">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-cafe-noir mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border border-moss-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow" 
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-cafe-noir mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border border-moss-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow" 
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-cafe-noir mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full p-2 border border-moss-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow" 
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-cafe-noir mb-1">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full p-2 border border-moss-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow" 
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-hunyadi-yellow text-cafe-noir px-6 py-2 rounded-full font-medium hover:bg-princeton-orange transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-moss-green/10 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-cafe-noir mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-hunyadi-yellow mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-medium text-cafe-noir">Address</h3>
                <p className="text-moss-green">
                  123 Safari Lane, Nairobi<br />
                  Kenya
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="w-5 h-5 text-hunyadi-yellow mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 className="font-medium text-cafe-noir">Phone</h3>
                <p className="text-moss-green">
                  +254 123 456 789<br />
                  +254 987 654 321
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="w-5 h-5 text-hunyadi-yellow mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="font-medium text-cafe-noir">Email</h3>
                <p className="text-moss-green">
                  info@jambotravelhouse.com<br />
                  bookings@jambotravelhouse.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="w-5 h-5 text-hunyadi-yellow mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-medium text-cafe-noir">Business Hours</h3>
                <p className="text-moss-green">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;