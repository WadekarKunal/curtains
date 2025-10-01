// components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    room: '',
    style: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your request! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      room: '',
      style: '',
      message: ''
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get a Free Quote
            </h2>
            <p className="text-gray-600 mb-8">
              Ready to transform your space? Fill out the form below, and our experts will get in touch to discuss your custom curtain needs.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="room"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Room Type
                  </label>
                  <select
                    id="room"
                    value={formData.room}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    required
                  >
                    <option value="">Select a room</option>
                    <option value="living">Living Room</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="dining">Dining Room</option>
                    <option value="office">Home Office</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="style"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Curtain Style
                </label>
                <select
                  id="style"
                  value={formData.style}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  required
                >
                  <option value="">Select a style</option>
                  <option value="blackout">Blackout</option>
                  <option value="sheer">Sheer</option>
                  <option value="linen">Linen</option>
                  <option value="printed">Printed</option>
                  <option value="velvet">Velvet</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  placeholder="Tell us about your project, including any measurements or specific requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105"
              >
                Submit Request
              </button>
            </form>
          </div>
          <div>
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-primary-600 mr-3">
                    location_on
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Visit Our Showroom
                    </h4>
                    <p className="text-gray-600">
                      123 Elegance Avenue, Suite 101<br />
                      Styleville, ST 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-primary-600 mr-3">
                    schedule
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Opening Hours</h4>
                    <p className="text-gray-600">
                      Monday to Friday: 9 AM - 6 PM<br />
                      Saturday: 10 AM - 4 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-primary-600 mr-3">
                    phone
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">
                      (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-primary-600 mr-3">
                    email
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      info@elegantdrapes.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;