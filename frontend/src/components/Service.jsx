// src/pages/Service.jsx
import React from "react";
import ServicesSection from "./ServicesSection";
import PatientJourneys from "./Testimonials";
import FAQSection from "./faq";
import FullScreenCards from "./full";
const packages = [
  {
    price: 400,
    title: "Basic Package",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
    features: [
      "Free Consultation",
      "Full Echocardiogram",
      "Nutritional Counseling",
      "24/7 Full Support",
    ],
  },
  {
    price: 520,
    title: "Regular Package",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
    features: [
      "Free Consultation",
      "Full Echocardiogram",
      "Nutritional Counseling",
      "24/7 Full Support",
    ],
  },
  {
    price: 640,
    title: "Premium Package",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
    features: [
      "Free Consultation",
      "Full Echocardiogram",
      "Nutritional Counseling",
      "24/7 Full Support",
    ],
  },
];

export default function Service() {
  return (
    <section className="bg-white py-16">
        <h1 className="text-center text-3xl font-bold mb-6">Our Services</h1>

      {/* Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/a.jpg"
          alt="Contact"
          className="w-full h-[500px] max-w-6xl rounded-lg shadow-md"
        />
      </div>
      <ServicesSection/>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-md font-semibold text-indigo-600 tracking-widest uppercase">
          Packages
        </p>
        <h2 className="text-4xl  text-gray-900 mt-2">
          Affordable Checkups Packages
        </h2>

        {/* Cards */}
        <div className="mt-12  grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm 
                         transition-all duration-300 flex flex-col justify-between
                         hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-200 hover:scale-[1.03]"
            >
              {/* Price */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  ${pkg.price}{" "}
                  <span className="text-base font-normal text-gray-500">
                    / Package
                  </span>
                </h3>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {pkg.title}
                </p>
                <p className="text-gray-500 mt-1">{pkg.description}</p>

                {/* Divider */}
                <hr className="my-4" />

                {/* Features */}
                <p className="font-semibold text-gray-900 mb-2">
                  What's included?
                </p>
                <ul className="text-gray-600 text-sm space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-indigo-600">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className="mt-6 bg-indigo-600 text-white py-2 px-6 rounded-full 
                           transition-all duration-300 border border-transparent
                           hover:bg-white hover:text-indigo-600 hover:border-indigo-600 
                           hover:shadow-lg hover:shadow-indigo-200"
              >
                Get Started
              </button>
              <p className="text-xs text-gray-500 mt-2">
                *Terms and Conditions apply
              </p>
            </div>
          ))}
        </div>

        {/* Full-width box with custom pricing text */}
        <div className="mt-12 mb-12 border border-gray-200 py-6 rounded-lg w-full flex justify-center items-center">
          <p className="text-gray-700 text-lg">
            Need a custom pricing plan?{" "}
            <a
              href="#"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Let&apos;s Talk!
            </a>
          </p>
        </div>
      </div>
      <FullScreenCards/>
      <PatientJourneys/>
        <FAQSection/>
    </section>
  );
}
