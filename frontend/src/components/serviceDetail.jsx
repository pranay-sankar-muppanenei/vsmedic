// src/pages/ServiceDetail.jsx
import React from "react";
import FAQSection from "./faq";
import AppointmentForm from "./appointment";
import { FaPlay } from "react-icons/fa";

const ServiceDetail = () => {
  return (
    <> <h1 className="text-center text-3xl font-bold mt-6 mb-6">Service Detail</h1>

      {/* Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/a.jpg"
          alt="Contact"
          className="w-full h-[500px] max-w-6xl rounded-lg shadow-md"
        />
      </div>
    <div className="bg-gray-50 min-h-screen px-6 lg:px-20 py-10">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Medical Specialist
          </h1>
          <p className="text-gray-600 mb-4">
            Donec commodo arcu porttitor neque convallis tincidunt. Proin
            viverra consectetur odio, a imperdiet turpis malesuada eu. Maecenas
            quis turpis a nisl pulvinar convallis vitae sed metus.
          </p>
          <p className="text-gray-600">
            Aliquam eget porttitor erat. Cras lacinia sit amet elit eu accumsan.
            Vestibulum auctor nec metus a sodales. Proin dapibus sem vel ipsum
            accumsan congue.
          </p>
        </div>

        {/* Image with Play Button */}
        <div className="relative">
          <img
            src="/doctor-video.jpg" // replace with your image
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

      {/* Service Overview */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Service Overview</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          varius turpis porttitor, tincidunt leo vel, euismod neque. Maecenas
          facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex,
          vitae suscipit metus pellentesque non. Aenean tincidunt posuere quam
          non vestibulum.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Etiam blandit felis justo, vel vulputate enim vulputate vulputate</li>
          <li>
            Orci varius natoque penatibus et magnis dis parturient montes
          </li>
          <li>
            Maecenas vitae lectus a orci tristique sollicitudin non sed nisi
          </li>
          <li>
            Nullam elit ligula, sodales sed mauris in, cursus porttitor est
          </li>
        </ul>
      </div>

      {/* Advantages & Health Care Plans */}
      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Advantages</h2>
          <p className="text-gray-600 mb-4">
            Donec commodo arcu porttitor neque convallis tincidunt. Proin
            viverra consectetur odio, a imperdiet turpis malesuada eu.
          </p>
          <p className="text-gray-600">
            Nullam placerat, tellus eu eleifend ultricies, turpis augue rutrum
            justo, ut molestie purus lacus ut magna.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Health Care Plans</h2>
          <p className="text-gray-600">
            Cras lacinia sit amet elit eu accumsan. Vestibulum auctor nec metus
            a sodales. Proin dapibus sem vel ipsum accumsan congue. Quisque
            laoreet orci diam, non tincidunt massa finibus nec.
          </p>
        </div>
      </div>
    </div>
    <FAQSection/>
    <AppointmentForm/>
    </>
  );
};

export default ServiceDetail;
