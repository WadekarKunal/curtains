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
            Contact us for wholesale inquiries and bulk orders
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-primary-50 to-accent-light/20 p-8 rounded-xl shadow-lg">
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
                      Shop No. 2391/2392, 2nd Floor, Janta Cloth Market,<br />
                      Hawker's Plaza, S.B. Marg, Dadar (W),<br />
                      Mumbai - 400 028
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
                      shrimahalaxmienterprises@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                      phone
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary-900 mb-2">
                      Phone
                    </h4>
                    <div className="space-y-2">
                      <a href="https://wa.me/919029890521" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-800 hover:text-accent transition-colors">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
                        9029890521
                      </a>
                      <a href="https://wa.me/919082350836" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-800 hover:text-accent transition-colors">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
                        9082350836
                      </a>
                      <a href="https://wa.me/917567413040" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-800 hover:text-accent transition-colors">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
                        7567413040
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-light/20 p-2 rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3772.2589686934447!2d72.84104367501755!3d19.022731682159936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAxJzIxLjgiTiA3MsKwNTAnMzcuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', borderRadius: '0.5rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Mahalaxmi Enterprises Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;