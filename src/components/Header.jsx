import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  const products = [
    { name: 'Bed Sheets', path: '/bed-sheets' },
    { name: 'Chadar', path: '/chadar' },
    { name: 'Towels', path: '/towels' },
    { name: 'Dhari', path: '/dhari' },
    { name: 'Parda (Curtains)', path: '/parda' },
    { name: 'Handloom Products', path: '/handloom-products' },
    { name: 'Door Mats', path: '/door-mats' },
    { name: 'Pillow Covers', path: '/pillow-covers' },
    { name: 'Shawls', path: '/shawls' },
    { name: 'Blankets', path: '/blankets' },
    { name: 'Cushion Covers', path: '/cushion-covers' },
    { name: 'Ready Pillows', path: '/ready-pillows' },
    { name: 'Nighties', path: '/nighties' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-primary-900 text-2xl font-semibold hover:text-accent transition-colors duration-300">
              Shri Mahalaxmi Enterprises
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-primary-900 hover:text-accent transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <div className="relative group">
              <button
                className="text-primary-900 hover:text-accent transition-colors duration-300 font-medium flex items-center"
                onMouseEnter={() => setProductsMenuOpen(true)}
                onMouseLeave={() => setProductsMenuOpen(false)}
              >
                Products
                <span className="ml-1">▾</span>
              </button>
              {productsMenuOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2"
                  onMouseEnter={() => setProductsMenuOpen(true)}
                  onMouseLeave={() => setProductsMenuOpen(false)}
                >
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block px-4 py-2 text-primary-900 hover:bg-primary-50 hover:text-accent transition-colors duration-200"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a
              href="/#contact"
              className="text-primary-900 hover:text-accent transition-colors duration-300 font-medium"
            >
              Contact
            </a>
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
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-primary-900 hover:text-accent py-2 text-left">
                Home
              </Link>
              <div className="text-primary-900 font-semibold py-2">Products</div>
              {products.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-primary-900 hover:text-accent py-2 pl-4 text-left"
                >
                  {product.name}
                </Link>
              ))}
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-primary-900 hover:text-accent py-2 text-left">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;