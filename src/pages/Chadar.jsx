import React from 'react';
import ProductTemplate from './ProductTemplate';

const Chadar = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Traditional Chadar',
      caption: 'Traditional Designs'
    },
    {
      url: 'https://images.pexels.com/photos/7534555/pexels-photo-7534555.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chadar in bedroom',
      caption: 'Versatile Usage'
    },
    {
      url: 'https://images.pexels.com/photos/6045245/pexels-photo-6045245.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chadar fabric texture',
      caption: 'Premium Fabric Quality'
    },
    {
      url: 'https://images.pexels.com/photos/8288600/pexels-photo-8288600.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Folded Chadar',
      caption: 'Bulk Packaging Available'
    },
    {
      url: 'https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative Chadar setup',
      caption: 'Elegant Patterns'
    },
    {
      url: 'https://images.pexels.com/photos/7534407/pexels-photo-7534407.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chadar lifestyle shot',
      caption: 'Comfortable & Durable'
    }
  ];

  return (
    <ProductTemplate
      title="Chadar"
      description="Traditional and modern chadar designs in premium fabrics. Ideal for wholesale distribution with various patterns and colors available."
      images={images}
    />
  );
};

export default Chadar;
