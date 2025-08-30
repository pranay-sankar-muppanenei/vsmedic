import React from "react";

const ConsultationFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Consultation Form
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-start text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-start text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full border rounded-lg text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block  text-start text-gray-700 mb-1">Address</label>
            <textarea
              rows="3"
              className="w-full border text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your address"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
          >
            Book Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationFormModal;
