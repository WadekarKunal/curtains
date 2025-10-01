// components/About.jsx
import React from 'react';

const About = () => {
  const testimonials = [
    {
      name: 'Jennifer Davis',
      role: 'Residential Client',
      rating: 5,
      text: 'The curtains completely transformed our living room. The quality is exceptional and the installation team was professional and efficient.',
      initials: 'JD'
    },
    {
      name: 'Robert Hayes',
      role: 'Interior Designer',
      rating: 5,
      text: 'As an interior designer, I\'ve worked with many curtain suppliers, but ElegantDrapes stands out for their attention to detail and customer service.',
      initials: 'RH'
    },
    {
      name: 'Amanda Lewis',
      role: 'Residential Client',
      rating: 4.5,
      text: 'The blackout curtains in our bedroom have made a huge difference to our sleep quality. Worth every penny for the custom fit and premium fabric.',
      initials: 'AL'
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="material-symbols-outlined">star</span>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="material-symbols-outlined">star_half</span>
      );
    }
    return stars;
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About ElegantDrapes
            </h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for interior beauty, ElegantDrapes has been transforming homes with premium curtain solutions for over 15 years. Our commitment to quality, craftsmanship and customer satisfaction has made us the trusted choice for homeowners and interior designers alike.
            </p>
            <p className="text-gray-600 mb-6">
              Every curtain we create is made with precision and care, using only the finest materials sourced from reputable suppliers. Our expert team guides you from selection to installation, ensuring a seamless experience.
            </p>
            <button className="px-6 py-2 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors duration-300">
              Learn More About Us
            </button>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary-100 rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1577801622187-9a1076d049da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              alt="Our workshop crafting premium curtains"
              className="w-full h-auto rounded-lg shadow-lg relative z-10"
            />
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary-200 rounded-lg"></div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-4 text-primary-500">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;