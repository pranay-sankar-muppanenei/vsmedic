import { FiArrowRight, FiActivity, FiUser, FiSearch } from "react-icons/fi";

const services = [
  {
    icon: <FiActivity className="text-indigo-600 text-4xl" />,
    title: "Multispeciality OPDs",
    description:
      "Jaipur’s leading specialists in Cardiology, Orthopaedics, Neurology, Gynaecology, and more — all under one roof, with minimal waiting.",
    cta: "Book an OPD Slot",
  },
  {
    icon: <FiUser className="text-indigo-600 text-4xl" />,
    title: "SRAJAN Women Wellness",
    description:
      "Garbh Sanskar, prenatal yoga, postnatal recovery, lactation planning, and authentic Ayurveda therapies — guided personally by Dr Anuradha Saraswat.",
    cta: "View Motherhood Programs",
  },
  {
    icon: <FiSearch className="text-indigo-600 text-4xl" />,
    title: "Singla Slimming Centre",
    description:
      "Doctor-led slimming & body transformation programs that deliver visible, safe, and lasting results — without crash diets or unsafe gimmicks.",
    cta: "Start Your Slimming Journey",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f9f9ff] py-16 h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-md font-semibold text-indigo-600 tracking-widest uppercase">
          Our Services
        </p>
        <h2 className="text-4xl text-gray-900 mt-2 leading-tight">
          Amazing Medical Facilities Just for You
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 
                         transition-transform duration-300 hover:scale-[1.05] hover:shadow-lg hover:border-indigo-300 
                         flex flex-col items-center text-center"
            >
              {/* Icon container */}
              <div className="bg-indigo-50 w-20 h-20 flex items-center justify-center rounded-full mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[14px] mt-2 leading-relaxed">
                {service.description}
              </p>

              {/* CTA button */}
              <button className="mt-4 flex items-center gap-2 text-indigo-600 hover:gap-3 transition-all">
                {service.cta} <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
