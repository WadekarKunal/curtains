import React from 'react';
import ProductTemplate from './ProductTemplate';

const Shawls = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Elegant shawls',
      caption: 'Elegant Designs'
    },
    {
      url: 'https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Person wearing shawl',
      caption: 'Warm & Stylish'
    },
    {
      url: 'https://images.pexels.com/photos/8087879/pexels-photo-8087879.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Shawl texture detail',
      caption: 'Fine Fabric Weave'
    },
    {
      url: 'https://images.pexels.com/photos/6311380/pexels-photo-6311380.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Folded shawls',
      caption: 'Bulk Orders Welcome'
    },
    {
      url: 'https://images.pexels.com/photos/7679459/pexels-photo-7679459.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative shawl display',
      caption: 'Traditional & Modern Styles'
    },
    {
      url: 'https://images.pexels.com/photos/5709660/pexels-photo-5709660.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Premium shawls',
      caption: 'Luxury Comfort'
    }
  ];

  return (
    <ProductTemplate
      title="Shawls"
      description="Premium shawls in traditional and contemporary designs. Ideal for wholesale distribution with various fabrics and patterns available."
      images={images}
    />
  );
};

export default Shawls;
