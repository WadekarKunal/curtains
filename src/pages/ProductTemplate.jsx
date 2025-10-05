import React from 'react';

const ProductTemplate = ({ title, description, images }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-primary-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-accent-light/20 p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Wholesale Inquiries Welcome
            </h3>
            <p className="text-primary-800 mb-6">
              Contact us for bulk orders and competitive wholesale pricing
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-light transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTemplate;
