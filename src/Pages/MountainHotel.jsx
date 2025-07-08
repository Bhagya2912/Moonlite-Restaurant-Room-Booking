import Booking from "../Components/Booking/Booking"; 
import Footer from "../Components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar, FaStarHalfAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CalendarDays, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const rooms = [
  {
    name: "Rocky Ridge Room",
    price: "14999₹",
    image: "https://html.themewant.com/moonlit/assets/images/index-4/room/2.webp",
    size: "35 sqm",
    persons: "5",
  },
  {
    name: "Timberline Hideaway Hotel",
    price: "2999₹",
    image: "https://html.themewant.com/moonlit/assets/images/index-4/room/3.webp",
    size: "35 sqm",
    persons: "5",
  },
  {
    name: "Seaside Breeze Suite",
    price: "18999₹",
    image: "https://html.themewant.com/moonlit/assets/images/index-4/room/1.webp",
    size: "32 sqm",
    persons: "4",
  },
  {
    name: "Golden Horizon Room",
    price: "22999₹",
    image: "https://html.themewant.com/moonlit/assets/images/pages/blog/2.webp",
    size: "40 sqm",
    persons: "6",
  },
];

const testimonials = [
  {
    message:
      "Choosing Bokinn was one of the best decisions we’ve ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with and expertise. Their commitment to and delivering tailored.",
    name: "Sarah Martinez",
    role: "COO of Apex Solutions",
    rating: 4.5,
  },
  {
    message:
      "We were thoroughly impressed by their dedication to quality and attention to detail. Their support team is fantastic and very responsive.",
    name: "James Carter",
    role: "Founder of Stellar Tech",
    rating: 5,
  },
  {
    message:
      "Their team transformed our digital experience. We highly recommend them for anyone seeking reliable services with creativity.",
    name: "Olivia Rhodes",
    role: "Marketing Lead at Horizon",
    rating: 4,
  },
];

const blogs = [
  {
    label: "Alpine Retreat",
    title: "Experience the Majesty of the Mountains",
    image: "https://html.themewant.com/moonlit/assets/images/index-4/blog/1.webp",
    date: "March 26, 2024",
    author: "Ashique",
  },
  {
    label: "Summit Suite",
    title: "Nestled in Nature: Your Hotel Mountain Sanctuary",
    image: "https://html.themewant.com/moonlit/assets/images/index-4/blog/2.webp",
    date: "March 26, 2024",
    author: "Hasan",
  },
  {
    label: "Urban Oasis Living",
    title: "Discover the Ultimate Mountain Getaway",
    image: "https://html.themewant.com/moonlit/assets/images/index-4/blog/3.webp",
    date: "March 26, 2024",
    author: "Rh Emran",
  },
];


export default function MountainHotel() {
   const scrollRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 2;

  const scrollToIndex = (index) => {
    const cardWidth = scrollRef.current.offsetWidth / visibleCount;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = (direction) => {
    const newIndex =
      direction === "right"
        ? Math.min(currentIndex + 1, Math.floor((rooms.length - visibleCount)))
        : Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Auto scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex =
          prevIndex + 1 > rooms.length - visibleCount ? 0 : prevIndex + 1;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

 
  const slide = {
   
    description:
      "Elevate Your Stay Luxury and Adventure in the Mountains",
    image: "https://html.themewant.com/moonlit/assets/images/banner/1.webp",
  };

  const packages = [
  {
    image: "https://html.themewant.com/moonlit/assets/images/index-4/service/4.webp",
    title: "Business Traveler Special",
    price: "22999₹",
  },
  {
    image: "https://html.themewant.com/moonlit/assets/images/index-4/service/5.webp",
    title: "Spa Retreat Package",
    price: "22999₹",
  },
  {
    image: "https://html.themewant.com/moonlit/assets/images/index-4/service/2.webp",
    title: "Couple Package",
    price: "22999₹",
  },
  {
    image: "https://html.themewant.com/moonlit/assets/images/index-4/service/1.webp",
    title: "Family Fun Package",
    price: "22999₹",
  },
  {
    image: "https://html.themewant.com/moonlit/assets/images/index-4/service/3.webp",
    title: "Adventure Explorer",
    price: "22999₹",
  },
];
  
  const testimonial = testimonials[currentIndex];

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
 const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-[#a8815e]" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-[#a8815e]" />}
      </>
    );
  };

  
  return (
    <>
     <div className="relative w-full h-[750px] sm:h-[850px]">
  {/* Background Image */}
  <img
    src="https://html.themewant.com/moonlit/assets/images/index-4/banner/banner.webp"
    alt="Banner"
    className="w-full h-full object-cover brightness-50"
  />

  {/* Content on Left (Optional Text Block) */}
 <div className="absolute inset-0 z-10 flex items-center justify-start px-4 sm:px-10 md:px-20">
  <div className="text-white max-w-xl sm:max-w-2xl lg:max-w-3xl">
    <h4 className="text-5xl sm:text-5xl lg:text-7xl leading-tight font-serif">
      Elevate Your Stay<br />
      <span >Luxury and Adventure</span> in the Mountains
    </h4>
  </div>
</div>


  {/* Booking Form at Bottom Center */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-40 w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%]">
    <div className="bg-white rounded-2xl shadow-xl px-4 py-6 sm:px-6 sm:py-8 w-full">
      <Booking />
    </div>
  </div>
</div>


      {/* Animation Keyframe */}
      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    
    <section className="bg-white py-20 px-4 mt-20 sm:px-6 md:px-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
    
    {/* Left - Images */}
    <div className="relative flex justify-center items-center">
      {/* Background Image */}
      <img
        src="https://html.themewant.com/moonlit/assets/images/index-4/about/1.webp"
        alt="Background Landscape"
        className="w-[90%] sm:w-[500px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-xl shadow-lg object-cover"
      />
      
      {/* Overlapping Image */}
      <img
        src="https://html.themewant.com/moonlit/assets/images/index-4/about/2.webp"
        alt="Mountain Hiker"
        className="absolute bottom-[-70px] left-1/2 sm:left-[60%] w-[250px] sm:w-[300px] md:w-[280px] border-4 border-white rounded-xl shadow-xl transform -translate-x-1/2 sm:translate-x-0"
      />
    </div>

    {/* Right - Text */}
    <div className="text-center md:text-left mt-50 md:mt-0">
      <span className="flex  text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
      <span className="flex items-center">
        <span className="text-sm sm:text-lg">◇</span>
        <span className="w-6 sm:w-10 h-px bg-[#a8815e]"></span>
      </span>
      About Us
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
        Welcome To Our Moonlit Hotel & Resort
      </h2>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
        Welcome to Bokinn, where luxury meets comfort in the heart of Canada.
        Since 1999, we have been dedicated to providing an exceptional stay
        for our guests, blending modern amenities with timeless elegance.
        Our beautifully designed rooms and suites offer stunning views and
        plush accommodations, ensuring a restful retreat whether you’re here
        for business or leisure.
      </p>
      <img
        src="https://html.themewant.com/moonlit/assets/images/index-4/about/sign.webp"
        alt="Signature"
        className="mx-auto md:mx-0 w-40 sm:w-56 mt-6"
      />
    </div>
    
  </div>
</section>
   <section className="bg-[#1c1c1c] py-14 px-2 sm:px-6 mt-20 md:px-10 lg:px-25 xl:px-23 text-white">
      <div className="text-center mb-15">
    <h4 className="text-[#a8815e] text-base font-serif mb-2">
    <span className="flex items-center justify-center text-white gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
      <span className="flex items-center">
        <span className="text-sm sm:text-lg">◇</span>
        <span className="w-6 sm:w-10 h-px bg-white"></span>
      </span>
      Rooms
      <span className="flex items-center">
        <span className="w-6 sm:w-10 h-px bg-white"></span>
        <span className="text-sm sm:text-lg">◇</span>
      </span>
    </span>
  </h4>
    <h2 className="text-6xl font-serif  text-white">
      Our Rooms
    </h2>
  </div>

      <div className="flex justify-between items-center px-4 mb-6">
        <button
          onClick={() => handleScroll("left")}
          className="text-white text-2xl  hover:text-yellow-500"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="text-white text-2xl hover:text-yellow-500"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-hidden scroll-smooth gap-6"
      >
        {rooms.map((room, idx) => (
         <div
  key={idx}
  className="min-w-[49%] bg-white text-black rounded-xl shadow-lg px-4 py-6"
>
 <img
  src={room.image}
  alt={room.name}
  className="w-[600px] h-[350px] object-cover rounded-xl"
/>

<div className="mt-6 font-serif text-left pl-2">
  <h3 className="text-4xl sm:text-[24px] font-serif mb-4 text-[#111]">
    {room.name}
  </h3>

  <div className="text-xl text-gray-600 flex gap-6 mb-3">
    <span>📏 Size: {room.size}</span>
    <span>👤 Person: {room.persons} Person</span>
  </div>

  <div className="text-4xl text-[#a8815e] font-medium">{room.price}</div>


            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="px-4 sm:px-10 lg:px-24 mt-20 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Title */}
          <div className="md:max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-px bg-[#a8815e]"></div>
              <span className="text-[#a8815e] text-xl">✦</span>
              <span className="text-[#a8815e] text-xl font-serif">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-black ">Our Services</h2>
          </div>

          {/* Right: Paragraph */}
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            Our rooms offer a harmonious blend of comfort and elegance, designed to provide
            an exceptional stay for every guest. Each room features plush bedding, high-quality
            linens, and a selection of pillows to ensure a restful night’s sleep.
          </p>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          reverseDirection: true, // for right-to-left scroll
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-dot",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {packages.map((pkg, idx) => (
          <SwiperSlide key={idx}>
            <div className=" rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4 font-serif">
                <h3 className="text-2xl text-[#111] mb-2">
                  {pkg.title}
                </h3>
                <p className="text-3xl text-[#a8815e] font-medium">
                  {pkg.price}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Pagination dots */}
        <div className="swiper-pagination mt-20 !relative !bottom-0 hover:text-[#a8815e]"></div>
      </Swiper>
    
</section>
    <section className="py-20 px-4 md:px-24 bg-white font-serif">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            {/* Left Section */}
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-[#a8815e] text-3xl mb-2">
                <div className="h-px w-10 bg-[#a8815e]"></div>
                <span>✦</span>
                <span className="ml-2">Testimonial</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-black mb-6">
                What Our Client Say About Us
              </h2>
    
              {/* Avatar Row */}
              <div className="flex items-center mt-6">
                {[1, 2, 3, 4].map((_, i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                    alt="client"
                    className={`w-12 h-12 rounded-full border-4 border-white -ml-3 ${
                      i === 0 ? "ml-0" : ""
                    }`}
                  />
                ))}
                <span className="ml-3 text-lg bg-[#a8815e] text-white rounded-full px-2">
                  +
                </span>
              </div>
            </div>
    
            {/* Right Section */}
            <div className="md:w-1/2 space-y-6">
              {/* Star Rating */}
              <div className="flex gap-1 text-[#a8815e] text-4xl mb-4">
              {[1, 2, 3, 4].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="relative inline-block text-gray-300">
                ★
                <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-yellow-700">
                  ★
                </span>
              </span>
            </div>
    
              {/* Message */}
              <p className="text-gray-600 text-2xl leading-relaxed">{testimonial.message}</p>
    
              {/* Name & Role */}
              <div>
                <p className="text-gray-900 text-xl font-serif">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
    
              {/* Nav Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={goPrevious}
                  className="w-10 h-10 flex items-center justify-center border rounded text-lg hover:bg-gray-100"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={goNext}
                  className="w-10 h-10 flex items-center justify-center border border-black rounded text-lg hover:bg-gray-100"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>
         <section className="bg-white py-20 px-4 sm:px-10 lg:px-24">
      <div className="text-center mb-14">
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
        <h2 className="text-4xl sm:text-5xl font-serif text-[#111]">
          See Our Latest Blog
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-4 transition hover:shadow-md"
          >
           <div className="overflow-hidden rounded-lg mb-5 group">
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

            <span className="inline-block bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded mb-3">
              {blog.label}
            </span>

            <h3 className="text-xl sm:text-[22px] font-serif text-[#111] leading-snug mb-4">
              {blog.title}
            </h3>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <CalendarDays size={16} />
                {blog.date}
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                {blog.author}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
     
      
    </>
  );
}

