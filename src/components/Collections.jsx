// components/Collections.jsx
import React, { useState } from 'react';

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState('All Styles');

  const filters = ['All Styles', 'Blackout', 'Sheer', 'Linen', 'Printed', 'Velvet'];

  const collections = [
    {
      title: 'Blackout Collection',
      description: 'Perfect for bedrooms, our blackout curtains ensure complete privacy and light control.',
      image: 'https://images.unsplash.com/photo-1579975096649-e773e7a42b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
    },
    {
      title: 'Sheer Elegance',
      description: 'Soft, flowing fabrics that filter sunlight while maintaining an airy, open feel.',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      title: 'Linen Collection',
      description: 'Natural linen curtains offering timeless appeal with a casual, relaxed elegance.',
      image: 'https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
    }
  ];

  return (
    <section id="collections" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
            Our Curtain Collection
          </h2>
          <p className="mt-4 text-lg text-primary-700 max-w-3xl mx-auto">
            Browse our versatile range of styles designed to transform your space
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 text-sm font-medium ${
                activeFilter === filter
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-gray-100 hover:bg-accent-light/30 text-primary-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary-900">
                  {collection.title}
                </h3>
                <p className="mt-2 text-sm text-primary-800 leading-relaxed">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collections;