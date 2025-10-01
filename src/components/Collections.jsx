// components/Collections.jsx
import React, { useState } from 'react';

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState('All Styles');

  const filters = ['All Styles', 'Blackout', 'Sheer', 'Linen', 'Printed', 'Velvet'];

  const allCollections = [
    { type: 'Blackout', title: 'Navy Blackout Curtains', description: 'Complete darkness for bedrooms', image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg' },
    { type: 'Blackout', title: 'Charcoal Room Darkening', description: 'Modern style with light blocking', image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg' },
    { type: 'Blackout', title: 'Black Thermal Curtains', description: 'Energy efficient and stylish', image: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg' },
    { type: 'Blackout', title: 'Gray Blackout Drapes', description: 'Perfect privacy and elegance', image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg' },
    { type: 'Blackout', title: 'Dark Brown Curtains', description: 'Rich color with full coverage', image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg' },
    { type: 'Blackout', title: 'Slate Blackout Panels', description: 'Contemporary design meets function', image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg' },

    { type: 'Sheer', title: 'White Sheer Elegance', description: 'Light and airy window treatment', image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg' },
    { type: 'Sheer', title: 'Ivory Voile Curtains', description: 'Soft natural light diffusion', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg' },
    { type: 'Sheer', title: 'Cream Sheer Panels', description: 'Delicate and sophisticated', image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg' },
    { type: 'Sheer', title: 'Pearl Sheer Drapes', description: 'Elegant light filtering', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg' },
    { type: 'Sheer', title: 'Soft White Sheers', description: 'Create a dreamy ambiance', image: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg' },
    { type: 'Sheer', title: 'Translucent Drapes', description: 'Graceful privacy solution', image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg' },

    { type: 'Linen', title: 'Natural Linen Drapes', description: 'Organic texture and warmth', image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg' },
    { type: 'Linen', title: 'Beige Linen Curtains', description: 'Timeless casual elegance', image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg' },
    { type: 'Linen', title: 'Sand Linen Panels', description: 'Relaxed sophistication', image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg' },
    { type: 'Linen', title: 'Oatmeal Linen Drapes', description: 'Natural fiber beauty', image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg' },
    { type: 'Linen', title: 'Flax Linen Curtains', description: 'Eco-friendly and stylish', image: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg' },
    { type: 'Linen', title: 'Wheat Linen Panels', description: 'Warm neutral tones', image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg' },

    { type: 'Printed', title: 'Floral Print Curtains', description: 'Vibrant botanical patterns', image: 'https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg' },
    { type: 'Printed', title: 'Geometric Design Drapes', description: 'Modern graphic appeal', image: 'https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg' },
    { type: 'Printed', title: 'Abstract Pattern Panels', description: 'Contemporary artistic style', image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg' },
    { type: 'Printed', title: 'Striped Curtains', description: 'Classic lines with impact', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg' },
    { type: 'Printed', title: 'Damask Print Drapes', description: 'Elegant traditional motifs', image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg' },
    { type: 'Printed', title: 'Botanical Print Panels', description: 'Nature-inspired designs', image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg' },

    { type: 'Velvet', title: 'Deep Blue Velvet', description: 'Luxurious rich texture', image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg' },
    { type: 'Velvet', title: 'Emerald Velvet Drapes', description: 'Opulent jewel tones', image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg' },
    { type: 'Velvet', title: 'Burgundy Velvet Curtains', description: 'Classic elegance and warmth', image: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg' },
    { type: 'Velvet', title: 'Charcoal Velvet Panels', description: 'Sophisticated modern luxury', image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg' },
    { type: 'Velvet', title: 'Taupe Velvet Drapes', description: 'Soft neutral opulence', image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg' },
    { type: 'Velvet', title: 'Plum Velvet Curtains', description: 'Rich dramatic statement', image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg' }
  ];

  const filteredCollections = activeFilter === 'All Styles'
    ? allCollections.slice(0, 6)
    : allCollections.filter(item => item.type === activeFilter);

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
          {filteredCollections.map((collection, index) => (
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