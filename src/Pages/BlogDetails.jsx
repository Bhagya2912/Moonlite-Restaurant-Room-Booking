import React from "react";

export default function BlogDetails() {
  return (
    <div className="font-sanserif text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[800px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Centered Content */}
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center z-10">
          <h1 className="text-4xl md:text-2xl font-serif mb-6 mt-0">Luxury Hotel</h1>
          <p className="text-4xl md:text-8xl">
            Discover Luxury: A Journey<br />
            Through Our Hotel's Unique<br />
            Offerings
          </p>
        </div>

       {/* Author & Read Time Section - Bottom Center */}
<div className="absolute bottom-35 left-1/2 transform -translate-x-1/2 flex items-center gap-6 text-white z-10">
  {/* Author */}
  <div className="flex items-center gap-3">
    <img
      src="https://randomuser.me/api/portraits/men/75.jpg"
      alt="Author"
      className="w-10 h-10 rounded-full object-cover"
    />
    <span className="font-medium">Madison Roy</span>
  </div>

  {/* Read Time */}
  <div className="flex items-center gap-3">
    <i className="fa-regular fa-clock"></i>
    <span className="font-medium">10 Min Read</span>
  </div>
</div>

      </div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xl font-serif mb-10 leading-relaxed">
  Welcome to Career Compass, your ultimate destination for career advice, job search strategies,
  and professional development insights. Whether you're a recent graduate, seasoned professional,
  or someone considering a career change, our blog is your trusted guide to help you navigate the
  ever-evolving landscape of the job market.
  <br />
  At Career Compass, we understand that finding the right career path can be daunting. That's why
  we offer a wealth of resources to empower you on your journey. From resume writing tips and
  interview techniques to networking advice and skill-building strategies, our expert contributors
  share their knowledge and expertise to equip you with the tools you need to succeed.
</p>
        <img
          src="https://html.themewant.com/moonlit/assets/images/pages/blog/details.webp"
          alt="Room"
          className="rounded-lg shadow mb-8"
        />

       <div className="text-gray-600 text-sm mb-4">
  <h1 className="text-2xl font-serif mb-4">Hotel Service</h1>
  <div className="grid grid-cols-3 gap-y-4 gap-x-6 text-lg">
    {[
      "Romantic Getaway",
      "Family Vacation",
      "Seasonal Promotions",
      "Conference Welcome",
      "Event Planning",
      "Special Offers",
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-[#a8865e] flex items-center justify-center text-white text-xs">
          ✓
        </span>
        <span>{item}</span>
      </div>
    ))}
  </div>
</div>


        <h2 className="text-3xl font-serif text-gray-900 mb-4 mt-10">
          Real Guest Stories: Unforgettable Stays at Bokinn
        </h2>

        <p className="mb-6 text-xl">
          Welcome to Career Compass, your ultimate destination for career advice, job search
          strategies, and professional development insights. Whether you’re a recent graduate,
          seasoned professional, or someone considering a career change, our blog is your trusted
          guide to help you navigate the ever-evolving landscape of the job market.
        </p>

        <blockquote className="border-l-4 text-3xl border-gray-400 pl-4 italic text-gray-700 bg-gray-100 p-4 mb-6">
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
          classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia."
        </blockquote>

        <p className="mb-10 text-xl">
          At Career Compass, we understand that finding the right career path can be daunting. That’s
          why we offer a wealth of resources to empower you on your journey. From resume writing tips
          and interview techniques to networking advice and skill-building resources, our expert
          contributors share their knowledge and expertise to equip you with the tools you need to
          succeed.
        </p>

        <h1 className="text-2xl font-serif mb-5">Tags</h1>
        <div className="flex flex-wrap gap-4 mb-8">
          {['Hotel', 'Service', 'Bokinn', 'Guest Stories', 'Travel'].map((tag) => (
            <span
              key={tag}
              className=" cursor-pointer px-8 py-1 hover:bg-[#a8815e] rounded border-1 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-serif mb-6">Share</h3>
       <div className="flex items-center gap-5 mb-10 text-2xl text-gray-700">
  <i className="fa-brands fa-linkedin hover:text-blue-600 cursor-pointer"></i>
  <i className="fa-brands fa-whatsapp hover:text-green-500 cursor-pointer"></i>
  <i className="fa-brands fa-pinterest hover:text-red-500 cursor-pointer"></i>
  <i className="fa-brands fa-youtube hover:text-red-600 cursor-pointer"></i>
</div>
        
        <h3 className="text-2xl font-serif mb-6">Comment</h3>

<div className="space-y-8 mb-10">
  {[
    {
      name: "Jonathon Doe",
      comment:
        "I still have a lot of studying to do using this course and the other practice exams, but so far it’s been great! I have not taken my Security+ exam as well, so I’ll update this at a later time.",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Michael Roy",
      comment:
        "I still have a lot of studying to do using this course and the other practice exams, but so far it’s been great! I have not taken my Security+ exam as well, so I’ll update this at a later time.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ].map((c, i) => (
    <div key={i} className="flex items-start gap-4">
      {/* Avatar */}
      <img
        src={c.img}
        alt={c.name}
        className={`w-14 h-14 rounded-md object-cover ${
          i === 1 ? "bg-yellow-500 p-1" : "bg-gray-200 p-1"
        }`}
      />

      {/* Content */}
      <div className="flex-1">
        <p className="text-xl font-serif ">{c.name}</p>
        <p className="text-sm text-gray-500 mb-2">A week ago</p>
        <p className="text-gray-700 text-xl leading-relaxed mb-2">
          {c.comment}
        </p>
        <button className="flex items-center gap-1 text-xl text-gray-700 hover:text-black">
          <i class="fa-solid fa-reply"></i>
          Reply
        </button>
      </div>
    </div>
  ))}
</div>


        <form className="bg-gray-100 p-6 rounded-lg">
          <h4 className="text-2xl font-serif mb-4">Leave a Comment</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
           
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
            required/>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded"
            required/> 
          </div>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 bg-white border border-gray-400 rounded mb-4"
          required ></textarea>
          <button
            type="submit"
            className="bg-[#a8815e] text-white px-6 py-2 rounded hover:bg-yellow-700"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}

