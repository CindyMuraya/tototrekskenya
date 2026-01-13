import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormStatus('Thank you! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about your next adventure? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <FaPaperPlane />
                Send Message
              </button>

              {formStatus && (
                <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 px-4 py-3 rounded-lg">
                  {formStatus}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6" data-aos="fade-left">
            {/* Quick Contact Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <a href="tel:+254 112 464170" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                    <FaPhone className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+254 112 464170</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 8am-6pm EAT</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:info@tototrekskenya.com" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                    <FaEnvelope className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@tototrekskenya.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">We reply within 24 hours</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/+254112464170?text=Hi%2C%20I%27m%20interested%20in%20your%20travel%20packages" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className="bg-green-100 p-4 rounded-full group-hover:bg-green-200 transition-all duration-300">
                    <FaWhatsapp className="text-2xl text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-300">+254 112 464170</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Chat with us instantly</p>
                  </div>
                </a>

                {/* Office Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <FaMapMarkerAlt className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Office Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Nairobi, Kenya</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Visit us for consultation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Follow Us</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Stay connected and follow our adventures on social media</p>
              
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/tototreksofficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <FaInstagram className="text-2xl text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/people/tototrekskenya/61578040769647" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <FaFacebook className="text-2xl text-white" />
                </a>
                <a 
                  href="https://www.tiktok.com/@tototrekskenya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black dark:bg-white p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <FaTiktok className="text-2xl text-white dark:text-black" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Find Us</h2>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036054286!2d36.70730744863279!3d-1.3028618549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="dark:grayscale dark:invert"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl shadow-2xl p-12 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you create unforgettable memories. Contact us today and let's plan your perfect Kenyan adventure together!
          </p>
          <a 
            href="https://wa.me/254112464170?text=Hi%2C%20I%27m%20ready%20to%20book%20my%20adventure!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;