import React from "react";
import { Link } from "react-router-dom";
import aboutJpg from "../assets/about.jpg";

const About = ({ theme }) => {
    const stats = [
        { number: "500+", label: "Happy Families" },
        { number: "50+", label: "Destinations" },
        { number: "10+", label: "Years Experience" },
        { number: "100%", label: "Satisfaction Rate" }
    ];

    const values = [
        {
            icon: "❤️",
            title: "Family First",
            description: "Every journey is designed with families in mind, ensuring safety and joy for all ages."
        },
        {
            icon: "🌍",
            title: "Authentic Experiences",
            description: "We create genuine connections with local cultures and communities across Kenya."
        },
        {
            icon: "🎯",
            title: "Personalized Journeys",
            description: "Tailored adventures that match your family's unique interests and needs."
        },
        {
            icon: "✨",
            title: "Memorable Moments",
            description: "Creating lasting memories that strengthen family bonds for years to come."
        }
    ];

    return (
        <div className="bg-warm-beige dark:bg-gray-900 dark:text-white duration-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
                <div className="container py-16 sm:py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                        <div data-aos="zoom-in" data-aos-once="false" className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                            <img 
                                src={aboutJpg} 
                                alt="About Toto Treks Kenya" 
                                className="relative sm:scale-110 max-h-[400px] w-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                        <div>
                            <div className="space-y-6 sm:p-8 pb-6">
                                <div className="inline-block">
                                    <span data-aos="fade-up" className="text-primary dark:text-primary text-sm font-semibold tracking-wider uppercase">Who We Are</span>
                                </div>
                                <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl font-bold font-serif bg-gradient-to-r from-sunset-orange to-sunset-orange/75 bg-clip-text text-transparent">
                                    About Toto Treks Kenya
                                </h1>
                                <p data-aos="fade-up" data-aos-delay="200" className="text-md text-gray-700 dark:text-gray-300 leading-relaxed">
                                    We create <span className="font-semibold text-primary">unforgettable travel experiences</span> designed specifically for parents and their children. Whether it's a weekend escape, a school holiday adventure, or a milestone celebration, we believe in the power of travel to strengthen family bonds. Our curated trips are safe, fun, and full of heart — combining expert planning with thoughtful touches that make every journey special. As a proudly Kenyan, family-focused travel company, we’re here to help you make memories that last a lifetime.
                                    While most travel companies focus on destinations, <span className="font-semibold">we focus on connection</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-primary to-secondary py-12">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                data-aos="fade-up" 
                                data-aos-delay={index * 100}
                                className="text-center transform hover:scale-110 transition-transform duration-300"
                            >
                                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                                <p className="text-sm md:text-base opacity-90">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="container py-16 sm:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div data-aos="fade-right" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-5xl mb-4">🎯</div>
                        <h2 className="text-3xl font-bold font-serif mb-4 text-primary">Our Mission</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            To create unforgettable travel experiences that strengthen the bond between parents and their children, by offering safe, personalized, and heartwarming journeys across Kenya and beyond. 
                            We believe that travel is not just about seeing new places, but about creating meaningful connections and cherished memories that last a lifetime.
                        </p>
                    </div>
                    <div data-aos="fade-left" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-5xl mb-4">🌟</div>
                        <h2 className="text-3xl font-bold font-serif mb-4 text-secondary">Our Vision</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            To become Africa's leading family travel brand, recognized for redefining how parents and children explore the world together — one meaningful journey at a time. 
                            We envision a world where every family has the opportunity to create lasting memories through travel.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-gray-800 dark:to-gray-900 py-16 sm:py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold font-serif mb-4">Our Core Values</h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                            The principles that guide every adventure we create
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div 
                                key={index}
                                data-aos="flip-left" 
                                data-aos-delay={index * 100}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="container py-16 sm:py-20">
                <div data-aos="zoom-in" className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Family Adventure?</h2>
                    <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                        Join hundreds of families who have created unforgettable memories with Toto Treks Kenya
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/adventures" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg">
                            Book Now
                        </Link>
                        <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transform hover:scale-105 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
