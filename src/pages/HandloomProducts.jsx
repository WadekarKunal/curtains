import React from 'react';
import ProductTemplate from './ProductTemplate';

const HandloomProducts = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/4846428/pexels-photo-4846428.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Handloom textiles',
      caption: 'Authentic Handloom'
    },
    {
      url: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Handloom products in use',
      caption: 'Traditional Craftsmanship'
    },
    {
      url: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Handloom texture',
      caption: 'Intricate Weaving'
    },
    {
      url: 'https://images.pexels.com/photos/6311384/pexels-photo-6311384.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Handloom product stack',
      caption: 'Bulk Availability'
    },
    {
      url: 'https://images.pexels.com/photos/4846422/pexels-photo-4846422.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative handloom',
      caption: 'Unique Patterns'
    },
    {
      url: 'https://images.pexels.com/photos/7601413/pexels-photo-7601413.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Handloom lifestyle',
      caption: 'Eco-Friendly Artisan Products'
    }
  ];

  return (
    <ProductTemplate
      title="Handloom Products"
      description="Authentic handloom textiles crafted with traditional techniques. Perfect for wholesalers seeking unique, eco-friendly artisan products."
      images={images}
    />
  );
};

export default HandloomProducts;
