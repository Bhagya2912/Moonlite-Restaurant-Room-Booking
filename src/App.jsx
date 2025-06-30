import { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
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


function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const modalRef = useRef();

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowSignIn(false);
      setShowSignUp(false);
    }
  };

  return (
    <div className="relative">
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
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactPage/>}/>
         <Route path="/about" element={<AboutUs/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/restaurant" element={<Restaurant/>}/>
           <Route path="/service" element={<Services/>}/>
            <Route path="/event" element={<Events/>}/>
             <Route path="/activities" element={<Activities/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer/>

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





