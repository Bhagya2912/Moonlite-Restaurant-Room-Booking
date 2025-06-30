import React, { useState } from 'react'

const Services = () => {
const testimonials = [
  {
    name: "Sarah Martinez",
    role: "COO of Apex Solutions",
    message:
      "Choosing Bokinn was one of the best decisions we’ve ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with and expertise. Their commitment to and delivering tailored.",
    image:
      "https://html.themewant.com/moonlit/assets/images/author/author-2x.webp",
  },
  {
    name: "John Carter",
    role: "CEO of TechSphere",
    message:
      "Working with Bokinn was a seamless experience. They offered tailored services, great communication, and top-notch results. I would highly recommend them to anyone looking for quality and commitment.",
    image:
      "https://html.themewant.com/moonlit/assets/images/author/author-5.webp",
  },
];


   const [selectedIndex, setSelectedIndex] = useState(0);
    const testimonial = testimonials[selectedIndex];
  
    const goPrevious = () => {
      setSelectedIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
  
    const goNext = () => {
      setSelectedIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const facilities = [
    {
    icon: "https://html.themewant.com/moonlit/assets/images/icon/security.svg",
    title: "24-Hour Security",
    desc: "A 24-hour security service provides and surveillance, properties, or sensitive information around the clock.",
  },
  {
    icon: "https://html.themewant.com/moonlit/assets/images/icon/wifi.svg",
    title: "Free Wifi",
    desc: "Free Wi-Fi has become an essential service in our increasingly connected world. It helps people to access the internet.",
  },
  {
    icon: "https://html.themewant.com/moonlit/assets/images/icon/fitness.svg",
    title: "Fitness Center",
    desc: "A fitness center is a vibrant and dynamic environment designed to promote health and well-being.",
  },
  {
    icon: "https://html.themewant.com/moonlit/assets/images/icon/home-theater.svg",
    title: "Airport transport",
    desc: "Airport transportation plays a crucial role in travel experiences for passengers, including taxis and ride-sharing.",
  },
  {
    icon: "https://html.themewant.com/moonlit/assets/images/icon/desk.svg",
    title: "Work Desk",
    desc: "A well-organized work desk is more than just a place to complete tasks; it's a hub of productivity and creativity.",
  },
  {
    icon: "https://html.themewant.com/moonlit/assets/images/icon/swimming.svg",
    title: "Swimming Pool",
    desc: "A swimming pool is a refreshing oasis, offering a place to cool off, relax, and enjoy various water activities.",
  },
  {
    icon: "https://html.themewant.com/moonlit/assets/images/icon/room.svg",
    title: "Rooms and Suites",
    desc: "On-site security personnel and surveillance. From standard to luxury suites, secure storage for valuables.",
  },
  {
    icon: "https://html.themewant.com/moonlit/assets/images/icon/shower.svg",
    title: "Shower",
    desc: "The warm water cascaded down, enveloping a soothing calm. Each droplet danced on my skin while washing.",
  },
];

  
  return (
   <div className="font-sans text-gray-800">
    
      {/* Hero Section */}
     <div
  className="relative bg-cover bg-center  h-[800px] flex items-center justify-center"
  style={{
    backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-7xl font-serif mb-6 mt-45">Our Service</h1>
          <p className="text-xl">Whether you have questions, need answers, or simply want to chat.</p>
        </div>
      </div>

      <section className="bg-white py-20 px-4 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {facilities.map((item, index) => (
          <div key={index} className="text-center">
            <img src={item.icon} alt={item.title} className="mx-auto mb-6 w-12 h-12" />
            <h3 className="text-3xl font-serif mb-4">{item.title}</h3>
            <p className="text-gray-600 text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-white px-2 md:px-12">
  {/* Header */}
  <div className="text-center mb-14">
    <h4 className="text-yellow-800 text-base font-serif mb-2">
      <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
        <span className="flex items-center">
          <span className="text-sm sm:text-lg">◇</span>
          <span className="w-6 sm:w-10 h-px bg-black"></span>
        </span>
        Our Service
        <span className="flex items-center">
          <span className="w-6 sm:w-10 h-px bg-black"></span>
          <span className="text-sm sm:text-lg">◇</span>
        </span>
      </span>
    </h4>
    <h2 className="text-3xl sm:text-5xl font-serif text-gray-900">
      Our Services
    </h2>
  </div>

  {/* Wider Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
    {/* Image 1 */}
    <div>
      <img
        src="https://html.themewant.com/moonlit/assets/images/pages/activities/3.webp"
        alt="Spa & Wellness"
        className="w-full h-[500px] object-cover rounded-lg"
      />
    </div>

    {/* Text Block 1 */}
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-2 text-[#a8815e] mb-2">
        <span className="h-px w-6 bg-[#a8815e]"></span>
        <span className="text-2xl">Spa & Wellness</span>
      </div>
      <h3 className="text-5xl font-serif mb-6">Spa & Wellness</h3>
      <p className="text-gray-700 mb-4 text-lg">
        At our Fitness & Yoga Services, we are dedicated to helping you achieve
        your health and wellness goals. Our comprehensive program offers a variety
        of classes designed to suit all levels, from beginners to advanced practitioners.
      </p>
      <a href="#" className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition">
        Read More
      </a>
    </div>

    {/* Text Block 2 */}
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-2 text-[#a8815e] mb-2">
        <span className="h-px w-6 bg-[#a8815e]"></span>
        <span className="text-2xl">Romantic Getaway</span>
      </div>
      <h3 className="text-5xl font-serif mb-6">Romantic Getaway</h3>
      <p className="text-gray-700 mb-4 text-lg">
        At our Fitness & Yoga Services, we are dedicated to helping you achieve
        your health and wellness goals. Our comprehensive program offers a variety
        of classes designed to suit all levels, from beginners to advanced practitioners.
      </p>
      <a href="#" className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition">
        Read More
      </a>
    </div>

    {/* Image 2 */}
    <div>
      <img
        src="https://html.themewant.com/moonlit/assets/images/index-3/service/2.webp"
        alt="Romantic Getaway"
        className="w-full h-auto mt-0 object-cover rounded-lg"
      />
    </div>
  </div>
</section>

      <section className="py-16  bg-white px-4 md:px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-10 ">
          <div>
            <div className="flex items-center gap-1 text-yellow-800 font-serif text-lg mb-2">
              <div className="h-px w-10 bg-yellow-800"></div>
              <span className="text-xl">✦</span>
              <span className="px-4  ">Testimonial</span>
            </div>
             <h2 className="text-4xl md:text-6xl font-serif text-black ">What Our Client Say</h2>
          </div>

          <div className="flex gap-4 mt-6 sm:mt-0">
            <button
              onClick={goNext}
              className="w-10 h-10 border rounded-md text-xl  hover:bg-yellow-100"
            >
              ←
            </button>
            <button
              onClick={goPrevious}
              className="w-10 h-10 border rounded-md text-xl hover:bg-yellow-100"
            >
              →
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left - Image */}
          <div className="flex-shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-60 h-60 rounded-full object-cover "
            />
          </div>

          {/* Right - Text Content */}
          <div className="flex-1">
            {/* Star Rating */}
            <div className="flex gap-1 text-yellow-700 text-xl mb-4">
  {[1, 2, 3, 4].map((_, i) => (
    <span key={i}>★</span>
  ))}
  {/* Half star */}
  <span className="relative inline-block text-gray-300">
    ★
    <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-yellow-700">
      ★
    </span>
  </span>
</div>

            {/* Message */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {testimonial.message}
            </p>

            {/* Name & Role */}
            <p className="text-gray-900 font-serif text-lg">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </section> 
    </div>
  )
}

export default Services
