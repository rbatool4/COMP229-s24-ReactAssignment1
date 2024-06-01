import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Services from './components/Services';
import ContactMe from './components/ContactMe';


function MainRouter() {
  console.log('MainRouter component rendered');
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactMe />} />
     
    </Routes>
  );
}

export default MainRouter;
