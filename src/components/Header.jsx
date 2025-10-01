// components/Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-primary-600 text-2xl font-semibold">
              ElegantDrapes
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Collection
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-300">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-primary-600 py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-primary-600 py-2">Collection</a>
              <a href="#" className="text-gray-700 hover:text-primary-600 py-2">Gallery</a>
              <a href="#" className="text-gray-700 hover:text-primary-600 py-2">About Us</a>
              <a href="#" className="text-gray-700 hover:text-primary-600 py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;