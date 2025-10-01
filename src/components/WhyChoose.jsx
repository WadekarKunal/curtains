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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
            Why Choose Our Curtains
          </h2>
          <p className="mt-4 text-lg text-primary-700 max-w-3xl mx-auto">
            Discover the perfect balance of functionality and style
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-white text-2xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-primary-900">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-800 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;