import React from 'react';
import ProductTemplate from './ProductTemplate';

const Towels = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Soft towels',
      caption: 'Ultra Soft Cotton'
    },
    {
      url: 'https://images.pexels.com/photos/6045374/pexels-photo-6045374.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Towels in bathroom',
      caption: 'Perfect for Daily Use'
    },
    {
      url: 'https://images.pexels.com/photos/5591666/pexels-photo-5591666.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Towel texture closeup',
      caption: 'High Absorbency'
    },
    {
      url: 'https://images.pexels.com/photos/7534555/pexels-photo-7534555.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Stacked towels',
      caption: 'Wholesale Quantities'
    },
    {
      url: 'https://images.pexels.com/photos/7534520/pexels-photo-7534520.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative towel display',
      caption: 'Multiple Colors Available'
    },
    {
      url: 'https://images.pexels.com/photos/6045373/pexels-photo-6045373.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury bathroom towels',
      caption: 'Premium Hotel Quality'
    }
  ];

  return (
    <ProductTemplate
      title="Towels"
      description="High-quality absorbent towels in various sizes. From bath towels to hand towels, perfect for wholesale orders and bulk purchases."
      images={images}
    />
  );
};

export default Towels;
