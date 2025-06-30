import React from 'react'
import ClientSay from '../Components/ClientSay/ClientSay'

const Activities = () => {
   const images = [
    {
      src: "https://html.themewant.com/moonlit/assets/images/pages/activities/3.webp",
      title: "Cultural Tours",
    },
    {
      src: "https://html.themewant.com/moonlit/assets/images/pages/activities/4.webp",
      title: "Cooking Classes",
    },
    {
      src: "https://html.themewant.com/moonlit/assets/images/pages/activities/5.webp",
      title: "Spa & Wellness",
    },
  ];
  return (
    <div className="font-serif text-gray-800">
      {/* Hero Section */}
     <div
  className="relative bg-cover bg-center h-[800px] flex items-center justify-center"
  style={{
    backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-7xl font-serif mb-6 mt-45">Activities</h1>
          <p className="text-xl">Whether you have questions, need answers, or simply want to chat.</p>
        </div>
      </div> 

      <section className="bg-white py-16 px-4 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div>
          <img
            src="https://html.themewant.com/moonlit/assets/images/pages/activities/1.webp"
            alt="Winter Activities"
            className="w-full h-[700px] rounded-lg shadow-md"
          />
        </div>

        {/* Right Content */}
        <div>
          <div className="flex items-center gap-4 mb-4">
      <div className="flex items-center text-[#a8815e]">
        <div className="h-px w-10 bg-[#a8815e]"></div>
        <span className="text-xl">✦</span>
      </div>
      <p className="text-3xl text-[#b86e2e]">Winter Activities</p>
    </div>

    {/* Heading */}
    <h2 className="text-5xl sm:text-5xl md:text-5xl  py-6 leading-snug">
      <span className="block mb-2">Winter Activities</span>
    </h2>


          <p className="text-gray-600 text-lg mb-8">
            Enjoy access to nearby slopes, perfect for both beginners and experienced skiers. 
            Explore serene winter landscapes on guided snowshoe tours through nearby trails.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-base">
            <div className="flex items-center gap-3">
              <img src="https://html.themewant.com/moonlit/assets/images/icon/sketing.svg" alt="" className="w-6 h-6" />
              Guided Hiking Tours
            </div>
            <div className="flex items-center gap-3">
              <img src="https://html.themewant.com/moonlit/assets/images/icon/biking.svg" alt="" className="w-6 h-6" />
             Mountain Biking
            </div>
            <div className="flex items-center gap-3">
              <img src="https://html.themewant.com/moonlit/assets/images/icon/swimming.svg" alt="" className="w-6 h-6" />
              Outdoor Swimming Pool
            </div>
            <div className="flex items-center gap-3">
              <img src="https://html.themewant.com/moonlit/assets/images/icon/snow.svg" alt="" className="w-6 h-6" />
              Outdoor Movie Night
            </div>
            <div className="flex items-center gap-3">
              <img src="https://html.themewant.com/moonlit/assets/images/icon/tenis.svg" alt="" className="w-6 h-6" />
              Tennis & Sports Courts
            </div>
          </div>

          <button className="mt-8 text-yellow-800 font-medium border-b border-yellow-800 hover:text-yellow-900 transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-4 md:px-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Right Content → now moved to left */}
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center text-[#a8815e]">
          <div className="h-px w-10 bg-[#a8815e]"></div>
          <span className="text-xl">✦</span>
        </div>
        <p className="text-3xl text-[#b86e2e]">Summer Activities</p>
      </div>

      {/* Heading */}
      <h2 className="text-5xl sm:text-5xl md:text-5xl py-6 leading-snug">
        <span className="block mb-2">Summer Activities</span>
      </h2>

      <p className="text-gray-600 text-lg mb-8">
        Enjoy access to nearby slopes, perfect for both beginners and experienced skiers.
        Explore serene winter landscapes on guided snowshoe tours through nearby trails.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-base">
        <div className="flex items-center gap-3">
          <img src="https://html.themewant.com/moonlit/assets/images/icon/sketing.svg" alt="" className="w-6 h-6" />
          Skiing & Snowboarding
        </div>
        <div className="flex items-center gap-3">
          <img src="https://html.themewant.com/moonlit/assets/images/icon/wild.svg" alt="" className="w-6 h-6" />
          Winter Wildlife Tours
        </div>
        <div className="flex items-center gap-3">
          <img src="https://html.themewant.com/moonlit/assets/images/icon/hot-coffe.svg" alt="" className="w-6 h-6" />
          Hot Cocoa by the Fire
        </div>
        <div className="flex items-center gap-3">
          <img src="https://html.themewant.com/moonlit/assets/images/icon/snow.svg" alt="" className="w-6 h-6" />
          Snowshoeing
        </div>
        <div className="flex items-center gap-3">
          <img src="https://html.themewant.com/moonlit/assets/images/icon/spa.svg" alt="" className="w-6 h-6" />
          Spa & Wellness
        </div>
      </div>

      <button className="mt-8 text-yellow-800 font-medium border-b border-yellow-800 hover:text-yellow-900 transition">
        Discover More
      </button>
    </div>

    {/* Left Image → now moved to right */}
    <div>
      <img
        src="https://html.themewant.com/moonlit/assets/images/pages/activities/2.webp"
        alt="Winter Activities"
        className="w-full h-[700px] rounded-lg shadow-md"
      />
    </div>
  </div>
</section>

      <section className="px-4 py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <img src={image.src} alt={image.title} className="w-full h-[600px] object-cover" />
                {/* Black overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />
            
               <div className="absolute bottom-0 left-0 w-full p-4 z-20 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-4xl mb-20 font-serif">{image.title}</h3>
              <button className="cursor-pointer absolute bottom-4 left-4  font-bold rounded border border-white  text-white px-4 py-2 hover:bg-yellow-800 transition duration-300">
                View More
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

       <section> <ClientSay/></section>
    </div>
  )
}

export default Activities
