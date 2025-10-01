// components/Gallery.jsx
import React from 'react';

const Gallery = () => {
  const galleryImages = [
    { url: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg', type: 'Blackout Curtains' },
    { url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg', type: 'Sheer Curtains' },
    { url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg', type: 'Modern Living Room' },
    { url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg', type: 'Bedroom Curtains' },
    { url: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg', type: 'Elegant Drapes' },
    { url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg', type: 'Window Treatment' },
    { url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', type: 'Light Filtering' },
    { url: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg', type: 'Classic Style' },
    { url: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg', type: 'Contemporary' },
    { url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg', type: 'Minimalist Design' },
    { url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg', type: 'Luxury Curtains' },
    { url: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg', type: 'Cozy Ambiance' }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
            Inspiration Gallery
          </h2>
          <p className="mt-4 text-lg text-primary-700 max-w-3xl mx-auto">
            Browse our collection of beautiful curtain installations
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg h-64 bg-white hover:shadow-xl transition-all duration-300 relative group"
            >
              <img
                src={image.url}
                alt={image.type}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white text-sm font-medium">
                  {image.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;