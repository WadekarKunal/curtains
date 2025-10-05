import React from 'react';
import ProductTemplate from './ProductTemplate';

const CushionCovers = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative cushion covers',
      caption: 'Stylish Home Accents'
    },
    {
      url: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cushion covers on sofa',
      caption: 'Transform Any Living Space'
    },
    {
      url: 'https://images.pexels.com/photos/6969884/pexels-photo-6969884.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cushion cover texture',
      caption: 'Quality Fabrics'
    },
    {
      url: 'https://images.pexels.com/photos/6585593/pexels-photo-6585593.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Packaged cushion covers',
      caption: 'Bulk Orders Available'
    },
    {
      url: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative cushion display',
      caption: 'Wide Range of Designs'
    },
    {
      url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Premium cushion covers',
      caption: 'Designer Collections'
    }
  ];

  return (
    <ProductTemplate
      title="Cushion Covers"
      description="Designer cushion covers in various sizes and patterns. Perfect for wholesale distribution to retailers and interior design businesses."
      images={images}
    />
  );
};

export default CushionCovers;
