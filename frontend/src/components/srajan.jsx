// src/pages/SrajanWomenWellness.jsx
import React,{useState} from "react";
import FAQSection from "./faq";
import AppointmentForm from "./appointment";
import PlansSection from "./modal";
import ConsultationFormModal from "./bookconsult";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaPlay, FaLeaf, FaHeartbeat, FaBaby } from "react-icons/fa";

const SrajanWomenWellness = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
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
              Srajan Sanjeevani Women Wellness
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Uncover the secrets of a pain-free, smooth journey for a normal
              delivery through Garbh Sanskar, prenatal yoga, postnatal recovery,
              lactation planning, and authentic Ayurveda therapies.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="bg-[#4B771E] text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
                          Book a Consultation
                        </button>
                      
          </div>
            <ConsultationFormModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
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
    <h2 className="text-3xl text-center font-semibold text-gray-800 mb-10">
      Why Choose Us
    </h2>

    {/* Flex wrapper */}
    <div className="flex flex-wrap justify-center gap-8">
      {advantages.map((adv, idx) => (
        <div
          key={idx}
          className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-2xl 
                     transition duration-500 transform hover:-translate-y-2
                     flex-1 min-w-[280px] max-w-[350px]"
        >
          {/* Aura Glow */}
          <div className="absolute inset-0 rounded-xl bg-green-100 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500"></div>

          {/* Card Content */}
          <div className="relative z-10 text-center">
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




<PlansSection plans={plans} />

      {/* FAQ Section */}
      <FAQSection />
{/* Testimonials Section */}
<section className="bg-[#f9f9ff] py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
      Happy Mothers
    </p>
    <h2 className="text-4xl text-gray-900 mt-2 mb-8">
      Real Experiences, Real Smiles
    </h2>

    {/* Swiper Carousel */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="pb-10"
    >
      {[
        { image: "/mom1.jpg", text: "The yoga sessions made my pregnancy journey smooth & peaceful." },
        { image: "/mom2.jpg", text: "Garbh Sanskar classes brought positivity & confidence." },
        { image: "/mom3.jpg", text: "Personal counselling really helped me recover post-delivery." },
                { image: "/mom3.jpg", text: "Personal counselling really helped me recover post-delivery." },
                        { image: "/mom3.jpg", text: "Personal counselling really helped me recover post-delivery." },
      ].map((testimonial, idx) => (
        <SwiperSlide key={idx}>
          <div
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
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #4B771E !important; /* arrow color */
          font-weight: bold;
          z-index: 10;
    
        }

        .swiper-pagination-bullet {
          background: #ccc !important; /* inactive dot */
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #4B771E !important; /* active dot */
        }
      `}</style>
</section>



    
       <section className="py-16 bg-[#4B771E] text-white text-center mt-2 mb-1">
        <h2 className="text-3xl font-bold mb-4">
          Begin Your Women Wellness Journey Today
        </h2>
        <p className="mb-6 text-lg">
          Join our holistic programs and experience 92% success in happy,
          natural deliveries.
        </p>
        <button onClick={() => setIsModalOpen(true)} className="bg-white text-black px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
                          Book a Consultation
                        </button>
                        <ConsultationFormModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
      </section>
    </div>
  );
};

export default SrajanWomenWellness;
