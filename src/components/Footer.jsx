import React from 'react';

const Footer = () => {
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
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">ElegantDrapes</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Premium custom curtains designed to elevate your space. We offer timeless designs, premium fabrics, and expert craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-light transition-colors">
                <span className="text-white text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-light transition-colors">
                <span className="text-white text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-light transition-colors">
                <span className="text-white text-sm">ig</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-accent-light transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collections')} className="text-gray-300 hover:text-accent-light transition-colors">
                  Collections
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-accent-light transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-accent-light transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-accent-light transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-accent mr-2 text-sm">location_on</span>
                <span className="text-sm">123 Elegance Ave, Suite 101<br />Styleville, ST 12345</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-accent mr-2 text-sm">phone</span>
                <span className="text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-accent mr-2 text-sm">email</span>
                <span className="text-sm">info@elegantdrapes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ElegantDrapes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
