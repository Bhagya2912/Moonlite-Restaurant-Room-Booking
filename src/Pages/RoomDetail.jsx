import React, { useState } from "react";

export default function RoomDetail() {
     const [showVideo, setShowVideo] = useState(false);
  return (
    <>
    <section className="bg-white py-16 px-4 md:px-24 font-serif text-gray-800">
      {/* Hero Background Image */}
<div className="-mx-4 sm:-mx-8 lg:-mx-24 xl:-mx-32">
  <div
    className="relative bg-cover bg-center h-[700px] w-[150vw] left-1/2 -translate-x-1/2"
    style={{
      backgroundImage:
        "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
    }}
  >
    {/* Floating Info Box */}
   <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-120px] w-[90%] max-w-3xl bg-white rounded-2xl shadow-xl p-12 text-center z-10 min-h-[140px] flex flex-col justify-center">
  <h2 className="text-5xl text-[#a1865e] font-serif tracking-wide">12299₹</h2>
  <h1 className="text-6xl font-serif  mt-3 text-black leading-snug">Executive Room</h1>
  <div className="flex justify-center items-center gap-8 mt-6 text-gray-600 text-base sm:text-lg">
    <span className="flex items-center gap-2 text-2xl">
     <i className="fa-solid fa-house"></i> <span className="font-serif">35 sqm</span>
    </span>
    <span className="flex items-center gap-2 text-2xl">
      <i className="fa-solid fa-user"></i> <span className="font-serif">5 Person</span>
    </span>
  </div>
</div>
  </div>
</div>

{/* Extra spacing below the image so the card doesn’t overlap next section */}
<div className="mt-56"></div>

      <div className="grid md:grid-cols-3 gap-12">
  {/* Left - Room Content with scroll */}
  <div className="md:col-span-2 space-y-8 max-h-[155vh] overflow-y-auto pr-2 scrollbar-hide">
    
    {/* Description */}
    <div>
      <h3 className="text-5xl font-serif mb-4">Room Description</h3>
      <p className="text-gray-600 mb-8 text-xl leading-relaxed">
        Our elegantly appointed rooms and suites are designed to offer the utmost in comfort and style.
        Each room features modern amenities, plush furnishings, and thoughtful touches to ensure a relaxing stay.
        <br /><br />
        Indulge in a culinary journey at our on-site restaurants, where our talented chefs create mouthwatering dishes
        using the freshest local ingredients.
      </p>
    </div>

    {/* Room Video */}
    <div>
      <h3 className="text-5xl font-serif mb-9">Room Video</h3>
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src="https://html.themewant.com/moonlit/assets/images/pages/video-bg.webp"
          alt="Hotel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative w-40 h-40 rounded-full border-2 border-white flex items-center justify-center cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            {/* Rotating SVG Text */}
            <div className="absolute w-82 h-82 border-black flex items-center justify-center">
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
            {/* Play Button */}
            <svg
              className="w-8 h-8 text-white z-10"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </div>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
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
    </div>

    {/* Room Amenities */}
    <h2 className="text-4xl font-serif mb-8">Room Amenities</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-10">
      {[
        ["wifi", "Free Wifi"],
        ["shower", "Shower"],
        ["aeroplane", "Airport Transport"],
        ["balcony", "Balcony"],
        ["refrigerator", "Refrigerator"],
        ["support", "24/7 Support"],
        ["desk", "Work Desk"],
        ["fitness", "Fitness Center"],
      ].map(([icon, label], idx) => (
        <div key={idx} className="flex items-center gap-5">
          <img
            src={`https://html.themewant.com/moonlit/assets/images/icon/${icon}.svg`}
            alt={label}
            className="w-9 h-9"
          />
          <span className="text-xl font-serif text-gray-800">{label}</span>
        </div>
      ))}
    </div>

    {/* Room Features */}
    <div>
      <h3 className="text-5xl font-serif mb-12">Room Features</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        <img
          src="https://html.themewant.com/moonlit/assets/images/pages/room/1.webp"
          alt="Room"
          className="rounded-md object-cover w-full h-140"
        />
        <img
          src="https://html.themewant.com/moonlit/assets/images/pages/room/r-d-2.webp"
          alt="Room"
          className="rounded-md object-cover w-full h-140"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[19px] font-serif text-gray-900 mb-10">
        {[
          "Children and extra beds",
          "Climate Control",
          "Art and Decor",
          "Coffee/Tea Maker",
          "High-End Bedding",
          "Smart Technology",
        ].map((feature, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="mt-3 w-2 h-2 rounded-full bg-[#a1865e]"></span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-xl leading-relaxed">
        Our elegantly appointed rooms and suites are designed to offer the
        ultimate in comfort and style. Each room features modern amenities,
        plush furnishings, and thoughtful touches to ensure a relaxing stay.
      </p>
    </div>
  </div>

  <style>{`
  /* Add in your global styles (index.css or App.css) */
@layer utilities {
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE/Edge */
    scrollbar-width: none;     /* Firefox */
  }
}

  `}</style>

        {/* Right - Booking Form */}
       {/* Right Column - Booking Sidebar */}
    <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
      <h3 className="text-3xl text-center font-serif text-gray-800 mb-7">
        Book Your Stay
      </h3>

      <form className="space-y-4 text-gray-700 text-xl">
        {/* Dates */}
        <div>
          <label className="block font-serif mb-5">Check In</label>
          <input type="date" className="w-full border px-3 py-2 rounded outline-none bg-white" />
        </div>
        <div>
          <label className="block font-medium mb-5 mt-5">Check Out</label>
          <input type="date" className="w-full border px-3 py-2 rounded outline-none bg-white" />
        </div>

        {/* Guest Info */}
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="block font-medium mt-5 mb-5">Adult</label>
            <input type="number" defaultValue={1} className="w-full border px-3 py-2 rounded outline-none bg-white" />
          </div>
          <div>
            <label className="block font-medium mb-5 mt-5">Children</label>
            <input type="number" defaultValue={1} className="w-full border px-3 py-2 rounded outline-none bg-white" />
          </div>
          <div>
            <label className="block font-medium mb-5 mt-5">Extra Bed</label>
            <input type="number" defaultValue={1} className="w-full border px-3 py-2 rounded outline-none bg-white" />
          </div>
        </div>

        {/* Extra Services */}
        <h4 className="font-serif text-center text-4xl mt-10 mb-13">Extra Services</h4>
        <div className="space-y-2">
          {[
            { label: "Room Clean", price: "₹10 / Night" },
            { label: "Parking", price: "Free" },
            { label: "Airport Transport", price: "₹20 / Night" },
            { label: "Pet Friendly", price: "₹15 / Night" },
          ].map((item, i) => (
            <label key={i} className="flex justify-between text-2xl mb-9 mt-9">
              <span>
                <input type="checkbox" className="mr-2" />
                {item.label}
              </span>
              <span>{item.price}</span>
            </label>
          ))}
        </div>

        {/* Total */}
       <div className="flex text-2xl border-t pt-6 justify-between items-center font-serif mt-8">
  <span>Total Price</span>
  <span> ₹82</span>
</div>


        <button
          type="submit"
          className="w-full mt-4 py-2 bg-[#af7b4f] text-2xl text-white font-medium rounded hover:bg-yellow-800 transition"
        >
          Book Your Room
        </button>
      </form>
    </div>
  </div>
    </section>
     <section className="bg-white pt-0 pb-16 px-4 sm:px-6 md:px-24">
  <h4 className="text-yellow-800 text-base font-serif mb-2">
    <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-5 sm:mb-10 text-lg sm:text-2xl font-serif">
      <span className="flex items-center">
        <span className="text-sm sm:text-lg">◇</span>
        <span className="w-6 sm:w-10 h-px bg-black"></span>
      </span>
      Similar Rooms
      <span className="flex items-center">
        <span className="w-6 sm:w-10 h-px bg-black"></span>
        <span className="text-sm sm:text-lg">◇</span>
      </span>
    </span>
  </h4>

  <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-900 mb-10">
     Similar Rooms
  </h2>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 gap-5">
    {[
      {
        name: "Exectutive Room",
        Amt: "12000₹",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
      },
      {
        name: "Single Room",
        Amt: "3999₹",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp",
      },
      {
        name: "Triple Room",
        Amt: "12999₹",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp",
      },
    ].map((member, index) => (
     <div
  key={index}
  className="font-serif  border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
>
  <img
    src={member.img}
    alt={member.name}
    className="w-full h-74 object-cover transition-transform duration-500 hover:scale-105"
  />

  <div className="p-4">
    <h3 className="text-3xl font-serif">{member.name}</h3>

    <div className="flex items-center gap-10 mt-4 text-xl text-gray-500">
      <span className="flex items-center gap-3">
        <i className="fa-solid fa-house"></i> 35 sqm
      </span>
      <span className="flex items-center gap-3">
        <i className="fa-solid fa-user"></i> 5 Person
      </span>
    </div>

    <div className="mt-5 mb-4 text-2xl text-gray-500">{member.Amt}</div>

    <a
      href="#"
      className="text-[#b86e2e] border-b text-lg border-[#b86e2e] w-fit hover:text-[#a15d20] transition"
    >
      Discover More
    </a>
  </div>
</div>
    ))}
  </div>
</section>
</>
  );
}
