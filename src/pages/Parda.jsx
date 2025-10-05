import React from 'react';
import ProductTemplate from './ProductTemplate';

const Parda = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Elegant curtains',
      caption: 'Premium Curtain Fabrics'
    },
    {
      url: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Curtains in living room',
      caption: 'Transform Any Space'
    },
    {
      url: 'https://images.pexels.com/photos/5824509/pexels-photo-5824509.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Curtain texture detail',
      caption: 'Fine Fabric Details'
    },
    {
      url: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Curtain package',
      caption: 'Wholesale Ready'
    },
    {
      url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative curtain setup',
      caption: 'Designer Patterns'
    },
    {
      url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury curtains',
      caption: 'Elegant Window Solutions'
    }
  ];

  return (
    <ProductTemplate
      title="Parda (Curtains)"
      description="Premium quality curtains in various designs and fabrics. Ideal for wholesale buyers seeking elegant window treatment solutions."
      images={images}
    />
  );
};

export default Parda;
