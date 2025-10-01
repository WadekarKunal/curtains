// components/WhyChoose.jsx
import React from 'react';

const WhyChoose = () => {
  const features = [
    {
      icon: 'style',
      title: 'Premium Fabrics',
      description: 'We source only the highest quality materials, ensuring durability, color retention, and luxurious feel.'
    },
    {
      icon: 'design_services',
      title: 'Custom Design',
      description: 'Each curtain is made to your exact specifications, ensuring a perfect fit for any window in your home.'
    },
    {
      icon: 'local_shipping',
      title: 'Professional Installation',
      description: 'Our expert team ensures flawless installation, handling everything from measurements to the final touches.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Our Curtains
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect balance of functionality and style with our premium curtain solutions
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-primary-600">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;