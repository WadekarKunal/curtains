import React from 'react';
import ProductTemplate from './ProductTemplate';

const ReadyPillows = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Ready-made pillows',
      caption: 'Complete Pillow Solutions'
    },
    {
      url: 'https://images.pexels.com/photos/4846111/pexels-photo-4846111.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Pillows on bed',
      caption: 'Comfortable & Supportive'
    },
    {
      url: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Pillow detail',
      caption: 'Premium Filling Quality'
    },
    {
      url: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Packaged pillows',
      caption: 'Ready for Wholesale'
    },
    {
      url: 'https://images.pexels.com/photos/1843383/pexels-photo-1843383.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative pillows',
      caption: 'Various Sizes Available'
    },
    {
      url: 'https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury pillows',
      caption: 'Hotel Quality Standards'
    }
  ];

  return (
    <ProductTemplate
      title="Ready Pillows"
      description="Complete ready-made pillows with premium filling. Ideal for wholesale buyers seeking quality pillow products for retail distribution."
      images={images}
    />
  );
};

export default ReadyPillows;
