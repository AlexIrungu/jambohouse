import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: '' });

    // Replace with your EmailJS service ID, template ID, and public key
    emailjs.sendForm(
      'service_xrdhvyd',
      'template_t62eg2x',
      form.current,
      'wGf7PIGhqNr-Qlghk'
    )
      .then((result) => {
        console.log(result.text);
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Your message has been sent successfully!'
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setFormStatus({
          loading: false,
          success: false,
          error: true,
          message: 'There was an error sending your message. Please try again.'
        });
      });
  };

  return (
    <div className="bg-gradient-to-b from-eggshell to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-cafe-noir mb-4">
            Connect With <span className="text-hunyadi-yellow">Jambo</span> Travelhouse
          </h1>
          <div className="w-32 h-1 bg-moss-green mx-auto mb-6"></div>
          <p className="text-lg text-moss-green max-w-2xl mx-auto">
            We're ready to help plan your perfect African safari experience. Reach out to us with any questions or to start planning your adventure of a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-moss-green/10 py-6 px-8">
                <h2 className="text-2xl font-semibold text-cafe-noir flex items-center">
                  <svg className="w-6 h-6 mr-3 text-hunyadi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Send us a message
                </h2>
              </div>

              <div className="p-8">
                {formStatus.success && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    {formStatus.message}
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {formStatus.message}
                  </div>
                )}

                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-cafe-noir font-medium mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="user_name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-french-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50 focus:border-hunyadi-yellow transition-all duration-300" 
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-cafe-noir font-medium mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="user_email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-french-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50 focus:border-hunyadi-yellow transition-all duration-300" 
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-cafe-noir font-medium mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-french-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50 focus:border-hunyadi-yellow transition-all duration-300" 
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-cafe-noir font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5" 
                      className="w-full p-3 border border-french-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow/50 focus:border-hunyadi-yellow transition-all duration-300" 
                      placeholder="Tell us about your travel plans or questions..."
                      required
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={formStatus.loading}
                      className="bg-hunyadi-yellow text-cafe-noir px-8 py-3 rounded-lg font-medium hover:bg-princeton-orange hover:shadow-lg transition-all duration-300 flex items-center"
                    >
                      {formStatus.loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-cafe-noir" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-moss-green/10 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-cafe-noir py-6 px-8">
                <h2 className="text-2xl font-semibold text-hunyadi-yellow flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Contact Information
                </h2>
              </div>

              <div className="divide-y divide-moss-green/10">
                {/* Kenya Office */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-hunyadi-yellow/20 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-hunyadi-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cafe-noir">KENYA</h3>
                      <p className="text-moss-green">Jambo Travelhouse Safaris Limited</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pl-16">
                    <div>
                      <p className="text-cafe-noir font-medium">Address:</p>
                      <p className="text-moss-green">P.O. BOX, 61996-0200 NAIROBI</p>
                    </div>
                    
                    <div>
                      <p className="text-cafe-noir font-medium">Phone:</p>
                      <p className="text-moss-green">
                        +254 20 3503643<br />
                        +254 728311775<br />
                        +254 722 218901
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-cafe-noir font-medium">Email:</p>
                      <p className="text-moss-green">tours@jambotravelhouse.co.ke</p>
                    </div>
                  </div>
                </div>
                
                {/* Norway Office */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-hunyadi-yellow/20 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-hunyadi-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cafe-noir">NORWAY</h3>
                      <p className="text-moss-green">Jambo Travelhouse Safaris AS</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pl-16">
                    <div>
                      <p className="text-cafe-noir font-medium">Phone:</p>
                      <p className="text-moss-green">+47 930 40 224</p>
                    </div>
                    
                    <div>
                      <p className="text-cafe-noir font-medium">Email:</p>
                      <p className="text-moss-green">info@jambotravelhouse.co.ke</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-hunyadi-yellow/20 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-hunyadi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cafe-noir">Business Hours</h3>
                      <div className="mt-2 space-y-1 text-moss-green">
                        <p className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>8:00 AM - 6:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Saturday:</span>
                          <span>9:00 AM - 4:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="p-6">
                  <a 
                    href="http://www.jambotravelhouse.co.ke" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-3 px-6 bg-hunyadi-yellow/10 rounded-lg hover:bg-hunyadi-yellow/20 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2 text-hunyadi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="text-cafe-noir font-medium">www.jambotravelhouse.co.ke</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-moss-green/20 flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 text-moss-green/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-cafe-noir">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-16 text-center">
          <p className="text-lg text-moss-green italic">
            "Your Tour Operator In East Africa"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;