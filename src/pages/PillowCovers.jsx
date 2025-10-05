import React from 'react';
import ProductTemplate from './ProductTemplate';

const PillowCovers = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Designer pillow covers',
      caption: 'Designer Patterns'
    },
    {
      url: 'https://images.pexels.com/photos/1488307/pexels-photo-1488307.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Pillow covers on bed',
      caption: 'Perfect for Any Decor'
    },
    {
      url: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Pillow cover texture',
      caption: 'Premium Fabric Quality'
    },
    {
      url: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Packaged pillow covers',
      caption: 'Ready for Distribution'
    },
    {
      url: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative pillow display',
      caption: 'Vibrant Colors'
    },
    {
      url: 'https://images.pexels.com/photos/1843383/pexels-photo-1843383.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury pillow covers',
      caption: 'Elegant Home Accents'
    }
  ];

  return (
    <ProductTemplate
      title="Pillow Covers"
      description="Stylish pillow covers in various sizes and designs. Perfect for wholesale buyers seeking decorative and quality home textile products."
      images={images}
    />
  );
};

export default PillowCovers;
