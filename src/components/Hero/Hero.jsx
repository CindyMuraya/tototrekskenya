import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-white text-center md:text-left" data-aos="fade-up">
        <p className="text-sunset-orange text-lg md:text-xl lg:text-2xl font-poppins mb-3 md:mb-4" data-aos="fade-up" data-aos-delay="200">
          Welcome to Toto Treks Kenya
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-semibold mb-4 md:mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">
          Where Every Journey Becomes a Family Story
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 font-serif text-gray-200 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
          Discover the magic of Kenya with unforgettable safaris, breathtaking landscapes, 
          and authentic cultural experiences. Let us create memories that last a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="800">
          <button 
            onClick={() => navigate('/adventures')}
            className="bg-sunset-orange hover:bg-sunset-orange/80 text-white px-6 md:px-8 py-3 rounded-md text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Adventures
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 md:px-8 py-3 rounded-md text-base md:text-lg font-semibold transition-all duration-300 shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;