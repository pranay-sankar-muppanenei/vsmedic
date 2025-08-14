// src/pages/About.jsx
import React, { useEffect, useRef, useState } from "react";
import { FaHome, FaPen, FaLock, FaHeart, FaEye, FaLightbulb } from "react-icons/fa";
import AboutSection from "./aboutSection";
import FAQSection from "./faq";
import ExpertsSection from "./expertsSection";
import Reuse from "./reuse";

const statsData = [
  { number: 25, suffix: "+", label: "Years of Experience" },
  { number: 140, suffix: "+", label: "Specialist Doctors" },
  { number: 500, suffix: "+", label: "Professional Nurses", highlight: true },
  { number: 99, suffix: "%", label: "Positive Reviews" },
];

const valuesData = [
  { icon: <FaHome className="text-[#4B771E] text-2xl" />, title: "Honesty" },
  { icon: <FaPen className="text-[#4B771E] text-2xl" />, title: "Learning" },
  { icon: <FaLock className="text-[#4B771E] text-2xl" />, title: "Trust" },
  { icon: <FaHeart className="text-[#4B771E] text-2xl" />, title: "Passion" },
  { icon: <FaEye className="text-[#4B771E] text-2xl" />, title: "Vision" },
  { icon: <FaLightbulb className="text-[#4B771E] text-2xl" />, title: "Future" },
];

const About = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          statsData.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const duration = 2000;
            const increment = end / (duration / 16);
            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = Math.floor(start);
                return updated;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f8f8ff] min-h-screen py-12 px-4">
      {/* Stats Section */}
      <h1 className="text-center text-[#4B771E] text-3xl font-bold tracking-wide mb-6">About Us</h1>

      {/* Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/a.jpg"
          alt="Contact"
          className="w-full h-[500px] max-w-6xl rounded-lg shadow-md"
        />
      </div>
      <AboutSection />
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16 mt-16"
      >
        {statsData.map((stat, i) => (
          <div
            key={i}
            className={`p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-transform duration-300 hover:scale-105 hover:border-[#4B771E] hover:shadow-lg hover:shadow-[#4B771E]/30 ${
              stat.highlight
                ? "bg-[#4B771E] text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-3xl font-bold">
              {counts[i]}
              {stat.suffix}
            </h3>
            <p
              className={`${
                stat.highlight ? "text-green-100" : "text-gray-600"
              } mt-2`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-md tracking-wider text-[#4B771E] font-semibold mb-2">
          Our Values
        </p>
        <h2 className="text-3xl mb-8">The Hospital That Has a Sincere Heart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {valuesData.map((value, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg border border-gray-200 transition-transform duration-300 hover:scale-105 hover:border-[#4B771E] hover:shadow-lg hover:shadow-[#4B771E]/30"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consect etur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          ))}
        </div>
      </div>
      <ExpertsSection />
      <FAQSection />
      <Reuse />
    </div>
  );
};

export default About;
