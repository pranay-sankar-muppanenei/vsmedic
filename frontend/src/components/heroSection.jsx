import React, { useState, useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";

const images = [
  "/doc1.png", // replace with your actual image paths
  "/doc2.png",
  "/doc4.png",
  "/doc3.png",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f5fd] py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-2">
        
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#4d4dff] tracking-widest uppercase">
            Welcome to VsMedi
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-4">
            Where Elite Healthcare Meets Personal Wellness
          </h1>
          <p className="text-gray-500 mt-4 max-w-lg">
            From advanced OPDs to Ayurveda & women’s wellness — Jaipur’s premium hub for complete care under one roof.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-[#4d4dff] text-white font-semibold px-6 py-3 rounded-full shadow-[0_0_15px_rgba(77,77,255,0.6)] hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative">
          <div className="relative h-[600px] w-full">
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
          <div className="absolute top-8 right-0 bg-white rounded-lg shadow-md w-40 h-32 flex flex-col justify-center items-center">
  <h2 className="text-2xl font-bold">25+</h2>
  <p className="text-sm text-gray-500 text-center">Years of Experience</p>
</div>

<div className="absolute top-44 right-0 bg-white rounded-lg shadow-md w-40 h-32 flex flex-col justify-center items-center">
  <h2 className="text-2xl font-bold">140+</h2>
  <p className="text-sm text-gray-500 text-center">Specialist Doctors</p>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
