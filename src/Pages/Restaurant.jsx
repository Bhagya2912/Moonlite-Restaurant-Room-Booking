import React,{ useState,useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/1.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/3.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/4.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/5.webp",
];

const categories = [
  "Small Plates",
  "Cold Appetizers",
  "Vegetarian & Vegan",
  "Burgers & Sandwiches",
  "Dips & Spreads",
  "Seafood Specialties",
];

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
      "https://html.themewant.com/moonlit/assets/images/author/author-4.webp",
  },
];

const items = [
  {
    title: "Tuscan Herb-Crusted Chicken",
    description: "Salted caramel, Puff pastry, salad",
    price: "₹120",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNpdVXT4RgrgDN_51JbFcxgYZJUbFGBZlxA&s",
  },
  {
    title: "Classic Bolognese with Fresh",
    description: "Salted caramel, Puff pastry, salad",
    price: "₹120",
    image: "https://html.themewant.com/moonlit/assets/images/pages/resturant/1.jpg",
  },
  {
    title: "Grilled Paneer Tikka",
    description: "Mint chutney, onions, capsicum",
    price: "₹140",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05YUuPyqT5AQi5YQwwOv7n20lU7-M6BVj8Q&s",
  },
  {
    title: "Spicy Veg Pulao",
    description: "Rice, fresh vegetables, Indian spices",
    price: "₹100",
    image: "https://www.vidhyashomecooking.com/wp-content/uploads/2020/09/InstantPotVegPulavRecipe.jpg",
  },
  {
    title: "Masala Dosa Platter",
    description: "Crispy dosa, coconut chutney, sambar",
    price: "₹90",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznscbVDAqjbguziuiPLgW4ij1PszP14OZFA&s",
  },
  {
    title: "Chicken Butter Masala",
    description: "Creamy tomato gravy, naan or rice",
    price: "₹160",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLBVEe6r1T0g-ZwoAeKUzAzQn5ot126jyKg&s",
  },
];

const Restaurant = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Dips & Spreads");

  const closeModal = () => setOpenIndex(null);
  const prevImage = () => setOpenIndex((openIndex - 1 + images.length) % images.length);
  const nextImage = () => setOpenIndex((openIndex + 1) % images.length);

   const [selectedIndex, setSelectedIndex] = useState(0);
    const testimonial = testimonials[selectedIndex];
  
    const goPrevious = () => {
      setSelectedIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
  
    const goNext = () => {
      setSelectedIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  

  return (
    <div className="font-sans text-gray-800">
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
          <h1 className="text-4xl md:text-7xl font-serif mb-6 mt-45">The Restaurant</h1>
          <p className="text-xl">Whether you have questions, need answers, or simply want to chat.</p>
        </div>
      </div>

      <section className="py-20 px-4 md:px-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Side - Images */}
    <div className="flex w-full md:w-1/2 overflow-visible relative gap-x-10">
      {/* First Image - Half Shown */}
      <div className="w-1/2 -ml-44">
        <img
          src="https://html.themewant.com/moonlit/assets/images/pages/resturant/1.webp"
          alt="Image 1"
          className="w-full h-[650px] object-cover rounded-lg"
        />
      </div>

      {/* Second Image - Fully Visible */}
      <div className="w-2/3">
        <img
          src="https://html.themewant.com/moonlit/assets/images/pages/resturant/2.webp"
          alt="Image 2"
          className="w-full h-[650px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* Right Side - Text and Info Boxes */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      {/* Subtitle */}
      <h4 className="flex items-center text-[#a1865e] text-xl sm:text-2xl font-serif mb-3">
        <div className="h-px w-10 bg-[#a8815e]"></div>
        <span className="text-xl ml-2">✦</span>
        <span className="ml-4">Hotel Experience</span>
      </h4>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
        From Farm to Fork: Enjoy Fresh, Seasonal Dishes at Bokinn
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
        Welcome to Bokinn, where luxury meets comfort in the heart of Canada.
        Since 1999, we have been dedicated to providing an exceptional stay
        for our guests, blending modern amenities with timeless elegance.
        Our beautifully designed rooms and suites offer stunning views and
        plush accommodations, ensuring a restful retreat whether you’re here
        for business or leisure.
      </p>

      {/* Info Boxes Below Text */}
      <div className="flex flex-col sm:flex-row gap-6 justify-start">
        {/* Reservation Box */}
        <div className="border border-gray-300 p-5 w-full sm:w-64 text-center rounded-md shadow-sm hover:bg-[#a1865e]">
          <h4 className="text-gray-700 text-lg font-medium mb-2">Reservation By Phone</h4>
          <div className="flex items-center justify-center text-gray-800 gap-2">
            <i class="fa-solid fa-phone"></i>
            <span className="text-base font-semibold">+12505550199</span>
          </div>
        </div>

        {/* Opening Hours Box */}
        <div className="border border-gray-300 p-5 w-full sm:w-64 text-center rounded-md shadow-sm hover:bg-[#a1865e]">
          <h4 className="text-gray-700 text-lg font-medium mb-2">Opening Hours</h4>
          <div className="flex items-center justify-center text-gray-800 gap-2">
           <i class="fa-regular fa-clock"></i>
            <span className="text-base font-semibold">10 AM - 12 PM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="mt-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-29">
  <div>
    {/* Header */}
    <span className="flex items-center justify-center text-[#a1865e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
      <span className="flex items-center">
        <span className="text-sm sm:text-lg">◇</span>
        <span className="w-6 sm:w-10 h-px bg-black"></span>
      </span>
      Gallery
      <span className="flex items-center">
        <span className="w-6 sm:w-10 h-px bg-black"></span>
        <span className="text-sm sm:text-lg">◇</span>
      </span>
    </span>

    <h4 className="flex justify-center text-6xl">Our Restaurant Gallery</h4>
    <p className="text-center mt-7 leading-relaxed">
      <span>
        Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for
      </span>
      <br />
      <span className="block mt-1">
        every guest. Each room features plush bedding.
      </span>
    </p>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 mt-10 max-w-7xl mx-auto">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Food ${index + 1}`}
          className={`cursor-pointer rounded-md object-cover h-[500px] w-full ${
            index <= 2 ? 'sm:col-span-2' : 'sm:col-span-3'
          }`}
          onClick={() => setOpenIndex(index)}
        />
      ))}
    </div>

    {/* Modal */}
    {openIndex !== null && (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
        <button
          className="absolute top-5 right-5 text-white text-3xl"
          onClick={closeModal}
        >
          &times;
        </button>
        <button
          className="absolute left-5 text-white text-3xl"
          onClick={prevImage}
        >
          &#8592;
        </button>
        <img
          src={images[openIndex]}
          className="max-h-[80vh] max-w-[90vw] rounded-lg"
        />
        <button
          className="absolute right-5 text-white text-3xl"
          onClick={nextImage}
        >
          &#8594;
        </button>
        <div className="absolute bottom-5 right-5 text-white text-sm">
          Image {openIndex + 1} of {images.length}
        </div>
      </div>
    )}
  </div>
</section>

 <section className="mt-20 px-4 sm:px-10 md:px-24 bg-gray-200">
      {/* Header */}
      <div className="flex justify-between items-start flex-col md:flex-row mb-10 ">
        <div>
          <h4 className="text-[#a1865e] font-serif flex items-center  text-3xl mb-2 mt-15">
            <div className="h-px w-10 bg-[#a8815e]"></div>
        <span className="text-2xl ">✦</span>
        <span className="ml-4">Menu</span>
          </h4>
          <h2 className="text-7xl font-serif  mb-4">Restaurant Menu</h2>
        </div>
        <p className="text-gray-500 text-lg mt-25">
          Our rooms offer a harmonious blend of comfort and elegance, designed to provide<br/> an exceptional stay for every guest.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-12 py-2 cursor-pointer border rounded-md text-sm font-serif ${
              activeCategory === cat
                ? "bg-[#a1865e] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
<AnimatePresence mode="wait">
  <motion.div
    key={activeCategory}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.4 }}
    className="grid sm:grid-cols-2 gap-y-10 gap-x-6"
  >
    {items.map((item, index) => (
      <div
        key={index}
        className="flex justify-between items-start gap-4 pt-8 border-b pb-6"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 rounded-md object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-serif">{item.title}</h3>
          <p className="text-gray-500 text-sm mt-1">{item.description}</p>
        </div>
        <div className="text-lg font-serif whitespace-nowrap">{item.price}</div>
      </div>
    ))}
  </motion.div>
</AnimatePresence>

    </section>
<section className="py-20 bg-white px-4 md:px-24 overflow-hidden transition-all duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="flex items-center justify-center text-[#a1865e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
            <span className="flex items-center">
              <span className="text-sm sm:text-lg">◇</span>
              <span className="w-6 sm:w-10 h-px bg-black"></span>
            </span>
            Testimonial
            <span className="flex items-center">
              <span className="w-6 sm:w-10 h-px bg-black"></span>
              <span className="text-sm sm:text-lg">◇</span>
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            What Our Client Say
          </h2>
        </div>

        {/* Animated Slide */}
        <div className="relative w-full h-full transition-transform duration-700 ease-in-out">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            {/* Left - Text */}
            <div className="md:w-2/3 transform transition-all duration-700 ease-in-out">
              <div className="flex gap-1 text-yellow-800 text-4xl mb-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="relative inline-block text-gray-300">
                  ★
                  <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-yellow-800">
                    ★
                  </span>
                </span>
              </div>

              <p className="text-gray-600 text-2xl leading-relaxed mb-6 font-serif">
                {testimonial.message}
              </p>
              <p className="text-gray-900 font-serif text-2xl">{testimonial.name}</p>
              <p className="text-gray-500 text-lg">{testimonial.role}</p>
            </div>

            {/* Right - Image and Navigation */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-70 h-70 object-cover rounded-md border border-gray-200 transition-all duration-700"
              />
              <div className="flex gap-3">
                <button
                  onClick={goPrevious}
                  className="w-10 h-10 border border-gray-300 rounded-md text-xl text-gray-600 hover:bg-gray-100 transition"
                >
                  ←
                </button>
                <button
                  onClick={goNext}
                  className="w-10 h-10 border border-gray-300 rounded-md text-xl text-gray-600 hover:bg-gray-100 transition"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Restaurant
