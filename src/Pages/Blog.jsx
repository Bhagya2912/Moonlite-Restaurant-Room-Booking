import React from 'react';
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Discover Luxury: A Journey Through Our Hotel's Unique Offerings",
      image:
        "https://html.themewant.com/moonlit/assets/images/pages/blog/1.webp",
      author: "Madison Roy",
      time: "10 Min Read",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      title: "Exclusive Deals: How to Make the Most of Your Stay at Bokinn",
      image:
        "https://html.themewant.com/moonlit/assets/images/pages/blog/2.webp",
      author: "Alice Roy",
      time: "10 Min Read",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      title: "Indulge in Luxury: A Guide to Bokinn Premium Amenities",
      image:
        "https://html.themewant.com/moonlit/assets/images/pages/blog/3.webp",
      author: "Jonas Lee",
      time: "8 Min Read",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
     {
      title: "Exclusive Deals: How to Make the Most of Your Stay at Bokinn",
      image:
        "https://html.themewant.com/moonlit/assets/images/pages/blog/4.webp",
      author: "Jonas Lee",
      time: "8 Min Read",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px] sm:h-[700px] md:h-[800px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-8 z-10">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-6">
            Our Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
            Whether you have questions, need answers, or simply want to chat.
          </p>
        </div>
      </div>

      {/* Blog Content */}
<div className="bg-white px-4 mt-20 mb-20 md:px-10 py-14">
  <div className="max-w-7xl mx-auto grid grid-cols- lg:grid-cols-3 gap-5">
    {/* Left Blog Posts */}
   <div className="lg:col-span-2 h-[1000px] overflow-y-auto pr-4 custom-scroll">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg mb-10 shadow-sm"
        >
          <div className="overflow-hidden  rounded-t-lg">
           <Link to={`/blog-details/${post.id}`}>
  <img
    src={post.image}
    alt="Blog Cover"
    className="w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-105 cursor-pointer"
  />
</Link>
          </div>
          <div className="p-6">
            <p className="text-xl text-gray-500 mb-2">Luxury Hotel</p>
            <h3 className="text-4xl font-serif mb-4">{post.title}</h3>
            <p className="text-gray-600 mb-4 text-lg font-serif">
              In today's ever-evolving business landscape, staying ahead of the curve is essential for success...
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <span className="text-lg text-gray-700">{post.author}</span>
                <span className="text-lg text-gray-500 flex items-center gap-1">
                  <i className="fa-regular fa-clock"></i> {post.time}
                </span>
              </div>
              <button className="px-4 py-1 font-serif rounded text-sm hover:bg-gray-300 hover:text-black transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center my-10">
        <button className="px-6 py-2 text-black border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition">
          Load More
        </button>
      </div>
    </div>

    {/* Right Sidebar */}
<div className="sticky top-10 bg-gray-100 border border-gray-300 rounded-lg p-6 w-full lg:w-[470px]">
  {/* Search */}
  <div className="mb-8">
    <h4 className="text-2xl font-serif mb-3 text-gray-800">Search</h4>
    <div className="relative">
  <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
  <input
    type="text"
    placeholder="Search"
    className="w-full pl-10 border border-gray-300 px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
  />
</div>

  </div>

 <div className="mb-8">
  <h4 className="text-2xl font-serif mb-4 text-gray-800">Category</h4>
  <ul className="space-y-3 text-base  text-gray-700">
    {[
      { label: "Adventure Stays", count: 130 },
      { label: "Wellness & Relaxation", count: 80 },
      { label: "Cultural Stays", count: 45 },
      { label: "Historic Hotels", count: 100 },
      { label: "Pet-Friendly Hotels", count: 80 },
    ].map((item, i) => (
      <li key={i} className="flex items-center justify-between border-b pb-5">
        <div className="flex items-center gap-5">
          <input type="checkbox" className="form-checkbox text-yellow-600" />
          <span>{item.label}</span>
        </div>
        <span className="text-gray-500">{`(${item.count})`}</span>
      </li>
    ))}
  </ul>
</div>


  {/* Latest Posts */}
<div className="mb-8">
  <h4 className="text-2xl font-serif mb-4 text-gray-800">Latest Posts</h4>

  {[
    {
      img: "https://html.themewant.com/moonlit/assets/images/pages/blog/r-1.webp",
      title: "Top 10 Reasons Guests Love Staying at Bokinn",
      time: "10 Min Read",
    },
    {
      img: "https://html.themewant.com/moonlit/assets/images/pages/blog/r-2.webp",
      title: "Experience True Luxury With Our Signature Suites",
      time: "8 Min Read",
    },
    {
      img: "https://html.themewant.com/moonlit/assets/images/pages/blog/r-3.webp",
      title: "How Our Amenities Make Your Stay Unforgettable",
      time: "6 Min Read",
    },
  ].map((post, i) => (
    <div key={i} className="flex items-center gap-4 mb-5">
      <img
        src={post.img}
        alt="latest"
        className="w-17 h-20 object-cover rounded-md"
      />
      <div>
        <p className="text-xl font-medium text-gray-700">{post.title}</p>
       <div className="flex items-center gap-2 mt-4">
  <i className="fa-regular fa-clock text-gray-500 text-lg"></i>
  <p className="text-lg text-gray-500">{post.time}</p>
</div>

      </div>
    </div>
  ))}
</div>


  {/* Tags */}
  <div>
    <h4 className="text-3xl font-serif mb-3 text-gray-800">Tags</h4>
    <div className="flex cursor-pointer flex-wrap gap-5 text-lg">
      {[
        "Hotel Stay",
        "Travel Blog",
        "Hotel Review",
        "Hotel Guide",
        "Guest Experience",
      ].map((tag, i) => (
        <span
  key={i}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="px-3 py-1 border border-gray-400 rounded-sm hover:bg-gray-300 hover:text-black transition"
>
  {tag}
</span>

      ))}
    </div>
  </div>
</div>
  </div>
</div>

{/* Scrollbar Styling */}
<style>
  {`
    .custom-scroll::-webkit-scrollbar {
      display: none;
    }
    .custom-scroll {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}
</style>
</div>
  );
};

export default Blog;



