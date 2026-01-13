import React, { useState } from 'react';
import { FaCamera, FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Gallery images with categories
  const galleryImages = [
    // Safari Adventures
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      category: 'safari',
      title: 'Big Five Safari',
      description: 'Majestic lion in Maasai Mara'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&q=80',
      category: 'safari',
      title: 'Elephant Encounter',
      description: 'Elephants at Amboseli National Park'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
      category: 'safari',
      title: 'Cheetah Spotting',
      description: 'Fast and graceful cheetah'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      category: 'safari',
      title: 'Zebra Herds',
      description: 'Zebras grazing in the savanna'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&q=80',
      category: 'safari',
      title: 'Giraffe Family',
      description: 'Giraffes in their natural habitat'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
      category: 'safari',
      title: 'Rhino Conservation',
      description: 'Protected rhinos in sanctuary'
    },

    // Family Adventures
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80',
      category: 'family',
      title: 'Family Safari Experience',
      description: 'Creating memories together'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      category: 'family',
      title: 'Beach Family Fun',
      description: 'Relaxing at coastal paradise'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
      category: 'family',
      title: 'Family Hiking',
      description: 'Mountain adventures with kids'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80',
      category: 'family',
      title: 'Campfire Stories',
      description: 'Evening bonding moments'
    },

    // Camp Activities
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80',
      category: 'camping',
      title: 'Luxury Tented Camp',
      description: 'Comfort in the wild'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
      category: 'camping',
      title: 'Campfire Evenings',
      description: 'Stories under the stars'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&q=80',
      category: 'camping',
      title: 'Bush Breakfast',
      description: 'Outdoor dining experience'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=800&q=80',
      category: 'camping',
      title: 'Sunset Camp Views',
      description: 'Breathtaking evening scenes'
    },

    // Landscape & Nature
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
      category: 'landscape',
      title: 'Maasai Mara Plains',
      description: 'Endless African savanna'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80',
      category: 'landscape',
      title: 'Mount Kenya',
      description: 'Snow-capped peak at dawn'
    },
    {
      id: 17,
      src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
      category: 'landscape',
      title: 'Rift Valley',
      description: 'Dramatic valley views'
    },
    {
      id: 18,
      src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
      category: 'landscape',
      title: 'African Sunset',
      description: 'Golden hour magic'
    },

    // Cultural Experiences
    {
      id: 19,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      category: 'cultural',
      title: 'Maasai Warriors',
      description: 'Traditional jumping dance'
    },
    {
      id: 20,
      src: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
      category: 'cultural',
      title: 'Village Visit',
      description: 'Authentic cultural immersion'
    },
    {
      id: 21,
      src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      category: 'cultural',
      title: 'Traditional Crafts',
      description: 'Handmade Maasai beadwork'
    },
    {
      id: 22,
      src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80',
      category: 'cultural',
      title: 'Local Market',
      description: 'Vibrant market experiences'
    },

    // Adventure Activities
    {
      id: 23,
      src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      category: 'adventure',
      title: 'Hot Air Balloon',
      description: 'Aerial safari views'
    },
    {
      id: 24,
      src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
      category: 'adventure',
      title: 'Water Sports',
      description: 'Coastal adventures'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: '🌍' },
    { id: 'safari', name: 'Safari', icon: '🦁' },
    { id: 'family', name: 'Family', icon: '👨‍👩‍👧‍👦' },
    { id: 'camping', name: 'Camping', icon: '⛺' },
    { id: 'landscape', name: 'Landscape', icon: '🏔️' },
    { id: 'cultural', name: 'Cultural', icon: '🎭' },
    { id: 'adventure', name: 'Adventure', icon: '🎈' },
  ];

  // Filter images based on selected category and search term
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Lightbox navigation
  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FaCamera className="text-6xl mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-4">
              Capturing Moments, Creating Memories
            </p>
            <p className="text-lg text-orange-50 max-w-2xl mx-auto">
              Browse through our collection of incredible adventures, wildlife encounters, and unforgettable experiences
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search photos by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:text-white text-lg transition-all shadow-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Showing <span className="font-bold text-orange-600 dark:text-orange-400">{filteredImages.length}</span> {filteredImages.length === 1 ? 'photo' : 'photos'}
          </p>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer bg-white dark:bg-gray-800"
                onClick={() => setSelectedImage(image)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                  {categories.find(cat => cat.id === image.category)?.icon} {categories.find(cat => cat.id === image.category)?.name}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FaSearch className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">
              No photos found
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <FaTimes className="text-3xl" />
          </button>

          {/* Previous Button */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <FaChevronLeft className="text-4xl" />
            </button>
          )}

          {/* Next Button */}
          {currentIndex < filteredImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <FaChevronRight className="text-4xl" />
            </button>
          )}

          {/* Image Container */}
          <div 
            className="max-w-6xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="bg-white dark:bg-gray-800 mt-4 p-6 rounded-lg shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedImage.description}
                  </p>
                </div>
                <span className="ml-4 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                  {categories.find(cat => cat.id === selectedImage.category)?.icon}{' '}
                  {categories.find(cat => cat.id === selectedImage.category)?.name}
                </span>
              </div>
              
              {/* Navigation Info */}
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                Photo {currentIndex + 1} of {filteredImages.length}
                <span className="mx-2">•</span>
                Use arrow keys or buttons to navigate
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-12 shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Be Featured?
          </h2>
          <p className="text-xl mb-6 text-orange-50">
            Join one of our adventures and create your own amazing memories
          </p>
          <a 
            href="/adventures"
            className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Browse Adventures
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;