import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { experts } from "../data/experts";
import FAQSection from "./faq";
import AppointmentForm from "./appointment";


const OPD = () => {
  return (
    <>
    <section className="relative bg-gradient-to-r from-[#e6f4ea] to-[#fefefe] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Left */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4B771E] mb-6">
              Multispeciality OPDs
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Jaipur’s leading specialists in Cardiology, Orthopaedics, Neurology, Gynaecology, and more — all under one roof, with minimal waiting.
            </p>
            <button className="bg-[#4B771E] text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
              Book a Consultation
            </button>
          </div>
          {/* Right */}
          <div className="flex-1">
            <img
              src='/a.jpg'
              alt="opd"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
    <section className="bg-[#f9f9ff] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
          Meet Our Doctors
        </p>
        <h2 className="text-4xl text-gray-900 mt-2 leading-tight font-bold">
          Your Health, In Expert Hands
        </h2>

        {/* Doctors Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-4 flex flex-col h-full hover:shadow-md transition"
            >
              {/* Image with hover overlay */}
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-[300px] object-cover rounded-lg transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full hover:bg-[#4B771E] hover:text-white transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full hover:bg-[#4B771E] hover:text-white transition"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full hover:bg-[#4B771E] hover:text-white transition"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex flex-col flex-grow mt-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-xs bg-gray-100 text-center text-gray-700 px-2 py-1 rounded-full font-medium mt-1 inline-block">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 text-sm mt-3 flex-grow">
                  {doctor.description}
                </p>

                {/* Book Button */}
                <button className="mt-4 px-4 py-2 bg-[#4B771E] text-white rounded-full hover:bg-[#3b5f18] transition self-center">
                  Book with {doctor.name.split(" ")[1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    </>
  );
};

export default OPD;
