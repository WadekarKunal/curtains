import React from 'react';
import ProductTemplate from './ProductTemplate';

const DoorMats = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/6969887/pexels-photo-6969887.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative door mat',
      caption: 'Stylish Entrance Solutions'
    },
    {
      url: 'https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Door mat at entrance',
      caption: 'Functional & Decorative'
    },
    {
      url: 'https://images.pexels.com/photos/7195099/pexels-photo-7195099.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Door mat texture',
      caption: 'Durable Materials'
    },
    {
      url: 'https://images.pexels.com/photos/7195145/pexels-photo-7195145.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Stacked door mats',
      caption: 'Wholesale Quantities'
    },
    {
      url: 'https://images.pexels.com/photos/7195140/pexels-photo-7195140.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decorative mat designs',
      caption: 'Various Designs Available'
    },
    {
      url: 'https://images.pexels.com/photos/7195132/pexels-photo-7195132.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Premium door mat',
      caption: 'Quality First Impressions'
    }
  ];

  return (
    <ProductTemplate
      title="Door Mats"
      description="Durable and stylish door mats in various designs. Perfect for wholesale buyers looking for quality entrance solutions."
      images={images}
    />
  );
};

export default DoorMats;
