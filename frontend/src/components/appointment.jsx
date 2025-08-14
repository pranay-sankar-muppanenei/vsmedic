import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: null,
    time: null,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: null,
        time: null,
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <section className="bg-[#f9faff] min-h-screen flex flex-col md:flex-row">
      {/* Left - Form */}
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
        <h5 className="text-[#4B771E] tracking-widest font-semibold text-sm mb-2">
          APPOINTMENT
        </h5>
        <h1 className="text-3xl md:text-4xl  mb-4">
          Book Your Appointment
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block font-semibold text-sm mb-1">
              Your Name <span className="text-[#4B771E]">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg p-3 focus:border-[#4B771E] focus:ring-2 focus:ring-[#4B771E]/50 outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-semibold text-sm mb-1">
                Phone <span className="text-[#4B771E]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (234) 567 890"
                className={`w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:border-[#4B771E] focus:ring-2 focus:ring-[#4B771E]/50 outline-none`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-semibold text-sm mb-1">
                Email <span className="text-[#4B771E]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:border-[#4B771E] focus:ring-2 focus:ring-[#4B771E]/50 outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Date + Time */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-semibold text-sm mb-1">
                Date <span className="text-[#4B771E]">*</span>
              </label>
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select date"
                className={`w-full border ${
                  errors.date ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:border-[#4B771E] focus:ring-2 focus:ring-[#4B771E]/50 outline-none`}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-semibold text-sm mb-1">
                Time <span className="text-[#4B771E]">*</span>
              </label>
              <DatePicker
                selected={formData.time}
                onChange={(time) => setFormData({ ...formData, time })}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Select time"
                className={`w-full border ${
                  errors.time ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:border-[#4B771E] focus:ring-2 focus:ring-[#4B771E]/50 outline-none`}
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold text-sm mb-1">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hello there!"
              className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4B771E] focus:ring-2 focus:ring-[#4B771E]/50 outline-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#4B771E] hover:bg-[#3a5f17] text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
          >
            Make Appointment
          </button>
        </form>
      </div>

      {/* Right - Image */}
      <div className="flex-1">
        <img
          src="/app.jpg"
          alt="Doctor on Phone"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default AppointmentForm;
