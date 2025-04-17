import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Enquire from './components/Enquire';
import Contact from './components/Contact'; // Import the Contact component
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';
import AIChatbot from './components/AIChatbot';
import PostDetails from './components/PostDetails';
import BookingForm from './components/BookingForm';
import Destinations from './components/Destinations';
import DestinationDetails from './components/DestinationDetails';
import SafariTours from './components/SafariTours'

// Safari pages
import Safaris from './components/Safaris';
import KenyaSafari from './components/KenyaSafari';
import TanzaniaSafari from './components/TanzaniaSafari';
import RwandaSafaris from './components/RwandaSafari';
import Pricelist from './components/Pricelist';
import CarHire from './components/CarHire';
import HotelBooking from './components/HotelBooking';
import BlogContainer from './components/Blog'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <NewsletterPopup />
        <AIChatbot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/safaris" element={<Safaris />} />
          <Route path="/safaris/kenya" element={<KenyaSafari />} />
          <Route path="/safaris/tanzania" element={<TanzaniaSafari />} />
          <Route path="/safaris/rwanda" element={<RwandaSafaris />} />
          <Route path="/pricelist" element={<Pricelist />} />
          <Route path="/car-hire" element={<CarHire />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/blog/*" element={<BlogContainer />} />
          <Route path="/booking-form/:carId" element={<BookingForm />} />
          <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:country/:destination" element={<DestinationDetails />} />
      <Route path="/safaari" element={<SafariTours />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;