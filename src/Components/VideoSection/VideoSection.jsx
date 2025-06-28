import React, { useState } from "react";

export default function VideoHeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
    <section className="relative w-full h-screen overflow-hidden">

  {/* Background image (scrolls with page) */}
  <img
    src="https://html.themewant.com/moonlit/assets/images/video/video-main.webp"
    alt="Hotel Background"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>

  {/* Rotating circle with play button */}
  <div className="absolute inset-0 flex border-green items-center justify-center">
    <div
      className="relative w-40 h-40 rounded-full bg-[#a8815e]/80 flex items-center justify-center cursor-pointer"
      onClick={() => setShowVideo(true)}
    >
      {/* Rotating text */}
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

{/* Play Icon */}
<svg
  className="w-8 h-8 text-white z-10"
  fill="currentColor"
  viewBox="0 0 20 20"
>
  <path d="M6 4l10 6-10 6V4z" />
</svg>
</div>
</div>

  {/* Modal Video */}
  {showVideo && (
    <div className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50">
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
</section>
      
    </>
  );
}

