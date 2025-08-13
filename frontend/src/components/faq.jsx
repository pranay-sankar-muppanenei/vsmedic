import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I make an appointment at Meddic?",
      answer:
        "You can make an appointment by calling our reception or booking online through our website.",
    },
    {
      question: "Do you have a pediatrician?",
      answer:
        "Yes, we have experienced pediatricians available for appointments.",
    },
    {
      question: "Does your place provide health insurance?",
      answer:
        "We work with several insurance providers. Please check with us for details.",
    },
    {
      question: "What payment methods do you provide?",
      answer:
        "We accept cash, credit/debit cards, and UPI payments.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center">
        
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="/visit.jpg"
            alt="Doctors"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Right FAQ */}
        <div className="flex-1">
          <p className="text-indigo-600 font-semibold uppercase tracking-wide">
            FAQs
          </p>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="bg-indigo-600 text-white w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {/* Animated Answer */}
                <div
                  className={`px-4 text-gray-600 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQSection;
