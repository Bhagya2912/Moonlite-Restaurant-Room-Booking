import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercentage);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#f5f5f5] pt-20 pb-6 px-6 md:px-24 font-serif">
      {/* Top Section: Newsletter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-900 mb-6 md:mb-0">
          Join Our Newsletter
        </h2>
        <form className="flex w-full md:w-[500px] shadow-lg rounded overflow-hidden">
          <input
            type="email"
            placeholder="Enter your mail"
            className="flex-grow px-4 py-3 bg-white text-sm outline-none"
          />
          <button
            type="submit"
            className="bg-[#a8815e] text-white px-6 text-sm font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Middle Section: Info Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-gray-700">
        {/* Logo + Description */}
        <div>
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <img
            src="https://html.themewant.com/moonlit/assets/images/logo/logo.svg"
            alt="Logo"
            className="h-10 w-auto"
          />
           
          </h4>
          <p>
            Each room features plush bedding, high-quality linens, and a
            selection of ensure a restful night’s sleep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>Rooms & Suites</li>
            <li>Dining</li>
            <li>Spa & Wellness</li>
            <li>Special Offers</li>
          </ul>
        </div>

        {/* Guest Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Guest Service</h4>
          <ul className="space-y-2">
            <li>24/7 Front Desk</li>
            <li>Parking</li>
            <li>Room Service</li>
            <li>Free Wi-Fi</li>
            <li>Concierge Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#a8815e]" />
              +1 250-555-0199
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#a8815e]" />
              Moonlit@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#a8815e]" />
              M5T 2L9 Toronto, Canada
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-14 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>Copyright © 2025 Moonlit. All rights reserved.</p>
        <div className="flex gap-6 mt-3 sm:mt-0">
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>

      <div
      style={{
        position: "fixed",
        bottom: "15px",
        right: "15px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a8815e",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.3s ease, visibility 0.3s ease",
      }}
      onClick={scrollToTop}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: `${(1 - scrollProgress / 100) * 307.919}px`,
            fill: "none",
            stroke: "black",
            strokeWidth: "2",
            transition: "stroke-dashoffset 50ms linear",
          }}
        />
      </svg>
      <FaArrowUpLong style={{ color: "white", fontSize: "20px", zIndex: 10 }} />
    </div>
      
    </footer>
  );
}
