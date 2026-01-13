import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-brown dark:bg-dark text-warm-beige">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-sunset-orange">Toto Treks Kenya</h3>
            <p className="text-warm-beige/80 mb-4 text-sm md:text-base">
              Your trusted partner for unforgettable adventures in Kenya. 
              Experience the beauty of East Africa with expert guidance.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 mt-3">
              <FaLocationDot size={16}  />
              <p className="text-sm md:text-base">Nairobi, Kenya</p>
              </div>
              <a 
                href="tel:+254112464170" 
                className="flex items-center gap-2 text-warm-beige/80 hover:text-sunset-orange transition-colors duration-300 text-sm md:text-base"
              >
                <FaPhone size={16} />
                <span>+254 112 464170</span>
              </a>
              <a 
                href="mailto:info@tototrekskenya.com" 
                className="flex items-center gap-2 text-warm-beige/80 hover:text-sunset-orange transition-colors duration-300 text-sm md:text-base"
              >
                <FaEnvelope size={16} />
                <span>info@tototrekskenya.com</span>
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.facebook.com/people/tototrekskenya/61578040769647" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-beige/70 hover:text-sunset-orange transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/tototreksofficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-beige/70 hover:text-sunset-orange transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-sunset-orange">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={handleLinkClick} className="text-warm-beige/80 hover:text-sunset-orange transition-colors duration-300 text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick} className="text-warm-beige/80 hover:text-sunset-orange transition-colors duration-300 text-sm md:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link to="/adventures" onClick={handleLinkClick} className="text-warm-beige/80 hover:text-sunset-orange transition-colors duration-300 text-sm md:text-base">
                  Adventures
                </Link>
              </li>
              <li>
                <Link to="/ticketingandvisa" onClick={handleLinkClick} className="text-warm-beige/80 hover:text-sunset-orange transition-colors duration-300 text-sm md:text-base">
                  Visa & Ticketing
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="text-warm-beige/80 hover:text-sunset-orange transition-colors duration-300 text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications & Badges */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-sunset-orange">Certifications</h3>
            <p className="text-warm-beige/80 text-xs md:text-sm mb-4">
              We are committed to maintaining the highest standards in tourism.
            </p>
            {/* Placeholder for future badges */}
            <div className="space-y-3">
              <div className="border-2 border-dashed border-burnt-umber rounded-lg p-3 md:p-4 text-center bg-burnt-umber/20">
                <p className="text-warm-beige/70 text-xs md:text-sm">KATO Badge</p>
                <p className="text-warm-beige/50 text-xs mt-1">(Pending Approval)</p>
              </div>
              <div className="border-2 border-dashed border-burnt-umber rounded-lg p-3 md:p-4 text-center bg-burnt-umber/20">
                <p className="text-warm-beige/70 text-xs md:text-sm">KATA Badge</p>
                <p className="text-warm-beige/50 text-xs mt-1">(Pending Approval)</p>
              </div>
              <div className="border-2 border-dashed border-burnt-umber rounded-lg p-3 md:p-4 text-center bg-burnt-umber/20">
                <p className="text-warm-beige/70 text-xs md:text-sm">TOSK Badge</p>
                <p className="text-warm-beige/50 text-xs mt-1">(Pending Approval)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-burnt-umber mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-warm-beige/70 text-xs md:text-sm">
            &copy; {currentYear} <strong className="text-cream">Toto Treks Kenya</strong>. All rights reserved.
            <br />
            Built with <span className="text-red-500">♥ </span> by <a href="https://cindymuraya.mystrikingly.com/" target="_blank" rel="noopener noreferrer" className="text-sunset-orange hover:underline">Cindie Creative Co.</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer