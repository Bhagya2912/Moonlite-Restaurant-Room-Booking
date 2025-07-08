import React, { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const Booking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut || !adults || children === "") {
      setError("All fields are required.");
      return;
    }

    setError("");
    // Proceed with form logic (e.g. API call or navigation)
    alert("Booking submitted!");
  };

  return (
    <div className="px-2 sm:px-4 lg:px-6">
  <form
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded-[20px] px-6 py-6 w-full max-w-[1330px] mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-5"
  >
    {/* Check In */}
    <div className="w-full md:w-auto flex-1">
      <label className="block text-base font-medium text-gray-800 mb-1">Check In</label>
      <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
        <FaCalendarAlt />
        <input
          type="date"
          className="bg-transparent outline-none w-full"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
        />
      </div>
    </div>

    {/* Check Out */}
    <div className="w-full md:w-auto flex-1">
      <label className="block text-base font-medium text-gray-800 mb-1">Check Out</label>
      <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
        <FaCalendarAlt />
        <input
          type="date"
          className="bg-transparent outline-none w-full"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
        />
      </div>
    </div>

    {/* Adults */}
    <div className="w-full md:w-auto flex-1">
      <label className="block text-base font-medium text-gray-800 mb-1">Adult</label>
      <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
        <FaUser />
        <select
          className="bg-transparent outline-none w-full"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          required
        >
          <option value="">Select</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Person{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Children */}
    <div className="w-full md:w-auto flex-1">
      <label className="block text-base font-medium text-gray-800 mb-1">Child</label>
      <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
        <FaUser />
        <select
          className="bg-transparent outline-none w-full"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          required
        >
          <option value="">Select</option>
          {[0, 1, 2, 3].map((num) => (
            <option key={num} value={num}>
              {num} Child{num !== 1 ? "ren" : ""}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Button */}
    <div className="w-full md:w-auto">
      <button
        type="submit"
        className="w-full md:w-auto bg-[#a8815e] text-white font-serif mt-6 px-6 py-3 rounded-md hover:bg-[#916c49] transition-all"
      >
        Check Now
      </button>
    </div>

    {/* Error Message */}
    {error && (
      <div className="w-full text-red-600 text-center text-sm col-span-full mt-2">
        {error}
      </div>
    )}
  </form>
</div>

  );
};

export default Booking;
