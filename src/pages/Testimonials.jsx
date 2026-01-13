import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Our safari adventure with TotoTreks was absolutely magical! The guides were knowledgeable and patient with our two young children. They made sure we saw the Big Five and created memories that will last a lifetime. Highly recommend for families!",
      tour: "7-Day Family Safari"
    },
    {
      id: 2,
      name: "James Chen",
      location: "Singapore",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Exceptional service from start to finish. The team handled all our visa requirements and made the entire process stress-free. Our children learned so much about Kenyan culture and wildlife. This was our best family vacation ever!",
      tour: "10-Day Cultural & Wildlife Tour"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Miami, USA",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "As a single parent traveling with three kids, I was nervous about the logistics. TotoTreks made everything seamless! The accommodations were family-friendly, and the itinerary was perfectly paced for children. We can't wait to come back!",
      tour: "5-Day Beach & Safari Combo"
    },
    {
      id: 4,
      name: "David & Priya Patel",
      location: "Toronto, Canada",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5,
      text: "The attention to detail was impressive. From child-friendly meals to engaging activities tailored to our 6 and 8-year-olds, everything was thoughtfully planned. The guides were fantastic with kids and taught them so much about conservation.",
      tour: "Masai Mara Family Experience"
    },
    {
      id: 5,
      name: "Sophie Laurent",
      location: "Paris, France",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      rating: 5,
      text: "Magnifique! The blend of adventure and comfort was perfect. Our teenagers loved the hot air balloon safari, and our youngest enjoyed the cultural village visits. TotoTreks truly understands what families need for an unforgettable African adventure.",
      tour: "14-Day Ultimate Kenya Adventure"
    },
    {
      id: 6,
      name: "Mark & Jennifer Wilson",
      location: "Sydney, Australia",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      text: "We've traveled extensively with our children, but this trip exceeded all expectations. The safety measures were top-notch, guides were experienced, and the wildlife encounters were breathtaking. Worth every penny!",
      tour: "9-Day Kenya Wildlife Safari"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "50+", label: "Destinations" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="bg-warm-beige dark:bg-gray-900 dark:text-white duration-100 py-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 
          data-aos="fade-down" 
          className="text-4xl sm:text-5xl font-bold font-serif mb-4 text-amber-950 dark:text-white"
        >
          What Our Families Say
        </h1>
        <p 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Real stories from families who have experienced the magic of Kenya with TotoTreks
        </p>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mb-16">
        <div 
          data-aos="zoom-in"
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-sunset-orange dark:text-primary mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-golden-orange/20 dark:text-primary/20">
                <FaQuoteLeft size={40} />
              </div>

              {/* Profile Section */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-golden-orange dark:border-primary"
                />
                <div>
                  <h3 className="font-bold text-lg text-amber-950 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-golden-orange dark:text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Tour Tag */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs font-semibold text-sunset-orange dark:text-primary">
                  {testimonial.tour}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div 
          data-aos="zoom-in"
          className="bg-gradient-to-r from-sunset-orange to-golden-orange dark:from-primary dark:to-golden-orange rounded-2xl p-12 shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of families who have discovered the magic of Kenya with TotoTreks. 
            Let us create an unforgettable adventure for your family.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-amber-950 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start Planning Your Adventure
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;