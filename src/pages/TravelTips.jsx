import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPassport, 
  FaPlane, 
  FaCamera, 
  FaHeart, 
  FaMapMarkedAlt, 
  FaChild,
  FaUserFriends,
  FaSuitcaseRolling,
  FaShieldAlt,
  FaLightbulb
} from 'react-icons/fa';

const TravelTips = () => {
  const travelTipsData = [
    {
      id: 1,
      category: 'Visa & Documentation',
      title: 'How to Apply for a Visa from Kenya',
      description: 'Complete guide to visa applications, required documents, processing times, and tips for a smooth application process.',
      icon: <FaPassport />,
      color: 'from-blue-500 to-blue-700',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80'
    },
    {
      id: 2,
      category: 'Family Adventures',
      title: 'Best Safari Spots for Kids',
      description: 'Discover family-friendly safari destinations where children can safely observe wildlife and learn about conservation.',
      icon: <FaChild />,
      color: 'from-green-500 to-green-700',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80'
    },
    {
      id: 3,
      category: 'Packing Tips',
      title: 'Essential Packing List for Family Safari',
      description: 'Everything you need to pack for a comfortable and safe safari experience with kids, from clothing to first-aid essentials.',
      icon: <FaSuitcaseRolling />,
      color: 'from-purple-500 to-purple-700',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'
    },
    {
      id: 4,
      category: 'Safety First',
      title: 'Keeping Kids Safe on Safari',
      description: 'Important safety guidelines, health precautions, and tips for ensuring your children have a secure safari adventure.',
      icon: <FaShieldAlt />,
      color: 'from-red-500 to-red-700',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80'
    },
    {
      id: 5,
      category: 'Cultural Experiences',
      title: 'Teaching Kids About Kenyan Culture',
      description: 'Engage your children with local traditions, customs, and cultural experiences that make travel educational and fun.',
      icon: <FaUserFriends />,
      color: 'from-yellow-500 to-orange-600',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80'
    },
    {
      id: 6,
      category: 'Photography Tips',
      title: 'Capturing Safari Memories with Kids',
      description: 'Tips for taking amazing family photos on safari, including camera settings, timing, and creative composition ideas.',
      icon: <FaCamera />,
      color: 'from-pink-500 to-rose-700',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80'
    },
    {
      id: 7,
      category: 'Travel Planning',
      title: 'Best Time to Visit Kenya with Children',
      description: 'Seasonal guide to help you choose the perfect time for your family safari based on weather, wildlife, and crowd levels.',
      icon: <FaPlane />,
      color: 'from-teal-500 to-cyan-700',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80'
    },
    {
      id: 8,
      category: 'Destination Stories',
      title: 'Exploring Masai Mara: A Family Journey',
      description: 'Real family experiences and stories from the Masai Mara, including encounters with wildlife and memorable moments.',
      icon: <FaHeart />,
      color: 'from-indigo-500 to-purple-700',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80'
    },
    {
      id: 9,
      category: 'Adventure Planning',
      title: 'Age-Appropriate Safari Activities',
      description: 'Discover which safari activities are suitable for different age groups, from toddlers to teenagers.',
      icon: <FaMapMarkedAlt />,
      color: 'from-emerald-500 to-green-700',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80'
    },
    {
      id: 10,
      category: 'Travel Tips',
      title: 'Managing Jetlag with Young Travelers',
      description: 'Practical strategies to help your children adjust to time zone changes and stay energized during your trip.',
      icon: <FaLightbulb />,
      color: 'from-amber-500 to-orange-700',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
    },
  ];

  const categories = [
    'All Tips',
    'Visa & Documentation',
    'Family Adventures',
    'Packing Tips',
    'Safety First',
    'Cultural Experiences',
    'Travel Planning'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Tips');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredTips = travelTipsData.filter(tip => {
    const matchesCategory = selectedCategory === 'All Tips' || tip.category === selectedCategory;
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-beige to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Travel Tips & Stories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Essential guides and inspiring stories for families planning their Kenyan adventure. 
            Learn from experienced travelers and make your journey unforgettable.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Search travel tips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 
                       focus:border-sunset-orange dark:focus:border-sunset-orange outline-none
                       bg-white dark:bg-gray-800 text-gray-800 dark:text-white
                       text-lg transition-all duration-300 shadow-lg"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-sunset-orange to-primary text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-sunset-orange'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTips.map((tip, index) => (
            <Link
              key={tip.id}
              to={`/travel-tips/${tip.id}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl 
                            hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-sunset-orange to-primary 
                                text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {tip.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 
                                text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                    {tip.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl 
                                bg-gradient-to-r from-burnt-umber to-rich-earth-brown text-white text-xl mb-4 shadow-lg">
                    {tip.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 
                               group-hover:text-sunset-orange dark:group-hover:text-sunset-orange transition-colors">
                    {tip.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {tip.description}
                  </p>
                  
                  <div className="flex items-center text-sunset-orange font-semibold group-hover:gap-3 gap-2 transition-all">
                    Read More 
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredTips.length === 0 && (
          <div className="text-center py-16" data-aos="fade-up">
            <p className="text-2xl text-gray-600 dark:text-gray-400">
              No travel tips found. Try a different search or category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-burnt-umber to-rich-earth-brown rounded-3xl p-12 text-center text-white shadow-2xl"
             data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect family safari experience in Kenya. 
            Our expert team is ready to create unforgettable memories for you and your children.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-sunset-orange text-white px-8 py-4 rounded-full font-semibold 
                       hover:bg-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/packages"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full 
                       font-semibold hover:bg-white hover:text-primary transition-all duration-300 
                       transform hover:scale-105"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;