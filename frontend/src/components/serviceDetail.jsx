// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import FAQSection from "./faq";
import AppointmentForm from "./appointment";
import { FaPlay } from "react-icons/fa";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <div className="text-center mt-20">Service not found</div>;
  }

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-6 mb-6">{service.title}</h1>

      {/* Main Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[500px] max-w-6xl rounded-lg shadow-md"
        />
      </div>

      <div className="bg-gray-50 min-h-screen px-6 lg:px-20 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-gray-600">{service.overview}</p>
          </div>

          {/* Video Image */}
          <div className="relative">
            <img
              src={service.videoImage}
              alt="Medical Specialist"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white text-blue-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                <FaPlay size={20} />
              </div>
            </button>
          </div>
        </div>

        {/* Advantages */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Advantages</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {service.advantages.map((adv, idx) => (
              <li key={idx}>{adv}</li>
            ))}
          </ul>
        </div>

        {/* Plans */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Health Care Plans</h2>
          <p className="text-gray-600">{service.plans}</p>
        </div>
      </div>

      <FAQSection />
      <AppointmentForm />
    </>
  );
};

export default ServiceDetail;
