import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Enquire from './components/Enquire';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup'; // Import the NewsletterPopup
import AIChatbot from './components/AIChatbot';

// You'll need to create these additional components
import Safaris from './components/Safaris';
import KenyaSafaris from './components/KenyaSafari';
import TanzaniaSafaris from './components/TanzaniaSafari';
import RwandaSafaris from './components/RwandaSafari';
import Pricelist from './components/Pricelist';
import CarHire from './components/CarHire';
import HotelBooking from './components/HotelBooking';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <NewsletterPopup /> {/* Add the NewsletterPopup here */}
        <AIChatbot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/safaris" element={<Safaris />} />
          <Route path="/safaris/kenya" element={<KenyaSafaris />} />
          <Route path="/safaris/tanzania" element={<TanzaniaSafaris />} />
          <Route path="/safaris/rwanda" element={<RwandaSafaris />} />
          <Route path="/pricelist" element={<Pricelist />} />
          <Route path="/car-hire" element={<CarHire />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;