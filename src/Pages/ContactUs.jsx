import React from "react";
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="pt-24 ">
      {/* Hero Section */}
      <div
  className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
  style={{
    backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-7xl font-serif mb-6">Contact Us</h1>
          <p className="text-lg">Whether you have questions, need answers, or simply want to chat.</p>
        </div>
      </div>

      {/* Contact Form & Image */}
      <div className=" mx-auto  py-16 grid md:grid-cols-2 gap-12 px-4 sm:px-24">
        {/* Contact Form */}
        <div>
          <h3 className="text-5xl font-serif text-gray-800 mb-7">
            Love to hear from you! Get in touch!
          </h3>
          
<form className="space-y-4">
  {/* Name Field */}
  <div className="flex items-center border border-gray-300 rounded px-3 py-3 focus-within:ring-2 focus-within:ring-yellow-500">
    <FaUser className="text-gray-400 mr-3" />
    <input
      type="text"
      placeholder="Your Name"
      className="flex-1 outline-none text-gray-700"
    />
  </div>

  {/* Email Field */}
  <div className="flex items-center border border-gray-300 rounded px-3 py-3 focus-within:ring-2 focus-within:ring-yellow-500">
    <FaEnvelope className="text-gray-400 mr-3" />
    <input
      type="email"
      placeholder="Your Email"
      className="flex-1 outline-none text-gray-700"
    />
  </div>

  {/* Message Field */}
  <div className="flex items-start border border-gray-300 rounded px-3 py-3 focus-within:ring-2 focus-within:ring-yellow-500">
    <FaRegCommentDots className="text-gray-400 mr-3 mt-1" />
    <textarea
      placeholder="Message"
      rows="4"
      className="flex-1 outline-none text-gray-700 resize-none"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-[#a8815e] hover:bg-yellow-900 text-white px-6 py-2 rounded"
  >
    Send Message
  </button>
</form>

        </div>

        {/* Right side Image */}
        <div>
          <img
            src="https://html.themewant.com/moonlit/assets/images/room/2.webp"
            alt="Room"
            className="rounded h-[600px] w-[800px] shadow-lg"
          />
        </div>
      </div>

      {/* Map + Info */}
      <div className=" mx-auto  grid md:grid-cols-2 gap-10 pb-16  px-4 sm:px-24">
        {/* Google Map Embed */}
        <div>
          <iframe
  title="Google Map - Pune, India"
  src="https://maps.google.com/maps?q=Pune,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
  className="w-full h-[550px] border-2 border-gray-300 rounded"
  allowFullScreen
  loading="lazy"
></iframe>
        </div>

        {/* Info Center */}
        <div>
          <h3 className="text-4xl font-serif mb-4 mt-25">Hotel Info Center</h3>
          <p className="text-gray-700 text-lg ">Opening Hours:Monday-Sunday</p>
          <p className="text-gray-700 text-lg  ">Booking Enquiries: +12505550199</p>
          <p className="text-gray-700 text-lg ">Fax: +12505550199</p>
          <p className="text-gray-700 text-lg ">Email: moonlit@gmail.com</p>
          <h3 className=" text-4xl font-serif mt-9 mb-6">Hotel Location:</h3>
          <p className="text-gray-600">
            Address:280 Augusta Avenue, Mumbai
          </p>
          <p className="text-gray-700 text-lg  ">Booking Enquiries: +12505550199</p>
          <p className="text-gray-700 text-lg">Fax: +12505550199</p>
          <p className="text-gray-700 text-lg">Email: moonlit@gmail.com</p>
        </div>
      </div>
      <footer/>
    </div>
  );
}
