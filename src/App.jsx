// App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import Collections from './components/Collections';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <WhyChoose />
      <Collections />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;