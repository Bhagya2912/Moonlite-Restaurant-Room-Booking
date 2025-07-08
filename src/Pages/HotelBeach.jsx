import React, { useRef } from 'react'
import { FaCalendarAlt, FaUser,FaRulerCombined } from "react-icons/fa";
import OurRooms from "../Components/OurRooms/OurRooms"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { faArrowLeft, faArrowRight, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMapMarkerAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    category: "March 26, 2024",
    title: "Your Perfect Event, Our Oceanfront Paradise",
    image: "https://html.themewant.com/moonlit/assets/images/index-6/event/1.webp",
    author: "AThe Ritz-Carlton (California, USA)",
    isMain: true,
  },
  {
    id: 2,
    category: "March 26, 2024",
    title: "Spacious One-Bedroom in Prime Location",
    image: "https://html.themewant.com/moonlit/assets/images/index-6/event/2.webp",
    author: "The Ritz-Carlton (USA)",
  },
  {
    id: 3,
    category: "March 26, 2024",
    title: "Comfortable Room with En-Suite Bathroom",
    image: "https://html.themewant.com/moonlit/assets/images/index-3/blog/3.webp",
    author: "The Ritz-Carlton (USA)",
  },
  {
    id: 4,
    category: "October 26, 2024",
    title: "Elegant Apartment with Private Terrace",
    image: "https://html.themewant.com/moonlit/assets/images/index-3/blog/4.webp",
    author: "The Ritz-Carlton (California, USA)",
  },
];

const services = [
  {
    title: 'Family Fun Package',
    price: '5999₹',
    img: 'https://html.themewant.com/moonlit/assets/images/index-6/service/1.webp',
  },
  {
    title: 'Spa Retreat',
    price: '5999₹',
    img: 'https://html.themewant.com/moonlit/assets/images/index-6/service/2.webp',
  },
  {
    title: 'Romantic Getaway',
    price: '5999₹',
    img: 'https://html.themewant.com/moonlit/assets/images/index-6/service/3.webp',
  },
  {
    title: 'Velvet Red Reserve',
    price: '5999₹',
    img: 'https://html.themewant.com/moonlit/assets/images/index-6/service/4.webp',
  },
];

export default function HotelBeach() {
     const swiperRef = useRef(null);

      const main = blogs.find((blog) => blog.isMain);
  const others = blogs.filter((blog) => !blog.isMain);
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
  return (
    <div>
     <section className="relative w-full h-[900px]">
  {/* Full Background Image */}
  <img
    src="https://html.themewant.com/moonlit/assets/images/index-6/banner/banner.webp"
    alt="Room"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark overlay (optional for better text visibility) */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Centered Heading Text */}
  <div className="absolute top-[40%] left-1/2 -translate-x-1/2 z-20 text-center px-4">
  <h1 className="text-5xl sm:text-5xl md:text-7xl xl:text-7xl font-serif leading-tight text-white">
    Discover the Beauty of Our Coastal Haven
  </h1>
</div>

{/* Booking Form at Bottom Center */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] mb-50 md:w-[85%] bg-white rounded-xl shadow-lg px-4 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 z-30">
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
<section>
    <OurRooms/>
</section>
<section className="w-full h-screen flex flex-col md:flex-row font-serif">
      {/* Left Image Side */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="https://html.themewant.com/moonlit/assets/images/index-6/about.webp"
          alt="Resort View"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text Side */}
      <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center p-6 md:p-20 text-gray-800">
        <div className="max-w-xl">
          <h4 className="text-[#a1865e] text-xl sm:text-2xl font-serif mb-4">
        <span className="flex  text-[#a1865e] gap-2 sm:gap-4 text-xl sm:text-3xl font-serif">
          <span className="flex items-center">
            <span className="text-sm sm:text-xl">✦</span>
            <span className="w-6 sm:w-10 h-px bg-[#a1865e]"></span>
          </span>
          About us
          </span>
          </h4>
          <h1 className="text-4xl md:text-5xl font-serif  mb-6 leading-tight">
            Welcome To Our Moonlit<br />Hotel & Resort
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Welcome to Bokinn, where luxury meets comfort in the heart of Canada. Since 1999, we
            have been dedicated to providing an exceptional stay for our guests, blending modern
            amenities with timeless elegance. Our beautifully designed rooms and suites offer stunning
            views and plush accommodations, ensuring a restful retreat whether you're here for business or leisure.
          </p>
          <img
            src="https://html.themewant.com/moonlit/assets/images/index-5/sign.webp"
            alt="Signature"
            className="w-20 mt-4"
          />
        </div>
      </div>
    </section>
<section className="py-20 px-4 md:px-20 bg-white font-serif">
      {/* Header */}
      <div className="mb-12">
        <h4 className="text-[#a1865e] text-xl sm:text-2xl font-serif mb-4">
        <span className="flex  text-[#a1865e] gap-2 sm:gap-4 text-xl sm:text-3xl font-serif">
          <span className="flex items-center">
            <span className="text-sm sm:text-xl">✦</span>
            <span className="w-6 sm:w-10 h-px bg-[#a1865e]"></span>
          </span>
          Our Services
          </span>
          </h4>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <h2 className="text-5xl font-serif">Our Services</h2>
          <p className="text-gray-600 max-w-xl text-base leading-relaxed">
            Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest.
            Each room features plush bedding, high-quality linens, and a selection of pillows to ensure a restful night’s sleep.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-stretch  rounded-xl overflow-hidden"
          >
           <img
  src={service.img}
  alt={service.title}
  className="w-full sm:w-[50%] h-64 object-cover rounded-md transition-transform duration-500 ease-in-out hover:scale-105 hover:brightness-110"
/>
            <div className="flex flex-col justify-center p-6 sm:w-[50%]">
              <h3 className="text-3xl mb-2 text-gray-900">{service.title}</h3>
              <p className="text-2xl text-yellow-700 font-medium">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
<section
  className="relative py-24 text-white bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://html.themewant.com/moonlit/assets/images/index-3/blog/3.webp')", // ✅ Replace with your own image
  }}
>
  {/* 🔷 Bluish Overlay */}
  <div className="absolute inset-0 bg-[#0d1c33]/70 z-0"></div>

  {/* ✅ Content Wrapper */}
  <div className="relative z-10">
    {/* Title */}
    <div className="text-center mb-16 px-4">
      <h4 className="text-white text-xl sm:text-2xl font-serif mb-4">
        <span className="flex items-center justify-center text-white gap-2 sm:gap-4 text-xl sm:text-3xl font-serif">
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

    {/* Swiper Carousel */}
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
              {/* Stars */}
              <div className="flex justify-center gap-1 text-white text-4xl mb-6">
                {[1, 2, 3, 4].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {/* Half Star */}
                <span className="relative inline-block text-gray-500">
                  ★
                  <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-white">
                    ★
                  </span>
                </span>
              </div>

              <p className="text-white text-2xl sm:text-2xl leading-relaxed font-serif max-w-5xl mx-auto mb-10">
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
                  <span className="text-white text-sm sm:text-base">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-600 rounded-full flex items-center justify-center transition hover:bg-[#a8815e]"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-black w-6 h-6" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-600 rounded-full flex items-center justify-center transition hover:bg-[#a8815e]"
      >
        <FontAwesomeIcon icon={faArrowRight} className="text-black w-6 h-6" />
      </button>
    </div>
  </div>
</section>
<section className="bg-[#f4f4f4] px-6 md:px-20 py-16 relative">
  <div className="grid md:grid-cols-2 items-stretch gap-12 relative z-10 min-h-[700px]">
    {/* Left Content */}
    <div className="flex flex-col justify-center">
      <h4 className="text-[#b88d56] text-xl sm:text-2xl font-serif mb-4">
        <span className="flex items-center gap-2 sm:gap-4 text-xl sm:text-3xl font-serif">
          <span className="flex items-center">
            <span className="text-sm sm:text-xl">✦</span>
            <span className="w-6 sm:w-10 h-px bg-[#b88d56]"></span>
          </span>
          Facilities
        </span>
      </h4>

      <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-16">
        Hotel Facilities
      </h2>

      <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-gray-800 text-[15px]">
        {/* 1 */}
        <div>
          <div className="mb-2">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/bed.svg" className="w-12" />
            <h4 className="text-2xl font-serif mt-4 mb-2">Rooms and Suites</h4>
          </div>
          <p className="text-lg text-gray-600">
            Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.
          </p>
        </div>

        {/* 2 */}
        <div>
          <div className="mb-2">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/security.svg" className="w-10" />
            <h4 className="text-2xl font-serif mt-4 mb-2">24-Hour Security</h4>
          </div>
          <p className="text-lg text-gray-600">
            On-site security personnel and surveillance. Secure storage for valuables.
          </p>
        </div>

        {/* 3 */}
        <div>
          <div className="mb-2 mt-4">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/gym.svg" className="w-12" />
            <h4 className="text-2xl font-serif mt-4 mb-2">Fitness Center</h4>
          </div>
          <p className="text-lg text-gray-600">
            Fully equipped with machines and weights. Includes spa and wellness options.
          </p>
        </div>

        {/* 4 */}
        <div>
          <div className="mb-2 mt-4">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/swimming-pool.svg" className="w-12" />
            <h4 className="text-2xl font-serif mt-4 mb-2">Swimming Pool</h4>
          </div>
          <p className="text-lg text-gray-600">
            Indoor and outdoor pools for exercise and relaxation.
          </p>
        </div>
      </div>
    </div>

    {/* Right Image Full Cover */}
    <div className="w-[1200px] h-[800px]">
      <img
        src="https://html.themewant.com/moonlit/assets/images/index-6/facility.webp"
        alt="Hotel Room"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  </div>
</section>

<section className="bg-white py-20 px-4 sm:px-10 lg:px-24">
      <div className="text-center mb-12">
        <h4 className="text-yellow-800 text-base font-serif mb-2">
    <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
      <span className="flex items-center">
        <span className="text-sm sm:text-lg">◇</span>
        <span className="w-6 sm:w-10 h-px bg-black"></span>
      </span>
      Event
      <span className="flex items-center">
        <span className="w-6 sm:w-10 h-px bg-black"></span>
        <span className="text-sm sm:text-lg">◇</span>
      </span>
    </span>
  </h4>
        <h2 className="text-7xl font-serif  ">Our Recent Beachside Events</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Main Blog Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={main.image} alt={main.title} className="w-full h-[400px] object-cover" />
          <div className="p-6">
            <span className="text-lg  flex gap-2 px-3 py-1 rounded text-gray-700  mb-2">
              <FaCalendarAlt className="text-[#b88d56]" />{main.category}
            </span>
            <h3 className="text-2xl font-serif  mb-4">{main.title}</h3>
            <div className="flex items-center gap-6 text-lg text-gray-500">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-[#b88d56]" /> {main.author}
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
                <span className="text-sm flex font-serif gap-2 px-2 py-1 rounded  mb-1">
                 <FaCalendarAlt className="text-[#b88d56]" />  {blog.category}
                </span>
                <h4 className="font-serif text-3xl text-gray-800">{blog.title}</h4>
                <div className="flex items-center gap-4 text-lg text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[#b88d56]" /> {blog.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  )
}
