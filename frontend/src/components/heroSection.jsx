import React, { useState, useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";

const images = ["/doc1.png", "/doc2.png", "/doc4.png", "/doc3.png"];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f5fd] py-10 sm:py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4 md:px-8">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm sm:text-md font-semibold text-[#4B771E] tracking-widest uppercase">
            Welcome to VsMedi
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-3">
            Where Elite Healthcare Meets Personal Wellness
          </h1>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto lg:mx-0">
            From advanced OPDs to Ayurveda & women’s wellness — Jaipur’s premium hub for complete care under one roof.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#4B771E] text-white font-semibold px-6 py-3 rounded-full shadow-[0_0_15px_rgba(75,119,30,0.6)] hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative w-full max-w-[500px] mx-auto lg:max-w-none">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Doctor ${index}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[2000ms] ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="absolute top-4 sm:top-8 right-2 sm:right-0 bg-white rounded-lg shadow-md w-28 sm:w-36 lg:w-40 h-24 sm:h-28 lg:h-32 flex flex-col justify-center items-center">
            <h2 className="text-xl sm:text-2xl font-bold">25+</h2>
            <p className="text-xs sm:text-sm text-gray-500 text-center">Years of Experience</p>
          </div>

          <div className="absolute top-36 sm:top-44 right-2 sm:right-0 bg-white rounded-lg shadow-md w-28 sm:w-36 lg:w-40 h-24 sm:h-28 lg:h-32 flex flex-col justify-center items-center">
            <h2 className="text-xl sm:text-2xl font-bold">140+</h2>
            <p className="text-xs sm:text-sm text-gray-500 text-center">Specialist Doctors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
