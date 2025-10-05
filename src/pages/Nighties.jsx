import React from 'react';
import ProductTemplate from './ProductTemplate';

const Nighties = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/6311616/pexels-photo-6311616.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Comfortable nighties',
      caption: 'Comfortable Sleepwear'
    },
    {
      url: 'https://images.pexels.com/photos/7562325/pexels-photo-7562325.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Nightie in use',
      caption: 'Soft & Breathable Fabric'
    },
    {
      url: 'https://images.pexels.com/photos/5710131/pexels-photo-5710131.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Nightie fabric detail',
      caption: 'Premium Cotton Quality'
    },
    {
      url: 'https://images.pexels.com/photos/5710127/pexels-photo-5710127.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Packaged nighties',
      caption: 'Bulk Quantities Available'
    },
    {
      url: 'https://images.pexels.com/photos/7562320/pexels-photo-7562320.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Designer nightie',
      caption: 'Various Styles & Sizes'
    },
    {
      url: 'https://images.pexels.com/photos/5710130/pexels-photo-5710130.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Premium nighties',
      caption: 'Comfortable & Elegant'
    }
  ];

  return (
    <ProductTemplate
      title="Nighties"
      description="Comfortable and stylish nighties in various designs and sizes. Perfect for wholesale buyers in the sleepwear retail market."
      images={images}
    />
  );
};

export default Nighties;
