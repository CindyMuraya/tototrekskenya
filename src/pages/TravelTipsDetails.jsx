import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaCalendar, FaShare, FaPrint, FaCheckCircle, FaInfoCircle, FaLightbulb } from 'react-icons/fa';

const TravelTipsDetails = () => {
  const { id } = useParams();

  // Travel tips content database
  const travelTipsContent = {
    1: {
      title: 'How to Apply for a Visa from Kenya',
      category: 'Visa & Documentation',
      readTime: '8 min read',
      publishDate: 'December 1, 2024',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
      introduction: 'Planning a family trip abroad? Understanding the visa application process is crucial for a smooth journey. This comprehensive guide will walk you through every step of applying for visas from Kenya, whether you\'re heading to Tanzania, Europe, or beyond.',
      sections: [
        {
          heading: 'Types of Visas Available',
          content: 'Depending on your destination, you\'ll need to apply for the appropriate visa type. Tourist visas are most common for family holidays, typically valid for 30-90 days. Business visas, student visas, and transit visas each have different requirements and processing times.',
          tips: [
            'Tourist visas usually take 5-15 business days to process',
            'Apply at least 4-6 weeks before your travel date',
            'Some countries offer e-visa services for faster processing',
            'Check if your destination offers visa-on-arrival options'
          ]
        },
        {
          heading: 'Required Documents',
          content: 'Most visa applications require similar documentation. Having these ready will speed up the process significantly.',
          tips: [
            'Valid passport with at least 6 months validity',
            'Recent passport-sized photographs (usually 2-4)',
            'Completed visa application form',
            'Proof of accommodation (hotel bookings or invitation letter)',
            'Return flight tickets or itinerary',
            'Bank statements (last 3-6 months)',
            'Travel insurance documentation',
            'For children: birth certificates and consent letters if traveling with one parent'
          ]
        },
        {
          heading: 'Application Process Step-by-Step',
          content: 'Follow these steps for a successful visa application:',
          tips: [
            'Research visa requirements for your specific destination',
            'Download and complete the application form accurately',
            'Gather all required supporting documents',
            'Schedule an appointment at the embassy/consulate',
            'Attend your visa interview (if required)',
            'Pay the visa application fee',
            'Track your application status online',
            'Collect your passport with visa stamp'
          ]
        },
        {
          heading: 'Special Considerations for Families',
          content: 'When traveling with children, additional documentation may be required:',
          tips: [
            'Birth certificates for all children',
            'Consent letter from non-traveling parent',
            'Marriage certificate (if applicable)',
            'School letter during term time',
            'Proof of relationship (for guardians)'
          ]
        },
        {
          heading: 'Common Mistakes to Avoid',
          content: 'Avoid these common pitfalls that can delay or deny your visa application:',
          tips: [
            'Incomplete or incorrect application forms',
            'Insufficient financial proof',
            'Missing supporting documents',
            'Poor quality photographs',
            'Applying too close to travel date',
            'Not disclosing previous visa rejections',
            'Inconsistent information across documents'
          ]
        }
      ],
      conclusion: 'With proper preparation and attention to detail, the visa application process doesn\'t have to be stressful. Start early, gather all required documents, and don\'t hesitate to contact the embassy if you have questions. Safe travels!',
      relatedTips: [2, 3, 7]
    },
    2: {
      title: 'Best Safari Spots for Kids',
      category: 'Family Adventures',
      readTime: '10 min read',
      publishDate: 'November 28, 2024',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80',
      introduction: 'Kenya offers incredible safari experiences that are perfect for families with children. From the vast plains of the Masai Mara to the elephant herds of Amboseli, these destinations provide safe, educational, and unforgettable wildlife encounters for kids of all ages.',
      sections: [
        {
          heading: '1. Masai Mara National Reserve',
          content: 'The crown jewel of Kenyan safaris, the Masai Mara is perfect for families. Its open grasslands make wildlife spotting easy for children, and the variety of animals ensures constant excitement.',
          tips: [
            'Best for ages 5 and up',
            'Peak season: July to October (Great Migration)',
            'Family-friendly lodges with swimming pools available',
            'Short game drives recommended for younger children (2-3 hours)',
            'Cultural visits to Masai villages add educational value',
            'Big Five sightings almost guaranteed'
          ]
        },
        {
          heading: '2. Amboseli National Park',
          content: 'Famous for its elephant herds and stunning views of Mount Kilimanjaro, Amboseli offers a more compact safari experience ideal for families with younger children.',
          tips: [
            'Excellent for ages 3 and up',
            'Elephants are the main attraction - very kid-friendly',
            'Smaller park means less travel time between sightings',
            'Clear views make wildlife photography easy for kids',
            'Educational elephant research centers available',
            'Breakfast with giraffes at nearby sanctuaries'
          ]
        },
        {
          heading: '3. Lake Nakuru National Park',
          content: 'A compact park with diverse wildlife and the famous flamingo populations. Perfect for a day trip or short safari suitable for attention spans of younger children.',
          tips: [
            'Suitable for all ages, including toddlers',
            'Half-day game drives perfect for young ones',
            'Thousands of pink flamingos delight children',
            'Rhino sightings common - great for animal identification games',
            'Baboon colonies provide entertainment at picnic sites',
            'Only 2 hours from Nairobi'
          ]
        },
        {
          heading: '4. Nairobi National Park',
          content: 'The only national park within a capital city boundary, making it perfect for families wanting a quick safari experience without long travel.',
          tips: [
            'Ideal for ages 2 and up',
            'Only 20 minutes from Nairobi city center',
            'Half-day safaris perfect for jet-lagged families',
            'Visit David Sheldrick Elephant Orphanage nearby',
            'Giraffe Centre makes a great combo visit',
            'Picnic sites with playground facilities'
          ]
        },
        {
          heading: '5. Samburu National Reserve',
          content: 'For families seeking a unique safari experience, Samburu offers rare species not found elsewhere and cultural interactions with the Samburu people.',
          tips: [
            'Best for ages 6 and up',
            'See the "Special Five": Grevy\'s zebra, Somali ostrich, reticulated giraffe, gerenuk, and Beisa oryx',
            'Cultural experiences with Samburu warriors',
            'River crossings add excitement for older kids',
            'Excellent birdwatching for budding ornithologists',
            'Luxury camps with family tents available'
          ]
        },
        {
          heading: 'Safari Safety Tips for Kids',
          content: 'Keeping children safe and comfortable on safari:',
          tips: [
            'Always stay in the vehicle during game drives',
            'Bring snacks and water to keep kids comfortable',
            'Apply sunscreen regularly - African sun is strong',
            'Insect repellent is essential, especially at dawn and dusk',
            'Bring binoculars sized for children',
            'Download animal identification apps for educational fun',
            'Pack quiet activities for early morning drives',
            'Teach children to speak softly around animals'
          ]
        }
      ],
      conclusion: 'A family safari in Kenya creates memories that last a lifetime. Choose destinations based on your children\'s ages and interests, prepare them with books and documentaries beforehand, and watch their faces light up as they encounter majestic wildlife in their natural habitat. It\'s an education that no classroom can replicate!',
      relatedTips: [4, 5, 9]
    },
    3: {
      title: 'Essential Packing List for Family Safari',
      category: 'Packing Tips',
      readTime: '6 min read',
      publishDate: 'November 25, 2024',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
      introduction: 'Packing for a family safari requires careful planning. You need to balance comfort, practicality, and luggage weight limits. This comprehensive packing guide ensures you\'re prepared for every situation while keeping your bags manageable.',
      sections: [
        {
          heading: 'Clothing Essentials',
          content: 'Dress in layers and neutral colors for safari game drives:',
          tips: [
            'Lightweight, breathable long-sleeve shirts (neutral colors)',
            'Convertible pants/shorts for kids and adults',
            'Wide-brimmed hats with chin straps',
            'Warm fleece or jacket for early morning drives',
            'Comfortable walking shoes and sandals',
            'Swimwear for lodge pools',
            'Light rain jacket (for rainy season travel)',
            'Avoid bright colors and camouflage patterns'
          ]
        },
        {
          heading: 'Health & Safety Items',
          content: 'Essential health supplies for the whole family:',
          tips: [
            'Prescription medications (in original containers)',
            'First aid kit with bandages, antiseptic, pain relievers',
            'Antimalarial medication (consult your doctor)',
            'Insect repellent (DEET 30-50% for adults, child-safe versions)',
            'Sunscreen SPF 50+ for adults and kids',
            'Hand sanitizer and antibacterial wipes',
            'Antihistamines for allergies',
            'Motion sickness medication',
            'Thermometer',
            'Rehydration salts'
          ]
        },
        {
          heading: 'Safari Gear & Electronics',
          content: 'Make the most of your wildlife viewing experience:',
          tips: [
            'Binoculars (one pair per person ideally)',
            'Camera with zoom lens',
            'Extra memory cards and batteries',
            'Universal power adapter',
            'Portable charger/power bank',
            'Flashlight or headlamp',
            'Waterproof bags for electronics',
            'Field guide books or apps'
          ]
        },
        {
          heading: 'Kids\' Comfort Items',
          content: 'Keep children happy and entertained:',
          tips: [
            'Favorite snacks from home',
            'Refillable water bottles',
            'Coloring books and crayons',
            'Safari journal for older kids',
            'Small stuffed animal or comfort toy',
            'Tablet with downloaded movies (for downtime)',
            'Playing cards or travel games',
            'Binoculars sized for children'
          ]
        },
        {
          heading: 'Important Documents',
          content: 'Keep these organized and easily accessible:',
          tips: [
            'Passports (check 6-month validity)',
            'Visa documents',
            'Travel insurance papers',
            'Vaccination certificates (Yellow Fever)',
            'Flight tickets and itineraries',
            'Hotel/lodge confirmations',
            'Emergency contact information',
            'Copies of all important documents (digital and physical)'
          ]
        },
        {
          heading: 'What NOT to Pack',
          content: 'Leave these items at home:',
          tips: [
            'Excessive luggage - most flights have 15kg limits',
            'Valuable jewelry',
            'Bright colored clothing',
            'Perfume or strong fragrances (attracts insects)',
            'Single-use plastics (banned in Kenya)',
            'Hair dryers (lodges provide them)',
            'Heavy books (use e-reader instead)'
          ]
        }
      ],
      conclusion: 'Smart packing makes your safari experience comfortable and stress-free. Remember, most lodges offer laundry services, so you can pack light and rewear items. Focus on the essentials, respect luggage limits, and you\'ll have everything you need for an amazing family adventure!',
      relatedTips: [2, 4, 10]
    }
  };

  // Default content for tips without full content
  const defaultContent = {
    title: 'Travel Tip Coming Soon',
    category: 'Travel Tips',
    readTime: '5 min read',
    publishDate: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
    introduction: 'We\'re currently working on this comprehensive travel guide. Check back soon for detailed information, tips, and insights to help plan your perfect family adventure in Kenya.',
    sections: [
      {
        heading: 'Coming Soon',
        content: 'This detailed guide is being prepared by our travel experts.',
        tips: ['Stay tuned for valuable insights', 'Expert advice for family travelers', 'Practical tips you can use']
      }
    ],
    conclusion: 'For more information in the meantime, please contact our team who would be happy to answer any questions.',
    relatedTips: [1, 2, 3]
  };

  const tip = travelTipsContent[id] || defaultContent;

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-beige to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          to="/travel-tips"
          className="inline-flex items-center gap-2 text-sunset-orange hover:text-primary 
                   font-semibold mb-8 transition-colors"
          data-aos="fade-right"
        >
          <FaArrowLeft /> Back to Travel Tips
        </Link>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-8" data-aos="fade-up">
          <img
            src={tip.image}
            alt={tip.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Header */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
          <span className="inline-block bg-gradient-to-r from-sunset-orange to-primary 
                         text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            {tip.category}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            {tip.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <FaClock className="text-sunset-orange" />
              <span>{tip.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-sunset-orange" />
              <span>{tip.publishDate}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
                             rounded-lg shadow hover:shadow-lg transition-shadow">
              <FaShare className="text-sunset-orange" />
              <span className="text-gray-700 dark:text-gray-300">Share</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
                             rounded-lg shadow hover:shadow-lg transition-shadow"
                    onClick={() => window.print()}>
              <FaPrint className="text-sunset-orange" />
              <span className="text-gray-700 dark:text-gray-300">Print</span>
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          {/* Introduction */}
          <div className="mb-12" data-aos="fade-up">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {tip.introduction}
            </p>
          </div>

          {/* Sections */}
          {tip.sections.map((section, index) => (
            <div key={index} className="mb-12" data-aos="fade-up" data-aos-delay={index * 50}>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 
                           flex items-center gap-3">
                <FaLightbulb className="text-sunset-orange" />
                {section.heading}
              </h2>
              
              {section.content && (
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {section.content}
                </p>
              )}

              {section.tips && section.tips.length > 0 && (
                <div className="bg-gradient-to-r from-warm-beige to-card-bg 
                              dark:from-gray-700 dark:to-gray-750 rounded-2xl p-6">
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-lg">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-8 mt-8" 
               data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Final Thoughts
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {tip.conclusion}
            </p>
          </div>

          {/* Pro Tip Box */}
          <div className="mt-12 bg-gradient-to-r from-primary/20 to-sunset-orange/20 
                        dark:from-burnt-umber dark:to-rich-earth-brown rounded-2xl p-8"
               data-aos="fade-up">
            <div className="flex items-start gap-4">
              <FaInfoCircle className="text-3xl text-sunset-orange dark:text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  Pro Tip
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  For personalized advice and assistance planning your family safari, 
                  contact our expert team. We can help customize your itinerary based on 
                  your children's ages, interests, and your family's specific needs.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Tips */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Related Travel Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tip.relatedTips.map((relatedId, index) => {
              const relatedTip = travelTipsContent[relatedId];
              if (!relatedTip) return null;
              
              return (
                <Link
                  key={relatedId}
                  to={`/travel-tips/${relatedId}`}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg 
                           hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={relatedTip.image}
                    alt={relatedTip.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-xs text-sunset-orange font-semibold">
                      {relatedTip.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-2 mb-2">
                      {relatedTip.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {relatedTip.readTime}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-burnt-umber to-rich-earth-brown rounded-3xl p-8 md:p-12 
                      text-center text-white shadow-2xl"
             data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Family Safari?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team help you create the perfect Kenyan adventure for your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-sunset-orange text-white px-8 py-4 rounded-full font-semibold 
                       hover:bg-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us Today
            </Link>
            <Link
              to="/packages"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full 
                       font-semibold hover:bg-white hover:text-burnt-umber transition-all duration-300 
                       transform hover:scale-105"
            >
              Browse Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTipsDetails;