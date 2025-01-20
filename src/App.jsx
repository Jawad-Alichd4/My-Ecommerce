import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './CustomComponents/Navbar.jsx';
import Home from './lib/pages/Home.jsx';
import Product from './lib/pages/Product.jsx';
import Contact from './lib/pages/Contact.jsx';
import Signup from './lib/pages/Signup.jsx';
import { useState } from 'react';
import About from './lib/pages/About.jsx';

function App() {
  return (
    <div>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
      
    </div>
  );
}

export default App;
