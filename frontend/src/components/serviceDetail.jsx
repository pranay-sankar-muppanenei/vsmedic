// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import FAQSection from "./faq";
import AppointmentForm from "./appointment";
import {
  FaPlay,
  FaLeaf,
  FaHeartbeat,
  FaBaby,
  FaSpa,
  FaHandsHelping,
} from "react-icons/fa";

const icons = [FaLeaf, FaHeartbeat, FaBaby, FaSpa, FaHandsHelping];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <div className="text-center mt-20">Service not found</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#e6f4ea] to-[#fefefe] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Left */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4B771E] mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {service.description}
            </p>
            <button className="bg-[#4B771E] text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
              Book a Consultation
            </button>
          </div>
          {/* Right */}
          <div className="flex-1">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          About the Program
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          {service.overview}
        </p>
      </section>

      {/* Advantages */}
      <section className="bg-[#f9fafb] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.advantages.map((adv, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
                >
                  <div className="text-[#4B771E] mb-4 text-3xl">
                    <Icon />
                  </div>
                  <p className="text-gray-700">{adv}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Wellness Packages
        </h2>

        {Array.isArray(service.plans) ? (
          <div className="grid md:grid-cols-3 gap-8">
            {service.plans.map((plan, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-[#4B771E] mb-4">
                  {plan.name}
                </h3>
                <p className="text-[#4B771E] font-semibold mb-2">
                  {plan.price}
                </p>
                <p className="text-gray-600">
                  A holistic plan designed to support your wellness journey.
                </p>
                <button className="mt-4 px-4 py-2 bg-[#4B771E] text-white rounded-lg hover:bg-green-700 transition">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">{service.plans}</p>
        )}
      </section>

      {/* Video */}
      <section className="relative py-16 bg-[#f0fdf4]">
        <div className="max-w-4xl mx-auto relative">
          <img
            src={service.videoImage}
            alt="Video thumbnail"
            className="rounded-xl shadow-lg w-full"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white text-[#4B771E] p-6 rounded-full shadow-lg hover:scale-110 transition-transform">
              <FaPlay size={28} />
            </div>
          </button>
        </div>
      </section>

      {/* FAQ + Appointment */}
      <FAQSection />
      <AppointmentForm />

      {/* Closing CTA */}
      <section className="py-16 bg-[#4B771E] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Begin Your Women Wellness Journey Today
        </h2>
        <p className="mb-6 text-lg">
          Join our holistic programs and experience 92% success in happy,
          natural deliveries.
        </p>
        <button className="bg-white text-[#4B771E] px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Register Now
        </button>
      </section>
    </div>
  );
};

export default ServiceDetail;
