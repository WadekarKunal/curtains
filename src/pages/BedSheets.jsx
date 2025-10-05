import React from 'react';
import ProductTemplate from './ProductTemplate';

const BedSheets = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Premium bed sheets',
      caption: 'Premium Quality Fabrics'
    },
    {
      url: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bed sheets in use',
      caption: 'Comfortable & Elegant'
    },
    {
      url: 'https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bed sheet texture detail',
      caption: 'Soft Textures'
    },
    {
      url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Packaged bed sheets',
      caption: 'Ready for Wholesale'
    },
    {
      url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative bed setup',
      caption: 'Beautiful Designs'
    },
    {
      url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury bedroom with bed sheets',
      caption: 'Hotel Quality Standards'
    }
  ];

  return (
    <ProductTemplate
      title="Bed Sheets"
      description="Premium quality bed sheets in various sizes and designs. Perfect for wholesale buyers looking for comfortable and durable bedding solutions."
      images={images}
    />
  );
};

export default BedSheets;
