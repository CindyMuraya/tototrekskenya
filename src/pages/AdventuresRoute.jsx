import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoTimeOutline, IoClose } from 'react-icons/io5'
import { BiDollar } from 'react-icons/bi'
import { FaStar, FaMapMarkerAlt, FaUsers, FaHiking, FaCalendarAlt, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa'
import Img1 from '../assets/adventures/safari.jpg'
import Img2 from '../assets/adventures/hiking.jpg'
import Img3 from '../assets/adventures/park.jpg'
import Img4 from '../assets/adventures/birdwatching.jpg'
import Img5 from '../assets/adventures/forest.jpg'
import Img6 from '../assets/adventures/mom-and-me.jpg'
import Img7 from '../assets/adventures/camp.jpg'

const adventuresData = [
  {
    id: 1,
    img: Img1,
    title: "Maasai Mara Safari",
    duration: "5 Days / 4 Nights",
    price: "$1,299",
    category: "Wildlife Safari",
    location: "Kenya",
    featured: true,
    description: "Experience the thrill of the Great Migration and witness the Big Five in their natural habitat.",
    highlights: ["Game drives", "Hot air balloon safari", "Maasai village visit", "Luxury tented camps"],
  },
  {
    id: 2,
    img: Img2,
    title: "Mount Kenya Trek",
    duration: "6 Days / 5 Nights",
    price: "$899",
    category: "Adventure",
    location: "Kenya",
    description: "Conquer Africa's second-highest peak with our guided treks suitable for all skill levels.",
    highlights: ["Professional guides", "Camping equipment", "All meals included", "Summit certificate"],
  },
  {
    id: 3,
    img: Img3,
    title: "Amboseli National Park",
    duration: "3 Days / 2 Nights",
    price: "$749",
    category: "Wildlife Safari",
    location: "Kenya",
    description: "Get up close with majestic elephants against the stunning backdrop of Mount Kilimanjaro.",
    highlights: ["Elephant herds", "Kilimanjaro views", "Bird watching", "Photography opportunities"],
  },
  {
    id: 4,
    img: Img4,
    title: "Lake Nakuru Bird Watching",
    duration: "2 Days / 1 Night",
    price: "$449",
    category: "Nature",
    location: "Kenya",
    description: "Discover the vibrant birdlife, including thousands of flamingos, at the picturesque Lake Nakuru.",
    highlights: ["Flamingo colonies", "Rhino sanctuary", "Nature walks", "Expert ornithologist guide"],
  },
  {
    id: 5,
    img: Img5,
    title: "Kakamega Forest Trek",
    duration: "3 Days / 2 Nights",
    price: "$599",
    category: "Nature",
    location: "Kenya",
    description: "Explore Kenya's only tropical rainforest, home to diverse flora and fauna.",
    highlights: ["Guided nature walks", "Canopy walks", "Butterfly watching", "Eco-lodges"],
  },
  {
    id: 6,
    img: Img6,
    title: "Mom & Me Getaway",
    duration: "4 Days / 3 Nights",
    price: "$949",
    category: "Special Package",
    location: "Kenya",
    specialBadge: "Popular",
    featured: true,
    description: "A special bonding experience designed for mothers and daughters featuring spa treatments, scenic views, and quality time together.",
    highlights: ["Spa & wellness", "Scenic lakeside resort", "Private dining", "Cultural experiences"],
  },
  {
    id: 7,
    img: Img7,
    title: "Family Weekend Escape",
    duration: "3 Days / 2 Nights",
    price: "$1,199",
    category: "Special Package",
    location: "Kenya",
    specialBadge: "Family Favorite",
    featured: true,
    description: "Perfect for families! Enjoy wildlife viewing, nature walks, and activities suitable for all ages in a safe and comfortable environment.",
    highlights: ["Kid-friendly activities", "Family suites", "Game drives", "Swimming pool & recreation"],
  },
  {
    id: 8,
    img: Img1,
    title: "Samburu Game Reserve",
    duration: "4 Days / 3 Nights",
    price: "$979",
    category: "Wildlife Safari",
    location: "Kenya",
    description: "Explore the rugged beauty of northern Kenya and encounter unique wildlife species found nowhere else.",
    highlights: ["Unique wildlife", "Ewaso Nyiro River", "Cultural encounters", "Less crowded safari"],
  },
  {
    id: 9,
    img: Img3,
    title: "Tsavo East & West Safari",
    duration: "4 Days / 3 Nights",
    price: "$849",
    category: "Wildlife Safari",
    location: "Kenya",
    description: "Discover Kenya's largest national park system, famous for its red elephants and diverse ecosystems.",
    highlights: ["Red elephants", "Mzima Springs", "Lugard Falls", "Vast wilderness"],
  },
  {
    id: 10,
    img: Img7,
    title: "Diani Beach Getaway",
    duration: "5 Days / 4 Nights",
    price: "$1,099",
    category: "Beach & Coastal",
    location: "Kenya",
    description: "Relax on pristine white sand beaches and enjoy crystal-clear waters of the Indian Ocean.",
    highlights: ["White sand beaches", "Water sports", "Coral reef diving", "Beachfront resorts"],
  },
  {
    id: 11,
    img: Img5,
    title: "Hell's Gate & Lake Naivasha",
    duration: "2 Days / 1 Night",
    price: "$399",
    category: "Adventure",
    location: "Kenya",
    description: "Cycle through dramatic gorges, spot wildlife on foot, and boat on the serene Lake Naivasha.",
    highlights: ["Cycling safari", "Rock climbing", "Boat rides", "Walking with wildlife"],
  },
  {
    id: 12,
    img: Img2,
    title: "Mount Kilimanjaro Expedition",
    duration: "7 Days / 6 Nights",
    price: "$2,299",
    category: "International",
    location: "Tanzania",
    specialBadge: "Bucket List",
    description: "Conquer Africa's highest peak via the scenic Machame Route with experienced mountain guides.",
    highlights: ["Summit Africa's highest peak", "Machame Route", "Expert guides", "All equipment included"],
  },
  {
    id: 13,
    img: Img1,
    title: "Serengeti & Ngorongoro",
    duration: "6 Days / 5 Nights",
    price: "$2,499",
    category: "International",
    location: "Tanzania",
    specialBadge: "Best Seller",
    description: "Experience the legendary Serengeti plains and the spectacular Ngorongoro Crater.",
    highlights: ["Endless plains", "Crater floor safari", "Big Five viewing", "Luxury lodges"],
  },
  {
    id: 14,
    img: Img3,
    title: "Zanzibar Island Paradise",
    duration: "5 Days / 4 Nights",
    price: "$1,399",
    category: "International",
    location: "Tanzania",
    description: "Discover the exotic spice island with pristine beaches, historic Stone Town, and vibrant culture.",
    highlights: ["Spice tours", "Stone Town", "Beach resorts", "Snorkeling & diving"],
  },
  {
    id: 15,
    img: Img2,
    title: "Gorilla Trekking Rwanda",
    duration: "4 Days / 3 Nights",
    price: "$3,499",
    category: "International",
    location: "Rwanda",
    specialBadge: "Once in a Lifetime",
    description: "An unforgettable encounter with mountain gorillas in their natural habitat in Volcanoes National Park.",
    highlights: ["Mountain gorillas", "Conservation experience", "Luxury lodges", "Expert trackers"],
  },
  {
    id: 16,
    img: Img5,
    title: "Uganda Wildlife & Culture",
    duration: "8 Days / 7 Nights",
    price: "$2,799",
    category: "International",
    location: "Uganda",
    description: "Explore the Pearl of Africa with chimpanzee tracking, safari, and cultural experiences.",
    highlights: ["Chimpanzee tracking", "Queen Elizabeth NP", "Bwindi Forest", "Cultural villages"],
  },
  {
    id: 17,
    img: Img4,
    title: "Victoria Falls Adventure",
    duration: "5 Days / 4 Nights",
    price: "$1,899",
    category: "International",
    location: "Zimbabwe/Zambia",
    description: "Witness the mighty Victoria Falls and enjoy adrenaline activities at this natural wonder.",
    highlights: ["Victoria Falls tour", "White water rafting", "Sunset cruises", "Helicopter flights"],
  },
  {
    id: 18,
    img: Img1,
    title: "Botswana Okavango Delta",
    duration: "6 Days / 5 Nights",
    price: "$3,299",
    category: "International",
    location: "Botswana",
    specialBadge: "Luxury Safari",
    description: "Experience the world's largest inland delta with luxury mokoro trips and exceptional wildlife viewing.",
    highlights: ["Mokoro excursions", "Luxury camps", "Water-based safari", "Pristine wilderness"],
  },
  {
    id: 19,
    img: Img7,
    title: "Cape Town & Safari Combo",
    duration: "10 Days / 9 Nights",
    price: "$3,999",
    category: "International",
    location: "South Africa",
    description: "Combine cosmopolitan Cape Town with an authentic safari experience in Kruger National Park.",
    highlights: ["Table Mountain", "Winelands tour", "Kruger safari", "Cape of Good Hope"],
  },
  {
    id: 20,
    img: Img6,
    title: "Couples Romantic Safari",
    duration: "7 Days / 6 Nights",
    price: "$2,899",
    category: "Special Package",
    location: "Kenya & Tanzania",
    specialBadge: "Honeymoon Special",
    description: "The ultimate romantic getaway combining luxury safari lodges, private dinners, and sunset experiences.",
    highlights: ["Private game drives", "Candlelit dinners", "Luxury suites", "Champagne experiences"],
  },
];

const AdventuresRoute = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    numberOfPeople: 1,
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const categories = ["All", "Wildlife Safari", "Adventure", "Nature", "Beach & Coastal", "International", "Special Package"];
  
  const filteredAdventures = selectedCategory === "All" 
    ? adventuresData 
    : adventuresData.filter(adventure => adventure.category === selectedCategory);

  const openBookingModal = (adventure) => {
    setSelectedAdventure(adventure);
    setIsBookingModalOpen(true);
    setSubmitMessage('');
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedAdventure(null);
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      travelDate: '',
      numberOfPeople: 1,
      specialRequests: ''
    });
    setSubmitMessage('');
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your booking! Our team will contact you within 24 hours to confirm your adventure.');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        closeBookingModal();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-orange-500 to-yellow-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <FaHiking className="text-5xl" />
            <h1 className="text-6xl font-bold">Our Adventures</h1>
          </div>
          <p className="text-xl max-w-3xl leading-relaxed">
            Discover unforgettable experiences across Kenya's most stunning landscapes. 
            From thrilling safaris to peaceful getaways, we have the perfect adventure for you.
          </p>
          <div className="mt-8 flex gap-8 text-lg">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-2xl" />
              <span>Multiple Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-2xl" />
              <span>Group & Private Tours</span>
            </div>
          </div>
        </div>
      </div>

      {/* All Adventures Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
            Explore Our Adventures
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Browse our complete collection of adventure packages designed to create unforgettable memories
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 text-lg ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-orange-500 text-white shadow-xl scale-110 transform'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg hover:scale-105 border-2 border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Adventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredAdventures.map((adventure) => (
            <div
              key={adventure.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={adventure.img}
                  alt={adventure.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {adventure.specialBadge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl animate-pulse">
                    <FaStar className="text-yellow-300" />
                    {adventure.specialBadge}
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 px-4 py-2 rounded-full text-sm font-bold text-primary shadow-lg">
                  {adventure.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {adventure.title}
                  </h3>
                  <div className="flex items-center gap-1 text-white/90 mt-1">
                    <FaMapMarkerAlt className="text-sm" />
                    <span className="text-sm font-medium">{adventure.location}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Duration and Price */}
                <div className="flex justify-between items-center mb-6 pb-6 border-b-2 border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <IoTimeOutline className="text-primary text-2xl" />
                    <span className="font-bold text-lg">{adventure.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-3xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                    <BiDollar />
                    <span>{adventure.price}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
                  {adventure.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 bg-orange-50 dark:bg-gray-700/50 p-4 rounded-xl">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-lg">
                    ✨ Highlights:
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    {adventure.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 font-bold text-lg">✓</span>
                        <span className="font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Now Button */}
                <button
                  onClick={() => openBookingModal(adventure)}
                  className="block w-full text-center bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 text-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Packages Highlight */}
        <div className="mt-24 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
              <FaStar className="text-yellow-300 text-5xl" />
              Special Packages
            </h2>
            <p className="text-xl mb-10 leading-relaxed max-w-3xl">
              Looking for something unique? Check out our specially curated packages designed for 
              unforgettable experiences with your loved ones.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 border border-white/30">
                <h3 className="text-3xl font-bold mb-4">Mom & Me Getaway</h3>
                <p className="mb-6 text-lg leading-relaxed">
                  Create lasting memories with your mother in a serene setting with spa treatments, 
                  gourmet dining, and beautiful scenery.
                </p>
                <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                  onClick={() => openBookingModal(adventuresData.find(a => a.title === "Mom & Me Getaway"))}
                >
                  Book This Package
                </button>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 border border-white/30">
                <h3 className="text-3xl font-bold mb-4">Family Weekend Escape</h3>
                <p className="mb-6 text-lg leading-relaxed">
                  The perfect family adventure with activities for all ages, comfortable accommodations, 
                  and exciting wildlife encounters everyone will love.
                </p>
                <button className="bg-white text-pink-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                  onClick={() => openBookingModal(adventuresData.find(a => a.title === "Family Weekend Escape"))}
                >
                  Book This Package
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We can create custom adventure packages tailored to your preferences, budget, and schedule. 
            Contact us today to plan your perfect Kenyan adventure!
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-block bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 hover:shadow-2xl text-xl transform hover:scale-105"
          >
            Contact Us for Custom Packages
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && selectedAdventure && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full my-8 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closeBookingModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors z-10"
            >
              <IoClose className="text-3xl" />
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary to-orange-500 text-white rounded-t-3xl p-8">
              <h2 className="text-3xl font-bold mb-2">Book Your Adventure</h2>
              <h3 className="text-xl opacity-90">{selectedAdventure.title}</h3>
              <div className="flex items-center gap-4 mt-3 text-sm">
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt />
                  <span>{selectedAdventure.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IoTimeOutline />
                  <span>{selectedAdventure.duration}</span>
                </div>
                <div className="flex items-center gap-1 font-bold">
                  <BiDollar />
                  <span>{selectedAdventure.price.replace('$', '')}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {submitMessage ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl p-6 mb-4">
                    <FaStar className="text-5xl mx-auto mb-4 text-green-600" />
                    <p className="text-lg font-semibold">{submitMessage}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                      <FaUser className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                      <FaEnvelope className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingForm.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                      <FaPhone className="inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Travel Date */}
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        <FaCalendarAlt className="inline mr-2" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="travelDate"
                        value={bookingForm.travelDate}
                        onChange={handleFormChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Number of People */}
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        <FaUsers className="inline mr-2" />
                        Number of People *
                      </label>
                      <input
                        type="number"
                        name="numberOfPeople"
                        value={bookingForm.numberOfPeople}
                        onChange={handleFormChange}
                        required
                        min="1"
                        max="20"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                      Special Requests or Questions
                    </label>
                    <textarea
                      name="specialRequests"
                      value={bookingForm.specialRequests}
                      onChange={handleFormChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Any dietary restrictions, accessibility needs, or special occasions?"
                    ></textarea>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={closeBookingModal}
                      className="flex-1 px-6 py-4 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold rounded-xl hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white font-bold rounded-xl transition-all hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdventuresRoute