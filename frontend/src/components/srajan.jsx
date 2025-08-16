// src/pages/SrajanWomenWellness.jsx
import React from "react";
import FAQSection from "./faq";
import AppointmentForm from "./appointment";
import { FaPlay, FaLeaf, FaHeartbeat, FaBaby } from "react-icons/fa";

const SrajanWomenWellness = () => {
  const advantages = [
    "Expert-led prenatal & postnatal yoga programs",
    "Authentic Ayurveda therapies for holistic healing",
    "Personalised counselling & lifestyle correction",
    "Focus on Physical, Emotional, Social & Spiritual health",
    "Positive mind training for healthy labor & delivery",
  ];

  const plans = [
    { name: "Pranayama & Meditation", price: "₹2000" },
    { name: "Garbh Sanskar Sessions", price: "₹2000" },
    { name: "Couple Yoga", price: "₹1000" },
    { name: "Mother / Mother-in-law Sessions", price: "₹1000" },
    { name: "Personal Counselling (3 sessions)", price: "₹4500" },
    { name: "Full Monthly Wellness Package", price: "₹12000" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#e6f4ea] to-[#fefefe] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4B771E] mb-6">
              SRAJAN Women Wellness
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Uncover the secrets of a pain-free, smooth journey for a normal
              delivery through Garbh Sanskar, prenatal yoga, postnatal recovery,
              lactation planning, and authentic Ayurveda therapies.
            </p>
            <button className="bg-[#4B771E] text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
              Book a Consultation
            </button>
          </div>
          <div className="flex-1">
            <img
              src="/visit.jpg"
              alt="Srajan Women Wellness"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Highlighted Stats */}
      <section className="bg-[#4B771E] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">17+</p>
            <p className="text-sm">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold">92%</p>
            <p className="text-sm">Success Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold">5000+</p>
            <p className="text-sm">Mothers Guided</p>
          </div>
        </div>
      </section>

{/* About the Program */}
<section className="py-16 max-w-6xl mx-auto px-6">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left: Text */}
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        About the Program
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Led by <span className="font-semibold text-[#4B771E]">Dr. Anuradha Saraswat</span>, 
        an experienced faculty in yoga & wellness science with 
        <span className="font-semibold text-black"> 17+ years of practice</span> and a 
        <span className="font-semibold text-black"> 92% success rate</span>.  
        The program is focused on holistic wellness for women, including 
        maternity programs, <span className="italic">Garbh Sanskar</span>, 
        lifestyle counselling, and spiritual health.
      </p>
    </div>

    {/* Right: Doctor Image */}
    <div className="flex justify-center">
      <div className="relative">
        <img
          src="/sars.png" // replace with actual image path
          alt="Dr. Anuradha Saraswat"
          className="rounded-full shadow-xl h-[300px] w-[300px] object-cover border-2 border-[#4B771E]"
        />
        <p className="mt-4 text-center text-gray-700 font-semibold">
          Dr. Anuradha Saraswat <br />
          <span className="text-sm text-gray-500">Yoga & Wellness Expert</span>
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Advantages */}
    <section className="bg-[#f9fafb] py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-semibold text-gray-800 mb-10">
      Why Choose Us
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {advantages.map((adv, idx) => (
        <div
          key={idx}
          className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-2xl 
                     transition duration-500 transform hover:-translate-y-2"
        >
          {/* Aura Glow */}
          <div className="absolute inset-0 rounded-xl bg-green-100 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500"></div>

          {/* Card Content */}
          <div className="relative z-10">
            <div className="text-[#4B771E] mb-4 text-4xl group-hover:scale-110 transition duration-500">
              {idx % 3 === 0 ? (
                <FaLeaf />
              ) : idx % 3 === 1 ? (
                <FaHeartbeat />
              ) : (
                <FaBaby />
              )}
            </div>
            <p className="text-gray-700 font-medium text-lg">{adv}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Plans */}
      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
  {/* Heading */}
  <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
    Health Care Plans
  </p>
  <h2 className="text-4xl text-gray-900 mt-2">
    Choose from Specialised Wellness Packages
  </h2>
  <p className="text-gray-600 mt-4 mb-10">
    Designed for every stage of motherhood and holistic wellness.
  </p>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-6">
    {plans.map((plan, idx) => (
      <div
        key={idx}
        className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm 
                   transition-all duration-300 flex flex-col justify-between
                   hover:border-[#4B771E] hover:shadow-lg hover:shadow-[#4B771E]/30 hover:scale-[1.03]"
      >
        {/* Plan Info */}
        <div>
          <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
          <p className="text-[#4B771E] text-2xl font-semibold mt-2">
            {plan.price}
          </p>
        </div>

        {/* CTA */}
        <button
          className="mt-6 bg-[#4B771E] text-white py-2 px-6 rounded-full 
                     transition-all duration-300 border border-transparent
                     hover:bg-white hover:text-[#4B771E] hover:border-[#4B771E] 
                     hover:shadow-lg hover:shadow-[#4B771E]/30"
        >
          Enroll Now
        </button>
        <p className="text-xs text-gray-500 mt-2">
          *Terms and Conditions apply
        </p>
      </div>
    ))}
  </div>

  {/* Full-width custom plan box */}
  <div className="mt-12 mb-12 border border-gray-200 py-6 rounded-lg w-full flex justify-center items-center">
    <p className="text-gray-700 text-lg">
      Need a customised wellness plan?{" "}
      <a href="#" className="text-[#4B771E] font-semibold hover:underline">
        Let&apos;s Talk!
      </a>
    </p>
  </div>
</section>
{/* Testimonials Section */}
<section className="bg-[#f9f9ff] py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
      Happy Mothers
    </p>
    <h2 className="text-4xl text-gray-900 mt-2 mb-8">
      Real Experiences, Real Smiles
    </h2>

    {/* Grid of testimonials */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        { image: "/mom1.jpg", text: "The yoga sessions made my pregnancy journey smooth & peaceful." },
        { image: "/mom2.jpg", text: "Garbh Sanskar classes brought positivity & confidence." },
        { image: "/mom3.jpg", text: "Personal counselling really helped me recover post-delivery." },
      ].map((testimonial, idx) => (
        <div
          key={idx}
          className="group relative bg-white rounded-xl shadow-sm p-4 overflow-hidden
                     transition duration-500 hover:shadow-xl hover:-translate-y-2"
        >
          {/* Image */}
          <div className="relative">
            <img
              src={testimonial.image}
              alt="Mother experience"
              className="rounded-lg w-full h-[280px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Aura overlay */}
            <div className="absolute inset-0 bg-[#4B771E]/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>

          {/* Text */}
          <p className="mt-4 text-gray-700 italic text-sm">“{testimonial.text}”</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Video */}
      <section className="relative py-16 bg-[#f0fdf4]">
        <div className="max-w-4xl mx-auto relative">
          <img
            src="/aboutd1.jpg"
            alt="Video thumbnail"
            className="rounded-xl shadow-lg w-full"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white text-[#4B771E] p-5 rounded-full shadow-lg hover:scale-110 transition-transform">
              <FaPlay size={24} />
            </div>
          </button>
        </div>
      </section>

      {/* FAQ + Appointment */}
      <FAQSection />
      <AppointmentForm />
    </div>
  );
};

export default SrajanWomenWellness;
