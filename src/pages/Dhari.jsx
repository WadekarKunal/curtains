import React from 'react';
import ProductTemplate from './ProductTemplate';

const Dhari = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/7601411/pexels-photo-7601411.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Traditional Dhari',
      caption: 'Traditional Weave'
    },
    {
      url: 'https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dhari in home',
      caption: 'Multi-Purpose Use'
    },
    {
      url: 'https://images.pexels.com/photos/4846435/pexels-photo-4846435.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dhari texture',
      caption: 'Durable Material'
    },
    {
      url: 'https://images.pexels.com/photos/6782569/pexels-photo-6782569.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Folded Dhari stock',
      caption: 'Bulk Orders Available'
    },
    {
      url: 'https://images.pexels.com/photos/7601412/pexels-photo-7601412.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative Dhari',
      caption: 'Various Designs'
    },
    {
      url: 'https://images.pexels.com/photos/8032829/pexels-photo-8032829.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dhari lifestyle',
      caption: 'Authentic Quality'
    }
  ];

  return (
    <ProductTemplate
      title="Dhari"
      description="Traditional dhari in various patterns and sizes. Perfect for wholesalers seeking authentic and durable floor covering solutions."
      images={images}
    />
  );
};

export default Dhari;
