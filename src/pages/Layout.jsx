import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import BackToTop from '../components/BackToTop/BackToTop'

const Layout = ({ theme, setTheme }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.search]);

  return (
    <>
    <a href="#main-content" className="skip-to-content">Skip to main content</a>
    <Navbar theme={theme} setTheme={setTheme} />
    <main id="main-content">
      <Outlet />
    </main>
    <Footer />
    <BackToTop />
    </>
  )
}

export default Layout