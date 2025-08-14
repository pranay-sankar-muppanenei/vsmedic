// src/components/FullScreenCards.jsx
import React from "react";

export default function FullScreenCards() {
  const cards = [
    {
      title: "Consult with Our Skilled Doctors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis.",
      buttonText: "Our Doctors",
      image: "/visit.jpg", // replace with real image
    },
    {
      title: "Experience Health Transformation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis.",
      buttonText: "Consultation",
      image: "/a.jpg", // replace with real image
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            {/* Background image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-72 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 backdrop-blur-xs bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-white text-2xl font-semibold">
                {card.title}
              </h3>
              <p className="text-gray-200 mt-3 max-w-md">{card.description}</p>
              <button
                className="mt-6 bg-white text-[#4B771E] font-semibold py-2 px-6 rounded-full border border-transparent
                           hover:border-[#4B771E] hover:shadow-lg hover:shadow-[#4B771E]/30 transition-all"
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
