import React from "react";

export default function SpecialOffer() {
  return (
    <section className="py-20 bg-white px-4 md:px-24">
      {/* Header */}
      <div className="text-center mb-14">
        <h4 className="text-yellow-800 text-base font-serif mb-2">
          <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
            <span className="flex items-center">
              <span className="text-sm sm:text-lg">◇</span>
              <span className="w-6 sm:w-10 h-px bg-black"></span>
            </span>
            Special Offer
            <span className="flex items-center">
              <span className="w-6 sm:w-10 h-px bg-black"></span>
              <span className="text-sm sm:text-lg">◇</span>
            </span>
          </span>
        </h4>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-900">
          Special Offer
        </h2>
      </div>

      {/* Offer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Card */}
        <div className="md:col-span-5 bg-black/90 text-white rounded-xl overflow-hidden text-base">
          <img
            src="https://html.themewant.com/moonlit/assets/images/offer/5.webp"
            alt="Family Fun"
            className="w-full h-72 sm:h-[420px] object-cover"
          />
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl sm:text-4xl font-serif mb-4">Family Fun Package</h3>
            <ul className="grid grid-cols-2 gap-y-2 text-sm sm:text-base">
              <li><i class="fa-solid fa-check"></i> 15% off on family suites</li>
              <li><i class="fa-solid fa-check"></i> Free meals for kids under 12</li>
              <li><i class="fa-solid fa-check"></i> Complimentary tickets</li>
              <li><i class="fa-solid fa-check"></i> The local amusement park</li>
            </ul>
            <p className="text-[#a8815e] text-3xl sm:text-4xl mt-6">₹5999</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 flex flex-col gap-10">
          {/* Spa Retreat */}
          <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden bg-black/85 text-white">
            <img
              src="https://html.themewant.com/moonlit/assets/images/offer/6.webp"
              alt="Spa Retreat"
              className="w-full sm:w-[250px] h-64 sm:h-[320px] object-cover"
            />
            <div className="py-5 px-4 sm:px-6 w-full sm:w-1/2">
              <h3 className="text-2xl sm:text-4xl font-serif mb-4">Spa Retreat</h3>
              <ul className="grid grid-cols-2 gap-y-2 text-sm sm:text-base mt-6">
                <li><i class="fa-solid fa-check"></i> A two-night stay in room</li>
                <li><i class="fa-solid fa-check"></i> Daily spa treatments</li>
                <li><i class="fa-solid fa-check"></i> Healthy breakfast lunch</li>
                <li><i class="fa-solid fa-check"></i> Access to all spa</li>
              </ul>
              <p className="text-[#a8815e] text-3xl sm:text-5xl mt-6">₹4999</p>
            </div>
          </div>

          {/* Romantic Getaway */}
          <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden bg-black/90 text-white">
            <img
              src="https://html.themewant.com/moonlit/assets/images/offer/7.webp"
              alt="Romantic Getaway"
              className="w-full sm:w-[250px] h-64 sm:h-[320px] object-cover"
            />
            <div className="p-4 sm:p-6 w-full sm:w-1/2">
              <h3 className="text-2xl sm:text-4xl font-serif mb-4">Romantic Getaway</h3>
              <ul className="grid grid-cols-2 gap-y-2 text-sm sm:text-base mt-6">
                <li><i class="fa-solid fa-check"></i> A two-night stay in room</li>
                <li><i class="fa-solid fa-check"></i> Daily spa treatments</li>
                <li><i class="fa-solid fa-check"></i>  Healthy breakfast lunch</li>
                <li><i class="fa-solid fa-check"></i>  Access to all spa</li>
              </ul>
              <p className="text-[#a8815e] text-3xl sm:text-5xl mt-6">₹3999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
