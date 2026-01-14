import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import AdventuresRoute from "./pages/AdventuresRoute.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import TicketingAndVisa from "./pages/TicketingAndVisa.jsx";
import TravelTips from "./pages/TravelTips.jsx";
import TravelTipsDetails from "./pages/TravelTipsDetails.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Packages from "./pages/Packages.jsx";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-9L6VWX2LGX`}
      />
      <Script strategy="afterInteractive" id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9L6VWX2LGX');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}


const App = () => {
  // Theme management
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme")? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // AOS initialization
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout theme={theme} setTheme={setTheme} />}>
            <Route index element={<Home theme={theme} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/adventures" element={<AdventuresRoute />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/ticketingandvisa" element={<TicketingAndVisa />} />
            <Route path="/travel-tips" element={<TravelTips />} />
            <Route path="/travel-tips/:id" element={<TravelTipsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;