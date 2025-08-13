import React, { useState } from "react";
import { FiPlay, FiX, FiCheck } from "react-icons/fi";

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#f9f9ff] py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center  gap-8">

        {/* Left Images */}
        <div className="flex gap-4 flex-1">
          {/* First Image */}
          <div className="relative flex-1">
            <img
              src="/aboutd1.jpg"
              alt="Health Care"
              className="rounded-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md px-4 py-2 flex items-center gap-2">
              <FiCheck className="text-[#4d4dff]" />
              <span className="text-sm font-medium">Health Care Service</span>
            </div>
          </div>

          {/* Second Image */}
          <div className="relative flex-1">
            <img
              src="/aboutd2.jpg"
              alt="Doctors"
              className="rounded-2xl w-full h-full object-cover mt-10"
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute inset-0 flex justify-center items-center  bg-opacity-30 rounded-2xl"
            >
              <div className="bg-white rounded-full p-4 shadow-lg">
                <FiPlay className="text-[#4d4dff] text-2xl" />
              </div>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-5">
          <p className="text-[#4d4dff] font-semibold uppercase tracking-widest">
            About VsMedi
          </p>
          <h2 className="text-3xl md:text-4xl  mt-2">
            We Collaborate for Better Healthcare
          </h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg leading-normal">Our Vision</h3>
              <p className="text-gray-500 text-sm">
                We never get behind of the latest medical trends. Lorem ipsum
                dolor sit.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Mission</h3>
              <p className="text-gray-500 text-sm leading-normal">
                The most interesting hospital in the world. Lorem ipsum dolor
                sit amet.
              </p>
            </div>
          </div>

          <button className="self-start mt-6 bg-[#4d4dff] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
            Learn More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg overflow-hidden relative w-full max-w-3xl">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <FiX className="text-gray-600 text-xl" />
            </button>
            {/* Video */}
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
