import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";

const rooms = [
  {
    name: "The Ritz-Carlton",
    img: "https://html.themewant.com/moonlit/assets/images/room/1.webp",
    size: "35 sqm",
    persons: "2 Person",
    price: "5999₹",
  },
  {
    name: "Four Seasons Hotels",
    img: "https://html.themewant.com/moonlit/assets/images/room/2.webp",
    size: "35 sqm",
    persons: "2 Person",
    price: "3999₹",
  },
  {
    name: "Waldorf Astoria Hotels",
    img: "https://html.themewant.com/moonlit/assets/images/room/3.webp",
    size: "35 sqm",
    persons: "5 Person",
    price: "5999₹",
  },
  {
    name: "Mandarin Oriental",
    img: "https://html.themewant.com/moonlit/assets/images/room/4.webp",
    size: "40 sqm",
    persons: "3 Person",
    price: "6999₹",
  },
  {
    name: "Park Hyatt",
    img: "https://html.themewant.com/moonlit/assets/images/room/2.webp",
    size: "35 sqm",
    persons: "2 Person",
    price: "4999₹",
  },
  {
    name: "The Leela Palace",
    img: "https://html.themewant.com/moonlit/assets/images/room/3.webp",
    size: "35 sqm",
    persons: "2 Person",
    price: "8999₹",
  },
  {
    name: "Taj Hotels",
    img: "https://html.themewant.com/moonlit/assets/images/room/1.webp",
    size: "40 sqm",
    persons: "3 Person",
    price: "5999₹",
  },
  {
    name: "Marriott International",
    img: "https://html.themewant.com/moonlit/assets/images/room/4.webp",
    size: "38 sqm",
    persons: "4 Person",
    price: "6599₹",
  },
  {
    name: "InterContinental",
    img: "https://html.themewant.com/moonlit/assets/images/room/1.webp",
    size: "33 sqm",
    persons: "2 Person",
    price: "5999₹",
  },
  {
    name: "St. Regis",
    img: "https://html.themewant.com/moonlit/assets/images/room/2.webp",
    size: "36 sqm",
    persons: "2 Person",
    price: "4999₹",
  },
];

export default function RoomPage() {
  return (
    <section className="bg-gray-50 py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Title */}
          <div className="md:max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-px bg-[#a8815e]"></div>
              <span className="text-[#a8815e] text-xl">✦</span>
              <span className="text-[#a8815e] text-lg font-serif">Room</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-black ">Our Rooms</h2>
          </div>

          {/* Right: Paragraph */}
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            Our rooms offer a harmonious blend of comfort and elegance, designed to provide
            an exceptional stay for every guest. Each room features plush bedding, high-quality
            linens, and a selection of pillows to ensure a restful night’s sleep.
          </p>
        </div>
      </div>

      {/* Swiper */}
      <div className="px-4 pt-12 pb-16">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!pb-16"
        >
          {rooms.map((room, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-xl overflow-hidden shadow-lg relative animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="overflow-hidden h-[560px]">
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute bottom-0 left-0 w-full p-4 z-20 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-4xl font-serif">{room.name}</h3>
                  <div className="text-lg flex gap-4 mt-3">
                    <span className="flex items-center gap-1 text-white">
                      <i className="fa-solid fa-house"></i> {room.size}
                    </span>
                    <span className="flex items-center gap-1 text-white">
                      <i className="fa-solid fa-user"></i> {room.persons}
                    </span>
                  </div>
                  <p className="text-xl font-semibold mt-3">{room.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Animation & Pagination Styling */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }

          .swiper-pagination {
            text-align: center;
            margin-top: 20px;
          }
          .swiper-pagination-bullet {
            background: #ccc;
            width: 10px;
            height: 10px;
            margin: 0 5px !important;
            border-radius: 50%;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #a47b54;
          }
        `}</style>
      </div>
    </section>
  );
}
