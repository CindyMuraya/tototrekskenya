import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaStar, FaQuoteLeft, FaWhatsapp } from 'react-icons/fa'
import heroJpg from '../assets/light-hero.jpg'
import lightHeroJpg from '../assets/hero.jpg'
import Hero from '../components/Hero/Hero'
import FeaturedAdventures from '../components/FeaturedAdventures/FeaturedAdventures'

const Home = ({ theme }) => {
  const navigate = useNavigate();
  const backgroundImage = theme === "dark" ? heroJpg : lightHeroJpg;
  
  // WhatsApp handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "+254112464170";
    const message = encodeURIComponent("Hi! I'd like to plan my trip to Kenya with Toto Treks Kenya.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Background Image */}
      <div 
        className="relative min-h-screen bg-contain bg-fixed md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Hero Content */}
        <Hero />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
        <FeaturedAdventures />
      </div>

      {/* Additional Sections */}
      <section className="py-20 bg-warm-beige dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Why Choose Toto Treks Kenya?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We specialize in creating personalized, family-friendly adventures that showcase the best of Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-sunset-orange text-5xl mb-4">🦁</div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Authentic Safaris</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experience Kenya's wildlife up close with expert guides and premium safari packages
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="text-sunset-orange text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Family Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailored experiences perfect for families, creating memories that everyone will cherish
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="600">
              <div className="text-sunset-orange text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Local Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deep knowledge of Kenya's hidden gems and cultural treasures from local experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="py-20 bg-light-brown dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-950 dark:text-white">
              What Our Families Say
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from families who have experienced the magic of Kenya with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div 
              className="bg-warm-beige dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <div className="absolute top-4 right-4 text-golden-orange/20 dark:text-primary/20">
                <FaQuoteLeft size={30} />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Thompson"
                  className="w-14 h-14 rounded-full object-cover mr-3 border-4 border-golden-orange dark:border-primary"
                />
                <div>
                  <h3 className="font-bold text-amber-950 dark:text-white">
                    Sarah & Michael Thompson
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">London, UK</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-golden-orange dark:text-yellow-400 text-sm" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                "Our safari adventure was absolutely magical! The guides were knowledgeable and patient with our two young children. They made sure we saw the Big Five and created memories that will last a lifetime."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div 
              className="bg-warm-beige dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              <div className="absolute top-4 right-4 text-golden-orange/20 dark:text-primary/20">
                <FaQuoteLeft size={30} />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="James Chen"
                  className="w-14 h-14 rounded-full object-cover mr-3 border-4 border-golden-orange dark:border-primary"
                />
                <div>
                  <h3 className="font-bold text-amber-950 dark:text-white">
                    James Chen
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Singapore</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-golden-orange dark:text-yellow-400 text-sm" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                "Exceptional service from start to finish. The team handled all our visa requirements and made the entire process stress-free. Our children learned so much about Kenyan culture and wildlife!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div 
              className="bg-warm-beige dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
              data-aos="fade-up" 
              data-aos-delay="600"
            >
              <div className="absolute top-4 right-4 text-golden-orange/20 dark:text-primary/20">
                <FaQuoteLeft size={30} />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Emily Rodriguez"
                  className="w-14 h-14 rounded-full object-cover mr-3 border-4 border-golden-orange dark:border-primary"
                />
                <div>
                  <h3 className="font-bold text-amber-950 dark:text-white">
                    Emily Rodriguez
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Miami, USA</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-golden-orange dark:text-yellow-400 text-sm" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                "As a single parent traveling with three kids, I was nervous about the logistics. TotoTreks made everything seamless! The accommodations were family-friendly and perfectly paced for children."
              </p>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center" data-aos="fade-up">
            <Link to="/testimonials" onClick={() => window.scrollTo(0, 0)}>
              <button className="button-outline">
                View All Testimonials
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sunset-orange to-golden-orange text-white">
        <div className="container mx-auto px-4 text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's plan your perfect experience together. Contact us today to begin your journey.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-sunset-orange px-10 py-4 rounded-md text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 transform hover:scale-110 z-50 group"
        aria-label="Plan My Trip on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="font-semibold hidden md:inline">Plan My Trip</span>
      </button>
    </div>
  )
}

export default Home