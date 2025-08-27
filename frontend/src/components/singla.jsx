// src/pages/SrajanWomenWellness.jsx
import React from "react";
import FAQSection from "./faq";
import AppointmentForm from "./appointment";
import { FaPlay, FaLeaf, FaHeartbeat, FaBaby } from "react-icons/fa";

const SinglaSlimming = () => {
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
              Singla Slimming Centre
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Transform your body and health with expert weight management programs, advanced slimming therapies, inch-loss treatments, diet planning, and personalized fitness guidance for a healthier, confident you.
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
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="bg-white text-[#4B771E] rounded-xl shadow-md p-6 text-center hover:scale-105 transition-transform">
      <p className="text-3xl font-bold">22+</p>
      <p className="text-sm mt-2">Years of Experience</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white text-[#4B771E] rounded-xl shadow-md p-6 text-center hover:scale-105 transition-transform">
      <p className="text-3xl font-bold">11+</p>
      <p className="text-sm mt-2">Clinic Locations</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white text-[#4B771E] rounded-xl shadow-md p-6 text-center hover:scale-105 transition-transform">
      <p className="text-3xl font-bold">135k+</p>
      <p className="text-sm mt-2">Delighted Clients</p>
    </div>
    <div className="bg-white text-[#4B771E] rounded-xl shadow-md p-6 text-center hover:scale-105 transition-transform">
      <p className="text-3xl font-bold">2.8 million+</p>
      <p className="text-sm mt-2">Kilos Burned</p>
    </div>
  </div>
</section>


{/* About the Program */}
<section className="py-16 max-w-6xl mx-auto px-6">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left: Text */}
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        About Singla Slimming Clinic
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Founded by <span className="font-semibold text-[#4B771E]">Dr. Anju Singla</span> 
        and <span className="font-semibold text-[#4B771E]">Dr. Sushil Singla</span> in 2003, 
        Singla Slimming Clinic has been a trusted name in non-invasive weight loss and 
        wellness for over <span className="font-semibold text-black">21 years</span>.  
        With advanced technology and personalized care, we’ve helped thousands of clients 
        achieve their health goals without surgery, medicine, or exhausting workouts.
        <br /><br />
        Today, our clinics serve clients across cities like Ludhiana, Jalandhar, Mohali, Zirakpur, 
        Amritsar, Greater Kailash (Delhi), and Ferozepur—making holistic weight loss 
        solutions accessible to all.
      </p>
    </div>

    {/* Right: Doctor Image */}
    <div className="flex justify-center">
      <div className="relative">
        <img
          src="/singla.jpg" // replace with actual image
          alt="Dr. Anju & Dr. Sushil Singla"
          className="rounded-full shadow-xl h-[300px] w-[300px] object-cover border-2 border-[#4B771E]"
        />
        <p className="mt-4 text-center text-gray-700 font-semibold">
          Dr. Anju Singla & Dr. Sushil Singla <br />
          <span className="text-sm text-gray-500">Founders & Wellness Experts</span>
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-16 max-w-6xl mx-auto px-6 text-center">
  {/* Heading */}
  <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
    Our Services
  </p>
  <h2 className="text-4xl text-gray-900 mt-2">
    Comprehensive Wellness Solutions
  </h2>
  <p className="text-gray-600 mt-4 mb-10">
    At Singla Slimming Clinic, we provide a variety of non-invasive treatments 
    designed to help you reach your weight management and wellness goals in a 
    safe and effective way.
  </p>

  {/* Cards */}
  <div className="grid md:grid-cols-4 gap-6">
    {[
      {
        name: "Root-Cause Treatment",
        desc: "We address obesity at its source, ensuring long-lasting weight loss and better health with accurate medical evaluations.",
        image: "/se1.jpg",
      },
      {
        name: "Cutting-Edge Slimming Tech",
        desc: "Advanced ultrasound technology to naturally break down fat cells without surgery or discomfort.",
        image: "/se2.webp",
      },
      {
        name: "Customized Diet Plans",
        desc: "Personalized nutrition plans to complement your slimming program and support lasting wellness results.",
        image: "/se3.jpeg",
      },
      {
        name: "Non-Surgical Body Contouring",
        desc: "Safe, non-invasive techniques to shape and tone your body, targeting specific areas for a refined silhouette.",
        image: "/se4.jpg",
      },
    ].map((plan, idx) => (
      <div
        key={idx}
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm 
                   transition-all duration-300 flex flex-col justify-between
                   hover:border-[#4B771E] hover:shadow-lg hover:shadow-[#4B771E]/30 hover:scale-[1.03]"
      >
        {/* Card Image */}
        <div className="mb-4">
          <img
            src={plan.image}
            alt={plan.name}
            className="rounded-lg w-full h-40 object-cover"
          />
        </div>

        {/* Card Content */}
        <div>
          <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
          <p className="text-gray-600 text-sm mt-2">{plan.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Full-width custom plan box */}
  <div className="mt-12 mb-12 border border-gray-200 py-6 rounded-lg w-full flex justify-center items-center">
    <p className="text-gray-700 text-lg">
      Looking for a personalized approach?{" "}
      <a href="#" className="text-[#4B771E] font-semibold hover:underline">
        Let&apos;s Talk!
      </a>
    </p>
  </div>
</section>





      {/* Advantages */}
 <section className="bg-[#f9fafb] py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h6 className="text-[#4B771E] font-semibold mb-2">
      Why Choose Us
    </h6>
    <h2 className="text-3xl font-semibold text-gray-800 mb-5 text-left">
      Our Promise to Your Success
    </h2>
    <p className="text-left text-gray-600 max-w-3xl  mb-14">
      Backed by nearly 20 years of expertise and countless success journeys, our
      clinic is recognized as a trusted leader in safe, non-invasive weight
      management solutions.
    </p>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        "Doctor-Supervised Treatments – All procedures are monitored by medical professionals using advanced techniques.",
        "Tailored Wellness Plans – Personalized programs designed around your body, goals, and lifestyle.",
        "Round-the-Clock Support – 24/7 Care Manager Representatives always available for your guidance.",
        "Safe & Non-Invasive Methods – Proven medical approaches that deliver results without surgery.",
        "Whole-Body Health Focus – Addressing root causes with emphasis on long-term well-being.",
        "Experienced Specialists – Led by Dr. Anju Singla, our skilled team is dedicated to your progress."
      ].map((adv, idx) => (
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





{/* Testimonials Section */}
<section className="bg-[#f9f9ff] py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
      Success Stories
    </p>
    <h2 className="text-4xl text-gray-900 mt-2 mb-8">
      Real Transformations, Real People
    </h2>

    {/* Grid of testimonials */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        {
          image: "/ba1.png",
          text: "I tried everything, but real change came when I consulted Dr. Anju Singla. Since then, my weight hasn’t come back.",
          name: "Mr. Jatin (49 years)",
          link: "Before / After Transformation",
        },
        {
          image: "/ba2.png",
          text: "I shed 20 kgs in 2 months while enjoying homemade food. No weight regain, and my migraine, cholesterol, fatty liver & swelling are gone.",
          name: "Mrs. Mandeep Kaur (50 years)",
          link: "Lost 20kgs in 2 months",
        },
        {
          image: "/ba3.png",
          text: "Dropped 15kgs in 1 month, 25kgs in 2 months, and 70kgs in 7 months. Thanks to slimming technology, my skin stayed firm with zero sagging.",
          name: "Mr. Chirag Seda (22 years, Student)",
          link: "Lost 36kgs in 3 months",
        },
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
              alt="Before After Transformation"
              className="rounded-lg w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Aura overlay */}
            <div className="absolute inset-0 bg-[#4B771E]/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>

          {/* Text */}
          <p className="mt-4 text-gray-700 italic text-sm">“{testimonial.text}”</p>
          <p className="mt-2 font-semibold text-gray-900">{testimonial.name}</p>
          <a href="#" className="text-sm text-[#4B771E] underline">
            {testimonial.link}
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default SinglaSlimming;
