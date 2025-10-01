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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Curtain Collection
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our versatile range of styles designed to transform your space
          </p>
        </div>
        
        <div className="flex overflow-x-auto pb-4 mb-8 gap-4 hide-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white'
                  : 'bg-white hover:bg-primary-50 text-gray-700 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {collection.title}
                </h3>
                <p className="mt-2 text-gray-600">{collection.description}</p>
                <button className="mt-4 text-primary-600 font-medium hover:text-primary-700 flex items-center gap-1 transition-colors duration-300">
                  View Collection
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 transform hover:scale-105">
            Browse All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;