import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Ready to transform your space? Contact us for personalized curtain solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-accent-light/20 p-8 md:p-12 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                      location_on
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary-900 mb-1">
                      Visit Our Showroom
                    </h4>
                    <p className="text-primary-800">
                      123 Elegance Avenue, Suite 101<br />
                      Styleville, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                      schedule
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary-900 mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-primary-800">
                      Monday - Friday: 9 AM - 6 PM<br />
                      Saturday: 10 AM - 4 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                      phone
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary-900 mb-1">
                      Phone
                    </h4>
                    <p className="text-primary-800">
                      (555) 123-4567
                    </p>
                    <p className="text-sm text-primary-700 mt-1">
                      Call us for inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                      email
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary-900 mb-1">
                      Email
                    </h4>
                    <p className="text-primary-800">
                      info@elegantdrapes.com
                    </p>
                    <p className="text-sm text-primary-700 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary-200">
              <p className="text-center text-primary-800">
                <strong>Free Consultation Available</strong> - Visit our showroom or call us to discuss your curtain needs with our design experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;