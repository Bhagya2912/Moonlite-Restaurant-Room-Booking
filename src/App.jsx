import { useState, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from './Pages/Home';
import ContactPage from './Pages/ContactUs';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs';
import Restaurant from './Pages/Restaurant';
import Gallery from './Pages/Gallery';
import Services from './Pages/Services';
import Activities from './Pages/Activities';
import Events from './Pages/Event';
import BlogDetails from './Pages/BlogDetails';
import Blog from './Pages/Blog';
import BookNow from './Pages/BookNow';
import RoomOne from './Pages/RoomOne';
import RoomTwo from './Pages/RoomTwo';
import RoomThree from './Pages/RoomThree';
import RoomFour from './Pages/RoomFour';
import RoomDetail from './Pages/RoomDetail';
import LuxeVista from './Pages/LuxeVista';
import BeachHotel from './Pages/BeachHotel';
import SeaSide from './Pages/SeaSide';
import ApartmentHotel from './Pages/ApartmentHotel';
import MountainHotel from './Pages/MountainHotel';
import ClientCity from './Pages/ClientCity';
import HotelBeach from './Pages/HotelBeach';
import OceanBreeze from './Pages/OceanBreeze';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const modalRef = useRef();
  const location = useLocation();

  // Identify beach/seaside pages for conditional styles
  const isBeachPage =
    location.pathname.toLowerCase().startsWith("/beachhotel") ||
    location.pathname.toLowerCase().startsWith("/seaside");

  // Pages where the footer should be hidden
  const hideGlobalFooterPages = ["/beachhotel", "/oceanbreeze", "/seaside"];
  const isFooterHidden = hideGlobalFooterPages.some(path =>
    location.pathname.toLowerCase().startsWith(path)
  );

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowSignIn(false);
      setShowSignUp(false);
    }
  };

  return (
    <div className={`relative ${isBeachPage ? 'bg-black text-white' : ''}`}>
      {!isBeachPage && (
        <Header
          onSignInClick={() => {
            setShowSignIn(true);
            setShowSignUp(false);
          }}
          onSignUpClick={() => {
            setShowSignUp(true);
            setShowSignIn(false);
          }}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/service" element={<Services />} />
        <Route path="/event" element={<Events />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/Room-One" element={<RoomOne />} />
        <Route path="/Room-Two" element={<RoomTwo />} />
        <Route path="/Room-Three" element={<RoomThree />} />
        <Route path="/Room-Four" element={<RoomFour />} />
        <Route path="/room-detail" element={<RoomDetail />} />
        <Route path="/luxevista" element={<LuxeVista />} />
        <Route path="/beachhotel" element={<BeachHotel />} />
        <Route path="/mountainhotel" element={<MountainHotel />} />
        <Route path="/seaside" element={<SeaSide />} />
        <Route path="/apartmenthotel" element={<ApartmentHotel />} />
        <Route path="/clientcity" element={<ClientCity />} />
        <Route path="/hotelbeach" element={<HotelBeach />} />
        <Route path="/oceanbreeze" element={<OceanBreeze />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* Show footer only when not on excluded pages */}
      {!isFooterHidden && <Footer />}

      {/* Sign In Modal */}
      {showSignIn && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
        >
          <div ref={modalRef} className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
            >
              ×
            </button>
            <SignIn
              onSwitchToSignUp={() => {
                setShowSignIn(false);
                setShowSignUp(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
        >
          <div ref={modalRef} className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setShowSignUp(false)}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
            >
              ×
            </button>
            <SignUp
              onSwitchToSignIn={() => {
                setShowSignUp(false);
                setShowSignIn(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;






