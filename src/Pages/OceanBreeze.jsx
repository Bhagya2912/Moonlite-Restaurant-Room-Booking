import React, { useEffect, useRef, useState } from 'react'
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import Booking from '../Components/Booking/Booking';
import Facility from '../Components/Facility/Facility';
import OurRooms from '../Components/OurRooms/OurRooms';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "COO of Apex Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.5,
    description:
      "Choosing Bokinn was one of the best decisions we’ve ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with expertise. Their commitment to and delivering tailored.",
  },
  {
    name: "Sarah Martinez",
    role: "COO of Apex Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.5,
    description:
      "Choosing Bokinn was one of the best decisions we’ve ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with expertise. Their commitment to and delivering tailored.",
  },
];
export default function OceanBreeze() {
    const imageRef = useRef(null);
    const swiperRef = useRef(null);
    const [showVideo, setShowVideo] = useState(false);

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
    <div>
    <section className="relative w-full h-[150vh] font-serif mb-30 text-white">
      {/* Background Image */}
      <img
        src="https://html.themewant.com/moonlit/assets/images/banner/slides-2.webp" // Replace with your image
        alt="Hotel Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10  flex flex-col justify-center items-center text-center h-full px-4">
        <h1 className="text-6xl md:text-8xl font-serif mb-4 mt-60 leading-27">
          Luxury Stay Hotel Experience
          <br />
          Comfort & Elegance
        </h1>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-30 text-center text-2xl mt-30 mb-20">
          <div>
            <p className="text-6xl font-serif">30+</p>
            <p className="text-2xl mt-3">Hotel Room</p>
          </div>
          <div>
            <p className="text-6xl font-serif">20+</p>
            <p className="text-2xl mt-3">Pool & Spa Center</p>
          </div>
          <div>
            <p className="text-6xl font-serif">50+</p>
            <p className="text-2xl mt-3">Experience Staff</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="relative sm:absolute sm:bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-1/2 z-40 w-[98%] sm:w-[95%] lg:w-[90%] xl:w-[85%] mt-6 sm:mt-0">
  <div className="bg-white text-white rounded-2xl shadow-lg px-3 py-2 sm:px-6 sm:py-4 w-full">
    <Booking />
  </div>
</div>
      </div>
    </section>
    <section className="max-w-7xl mb-5">
  <div className="flex flex-col md:flex-row mt-20 items-center md:items-start max-w-screen-xl mx-auto p-4 sm:p-24 relative">
    {/* Image Section */}
    <div className="relative w-full md:w-1/2 p-4">
      {/* Main Image */}
      <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-lg mx-auto">
        <img
          ref={imageRef}
          src="https://html.themewant.com/moonlit/assets/images/about/about-2.webp"
          alt="Main Room"
          className="w-full h-[800px] object-cover transition-transform duration-200 ease-out will-change-transform"
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="w-full md:w-1/2 mt-40 md:mt-0 md:ml-20">
      {/* About Label */}
      <div className="flex items-center gap-4 mt-20">
        <div className="flex items-center text-[#a8815e] gap-0">
          <div className="h-px w-10 bg-[#a8815e]"></div>
          <span className="text-xl">✦</span>
        </div>
        <p className="text-xl text-[#b86e2e]">About Us</p>
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-3xl md:text-5xl font-serif py-8 mb-4 leading-tight">
        <span className="block mb-2">Welcome To Our</span>
        <span className="block">Moonlit Hotel & Resort</span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-600 text-sm sm:text-base mb-6">
        Welcome to Bokinn, where luxury meets comfort in the heart of Canada. Since 1999, we have been dedicated to providing an exceptional stay for our guests, blending modern amenities with timeless elegance. Our beautifully designed rooms and suites offer stunning views and plush accommodations, ensuring a restful retreat whether you’re here for business or leisure.
      </p>

      {/* Button */}
      <button className="bg-[#a8815e] text-white px-6 py-3 rounded-md hover:bg-[#edb88a] transition duration-300">
        Learn More
      </button>
    </div>
  </div>
</section>
<section><Facility/></section>
<section><OurRooms/></section>
<section className="py-24 bg-black text-white">
  <div className="text-center mb-16">
    <h4 className="text-yellow-800 text-xl sm:text-2xl font-serif mb-4">
      <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 text-xl sm:text-3xl font-serif">
        <span className="flex items-center">
          <span className="text-sm sm:text-xl">✦</span>
          <span className="w-6 sm:w-10 h-px bg-white"></span>
        </span>
        Testimonial
        <span className="flex items-center">
          <span className="w-6 sm:w-10 h-px bg-white"></span>
          <span className="text-sm sm:text-xl">✦</span>
        </span>
      </span>
    </h4>
    <h2 className="text-4xl sm:text-6xl font-serif text-white">
      What Our Clients Say
    </h2>
  </div>

  <div className="relative w-full max-w-7xl mx-auto group px-4 sm:px-8">
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 6000 }}
      loop
      slidesPerView={1}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative bg-transparent text-center">
            <div className="flex justify-center gap-1 text-yellow-700 text-4xl mb-6">
              {[1, 2, 3, 4].map((_, i) => (
                <span key={i}>★</span>
              ))}
              {/* Half star with overlay */}
              <span className="relative inline-block text-gray-500">
                ★
                <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-yellow-700">
                  ★
                </span>
              </span>
            </div>

            <p className="text-gray-300 text-2xl sm:text-2xl leading-relaxed font-light max-w-5xl mx-auto mb-10">
              {item.description}
            </p>

            <div className="flex justify-center items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-3"
              />
              <div className="flex flex-col ml-5 items-center gap-1 mt-2">
                <h4 className="text-xl sm:text-2xl font-serif text-white">
                  {item.name}
                </h4>
                <span className="text-gray-400 text-sm sm:text-base">
                  {item.role}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Arrows */}
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-19 h-19 bg-[#1a1a1a] border border-gray-700 rounded-full flex items-center justify-center transition hover:bg-[#a8815e] hover:text-white"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-white w-8 h-8" />
    </button>

    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-19 h-19 bg-[#1a1a1a] border border-gray-700 rounded-full flex items-center justify-center transition hover:bg-[#a8815e] hover:text-white"
    >
      <FontAwesomeIcon icon={faArrowRight} className="text-white w-8 h-8" />
    </button>
  </div>
</section>
<section className="relative h-[100vh] overflow-hidden mt-25 mb-25 px-4 sm:px-24 bg-white ">
  {/* Background image (scrolls with page) */}
  <img
    src="https://html.themewant.com/moonlit/assets/images/pages/gallery/video.webp"
    alt="Hotel Background"
    className="w-full h-full object-cover "
  />

  <div className="absolute inset-0 bg-gradient-to-b  border-white from-transparent via-black/10 to-transparent"></div>

  {/* Rotating circle with play button */}
  <div className="absolute inset-0 flex border-green items-center justify-center  mt-50">
    <div
      className="relative w-40 h-40 rounded-full  flex items-center justify-center cursor-pointer"
      onClick={() => setShowVideo(true)}
    >
      {/* Rotating text */}
      <div className="absolute w-82 h-82 border-black flex items-center  justify-center">
  <svg className="w-40 h-40 text-white" viewBox="0 0 100 100">
    <defs>
      <path
        id="circlePath"
        d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
      />
    </defs>
    <g>
      <text fontSize="9" fill="white">
        <textPath href="#circlePath" startOffset="0%">
          ★ Watch Full Video ★ Watch Now ★ Watch Full Video ★
        </textPath>
      </text>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="10s"
        repeatCount="indefinite"
      />
    </g>
  </svg>
</div>

{/* Play Icon */}
<svg
  className="w-8 h-8 text-white z-10"
  fill="currentColor"
  viewBox="0 0 20 20"
>
  <path d="M6 4l10 6-10 6V4z" />
</svg>
</div>
</div>

  {/* Modal Video */}
  {showVideo && (
    <div className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50">
      <div className="w-full max-w-3xl relative">
        <button
          onClick={() => setShowVideo(false)}
          className="absolute top-0 right-0 mt-2 mr-2 text-white text-3xl"
        >
          &times;
        </button>
        <div className="w-full h-[500px]">
          <iframe
            className="w-full h-full rounded"
            src="https://www.dailymotion.com/embed/video/x9ffs6w"
            title="Hotel Intro Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )}
</section>
<section className="bg-white py-20 px-4 sm:px-10 lg:px-20">
  {/* Heading */}
  <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          {/* Left: Title */}
          <div className="md:max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-px bg-[#a8815e]"></div>
              <span className="text-[#a8815e] text-xl">✦</span>
              <span className="text-[#a8815e] text-2xl font-serif">Special Offer</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif text-black ">Special Offer</h2>
          </div>

          {/* Right: Paragraph */}
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
            Experience the ultimate in luxury and relaxation with our exclusive special offer! Book your stay<br/> now and enjoy
             20% off our best available rates.
          </p>
        </div>
      </div>

  {/* Offers Grid */}
  <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
    {/* Offer 1 */}
    <div className="flex items-start gap-6">
      <img
  src="https://html.themewant.com/moonlit/assets/images/offer/1.webp"
  alt="Family Fun"
  className="w-74 h-84 rounded-lg object-cover transition duration-500 ease-in-out filter grayscale hover:grayscale-0 hover:scale-105"
/>
      <div>
        <h3 className="text-2xl font-serif text-gray-900 mb-4 mt-10">Family Fun Package</h3>
        <ul className="text-gray-700 space-y-2 text-base list-none">
          <li>◎ 15% off on family suites</li>
          <li>◎ Free meals for kids under 12</li>
          <li>◎ Complimentary tickets</li>
          <li>◎ The local amusement park</li>
          <li>◎ Daily family-friendly activities</li>
        </ul>
        <button className="mt-4 text-[#a8815e] font-serifunderline hover:text-yellow-700">Book Now</button>
      </div>
    </div>

    {/* Offer 2 */}
    <div className="flex items-start gap-6">
      <img src="https://html.themewant.com/moonlit/assets/images/offer/2.webp" alt="Spa Retreat" className="w-74 h-84 rounded-lg object-cover transition duration-500 ease-in-out filter grayscale hover:grayscale-0 hover:scale-105" />
      <div>
        <h3 className="text-2xl font-serif text-gray-900 mb-4 mt-10">Spa Retreat</h3>
        <ul className="text-gray-700 space-y-2 text-base list-none">
          <li>◎ A two-night stay in a premium room</li>
          <li>◎ Daily spa treatments</li>
          <li>◎ Healthy breakfast and lunch options</li>
          <li>◎ Access to all spa facilities</li>
          <li>◎ 25% off for stays of 7 nights or more</li>
        </ul>
        <button className="mt-4 text-[#a8815e] font-serifunderline hover:text-yellow-700">Book Now</button>
      </div>
    </div>

    {/* Offer 3 */}
    <div className="flex items-start gap-6">
      <img src="https://html.themewant.com/moonlit/assets/images/offer/3.webp" alt="Business" className="w-74 h-84 rounded-lg object-cover transition duration-500 ease-in-out filter grayscale hover:grayscale-0 hover:scale-105" />
      <div>
        <h3 className="text-2xl font-serif text-gray-900 mb-4 mt-10">Business Traveler Special</h3>
        <ul className="text-gray-700 space-y-2 text-base list-none">
          <li>◎ 10% off on executive rooms</li>
          <li>◎ Complimentary high-speed Wi-Fi</li>
          <li>◎ Access to the business lounge</li>
          <li>◎ Free airport shuttle service</li>
          <li>◎ Daily family-friendly activities</li>
        </ul>
        <button className="mt-4 text-[#a8815e] font-serifunderline hover:text-yellow-700">Book Now</button>
      </div>
    </div>

    {/* Offer 4 */}
    <div className="flex items-start gap-6">
      <img src="https://html.themewant.com/moonlit/assets/images/offer/4.webp" alt="Romantic Getaway" className="w-74 h-84 rounded-lg object-cover transition duration-500 ease-in-out filter grayscale hover:grayscale-0 hover:scale-105" />
      <div>
        <h3 className="text-2xl font-serif text-gray-900 mb-4 mt-10">Romantic Getaway</h3>
        <ul className="text-gray-700 space-y-2 text-base list-none">
          <li>◎ A two-night stay in a deluxe suite</li>
          <li>◎ A bottle of champagne and chocolates</li>
          <li>◎ Romantic dinner for two</li>
          <li>◎ Couples massage at our spa</li>
          <li>◎ Couples massage at our spa</li>
        </ul>
        <button className="mt-4 text-[#a8815e] font-serifunderline hover:text-yellow-700">Book Now</button>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#f1f1f1] py-18 px-10 mb-30 rounded-xl max-w-7xl mx-auto my-10">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
      Join Our Newsletter
    </h2>

    {/* Form */}
    <form className="flex w-full md:w-[500px] shadow-xl rounded overflow-hidden">
      <input
        type="email"
        placeholder="Enter your mail"
        className="flex-grow px-4 py-3 bg-white text-base outline-none text-gray-700"
      />
      <button
        type="submit"
        className="bg-[#a8815e] text-white px-6 font-serifhover:bg-[#96714f] transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>
    <footer
      className="relative text-white font-serif z-10"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/157198093/photo/palm-tree-illumination.jpg?s=612x612&w=0&k=20&c=Ls2HJkXOEpwdpuvXAr4i-EGbULsTz0DFQmeUjrso9Us=')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 bg-opacity-90 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Main Footer Info */}
        <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1: Logo & Description */}
          <div>
           <div className="flex items-center gap-2 mb-4">
  <img
    src="https://html.themewant.com/moonlit/assets/images/logo/logo.svg"
    alt="Moonlit Logo"
    className="h-12 filter brightness-0 invert"
  />
</div>

            <p className="text-sm leading-relaxed text-white">
              Each room features plush bedding, high-quality linens, and a selection of ensure a restful night’s sleep.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Rooms & Suites</li>
              <li>Dining</li>
              <li>Spa & Wellness</li>
              <li>Special Offers</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 3: Guest Service */}
          <div>
            <h4 className="text-lg font-serifmb-4">Guest Service</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>24/7 Front Desk</li>
              <li>Parking</li>
              <li>Room Service</li>
              <li>Free Wi-Fi</li>
              <li>Concierge Service</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-serifmb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#a8815e]" />
                +12505550199
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#a8815e]" />
                Moonlit@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#a8815e] mt-1" />
                <span>280 Augusta Avenue, M5T 2L9 Toronto, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto">
          <p>Copyright © 2025 Moonlit. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#a8815e",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
          zIndex: 50,
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
    </div>
  )
}
