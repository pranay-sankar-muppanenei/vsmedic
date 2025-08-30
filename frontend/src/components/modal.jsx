import { useState } from "react";
import { Link } from "react-router-dom";
export default function PlansSection({ plans }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formData.address.trim())
      newErrors.address = "Address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Booking successful for ${selectedPlan.name} plan 🎉`);
      setSelectedPlan(null);
      setFormData({ name: "", phone: "", address: "" });
      setErrors({});
    }
  };

  return (
    <section className="py-16 max-w-6xl mx-auto px-6 text-center">
      {/* Heading */}
      <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
        Health Care Plans
      </p>
      <h2 className="text-4xl text-gray-900 mt-2">
        Choose from Specialised Wellness Packages
      </h2>
      <p className="text-gray-600 mt-4 mb-10">
        Designed for every stage of motherhood and holistic wellness.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm 
                       transition-all duration-300 flex flex-col justify-between
                       hover:border-[#4B771E] hover:shadow-lg hover:shadow-[#4B771E]/30 hover:scale-[1.03]"
          >
            {/* Plan Info */}
            <div>
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-[#4B771E] text-2xl font-semibold mt-2">
                {plan.price}
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => setSelectedPlan(plan)}
              className="mt-6 bg-[#4B771E] text-white py-2 px-6 rounded-full 
                         transition-all duration-300 border border-transparent
                         hover:bg-white hover:text-[#4B771E] hover:border-[#4B771E] 
                         hover:shadow-lg hover:shadow-[#4B771E]/30"
            >
              Enroll Now
            </button>
            <p className="text-xs text-gray-500 mt-2">
              *Terms and Conditions apply
            </p>
          </div>
        ))}
      </div>

      {/* Full-width custom plan box */}
      <div className="mt-12 mb-12 border border-gray-200 py-6 rounded-lg w-full flex justify-center items-center">
        <p className="text-gray-700 text-lg">
          Need a customised wellness plan?{" "}
          <Link to="/contact"  onClick={() => window.scrollTo(0, 0)}  className="text-[#4B771E] font-semibold hover:underline">
            Let&apos;s Talk!
          </Link>
        </p>
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-[#4B771E] text-2xl"
              onClick={() => setSelectedPlan(null)}
            >
              &times;
            </button>

            {/* Modal Heading */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Book {selectedPlan.name} Plan
            </h2>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#4B771E]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#4B771E]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  rows={3}
                  className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 ${
                    errors.address
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#4B771E]"
                  }`}
                ></textarea>
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#4B771E] text-white py-2 rounded-full font-semibold 
                           transition-all duration-300 hover:bg-white hover:text-[#4B771E] 
                           hover:border hover:border-[#4B771E] hover:shadow-lg hover:shadow-[#4B771E]/30"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
