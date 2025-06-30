import React from 'react'

export default function Events() {
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
      </div>
  )
}

