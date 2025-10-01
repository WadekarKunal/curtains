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
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              About ElegantDrapes
            </h2>
            <p className="text-primary-800 mb-4 leading-relaxed">
              Founded with a passion for interior beauty, ElegantDrapes has been transforming homes with premium curtain solutions for over 15 years. Our commitment to quality, craftsmanship and customer satisfaction has made us the trusted choice for homeowners and interior designers alike.
            </p>
            <p className="text-primary-800 mb-6 leading-relaxed">
              Every curtain we create is made with precision and care, using only the finest materials sourced from reputable suppliers. Our expert team guides you from selection to installation, ensuring a seamless experience.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-accent-light rounded-lg"></div>
            <img
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
              alt="Our workshop crafting premium curtains"
              className="w-full h-auto rounded-xl shadow-lg relative z-10"
            />
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-accent rounded-lg"></div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-900 text-center mb-10">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4 text-accent">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-primary-800 mb-4 italic text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.initials}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-primary-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-primary-700">{testimonial.role}</p>
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