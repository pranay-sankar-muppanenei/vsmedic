import React from "react";
import FAQSection from "./faq";
import Reuse from "./reuse";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-[#4B771E] mb-6">
        Our Contact
      </h1>

      {/* Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/contact.jpg"
          alt="Contact"
          className="w-full h-[400px] max-w-6xl rounded-lg shadow-md"
        />
      </div>

      {/* Contact Section */}
      <div className="container max-w-6xl mx-auto px-7 flex flex-col lg:flex-row gap-10">
        {/* Left Column - Contact Info */}
        <div className="flex-1">
          <p className="text-[#4B771E] font-semibold uppercase tracking-wide">
            Contact
          </p>
          <h2 className="text-3xl  mt-2 mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-5">
            {/* Email */}
            <div className="flex items-start mb-6">
              <span className="text-[#4B771E] text-200  border border-gray-300 p-3 rounded-full mr-4 text-lg shadow-lg">
                <FaEnvelope />
              </span>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>meddic.info@mail.com</p>
                <p>example@mails.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start mb-6">
              <span className="text-[#4B771E]  border border-gray-300 text-200  p-3 rounded-full mr-4  text-lg shadow-lg">
                <FaPhoneAlt />
              </span>
              <div>
                <h4 className="font-semibold">Our Number</h4>
                <p>+1 (234) 567 890 00</p>
            
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start mb-6">
              <span className="text-[#4B771E] border border-gray-300 text-200 p-3 rounded-full mr-4 text-lg shadow-lg">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>034 Erling Knolls, Kenny, Dakota 8902</p>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            {[
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-[#4B771E] text-200 hover:bg-[#E8F0E5] transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 border border-gray-100">
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Your Name *
              </label>
              <input
                type="text"
                placeholder="Jhon Doe"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4B771E]"
              />
            </div>

            {/* Phone & Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">
                  Phone *
                </label>
                <input
                  type="text"
                  placeholder="+1 (234) 567 890"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4B771E]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4B771E]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Hello there!"
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4B771E]"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#4B771E] hover:bg-[#3E6618] text-white px-6 py-2 rounded-full shadow-md transition"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>

      <FAQSection />
      <Reuse />
    </div>
  );
};

export default Contact;
