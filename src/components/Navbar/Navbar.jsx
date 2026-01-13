import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoPng from "../../assets/logo.png";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { BiMenu, BiX } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu";

const NavLinks = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About Us",
        link: "/about"
    },
    {
        name: "Our Services",
        link: "/services"
    },
    {
        name: "Adventures",
        link: "/adventures"
    },
    {
        name: "Ticketing & Visa",
        link: "/ticketingandvisa"
    },
    {
        name: "Gallery",
        link: "/gallery"
    },
    {
        name: "Travel Tips",
        link: "/travel-tips"
    }
]
const Navbar = ({ theme, setTheme }) => {
    const [showMenu, setShowMenu] = useState(false);

  return (
  <nav className="shadow-lg w-full bg-gradient-to-r from-warm-beige via-white to-cream dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white duration-300 backdrop-blur-sm sticky top-0 z-50">
    <div className="container py-2 md:py-0">
        <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2 md:gap-3 py-2 md:py-3">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 md:gap-3 group transition-transform duration-300 hover:scale-105">
                    <img src={logoPng} alt="Toto Treks Kenya Logo" className="h-12 md:h-14 lg:h-16 drop-shadow-md" />
                    <span className="font-poppins text-base md:text-lg lg:text-xl text-burnt-umber dark:text-primary font-bold tracking-tight group-hover:text-sunset-orange transition-colors duration-300">Toto Treks Kenya</span>
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:block ml-4 xl:ml-8">
                <ul className="flex items-center gap-2 xl:gap-4">
                    {
                        NavLinks.map((data) => (
                            <li key={data.name} className="py-6">
                                <Link 
                                    to={data.link} 
                                    className="py-2 hover:text-sunset-orange dark:hover:text-primary transition-all duration-300 text-sm xl:text-base font-medium text-gray-700 dark:text-gray-200 relative group" 
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    {data.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sunset-orange to-primary group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-3 ml-auto">
                {/* Contact Button */}
                <Link to="/contact" className="hidden md:block">
                    <button className="py-2 md:py-2.5 px-4 md:px-6 bg-gradient-to-r from-sunset-orange to-primary text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs md:text-sm" onClick={() => window.scrollTo(0, 0)}>
                        Contact Us
                    </button>
                </Link>
                
                {/* Theme Toggle */}
                <button 
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
                    className="p-2 md:p-2.5 rounded-full hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                    aria-label="Toggle theme"
                >
                    {
                        theme === 'dark' ? (
                            <BiSolidSun className="text-xl md:text-2xl lg:text-3xl text-primary"/>
                        ) : (
                            <BiSolidMoon className="text-xl md:text-2xl lg:text-3xl text-burnt-umber"/>
                        )
                    }
                </button>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setShowMenu(!showMenu)}
                    className="lg:hidden p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                    aria-label="Toggle menu"
                >
                    {showMenu ? (
                        <BiX className="text-2xl md:text-3xl text-burnt-umber dark:text-white"/>
                    ) : (
                        <BiMenu className="text-2xl md:text-3xl text-burnt-umber dark:text-white"/>
                    )}
                </button>
            </div>
        </div>
    </div>
    <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
</nav>
    )
};

export default Navbar;