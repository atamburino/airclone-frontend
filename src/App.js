import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import { Routes, Route } from 'react-router-dom';
import PersonalInfo from './pages/personal-info.js'
import Home from './pages/home';
import Footer from './Components/layout/Footer';
import Nav from './Components/layout/Nav';
import Listing from './pages/listing';

function App() {
  return (
    <>
      <Router> 
      <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/listing/:listingId" element={<Listing />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
