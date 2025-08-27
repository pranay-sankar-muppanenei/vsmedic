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
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#4B771E] mb-6 tracking-wide">
        Our Contact
      </h1>

      {/* Image */}
      <div className="w-full flex justify-center mb-10 px-4">
        <img
          src="/contact.jpg"
          alt="Contact"
          className="w-full h-[250px] sm:h-[350px] lg:h-[400px] max-w-6xl rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Contact Section */}
      <div className="container max-w-6xl mx-auto px-4 sm:px-7 lg:px-10 flex flex-col lg:flex-row gap-10">
        {/* Left Column - Contact Info */}
        <div className="flex-1">
          <p className="text-[#4B771E] font-semibold uppercase tracking-wide text-sm">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl mt-2 mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
          We’re here to help you with appointments, queries, and all your healthcare needs. Reach out to us using the details below or simply fill out the contact form.

          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-5">
            {/* Email */}
            <div className="flex items-start mb-4 w-full sm:w-auto">
              <span className="text-[#4B771E] border border-gray-300 p-3 rounded-full mr-4 text-lg shadow-lg flex-shrink-0">
                <FaEnvelope />
              </span>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm sm:text-base">info@vsenterprise.in</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start mb-4 w-full sm:w-auto">
              <span className="text-[#4B771E] border border-gray-300 p-3 rounded-full mr-4 text-lg shadow-lg flex-shrink-0">
                <FaPhoneAlt />
              </span>
              <div>
                <h4 className="font-semibold">Our Number</h4>
                <p className="text-sm sm:text-base">+91 72404 45656</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start mb-4 w-full sm:w-auto">
              <span className="text-[#4B771E] border border-gray-300 p-3 rounded-full mr-4 text-lg shadow-lg flex-shrink-0">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm sm:text-base">
                  28, First Floor, Shiv Shakti Nagar, Nirman Nagar, Jaipur 302019

                </p>
              </div>
            </div>
          </div>

          <hr className="border-gray-200 my-4" />

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-[#4B771E] hover:bg-[#E8F0E5] transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-5 sm:p-6 border border-gray-100">
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Your Name *
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4B771E]"
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
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4B771E]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4B771E]"
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
                className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4B771E]"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#4B771E] hover:bg-[#3E6618] text-white px-6 py-2 rounded-full shadow-md transition text-sm sm:text-base"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>

      {/* FAQ & Reuse sections */}
      <div className="mt-10 px-4 sm:px-0">
 <div className="relative mx-auto w-3/4 pb-[30%] rounded-xl shadow-lg overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6060.757384247391!2d75.74793494015962!3d26.8841343566565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57ef64eb809%3A0xc1c945b52484215c!2sVS%20MediHUB!5e1!3m2!1sen!2sin!4v1756282946412!5m2!1sen!2sin"
    className="absolute top-0 left-0 w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


        <FAQSection />
        <Reuse />
      </div>
    </div>
  );
};

export default Contact;
