import React from 'react';
import ProductTemplate from './ProductTemplate';

const Blankets = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/6512357/pexels-photo-6512357.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cozy blankets',
      caption: 'Ultra Soft & Warm'
    },
    {
      url: 'https://images.pexels.com/photos/7534548/pexels-photo-7534548.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Blanket on bed',
      caption: 'Perfect for Every Season'
    },
    {
      url: 'https://images.pexels.com/photos/7185040/pexels-photo-7185040.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Blanket texture',
      caption: 'Premium Materials'
    },
    {
      url: 'https://images.pexels.com/photos/6527072/pexels-photo-6527072.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Stacked blankets',
      caption: 'Wholesale Quantities'
    },
    {
      url: 'https://images.pexels.com/photos/7601300/pexels-photo-7601300.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative blanket',
      caption: 'Various Colors & Patterns'
    },
    {
      url: 'https://images.pexels.com/photos/4846467/pexels-photo-4846467.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury blanket',
      caption: 'Hotel Quality Comfort'
    }
  ];

  return (
    <ProductTemplate
      title="Blankets"
      description="High-quality blankets for all seasons. Perfect for wholesale buyers looking for comfortable and durable blankets in bulk quantities."
      images={images}
    />
  );
};

export default Blankets;
