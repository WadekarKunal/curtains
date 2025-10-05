import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Gallery from '../components/Gallery';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <Hero />
      <Collections />
      <Gallery />
      <About />
    </>
  );
};

export default Home;
