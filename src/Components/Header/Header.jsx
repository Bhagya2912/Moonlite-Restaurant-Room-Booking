import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useNavigate,Link } from "react-router-dom";
import Loader from "../Loader";


export default function Header({ onSignInClick,onSignUpClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideTopHeader, setHideTopHeader] = useState(false);
  const navigate = useNavigate();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate brief loading (e.g., 800ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const homeMenuItems = [
  {
    name: "Luxury Hotel",
    href: "index.html",
    img: "https://html.themewant.com/moonlit/assets/images/menu/main.webp",
  },
  {
    name: "LuxeVista Hotel",
    href: "index-2.html",
    img: "https://html.themewant.com/moonlit/assets/images/menu/01.webp",
  },
  {
    name: "OceanBreeze Resort",
    href: "index-3.html",
    img: "https://html.themewant.com/moonlit/assets/images/menu/03.webp",
  },
  {
    name: "Apartment Hotel",
    href: "index-4.html",
    img: "https://html.themewant.com/moonlit/assets/images/menu/04.webp",
  },
  {
    name: "Mountain Hotel",
    href: "index-5.html",
    img: "https://html.themewant.com/moonlit/assets/images/menu/4.webp",
  },
  {
    name: "City Hotel",
    href: "index-6.html",
    img: "https://html.themewant.com/moonlit/assets/images/menu/5.webp",
  },
  {
    name: "Beach Hotel",
    href: "index-7.html",
    img: "https://html.themewant.com/moonlit/assets/images/menu/6.webp",
  },
  {
    name: "Beach Hotel",
    href: "index-dark.html",
    img: "https://html.themewant.com/moonlit/assets/images/menu/hotel-dark.webp",
  },
  {
    name: "Hotel Seaside",
    href: "index-video.html",
    img: "https://html.themewant.com/moonlit/assets/images/menu/08.webp",
  },
];

const pages = [
  { name: "About", path: "/about" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Gallery", path: "/gallery" },
  { name: "Service", path: "/service" },
  { name: "Event", path: "/event" },
  { name: "Activities", path: "/activities" },
];


  // Scroll handler to hide top header
 useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setHideTopHeader(true);
    } else {
      // Scrolling up
      setHideTopHeader(true);
    }

    if (currentScrollY === 0) {
      setHideTopHeader(false); // Show header at the very top
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Header */}
    <div
  className={`transition-all duration-500 bg-white text-gray-700 shadow px-4 sm:px-6 py-3 hidden sm:flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 ${
    hideTopHeader ? "sm:hidden" : ""
  }`}
>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-sm px-4 sm:px-18">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-xs" /> +12505550199
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-xs" /> moonlit@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm px-4 sm:px-18">
          <FaMapMarkerAlt className="text-xs" />
          <span>280 Augusta Avenue, M5T 2L9 Toronto, Canada</span>
        </div>
      </div>
 <hr className="border-t border-gray-200 hidden sm:block" />
      {/* Sticky Navbar */}
      <nav className="sticky top-0 bg-white shadow-md py-4 flex items-center justify-between transition-all duration-300 z-40 px-4 sm:px-24">
       {loading && <Loader />}
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-5 text-gray-700 text-sm font-medium ">
      {/* HOME MENU */}
      <li
        onMouseEnter={() => setIsHomeOpen(true)}
        onMouseLeave={() => setIsHomeOpen(false)}
        className="relative cursor-pointer"
      >
       <div className="flex items-center gap-1 hover:text-yellow-600 group cursor-pointer">
  Home
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-[2px] transform transition-transform duration-300 group-hover:rotate-180"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
</div>


{isHomeOpen && (
  <div
    className="absolute top-full left-0 mt-4 z-50 bg-white p-6 shadow-xl border border-gray-200 rounded-md w-[1000px] h-[600px] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
    style={{
      scrollbarWidth: 'none',         // Firefox
      msOverflowStyle: 'none',        // IE 10+
    }}
  >
    <style>
      {`
        /* Hide scrollbar for Chrome, Safari and Edge */
        div::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>

    {homeMenuItems.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className="block text-center group"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-[400px] object-cover rounded-md transition-transform"
        />
        <span className="mt-2 block text-sm text-gray-800 hover:underline font-medium">
          {item.name}
        </span>
      </a>
    ))}
  </div>
)}
      </li>

      {/* ROOMS MENU */}
      <li
  onMouseEnter={() => setIsRoomsOpen(true)}
  onMouseLeave={() => setIsRoomsOpen(false)}
  className="relative cursor-pointer"
>
 <div className="flex items-center gap-1 hover:text-yellow-600 group cursor-pointer">
    Rooms
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-[2px] transform transition-transform duration-300 group-hover:rotate-180"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
  </div>

  {/* First-level Dropdown */}
  {isRoomsOpen && (
    <div className="absolute top-full left-0 mt-2 z-50 bg-white shadow-lg  w-60">
      
      {/* Room Style + submenu */}
      <div className="group relative px-6 py-3 mt-4 flex justify-between items-center hover:text-yellow-600">
        Room Style
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>

        {/* Room Style submenu */}
        <div className="absolute top-5 left-full  bg-white shadow-lg w-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-50 hover:text-yellow-600">
          {["Room One", "Room Two", "Room Three", "Room Four"].map((room, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-yellow-600"
            >
              {room}
            </a>
          ))}
        </div>
      </div>

      {/* Room Details + submenu */}
      <div className="group relative px-6 py-3  flex justify-between items-center hover:text-yellow-600">
        Room Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>

        {/* Room Details submenu */}
        <div className="absolute top-0 left-full  bg-white shadow-lg  w-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-50 hover:text-yellow-600">
          {["Room Detail 1", "Room Detail 2"].map((detail, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              {detail}
            </a>
          ))}
        </div>
      </div>
    </div>
  )}
</li>

<li
  onMouseEnter={() => setIsPagesOpen(true)}
  onMouseLeave={() => setIsPagesOpen(false)}
  className="relative cursor-pointer"
>
  <div className="flex items-center gap-1 hover:text-yellow-600 group cursor-pointer">
    Pages
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-[2px] transform transition-transform duration-300 group-hover:rotate-180"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
  </div>


{isPagesOpen && (
  <div className="absolute top-full left-0 mt-4 z-50 bg-white shadow-lg w-55">
    {pages.map((page, index) => (
      <Link
        key={index}
        to={page.path}
        className="block px-4 py-2 text-gray-800 mt-2 hover:text-yellow-600"
      >
        {page.name}
      </Link>
    ))}
  </div>
)}
</li>
<li
  onMouseEnter={() => setIsBlogOpen(true)}
  onMouseLeave={() => setIsBlogOpen(false)}
  className="relative cursor-pointer"
>
 <div className="flex items-center gap-1 hover:text-yellow-600 group cursor-pointer">
    Blog
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-[2px] transform transition-transform duration-300 group-hover:rotate-180"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
  </div>

  {isBlogOpen && (
    <div className="absolute top-full left-0 mt-2 z-50 bg-white shadow-lg  w-55">
      {["Blog", "Blog Details"].map((item, index) => (
        <a
          key={index}
          href="#"
          className="block px-4 py-2 text-gray-800 mt-2 hover:text-yellow-600"
        >
          {item}
        </a>
      ))}
    </div>
  )}
</li>

    <li
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false); // optional if Contact page handles its own loading
              navigate("/contactus");
            }, 1000); // 1 second loader before navigating
          }}
          className="cursor-pointer hover:text-yellow-600"
        >
          Contact
        </li>

    </ul>


        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
  <img
    src="https://html.themewant.com/moonlit/assets/images/logo/logo.svg"
    alt="Logo"
    className="h-10 w-auto"
  />
</Link>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3 font-semibold">
          <button
        onClick={onSignInClick} // 🔁 This triggers the modal now
        className="cursor-pointer border border-gray-300 px-4 py-2 rounded hover:bg-[#a8815e]"
      >
        Sign In
      </button>
          <button
  onClick={onSignUpClick}
  className="cursor-pointer border border-gray-300 px-4 py-1 rounded hover:bg-[#a8815e]"
>
  Register
</button>
          <button className="cursor-pointer bg-[#af7b4f] text-white px-4 py-1 rounded hover:bg-yellow-800">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2 ml-auto">
          <button className="hidden sm:inline-block bg-yellow-700 text-white px-4 py-1 rounded hover:bg-yellow-800">
            Book Now
          </button>
          <button
            className="text-3xl bg-yellow-700 text-white p-1 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white shadow-md p-4 flex flex-col gap-4 z-50 lg:hidden">
          <div
            className={`fixed inset-0 z-50 transition-transform duration-300 transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } bg-black p-6 overflow-y-auto`}
          >
            {/* Logo + Close button */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl font-serif font-bold text-white flex items-center gap-2">
  <Link to="/">
    <img
      src="https://html.themewant.com/moonlit/assets/images/logo/logo.svg"
      alt="Logo"
      className="h-10 w-auto filter invert cursor-pointer"
    />
  </Link>
</div>
              <button onClick={() => setMenuOpen(false)}>
                <HiX className="text-white text-3xl" />
              </button>
            </div>

            <p className="text-white leading-relaxed mb-20 mt-10">
              Welcome to Moonlit, where luxury meets comfort in the heart of Canada. Since 1999,
              we have been dedicated to providing.
            </p>

            <ul className="flex flex-col items-center text-white text-lg gap-6 pt-6 border-t border-gray-700">
              {[
                "Home",
                "About Us",
                "Rooms",
                "Pages",
                "Blog",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="w-full border-b border-gray-700 pb-2 cursor-pointer hover:text-orange-600"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2 text-white text-sm border-gray-700 pt-4">
              <span className="text-xl">Phone</span>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-xs" /> +12505550199
              </div>
              <span className="text-xl">E-mail</span>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-xs" /> moonlit@gmail.com
              </div>
              <span className="text-xl">Address</span>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-xs" />
                <span>280 Augusta Avenue, M5T 2L9 Toronto, Canada</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
