import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NotFound from './pages/NotFound'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Footer from './Component/Footer';

const App = () => {
  return (
    <Router> 
      <div className="App">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} /> 
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* 404 Page Route */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>

        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
