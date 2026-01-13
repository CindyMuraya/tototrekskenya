import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaCompass, FaArrowLeft } from 'react-icons/fa';

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-cream dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8" data-aos="zoom-in">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-golden-orange animate-pulse">
            404
          </h1>
        </div>

        {/* Content */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Oops! Lost in the Safari
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Looks like this path hasn't been explored yet. Let's get you back on track to your Kenyan adventure!
          </p>

          {/* Adventure Icon */}
          <div className="text-6xl mb-8">
            🦁🌍🏔️
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaArrowLeft />
              Go Back
            </button>
            
            <Link to="/">
              <button className="flex items-center gap-2 bg-gradient-to-r from-sunset-orange to-golden-orange hover:from-golden-orange hover:to-sunset-orange text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaHome />
                Home
              </button>
            </Link>

            <Link to="/adventures">
              <button className="flex items-center gap-2 bg-gradient-to-r from-rich-earth-brown to-burnt-umber hover:from-burnt-umber hover:to-rich-earth-brown text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaCompass />
                Explore
              </button>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700" data-aos="fade-up" data-aos-delay="400">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Popular destinations you might be looking for:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/about" className="text-sunset-orange hover:text-golden-orange dark:text-primary dark:hover:text-golden-orange transition-colors duration-300 text-sm font-medium">
              About Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/services" className="text-sunset-orange hover:text-golden-orange dark:text-primary dark:hover:text-golden-orange transition-colors duration-300 text-sm font-medium">
              Services
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/packages" className="text-sunset-orange hover:text-golden-orange dark:text-primary dark:hover:text-golden-orange transition-colors duration-300 text-sm font-medium">
              Packages
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/contact" className="text-sunset-orange hover:text-golden-orange dark:text-primary dark:hover:text-golden-orange transition-colors duration-300 text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPage;