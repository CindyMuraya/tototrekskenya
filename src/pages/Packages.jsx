import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaSafari, FaUmbrellaBeach, FaClock, FaUsers, FaStar, FaMapMarkerAlt, FaGift} from "react-icons/fa";
import { MdFamilyRestroom, MdWeekend } from "react-icons/md";
import { GiElephant } from "react-icons/gi";

const Packages = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  // Handle URL parameters for filtering
  useEffect(() => {
    const filter = searchParams.get('filter');
    const special = searchParams.get('special');
    
    if (filter) {
      setActiveCategory(filter);
      
      // Scroll to packages section after a brief delay to allow rendering
      setTimeout(() => {
        const element = document.getElementById('packages-grid');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [searchParams]);

  const categories = [
    { id: "all", name: "All Packages", icon: <FaStar /> },
    { id: "parent-child", name: "Parent-Child", icon: <MdFamilyRestroom /> },
    { id: "safari", name: "Safari Adventures", icon: <FaSafari /> },
    { id: "beach", name: "Beach Holidays", icon: <FaUmbrellaBeach /> },
    { id: "holiday", name: "Special Holidays", icon: <FaGift /> },
    { id: "weekend", name: "Weekend Getaways", icon: <MdWeekend /> }
  ];

  const packages = [
    // Parent-Child Packages
    {
      id: 1,
      category: "parent-child",
      featured: true,
      title: "Mom & Me Safari Experience",
      subtitle: "3 Days / 2 Nights",
      price: "From $850 per person",
      image: "🦁",
      description: "A special bonding safari designed for mothers and daughters/sons to connect while experiencing Kenya's wildlife.",
      duration: "3 Days / 2 Nights",
      groupSize: "2-4 people",
      location: "Maasai Mara",
      includes: [
        "Luxury tented camp accommodation",
        "All meals and beverages",
        "Daily game drives",
        "Maasai cultural visit",
        "Photography session",
        "Bonding activities & storytelling evenings"
      ],
      highlights: [
        "Private safari vehicle",
        "Sunset at the Mara River",
        "Mother-child spa treatment",
        "Memory journal included"
      ],
      color: "from-sunset-orange to-golden-orange"
    },
    {
      id: 2,
      category: "parent-child",
      featured: true,
      title: "Dad & Me Adventure Trek",
      subtitle: "4 Days / 3 Nights",
      price: "From $1,200 per person",
      image: "⛰️",
      description: "An adventurous trekking experience for fathers and their children, building resilience and creating memories.",
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 people",
      location: "Mount Kenya Foothills",
      includes: [
        "Mountain lodge stays",
        "Expert trekking guides",
        "All camping equipment",
        "Nutritious meals",
        "Team-building activities",
        "Achievement certificates"
      ],
      highlights: [
        "Father-child challenges",
        "Campfire storytelling",
        "Wildlife spotting",
        "Sunrise summit attempt"
      ],
      color: "from-rich-earth-brown to-burnt-umber"
    },
    {
      id: 3,
      category: "parent-child",
      title: "Family Beach Bonding",
      subtitle: "5 Days / 4 Nights",
      price: "From $700 per person",
      image: "🏖️",
      description: "A relaxing coastal experience perfect for parents and children to unwind, play, and reconnect.",
      duration: "5 Days / 4 Nights",
      groupSize: "2-8 people",
      location: "Diani Beach",
      includes: [
        "Beachfront resort accommodation",
        "Full board meals",
        "Water sports activities",
        "Dhow sunset cruise",
        "Beach games & activities",
        "Snorkeling equipment"
      ],
      highlights: [
        "Build sandcastles together",
        "Dolphin watching",
        "Beach bonfire nights",
        "Family photography session"
      ],
      color: "from-light-green to-muted-green"
    },

    // Safari Packages
    {
      id: 4,
      category: "safari",
      featured: true,
      title: "Classic Kenya Safari",
      subtitle: "7 Days / 6 Nights",
      price: "From $2,500 per person",
      image: "🐘",
      description: "Experience the best of Kenya's wildlife in Maasai Mara, Amboseli, and Lake Nakuru with expert guides.",
      duration: "7 Days / 6 Nights",
      groupSize: "4-12 people",
      location: "Maasai Mara, Amboseli, Lake Nakuru",
      includes: [
        "Luxury lodge accommodation",
        "All meals during safari",
        "Professional safari guide",
        "Park entry fees",
        "Game drives twice daily",
        "Airport transfers"
      ],
      highlights: [
        "Big Five guarantee",
        "Great Migration season",
        "Mount Kilimanjaro views",
        "Flamingo watching"
      ],
      color: "from-deep-clay-brown to-rich-earth-brown"
    },
    {
      id: 5,
      category: "safari",
      title: "Family Safari Adventure",
      subtitle: "5 Days / 4 Nights",
      price: "From $1,800 per person",
      image: "🦒",
      description: "A child-friendly safari adventure designed for families with younger children to enjoy wildlife safely.",
      duration: "5 Days / 4 Nights",
      groupSize: "4-10 people",
      location: "Tsavo & Amboseli",
      includes: [
        "Family-friendly lodges",
        "Child-oriented activities",
        "Educational wildlife programs",
        "Swimming pool access",
        "Junior ranger programs",
        "Family game drives"
      ],
      highlights: [
        "Red elephants of Tsavo",
        "Kids' nature walks",
        "Wildlife documentaries",
        "Interactive learning sessions"
      ],
      color: "from-golden-orange to-sunset-orange"
    },

    // Beach Packages
    {
      id: 6,
      category: "beach",
      title: "Tropical Paradise Escape",
      subtitle: "6 Days / 5 Nights",
      price: "From $1,400 per person",
      image: "🌴",
      description: "Luxurious beach holiday on Kenya's stunning coastline with water sports and cultural experiences.",
      duration: "6 Days / 5 Nights",
      groupSize: "2-8 people",
      location: "Watamu & Malindi",
      includes: [
        "5-star beach resort",
        "All-inclusive meals",
        "Water sports equipment",
        "Marine park visits",
        "Spa treatments",
        "Cultural tours"
      ],
      highlights: [
        "Turtle conservation center",
        "Glass-bottom boat rides",
        "Gede Ruins exploration",
        "Fresh seafood dinners"
      ],
      color: "from-light-green to-muted-green"
    },

    // Holiday Packages
    {
      id: 7,
      category: "holiday",
      featured: true,
      specialHoliday: "christmas",
      title: "Christmas Family Safari",
      subtitle: "7 Days / 6 Nights",
      price: "From $3,200 per person",
      image: "🎄",
      description: "Celebrate Christmas in the wild with your family. Special festive activities and traditional celebrations.",
      duration: "7 Days / 6 Nights",
      groupSize: "4-12 people",
      location: "Maasai Mara & Lake Naivasha",
      includes: [
        "Luxury safari lodges",
        "Christmas gala dinner",
        "Santa visit for kids",
        "Gift exchange activities",
        "Festive decorations",
        "All game drives"
      ],
      highlights: [
        "Christmas Day in the wild",
        "Family carol singing",
        "Special festive meals",
        "New Year's Eve celebration"
      ],
      color: "from-sunset-orange to-golden-orange",
      badge: "Christmas Special"
    },
    {
      id: 8,
      category: "holiday",
      specialHoliday: "easter",
      title: "Easter Family Adventure",
      subtitle: "5 Days / 4 Nights",
      price: "From $1,900 per person",
      image: "🐣",
      description: "Easter holiday package with family activities, egg hunts, and wildlife adventures perfect for the season.",
      duration: "5 Days / 4 Nights",
      groupSize: "4-10 people",
      location: "Amboseli & Tsavo",
      includes: [
        "Family lodge accommodation",
        "Easter egg hunt activities",
        "All meals with Easter brunch",
        "Game drives",
        "Children's activities",
        "Easter themed entertainment"
      ],
      highlights: [
        "Easter Sunday special brunch",
        "Kids' treasure hunt",
        "Wildlife viewing",
        "Family bonding games"
      ],
      color: "from-golden-orange to-sunset-orange",
      badge: "Easter Special"
    },
    {
      id: 9,
      category: "holiday",
      specialHoliday: "school",
      title: "School Holiday Adventure Camp",
      subtitle: "4 Days / 3 Nights",
      price: "From $650 per child",
      image: "🎒",
      description: "Action-packed school holiday program with educational activities, adventure sports, and new friendships.",
      duration: "4 Days / 3 Nights",
      groupSize: "10-20 children",
      location: "Great Rift Valley",
      includes: [
        "Adventure camp accommodation",
        "All meals and snacks",
        "Supervised activities",
        "Educational workshops",
        "Sports and games",
        "Certificate of participation"
      ],
      highlights: [
        "Rock climbing & rappelling",
        "Nature trails",
        "Team building exercises",
        "Campfire stories"
      ],
      color: "from-rich-earth-brown to-burnt-umber",
      badge: "School Holiday"
    },

    // Weekend Packages
    {
      id: 10,
      category: "weekend",
      title: "Weekend Wildlife Escape",
      subtitle: "3 Days / 2 Nights",
      price: "From $550 per person",
      image: "🦓",
      description: "Quick weekend getaway perfect for busy families to experience wildlife without taking extended time off.",
      duration: "3 Days / 2 Nights",
      groupSize: "2-8 people",
      location: "Nairobi National Park & Lake Naivasha",
      includes: [
        "Boutique lodge accommodation",
        "All meals",
        "Game drives",
        "Boat ride on Lake Naivasha",
        "Giraffe Centre visit",
        "Transport from Nairobi"
      ],
      highlights: [
        "City skyline wildlife views",
        "Hippo watching",
        "Bird sanctuary visit",
        "Minimal travel time"
      ],
      color: "from-deep-clay-brown to-rich-earth-brown"
    },
    {
      id: 11,
      category: "weekend",
      title: "Beach Bliss Weekend",
      subtitle: "3 Days / 2 Nights",
      price: "From $480 per person",
      image: "🌊",
      description: "Rejuvenate with a quick beach escape. Perfect for families needing a refreshing coastal break.",
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      location: "Mombasa North Coast",
      includes: [
        "Beach resort accommodation",
        "Full board meals",
        "Beach activities",
        "Swimming pool access",
        "Evening entertainment",
        "Return transfers"
      ],
      highlights: [
        "Pristine white beaches",
        "Snorkeling trips",
        "Sunset watching",
        "Local seafood"
      ],
      color: "from-light-green to-muted-green"
    },

    // Birthday & Milestone Packages
    {
      id: 12,
      category: "parent-child",
      title: "Birthday Safari Celebration",
      subtitle: "3 Days / 2 Nights",
      price: "From $950 per person",
      image: "🎂",
      description: "Make birthdays unforgettable with a special safari celebration including cake, decorations, and surprises.",
      duration: "3 Days / 2 Nights",
      groupSize: "4-12 people",
      location: "Client's Choice",
      includes: [
        "Luxury accommodation",
        "Birthday cake & decorations",
        "Special birthday dinner",
        "Gift for birthday child",
        "Photography package",
        "All activities"
      ],
      highlights: [
        "Surprise birthday setup",
        "Wildlife birthday greeting",
        "Memory book creation",
        "Personalized itinerary"
      ],
      color: "from-sunset-orange to-golden-orange"
    }
  ];

  const filteredPackages = activeCategory === "all" 
    ? packages 
    : packages.filter(pkg => pkg.category === activeCategory);

  // Further filter by special holiday type if specified
  const specialFilter = searchParams.get('special');
  const displayPackages = specialFilter && activeCategory === "holiday"
    ? filteredPackages.filter(pkg => pkg.specialHoliday === specialFilter)
    : filteredPackages;

  const featuredPackages = packages.filter(pkg => pkg.featured);

  return (
    <div className="bg-warm-beige min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rich-earth-brown via-burnt-umber to-deep-clay-brown text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
              Our Travel Packages
            </h1>
            <p className="text-xl md:text-2xl font-poppins text-gray-200 leading-relaxed">
              Carefully crafted experiences for families, parent-child adventures, and unforgettable holidays
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-10 opacity-10">
          <GiElephant className="text-9xl" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <MdFamilyRestroom className="text-9xl" />
        </div>
      </div>

      {/* Featured Packages */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-montserrat font-bold text-rich-earth-brown mb-4">
            Featured Packages
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our most popular and highly recommended travel experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {pkg.badge && (
                <div className="bg-gradient-to-r from-red-500 to-green-600 text-white text-center py-2 font-semibold">
                  {pkg.badge}
                </div>
              )}
              <div className={`bg-gradient-to-br ${pkg.color} text-white p-12 flex items-center justify-center text-8xl`}>
                {pkg.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-sunset-orange uppercase tracking-wide">
                    {pkg.subtitle}
                  </span>
                  <FaStar className="text-golden-orange" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-rich-earth-brown mb-3">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pkg.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-700">
                    <FaClock className="text-sunset-orange mr-2" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <FaUsers className="text-sunset-orange mr-2" />
                    <span>{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <FaMapMarkerAlt className="text-sunset-orange mr-2" />
                    <span>{pkg.location}</span>
                  </div>
                </div>
                <div className="border-t pt-4 mb-4">
                  <p className="text-2xl font-bold text-rich-earth-brown">{pkg.price}</p>
                </div>
                <button className="w-full bg-sunset-orange hover:bg-golden-orange text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  View Details & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white py-8 sticky top-0 z-20 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat.id
                    ? "bg-sunset-orange text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Packages Grid */}
      <div id="packages-grid" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-montserrat font-bold text-rich-earth-brown mb-4">
            {activeCategory === "all" ? "All Packages" : categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <p className="text-lg text-gray-700">
            {displayPackages.length} package{displayPackages.length !== 1 ? "s" : ""} available
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {pkg.badge && (
                <div className="bg-gradient-to-r from-red-500 to-green-600 text-white text-center py-2 text-sm font-semibold">
                  {pkg.badge}
                </div>
              )}
              <div className={`bg-gradient-to-br ${pkg.color} text-white p-10 flex items-center justify-center text-7xl`}>
                {pkg.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-sunset-orange uppercase tracking-wide">
                    {pkg.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-rich-earth-brown mb-3">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {pkg.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-700">
                    <FaClock className="text-sunset-orange mr-2 flex-shrink-0" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-700">
                    <FaMapMarkerAlt className="text-sunset-orange mr-2 flex-shrink-0" />
                    <span>{pkg.location}</span>
                  </div>
                </div>
                <div className="border-t pt-4 mb-4">
                  <p className="text-xl font-bold text-rich-earth-brown">{pkg.price}</p>
                </div>
                <button className="w-full bg-rich-earth-brown hover:bg-burnt-umber text-white font-semibold py-2 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Package CTA */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-sunset-orange via-golden-orange to-burnt-umber rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We specialize in creating custom packages tailored to your family's unique needs and dreams. 
            Let us design the perfect adventure just for you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-sunset-orange hover:bg-warm-beige font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request Custom Package
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="bg-rich-earth-brown hover:bg-burnt-umber text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
