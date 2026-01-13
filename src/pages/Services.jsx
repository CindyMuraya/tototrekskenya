import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSafari, FaHiking, FaCamera, FaMapMarkedAlt, FaUsers, FaHotel, FaPlane, FaCheckCircle, FaStar, FaBirthdayCake, FaGlobeAmericas, FaPassport, FaShieldAlt, FaGift, FaCalendarAlt, FaUserTie, FaGraduationCap } from "react-icons/fa";
import { MdFamilyRestroom, MdWeekend, MdCardTravel } from "react-icons/md";
import { GiElephant, GiCampingTent, GiMountainClimbing } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

const Services = () => {
  const navigate = useNavigate();
  
  const coreOfferings = [
    {
      icon: <MdFamilyRestroom className="text-5xl" />,
      title: "Parent-Child Travel Packages",
      description: "Customized local and international travel experiences designed for parents and their children to bond and create lasting memories.",
      features: [
        "Tailored itineraries for all ages",
        "Safe and family-friendly activities",
        "Educational and fun experiences",
        "Flexible scheduling options"
      ],
      color: "from-sunset-orange to-golden-orange"
    },
    {
      icon: <FaSafari className="text-5xl" />,
      title: "Safari & Beach Holidays",
      description: "Combined safari adventures and coastal relaxation packages perfect for the whole family.",
      features: [
        "Wildlife viewing experiences",
        "Pristine beach resorts",
        "Water sports & activities",
        "Cultural interactions"
      ],
      color: "from-rich-earth-brown to-burnt-umber"
    },
    {
      icon: <MdWeekend className="text-5xl" />,
      title: "Weekend Family Getaways",
      description: "Quick escapes for busy families to reconnect and unwind over the weekend.",
      features: [
        "2-3 day packages",
        "Close to major cities",
        "Stress-free planning",
        "Family bonding activities"
      ],
      color: "from-light-green to-muted-green"
    },
    {
      icon: <FaBirthdayCake className="text-5xl" />,
      title: "Birthday & Milestone Packages",
      description: "Celebrate special occasions with unforgettable travel experiences tailored to create cherished memories.",
      features: [
        "Personalized celebrations",
        "Special arrangements & surprises",
        "Photo documentation",
        "Age-appropriate activities"
      ],
      color: "from-golden-orange to-sunset-orange"
    },
    {
      icon: <FaCalendarAlt className="text-5xl" />,
      title: "School Holiday Escapes",
      description: "Make the most of school breaks with exciting adventures that educate and entertain.",
      features: [
        "Educational tours",
        "Adventure activities",
        "Cultural experiences",
        "Skill-building programs"
      ],
      color: "from-deep-clay-brown to-rich-earth-brown"
    },
    {
      icon: <FaGlobeAmericas className="text-5xl" />,
      title: "Diaspora Family Planning",
      description: "Specialized travel planning for diaspora families visiting Kenya or traveling together.",
      features: [
        "Reconnection experiences",
        "Heritage & cultural tours",
        "Extended family coordination",
        "Local expertise & guidance"
      ],
      color: "from-burnt-umber to-deep-clay-brown"
    },
    {
      icon: <HiUserGroup className="text-5xl" />,
      title: "Bonding Retreats",
      description: "\"Mom & Me\" and \"Dad & Me\" special bonding retreats designed for quality one-on-one time.",
      features: [
        "Parent-child focused activities",
        "Meaningful conversations",
        "Shared adventures",
        "Memory-making experiences"
      ],
      color: "from-sunset-orange to-golden-orange"
    },
    {
      icon: <BsFillPeopleFill className="text-5xl" />,
      title: "Family Group Travel",
      description: "Organize multi-family trips for cousins, siblings, and extended families to travel together.",
      features: [
        "Large group coordination",
        "Multi-generational planning",
        "Group discounts available",
        "Customized group activities"
      ],
      color: "from-rich-earth-brown to-burnt-umber"
    }
  ];

  const travelServices = [
    {
      icon: <FaPlane />,
      title: "Flight Bookings",
      description: "Domestic and international flight arrangements with competitive rates."
    },
    {
      icon: <FaHotel />,
      title: "Hotel & Resort Reservations",
      description: "Carefully selected family-friendly accommodations to suit all budgets."
    },
    {
      icon: <MdCardTravel />,
      title: "Airport Transfers & Transport",
      description: "Reliable and safe airport transfers and local transport arrangements."
    },
    {
      icon: <FaPassport />,
      title: "Visa Application Assistance",
      description: "Expert guidance through visa application processes for all destinations."
    },
    {
      icon: <FaShieldAlt />,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance services for peace of mind during your trip."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Tailor-Made Itineraries",
      description: "Personalized travel plans designed around your preferences and schedule."
    },
    {
      icon: <FaGift />,
      title: "Travel Gift Vouchers",
      description: "Give the gift of adventure with our flexible travel gift vouchers."
    },
    {
      icon: <FaUserTie />,
      title: "Travel Consultation",
      description: "Professional travel planning and budget consultation services."
    }
  ];

  const specializedServices = [
    {
      icon: <FaUsers />,
      title: "Group & Corporate Travel",
      description: "Organized group bookings for corporate events, team building, and large parties.",
      color: "bg-gradient-to-br from-rich-earth-brown to-burnt-umber"
    },
    {
      icon: <FaUserTie />,
      title: "MICE Services",
      description: "Professional planning for Meetings, Incentives, Conferences, and Events.",
      color: "bg-gradient-to-br from-sunset-orange to-golden-orange"
    },
    {
      icon: <FaGraduationCap />,
      title: "Student & Educational Tours",
      description: "Safe and enriching educational travel experiences for students and schools.",
      color: "bg-gradient-to-br from-light-green to-muted-green"
    },
    {
      icon: <FaCamera />,
      title: "Travel Photography Add-ons",
      description: "Professional photography services to capture your journey's best moments.",
      color: "bg-gradient-to-br from-deep-clay-brown to-rich-earth-brown"
    }
  ];

  const whyChooseUs = [
    "Specialized in parent-child travel experiences",
    "20+ years of experience in Kenya tourism",
    "Licensed and insured tour operator",
    "Expert local guides with deep knowledge",
    "24/7 customer support during your trip",
    "Competitive pricing with no hidden fees",
    "Full-service travel agency solutions",
    "Eco-friendly and sustainable tourism practices"
  ];

  return (
    <div className="bg-warm-beige min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rich-earth-brown via-burnt-umber to-deep-clay-brown text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
              Our Products & Services
            </h1>
            <p className="text-xl md:text-2xl font-poppins text-gray-200 leading-relaxed">
              Curated travel experiences for parents and children, alongside full-service travel solutions for individuals, families, and groups
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <GiElephant className="text-9xl" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <FaSafari className="text-9xl" />
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-montserrat font-bold text-rich-earth-brown mb-4">
            Core Offerings
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Specialized parent-child travel packages and family experiences designed to create lasting bonds
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coreOfferings.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`bg-gradient-to-br ${service.color} text-white p-8 flex items-center justify-center`}>
                {service.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-rich-earth-brown mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-700">
                      <FaCheckCircle className="text-sunset-orange mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Full Travel Agency Services */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-rich-earth-brown mb-4">
              Full Travel Agency Services
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Complete travel solutions to handle every aspect of your journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="text-sunset-orange text-4xl mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-rich-earth-brown mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Services */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-rich-earth-brown mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Professional solutions for corporate, educational, and special interest travel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                className={`${service.color} text-white rounded-xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Holiday Packages Highlight */}
        <div className="bg-gradient-to-r from-golden-orange via-sunset-orange to-burnt-umber rounded-2xl p-8 md:p-12 mb-16 text-white text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Special Holiday Packages
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Make your Christmas, Easter, and school holidays extraordinary with our specially curated packages
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/packages?filter=holiday&special=christmas')}
              className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 hover:bg-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <p className="font-semibold">Christmas Packages</p>
            </button>
            <button 
              onClick={() => navigate('/packages?filter=holiday&special=easter')}
              className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 hover:bg-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <p className="font-semibold">Easter Getaways</p>
            </button>
            <button 
              onClick={() => navigate('/packages?filter=holiday&special=school')}
              className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 hover:bg-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <p className="font-semibold">School Holiday Specials</p>
            </button>
            <button 
              onClick={() => navigate('/packages?filter=weekend')}
              className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 hover:bg-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <p className="font-semibold">Weekend Escapes</p>
            </button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-rich-earth-brown mb-6">
                Why Choose Toto Treks Kenya?
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We are a specialized travel agency focusing on parent-child travel experiences, 
                alongside comprehensive travel solutions. Our dedication to creating meaningful family bonds 
                through travel sets us apart.
              </p>
              <div className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start"
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                  >
                    <FaStar className="text-golden-orange text-xl mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-rich-earth-brown to-sunset-orange rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Ready to Start Your Adventure?</h3>
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm uppercase tracking-wide mb-1">Contact Us</p>
                    <p className="text-xl font-semibold">+254 XXX XXX XXX</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm uppercase tracking-wide mb-1">Email</p>
                    <p className="text-xl font-semibold">info@tototreks.com</p>
                  </div>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full bg-white text-sunset-orange hover:bg-warm-beige font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 mt-4"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-montserrat font-bold text-rich-earth-brown mb-4">
            Ready to Create Family Memories?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Whether it's a parent-child bonding trip or a full family adventure, we're here to make it happen. 
            Let's plan your perfect journey together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/packages')}
              className="bg-sunset-orange hover:bg-golden-orange text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Our Packages
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-rich-earth-brown hover:bg-burnt-umber text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
