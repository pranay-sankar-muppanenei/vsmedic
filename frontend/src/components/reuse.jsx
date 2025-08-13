// src/components/Reuse.jsx
import React from "react";

const Reuse = () => {
  return (
    <div className="bg-[#f8f8ff]">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <p className="text-indigo-600 font-semibold uppercase tracking-widest mb-2">
            Get Started
          </p>
          <h1 className="text-4xl md:text-5xl  leading-tight mb-4 text-gray-900">
            The Most Interesting Hospital in the World
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button className="border border-indigo-200 px-6 py-3 rounded-full font-medium text-gray-800 hover:bg-indigo-50 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center">
          <img
            src="/doc4.png"
            alt="Doctor"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Reuse;
