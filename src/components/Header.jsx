// components/Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-primary-900 text-2xl font-semibold cursor-pointer" onClick={() => scrollToSection('hero')}>
              ElegantDrapes
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-primary-900 hover:text-accent transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('collections')}
              className="text-primary-900 hover:text-accent transition-colors duration-300 font-medium"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-primary-900 hover:text-accent transition-colors duration-300 font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-primary-900 hover:text-accent transition-colors duration-300 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-primary-900 hover:text-accent transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center">
            <button
              className="md:hidden p-2 text-primary-900 hover:text-accent transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('hero')} className="text-primary-900 hover:text-accent py-2 text-left">Home</button>
              <button onClick={() => scrollToSection('collections')} className="text-primary-900 hover:text-accent py-2 text-left">Collection</button>
              <button onClick={() => scrollToSection('gallery')} className="text-primary-900 hover:text-accent py-2 text-left">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="text-primary-900 hover:text-accent py-2 text-left">About Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-primary-900 hover:text-accent py-2 text-left">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;