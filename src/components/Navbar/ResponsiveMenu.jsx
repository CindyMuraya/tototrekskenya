import React from 'react'
import { Link } from 'react-router-dom'

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
    },
    {
        name: "Contact Us",
        link: "/contact"
    }
]

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`${showMenu ? 'opacity-50 visible' : 'opacity-0 invisible'} fixed inset-0 bg-black transition-all duration-300 lg:hidden z-40`}
        onClick={() => setShowMenu(false)}
      ></div>
      
      {/* Mobile Menu */}
      <div className={`${showMenu ? 'left-0' : '-left-full'} fixed top-0 bottom-0 w-[70%] max-w-sm h-screen bg-gradient-to-br from-warm-beige via-cream to-white dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white duration-300 transition-all lg:hidden shadow-2xl z-50 flex flex-col pt-16 pb-6 px-4`}>
        <div className='flex flex-col h-full overflow-hidden'>
            {/* Navigation Links */}
            <div className='flex-1 overflow-y-auto scrollbar-hide py-2'>
                <ul className="flex flex-col gap-1">
                    {
                        NavLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    to={link.link} 
                                    onClick={() => { setShowMenu(false); window.scrollTo(0, 0); }} 
                                    className="block py-3 px-4 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gradient-to-r hover:from-sunset-orange hover:to-primary hover:text-white rounded-xl transition-all duration-300 hover:shadow-md hover:translate-x-2"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
            {/* Bottom Section */}
            <div className='mt-4 pt-4 border-t border-gray-300 dark:border-gray-700 flex-shrink-0'>
                <p className='text-xs text-gray-600 dark:text-gray-400 text-center font-medium'>
                    Discover Kenya with us ✨
                </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default ResponsiveMenu