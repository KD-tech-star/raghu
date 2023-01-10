import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import React from 'react';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
