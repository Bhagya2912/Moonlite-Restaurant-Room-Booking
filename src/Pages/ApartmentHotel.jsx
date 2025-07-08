import React, { useEffect, useRef, useState } from 'react'
import Header from '../Components/Header/Header'
import { FaCalendarAlt, FaUser,FaRulerCombined } from "react-icons/fa";
import ClientSay from '../Components/ClientSay/ClientSay';
import VideoHeroSection from '../Components/VideoSection/VideoSection';
import FollowInstagram from '../Components/FollowInstagram/FollowInstagram';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const  apartmentData = [
  {
    title: "Elegant Apartment",
    img: "https://html.themewant.com/moonlit/assets/images/index-3/apartment/4.webp",
    size: "35 sqm",
    persons: 5,
    price: "2999₹",
  },
  {
    title: "Stylish Suite",
    img: "https://html.themewant.com/moonlit/assets/images/index-3/apartment/1.webp",
    size: "30 sqm",
    persons: 3,
    price: "15999₹",
  },
  {
    title: "Modern Room",
    img: "https://html.themewant.com/moonlit/assets/images/index-3/apartment/2.webp",
    size: "40 sqm",
    persons: 6,
    price: "2599₹",
  },
  {
    title: "Classic Deluxe",
    img: "https://html.themewant.com/moonlit/assets/images/index-3/apartment/3.webp",
    size: "28 sqm",
    persons: 2,
    price: "12999₹",
  },
];

const blogs = [
  {
    id: 1,
    category: "Urban Oasis Living",
    title: "Live Elegantly in Our Contemporary Suite for Apartment",
    image: "https://html.themewant.com/moonlit/assets/images/index-3/blog/1.webp",
    date: "March 26, 2024",
    author: "Amin",
    isMain: true,
  },
  {
    id: 2,
    category: "The Cozy Corner Suite",
    title: "Spacious One-Bedroom in Prime Location",
    image: "https://html.themewant.com/moonlit/assets/images/index-3/blog/2.webp",
    date: "March 26, 2024",
    author: "Amin",
  },
  {
    id: 3,
    category: "Urban Chic Bedroom",
    title: "Comfortable Room with En-Suite Bathroom",
    image: "https://html.themewant.com/moonlit/assets/images/index-3/blog/3.webp",
    date: "March 26, 2024",
    author: "Rubel",
  },
  {
    id: 4,
    category: "Stylish City Homes",
    title: "Elegant Apartment with Private Terrace",
    image: "https://html.themewant.com/moonlit/assets/images/index-3/blog/4.webp",
    date: "October 26, 2024",
    author: "Ashiq",
  },
];

function ApartmentHotel() {
     const [showVideo, setShowVideo] = useState(false);
       const [activeIndex, setActiveIndex] = useState(0);
     const main = blogs.find((blog) => blog.isMain);
  const others = blogs.filter((blog) => !blog.isMain);

  const containerRef = useRef(null);

 const [animateText, setAnimateText] = useState(false);

useEffect(() => {
  setAnimateText(true);
  const timeout = setTimeout(() => setAnimateText(false), 500); // animation lasts 0.5s
  return () => clearTimeout(timeout);
}, [activeIndex]);


  return (
    <div><Header bg="black" />

    <section className="relative w-full h-[900px] ">
      {/* Background layout */}
      <div className="grid grid-cols-[30%_70%] h-full">
        {/* Left gray */}
        <div className="bg-gray-200 h-[1000px]"></div>

        {/* Right image (taller than gray area) */}
        <div className="relative h-full">
          <img
            src="https://html.themewant.com/moonlit/assets/images/index-3/banner/banner.webp"
            alt="Room"
            className="absolute top-0 left-0 w-full h-[1100px] object-cover"
          />
        </div>
      </div>

      {/* Text straddling gray and image */}
      <div className="absolute top-1/4 left-[30%] -translate-x-1/2 z-10 w-fit px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-serif leading-tight text-black whitespace-pre-line">
          Energy-Efficient{'\n'} Apartment with{'\n'} Smart Hotel
        </h1>
      </div>

      {/* Booking Form */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%] mb-40 bg-white rounded-xl shadow-lg px-4 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 z-20">
        {/* Check In */}
        <div className="flex flex-col">
          <span className="text-gray-800 text-sm mb-1">Check In</span>
          <div className="flex items-center gap-2 text-gray-700">
            <FaCalendarAlt />
            <span>15 Jun 2024</span>
          </div>
        </div>

        {/* Check Out */}
        <div className="flex flex-col">
          <span className="text-gray-800 text-sm mb-1">Check Out</span>
          <div className="flex items-center gap-2 text-gray-700">
            <FaCalendarAlt />
            <span>15 May 2024</span>
          </div>
        </div>

        {/* Adult */}
        <div className="flex flex-col">
          <span className="text-gray-800 text-sm mb-1">Adult</span>
          <div className="flex items-center gap-2 text-gray-700">
            <FaUser />
            <span>1 Person</span>
          </div>
        </div>

        {/* Child */}
        <div className="flex flex-col">
          <span className="text-gray-800 text-sm mb-1">Child</span>
          <div className="flex items-center gap-2 text-gray-700">
            <FaUser />
            <span>1 Child</span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#a1865e] hover:bg-[#8a6f4e] text-white px-6 py-3 rounded-md text-sm font-semibold transition">
          Check Now
        </button>
      </div>
    </section>
<section className="bg-white py-16 px-4 md:px-8 mt-70 w-full">
  <div className="text-center mb-10">
    <h4 className="text-yellow-800 text-base font-serif mb-2">
    <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
      <span className="flex items-center">
        <span className="text-sm sm:text-lg">◇</span>
        <span className="w-6 sm:w-10 h-px bg-black"></span>
      </span>
      Apartment
      <span className="flex items-center">
        <span className="w-6 sm:w-10 h-px bg-black"></span>
        <span className="text-sm sm:text-lg">◇</span>
      </span>
    </span>
  </h4>
    <h2 className="text-6xl font-serif  text-gray-900">
      Our Apartment
    </h2>
    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Our rooms offer a harmonious blend of comfort and elegance, designed to provide{'\n'} an exceptional stay for every guest Each room features plush bedding.
    </p>
  </div>

  {/* Full-Width Image Cards */}
  <div className="w-full overflow-x-auto scrollbar-hide">
    <div className="flex gap-6 min-w-[1500px] px-2">
      {apartmentData.map((apt, index) => (
        <div
          key={index}
          className={`flex-shrink-0 w-[23%] transition-all duration-500 overflow-hidden rounded shadow-lg cursor-pointer ${
            activeIndex === index ? "scale-105" : "opacity-90"
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <img
  src={apt.img}
  alt={apt.title}
  className="w-123 h-123 object-cover"
/>

        </div>
      ))}
    </div>
  </div>

  {/* Active Apartment Text */}
  <div
  className={`max-w-2xl mx-auto text-center bg-gray-50 shadow-md p-6 rounded mt-10 transition-opacity transform duration-500 ${
    animateText ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
  }`}
>
  <h3 className="text-5xl font-serif text-gray-800 mb-2">
    {apartmentData[activeIndex].title}
  </h3>
  <div className="flex justify-center gap-6 text-xl text-gray-600 mb-4">
    <span className="flex items-center gap-2">
      <FaRulerCombined className="text-[#b88d56]" />
      {apartmentData[activeIndex].size}
    </span>
    <span className="flex items-center gap-2">
      <FaUser className="text-[#b88d56]" />
      {apartmentData[activeIndex].persons} Person
    </span>
  </div>
  <p className="text-6xl text-[#b88d56]">
    {apartmentData[activeIndex].price}
  </p>
</div>


  {/* Dots */}
  <div className="mt-6 flex justify-center gap-3">
    {apartmentData.map((_, i) => (
      <button
        key={i}
        onClick={() => setActiveIndex(i)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          activeIndex === i ? "bg-[#b88d56] scale-125" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</section>
<style>{`
/* In your global CSS (e.g., index.css or App.css) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}
`}</style>
    <section className="bg-[#f4f4f4] px-6 md:px-21 py-15 relative ">
  <div className="grid md:grid-cols-2 items-center gap-13 relative z-10">
    
    {/* ✅ Moved Image to the first column */}
    <div className="w-full order-1 md:order-none">
      <img
        src="https://html.themewant.com/moonlit/assets/images/index-3/facility.webp"
        alt="Hotel Room"
        className="rounded-md w-full shadow-md"
      />
    </div>

    {/* ✅ Moved Text to the second column */}
    <div className="mb-5 order-2 md:order-none">
      <h4 className="text-yellow-800 text-base font-serif mb-2">
    <span className="flex  text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
      <span className="flex items-center">
        <span className="text-sm sm:text-lg">◇</span>
        <span className="w-6 sm:w-10 h-px bg-black"></span>
      </span>
      Facilities
    </span>
  </h4>
      <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-20">
        Apartment Facilities
      </h2>

      <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-gray-800 text-[15px]">
        {/* 1 */}
        <div>
          <div className="items-start gap-3 mb-2">
            <span className="text-[#b88d56] text-7xl">
              <img src="https://html.themewant.com/moonlit/assets/images/icon/bed.svg" />
            </span>
            <h4 className="font-serif text-3xl mt-7 mb-7">Rooms and Suites</h4>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.
          </p>
        </div>

        {/* 2 */}
        <div>
          <div className="items-start gap-3 mb-2">
            <span className="text-[#b88d56] text-2xl">
              <img src="https://html.themewant.com/moonlit/assets/images/icon/security.svg" />
            </span>
            <h4 className="font-serif text-3xl mt-7 mb-7">24-Hour Security</h4>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            On-site security personnel and best surveillance. From standard to luxury suites, secure storage for valuables.
          </p>
        </div>

        {/* 3 */}
        <div>
          <div className="items-start gap-3 mb-6 mt-10">
            <span className="text-[#b88d56] text-4xl">
              <img src="https://html.themewant.com/moonlit/assets/images/icon/gym.svg" />
            </span>
            <h4 className="font-serif text-3xl mt-10">Fitness Center</h4>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Equipped with exercise machines and weights. Offering massages, facials, and other treatments.
          </p>
        </div>

        {/* 4 */}
        <div>
          <div className="items-start gap-3 mb-6 mt-10">
            <span className="text-[#b88d56] text-7xl">
              <img src="https://html.themewant.com/moonlit/assets/images/icon/swimming-pool.svg" />
            </span>
            <h4 className="font-serif text-3xl mt-10">Swimming Pool</h4>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Indoor or outdoor pools for leisure or exercise. Offering massages, facials, and other treatments.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Optional background design */}
  <div className="absolute bottom-0 left-0 w-1/3 opacity-5">
    <img src="/your-decorative-circle.png" alt="bg" />
  </div>
</section>
 

    <section ><ClientSay/></section>
    <section className="relative w-full h-screen overflow-hidden">

  {/* Background image (scrolls with page) */}
  <img
    src="https://html.themewant.com/moonlit/assets/images/index-3/banner/banner.webp"
    alt="Hotel Background"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>

  {/* Rotating circle with play button */}
  <div className="absolute inset-0 flex border-green items-center justify-center">
    <div
      className="relative w-40 h-40 rounded-full  flex items-center justify-center cursor-pointer"
      onClick={() => setShowVideo(true)}
    >
      {/* Rotating text */}
      <div className="absolute w-82 h-82  border-black flex items-center justify-center">
  <svg className="w-40 h-40 text-white" viewBox="0 0 100 100">
    <defs>
      <path
        id="circlePath"
        d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
      />
    </defs>
    <g>
      <text fontSize="10" fill="white">
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
<section className="bg-white py-20 px-4 sm:px-10 lg:px-24">
      <div className="text-center mb-12">
        <h4 className="text-yellow-800 text-base font-serif mb-2">
    <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
      <span className="flex items-center">
        <span className="text-sm sm:text-lg">◇</span>
        <span className="w-6 sm:w-10 h-px bg-black"></span>
      </span>
      Blog
      <span className="flex items-center">
        <span className="w-6 sm:w-10 h-px bg-black"></span>
        <span className="text-sm sm:text-lg">◇</span>
      </span>
    </span>
  </h4>
        <h2 className="text-5xl font-serif  text-gray-900">See Our Latest Blog</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Main Blog Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={main.image} alt={main.title} className="w-full h-[400px] object-cover" />
          <div className="p-6">
            <span className="text-lg  bg-gray-100 px-3 py-1 rounded text-gray-700 inline-block mb-2">
              {main.category}
            </span>
            <h3 className="text-4xl font-serif  mb-4">{main.title}</h3>
            <div className="flex items-center gap-6 text-lg text-gray-500">
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="text-[#b88d56]" /> {main.date}
              </span>
              <span className="flex items-center gap-1">
                <FaUser className="text-[#b88d56]" /> {main.author}
              </span>
            </div>
          </div>
        </div>

        {/* Side Blog Previews */}
        <div className="flex flex-col gap-6">
          {others.map((blog) => (
            <div key={blog.id} className="flex gap-4 items-start">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-[180px] h-[200px] object-cover rounded-md flex-shrink-0"
              />
              <div>
                <span className="text-sm font-serif bg-gray-100 px-2 py-1 rounded  inline-block mb-1">
                  {blog.category}
                </span>
                <h4 className="font-serif text-3xl text-gray-800">{blog.title}</h4>
                <div className="flex items-center gap-4 text-lg text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[#b88d56]" /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUser className="text-[#b88d56]" /> {blog.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<section className="py-20 bg-white px-2 md:px-12">
  {/* Header */}
  <div className="mb-14 px-4 sm:px-8 md:px-16 lg:px-24">
  <h4 className="text-[#b88d56] text-base font-serif mb-2 text-left">
    <span className="flex items-center text-[#a8815e]  sm:gap-4  sm:mb-10 text-lg sm:text-2xl font-serif">
      <span className="flex items-center">
        <span className="text-sm sm:text-lg">◇</span>
        <span className="w-6 sm:w-10 h-px bg-black"></span>
      </span>
      Our Service
     
    </span>
  </h4>
  <h2 className="text-5xl sm:text-5xl font-serif text-gray-900 text-left">
    Our Services
  </h2>
</div>


  {/* Wider Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
    {/* Image 1 */}
    <div>
      <img
        src="https://html.themewant.com/moonlit/assets/images/pages/activities/3.webp"
        alt="Spa & Wellness"
        className="w-full h-[500px] object-cover rounded-lg"
      />
    </div>

    {/* Text Block 1 */}
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-2 text-[#a8815e] mb-2">
        <span className="h-px w-6 bg-[#a8815e]"></span>
        <span className="text-2xl">Spa & Wellness</span>
      </div>
      <h3 className="text-5xl font-serif mb-6">Spa & Wellness</h3>
      <p className="text-gray-700 mb-4 text-lg">
        At our Fitness & Yoga Services, we are dedicated to helping you achieve
        your health and wellness goals. Our comprehensive program offers a variety
        of classes designed to suit all levels, from beginners to advanced practitioners.
      </p>
      <a href="#" className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition">
        Read More
      </a>
    </div>

    {/* Text Block 2 */}
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-2 text-[#a8815e] mb-2">
        <span className="h-px w-6 bg-[#a8815e]"></span>
        <span className="text-2xl">Romantic Getaway</span>
      </div>
      <h3 className="text-5xl font-serif mb-6">Romantic Getaway</h3>
      <p className="text-gray-700 mb-4 text-lg">
        At our Fitness & Yoga Services, we are dedicated to helping you achieve
        your health and wellness goals. Our comprehensive program offers a variety
        of classes designed to suit all levels, from beginners to advanced practitioners.
      </p>
      <a href="#" className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition">
        Read More
      </a>
    </div>

    {/* Image 2 */}
    <div>
      <img
        src="https://html.themewant.com/moonlit/assets/images/index-3/service/2.webp"
        alt="Romantic Getaway"
        className="w-full h-auto mt-0 object-cover rounded-lg"
      />
    </div>
  </div>
</section>
<section><FollowInstagram/></section>
    </div>
  )
}

export default ApartmentHotel

