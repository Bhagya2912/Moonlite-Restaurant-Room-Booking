import { useEffect,useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Booking from "../Components/Booking/Booking"; 
import { faArrowLeft, faArrowRight, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header/Header";
import { FaBed, FaUserShield, FaDumbbell, FaSwimmingPool } from 'react-icons/fa';
import { FaArrowUpLong } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Pagination } from "swiper/modules";


export default function BeachHotel() {
  const swiperRef = useRef(null);
  const imageRef = useRef(null);
   const [showVideo, setShowVideo] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / winHeight) * 100;
      setScrollProgress(scrolled);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);
  
   const facilities = [
     {
       icon: <FaBed className="text-4xl text-[#a8815e] mb-4 block mx-auto" />,
       title: "Rooms and Suites",
       description:
         "Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.",
     },
     {
       icon: <FaUserShield className="text-4xl text-[#a8815e] mb-4 block mx-auto" />,
       title: "24-Hour Security",
       description:
         "On-site security personnel and best surveillance. From standard to luxury suites. Secure storage for valuables.",
     },
     {
       icon: <FaDumbbell className="text-4xl text-[#a8815e] mb-4 block mx-auto"/>,
       title: "Fitness Center",
       description:
         "Equipped with exercise machines and weights. Offering massages, facials, and other treatments.",
     },
     {
       icon: <FaSwimmingPool className="text-4xl text-[#a8815e] mb-4 block mx-auto" />,
       title: "Swimming Pool",
       description:
         "Indoor or outdoor pools for leisure or exercise. Offering massages, facials, and other treatments.",
     },
   ];

   const rooms = [
  {
    name: "The Ritz-Carlton",
    img: "https://html.themewant.com/moonlit/assets/images/room/1.webp",
    size: "35 sqm",
    persons: "2 Person",
    price: "5999₹",
  },
  {
    name: "Four Seasons Hotels",
    img: "https://html.themewant.com/moonlit/assets/images/room/2.webp",
    size: "35 sqm",
    persons: "2 Person",
    price: "3999₹",
  },
  {
    name: "Waldorf Astoria Hotels",
    img: "https://html.themewant.com/moonlit/assets/images/room/3.webp",
    size: "35 sqm",
    persons: "5 Person",
    price: "5999₹",
  },
  {
    name: "Mandarin Oriental",
    img: "https://html.themewant.com/moonlit/assets/images/room/4.webp",
    size: "40 sqm",
    persons: "3 Person",
    price: "6999₹",
  },
  {
    name: "Park Hyatt",
    img: "https://html.themewant.com/moonlit/assets/images/room/2.webp",
    size: "35 sqm",
    persons: "2 Person",
    price: "4999₹",
  },
  {
    name: "The Leela Palace",
    img: "https://html.themewant.com/moonlit/assets/images/room/3.webp",
    size: "35 sqm",
    persons: "2 Person",
    price: "8999₹",
  },
  {
    name: "Taj Hotels",
    img: "https://html.themewant.com/moonlit/assets/images/room/1.webp",
    size: "40 sqm",
    persons: "3 Person",
    price: "5999₹",
  },
  {
    name: "Marriott International",
    img: "https://html.themewant.com/moonlit/assets/images/room/4.webp",
    size: "38 sqm",
    persons: "4 Person",
    price: "6599₹",
  },
  {
    name: "InterContinental",
    img: "https://html.themewant.com/moonlit/assets/images/room/1.webp",
    size: "33 sqm",
    persons: "2 Person",
    price: "5999₹",
  },
  {
    name: "St. Regis",
    img: "https://html.themewant.com/moonlit/assets/images/room/2.webp",
    size: "36 sqm",
    persons: "2 Person",
    price: "4999₹",
  },
];


    useEffect(() => {
      const handleScroll = () => {
        const image = imageRef.current;
        if (!image) return;
  
        const container = image.parentElement;
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        const visibleTop = Math.max(0, windowHeight - rect.top);
        const totalScrollable = rect.height + windowHeight;
  
        const scrollProgress = Math.min(Math.max(visibleTop / totalScrollable, 0), 1);
  
        // Zoom from scale 1.3 to 1.0
        const scale = 1.3 - scrollProgress * 0.3;
  
        image.style.transform = `scale(${scale})`;
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  const slides = [
    {
      title1: "Lavish Getaway A Blend of",
      title2: "Comfort & Style",
      subtitle: "Welcome to Our Spa",
      description:
        "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner",
      image: "https://st4.depositphotos.com/13503176/22105/i/450/depositphotos_221057512-stock-photo-inclined-coconut-trees-leaning-tropical.jpg",
    },
    {
      title1: "Luxury Stay Hotel Experience",
      title2: "Comfort & Elegance",
      subtitle: "Welcome to Our Hotel",
      description:
        "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner",
      image: "https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp",
    },
  ];

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
    <>
    <div className="bg-black text-white [&_*]:bg-black [&_*]:text-white">
  <Header />
</div>
    <div className="relative w-full group mb-40">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={1} // ✅ Show only one slide
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-full [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[120vh] group">
              <img
                src={slide.image}
                alt="slide"
                className="w-full h-full object-cover brightness-50"
              />

              {/* Navigation Arrows */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-white w-10 h-10"
                />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-white w-10 h-10"
                />
              </button>

              {/* Slide Content */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  {/* Decorative Title Line */}
                  <span className="flex items-center justify-center text-white gap-2 sm:gap-4 mb-6 mt-40 sm:mb-10 text-lg sm:text-2xl font-serif">
                    <span className="flex items-center">
                      <span className="text-sm sm:text-lg">◇</span>
                      <span className="w-6 sm:w-10 h-px bg-white"></span>
                    </span>

                    {slide.subtitle}

                    <span className="flex items-center">
                      <span className="w-6 sm:w-10 h-px bg-white"></span>
                      <span className="text-sm sm:text-lg">◇</span>
                    </span>
                  </span>

                  {/* Main Heading */}
                  <h1 className="text-5xl md:text-6xl leading-tight mb-9 text-white opacity-0 animate-[slideUp_1s_ease-out_forwards]">
                    <span className="block">{slide.title1}</span>
                    <span className="block">{slide.title2}</span>
                  </h1>

                  {/* Description */}
                  <p className="max-w-2xl mx-auto text-lg mb-8">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <a
                    href="#"
                    className="inline-block bg-[#a8815e] text-white px-6 py-3 rounded hover:bg-yellow-800 transition"
                  >
                    Discover Room
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Booking Form */}
      <div className="relative sm:absolute sm:bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-1/2 z-40 w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%] mt-6 sm:mt-0">
  <div className="bg-black text-white rounded-2xl shadow-lg px-3 py-2 sm:px-6 sm:py-4 w-full">
    <Booking />
  </div>
</div>


      {/* Slide animation keyframes */}
      <style>{`
        @keyframes slideUp {
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
    </div>
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 ">
  <div className="flex flex-col md:flex-row-reverse mt-40 items-center md:items-start max-w-[1400px] mx-auto relative">
    
    {/* Right Side: Image Section */}
    <div className="relative w-full md:w-[900px] p-4">
      {/* Main Image */}
      <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-lg mx-auto max-w-[550px]">
        <img
          src="https://html.themewant.com/moonlit/assets/images/about/about-1.webp"
          alt="Main Room"
          className="w-full h-[900px] object-cover transition-transform duration-200 ease-out will-change-transform"
        />
      </div>

      {/* Experience Info Box */}
      <div className="absolute top-20 right-5 sm:right-10 md:right-2 bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-lg flex items-center space-x-3 w-50 sm:w-60">
        <div className="bg-gray-200 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <div className="px-2 sm:px-5">
          <div className="text-lg sm:text-xl font-semibold text-gray-700">50+</div>
          <div className="text-sm sm:text-base text-gray-500">Experience Staff</div>
        </div>
      </div>
    </div>

    {/* Left Side: Text Content */}
    <div className="w-full md:w-1/2 mt-10  md:mt-0 md:mr-20">
      {/* About Label */}
      <div className="flex mt-20 items-center gap-4 mb-4">
        <div className="flex items-center text-[#a8815e] gap-0">
          <div className="h-px w-10 bg-[#a8815e]"></div>
          <span className="text-xl">✦</span>
        </div>
        <p className="text-2xl text-[#b86e2e]">About Us</p>
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-3xl md:text-5xl font-serif py-6 mb-4 leading-snug">
        <span className="block mb-2">Welcome To Our Moonlit</span>
        <span className="block"> Hotel & Resort</span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-600 text-2xl sm:text-lg mb-6">
        Welcome to Bokinn, where luxury meets comfort in the heart of Canada. Since 1999, we have been dedicated to providing an exceptional stay for our guests, blending modern amenities with timeless elegance. Our beautifully designed rooms and suites offer stunning views and plush accommodations, ensuring a restful retreat whether you’re here for business or leisure.
      </p>

      {/* Button */}
      <button className="bg-[#a8815e] text-white px-6 py-3 rounded-md hover:bg-[#edb88a] transition duration-300">
        Learn More
      </button>
    </div>
  </div>
</section>
<section className="mb-10 bg-[#111] text-white">
  <div className="py-16">
    {/* Heading */}
    <div className="text-center mb-12">
      <h4 className="text-[#c79e66] text-3xl font-serif mb-2">
        <span className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 text-2xl font-serif">
          <span className="flex items-center">
            <span className="text-sm sm:text-2xl">◇</span>
            <span className="w-6 sm:w-10 h-px bg-[#c79e66] ml-2"></span>
          </span>
          Facilities
          <span className="flex items-center">
            <span className="w-6 sm:w-10 h-px bg-[#c79e66] mr-2"></span>
            <span className="text-sm sm:text-2xl">◇</span>
          </span>
        </span>
      </h4>
      <h2 className="text-5xl sm:text-7xl font-serif text-white">Hotel Facilities</h2>
    </div>

    {/* Facility Cards */}
    <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
      {facilities.map((facility, index) => (
        <div
          key={index}
          className="bg-[#1b1b1b] rounded-lg shadow-md p-10 min-h-[290px] w-full max-w-[420px] mx-auto text-center hover:shadow-[#c79e66]/30 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="text-[#c79e66] text-4xl mb-4">{facility.icon}</div>
          <h3 className="text-2xl mt-5 font-serif font-medium text-white mb-2">
            {facility.title}
          </h3>
          <p className="text-gray-300 font-serif text-lg mt-5 leading-relaxed">
            {facility.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-[#111] text-white py-12">
  {/* Header */}
  <div className="max-w-7xl mx-auto px-4 py-12">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      {/* Left: Title */}
      <div className="md:max-w-md">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-px bg-[#c79e66]"></div>
          <span className="text-[#c79e66] text-xl">✦</span>
          <span className="text-[#c79e66] text-lg font-serif">Room</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif text-white">Our Rooms</h2>
      </div>

      {/* Right: Paragraph */}
      <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
        Our rooms offer a harmonious blend of comfort and elegance, designed to provide
        an exceptional stay for every guest. Each room features plush bedding, high-quality
        linens, and a selection of pillows to ensure a restful night’s sleep.
      </p>
    </div>
  </div>

  {/* Swiper */}
  <div className="px-4 pt-12 pb-16">
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="!pb-16"
    >
      {rooms.map((room, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="rounded-xl overflow-hidden shadow-lg relative animate-fadeInUp"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="overflow-hidden h-[560px]">
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute bottom-0 left-0 w-full p-4 z-20 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-4xl font-serif">{room.name}</h3>
              <div className="text-lg flex gap-4 mt-3">
                <span className="flex items-center gap-1 text-white">
                  <i className="fa-solid fa-house"></i> {room.size}
                </span>
                <span className="flex items-center gap-1 text-white">
                  <i className="fa-solid fa-user"></i> {room.persons}
                </span>
              </div>
              <p className="text-xl font-semibold mt-3">{room.price}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Animation & Pagination Styling */}
    <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease forwards;
      }

      .swiper-pagination {
        text-align: center;
        margin-top: 20px;
      }
      .swiper-pagination-bullet {
        background: #ccc;
        width: 10px;
        height: 10px;
        margin: 0 5px !important;
        border-radius: 50%;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background: #c79e66;
      }
    `}</style>
  </div>
</section>


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


<section className="relative h-screen overflow-hidden px-4">
  <div className="w-full max-w-[1300px] mx-auto h-full max-h-[1300px] relative">
    {/* Background image */}
    <img
      src="https://html.themewant.com/moonlit/assets/images/pages/gallery/7.webp"
      alt="Hotel Background"
      className="absolute inset-0 w-full h-full object-cover rounded-xl"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent rounded-xl"></div>

    {/* Rotating circle with play button */}
    <div className="absolute inset-0 flex items-center  justify-center">
      <div
        className="relative w-40 h-40 rounded-full border-2 border-white  flex items-center justify-center cursor-pointer"
        onClick={() => setShowVideo(true)}
      >
        {/* Rotating text */}
        <div className="absolute w-82 h-82 flex items-center justify-center">
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
  </div>
</section>
<section className="bg-black py-20 px-4 sm:px-10 lg:px-20 text-white">
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
        <h2 className="text-4xl md:text-7xl font-serif text-white">Special Offer</h2>
      </div>

      {/* Right: Paragraph */}
      <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
        Experience the ultimate in luxury and relaxation with our exclusive special offer! Book your stay<br /> now and enjoy
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
        <h3 className="text-2xl font-serif text-white mb-4 mt-10">Family Fun Package</h3>
        <ul className="text-gray-300 space-y-2 text-base list-none">
          <li>◎ 15% off on family suites</li>
          <li>◎ Free meals for kids under 12</li>
          <li>◎ Complimentary tickets</li>
          <li>◎ The local amusement park</li>
          <li>◎ Daily family-friendly activities</li>
        </ul>
        <button className="mt-4 text-[#a8815e] font-semibold underline hover:text-yellow-500">Book Now</button>
      </div>
    </div>

    {/* Offer 2 */}
    <div className="flex items-start gap-6">
      <img
        src="https://html.themewant.com/moonlit/assets/images/offer/2.webp"
        alt="Spa Retreat"
        className="w-74 h-84 rounded-lg object-cover transition duration-500 ease-in-out filter grayscale hover:grayscale-0 hover:scale-105"
      />
      <div>
        <h3 className="text-2xl font-serif text-white mb-4 mt-10">Spa Retreat</h3>
        <ul className="text-gray-300 space-y-2 text-base list-none">
          <li>◎ A two-night stay in a premium room</li>
          <li>◎ Daily spa treatments</li>
          <li>◎ Healthy breakfast and lunch options</li>
          <li>◎ Access to all spa facilities</li>
          <li>◎ 25% off for stays of 7 nights or more</li>
        </ul>
        <button className="mt-4 text-[#a8815e] font-semibold underline hover:text-yellow-500">Book Now</button>
      </div>
    </div>

    {/* Offer 3 */}
    <div className="flex items-start gap-6">
      <img
        src="https://html.themewant.com/moonlit/assets/images/offer/3.webp"
        alt="Business"
        className="w-74 h-84 rounded-lg object-cover transition duration-500 ease-in-out filter grayscale hover:grayscale-0 hover:scale-105"
      />
      <div>
        <h3 className="text-2xl font-serif text-white mb-4 mt-10">Business Traveler Special</h3>
        <ul className="text-gray-300 space-y-2 text-base list-none">
          <li>◎ 10% off on executive rooms</li>
          <li>◎ Complimentary high-speed Wi-Fi</li>
          <li>◎ Access to the business lounge</li>
          <li>◎ Free airport shuttle service</li>
          <li>◎ Daily family-friendly activities</li>
        </ul>
        <button className="mt-4 text-[#a8815e] font-semibold underline hover:text-yellow-500">Book Now</button>
      </div>
    </div>

    {/* Offer 4 */}
    <div className="flex items-start gap-6">
      <img
        src="https://html.themewant.com/moonlit/assets/images/offer/4.webp"
        alt="Romantic Getaway"
        className="w-74 h-84 rounded-lg object-cover transition duration-500 ease-in-out filter grayscale hover:grayscale-0 hover:scale-105"
      />
      <div>
        <h3 className="text-2xl font-serif text-white mb-4 mt-10">Romantic Getaway</h3>
        <ul className="text-gray-300 space-y-2 text-base list-none">
          <li>◎ A two-night stay in a deluxe suite</li>
          <li>◎ A bottle of champagne and chocolates</li>
          <li>◎ Romantic dinner for two</li>
          <li>◎ Couples massage at our spa</li>
          <li>◎ Couples massage at our spa</li>
        </ul>
        <button className="mt-4 text-[#a8815e] font-semibold underline hover:text-yellow-500">Book Now</button>
      </div>
    </div>
  </div>
</section>


 <footer className="bg-black pt-26 pb-10 px-6 md:px-26 font-serif text-white">
  {/* Top Section: Newsletter */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
    <h2 className="text-4xl sm:text-6xl font-serif text-white mb-6 md:mb-0">
      Join Our Newsletter
    </h2>
    <form className="flex w-full md:w-[500px] shadow-lg rounded overflow-hidden">
      <input
        type="email"
        placeholder="Enter your mail"
        className="flex-grow px-4 py-4 bg-white text-black text-base outline-none"
      />
      <button
        type="submit"
        className="bg-[#a8815e] text-white px-6 text-base font-semibold"
      >
        Subscribe
      </button>
    </form>
  </div>

  {/* Middle Section: Info Columns */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
    {/* Logo + Description */}
    <div>
      <h4 className="text-xl font-Serif mb-4 flex items-center gap-2">
        <img
          src="https://html.themewant.com/moonlit/assets/images/logo/logo.svg"
          alt="Logo"
          className="h-12 w-auto filter invert"
        />
      </h4>
      <p className="text-lg text-white">
        Each room features plush bedding, high-quality linens, and a selection
        of amenities to ensure a restful night’s sleep.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
      <ul className="space-y-3 text-lg text-white">
        <li>Rooms & Suites</li>
        <li>Dining</li>
        <li>Spa & Wellness</li>
        <li>Special Offers</li>
      </ul>
    </div>

    {/* Guest Services */}
    <div>
      <h4 className="text-xl font-semibold mb-4 text-white">Guest Service</h4>
      <ul className="space-y-3 text-lg text-white">
        <li>24/7 Front Desk</li>
        <li>Parking</li>
        <li>Room Service</li>
        <li>Free Wi-Fi</li>
        <li>Concierge Service</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
      <ul className="space-y-4 text-lg text-white">
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
  <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-base text-gray-400">
    <p>Copyright © 2025 Moonlit. All rights reserved.</p>
    <div className="flex gap-6 mt-3 sm:mt-0">
      <a href="#" className="hover:text-[#a8815e]">Facebook</a>
      <a href="#" className="hover:text-[#a8815e]">LinkedIn</a>
      <a href="#" className="hover:text-[#a8815e]">Twitter</a>
    </div>
  </div>

  {/* Scroll to Top Button */}
  {isVisible && (
    <div
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "15px",
        right: "15px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "black",
        border: "2px solid white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 1000,
      }}
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
            stroke: "white",
            strokeWidth: "2",
            transition: "stroke-dashoffset 50ms linear",
          }}
        />
      </svg>
      <FaArrowUpLong style={{ color: "white", fontSize: "20px", zIndex: 10 }} />
    </div>
  )}
</footer>


    </>
  );
}


