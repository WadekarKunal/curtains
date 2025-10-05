import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6045374/pexels-photo-6045374.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Premium textile products showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Shri Mahalaxmi Enterprises
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Wholesalers of Premium Home Textiles & Products
          </p>
          <p className="mt-4 text-lg text-white/80">
            Bed Sheets | Chadar | Towels | Dhari | Parda | Handloom | Door Mats | Pillow Covers | Shawls | Blankets | Cushion Covers | Ready Pillows | Nighties
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-light transition-all duration-300 transform hover:scale-105"
            >
              View Products
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="px-6 py-3 bg-white text-primary-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;