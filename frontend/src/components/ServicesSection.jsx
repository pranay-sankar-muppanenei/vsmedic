import { FiArrowRight, FiActivity, FiUser, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "opd",
    icon: <FiActivity className="text-[#4B771E] text-4xl" />,
    title: "Multispeciality OPDs",
    description:
      "Jaipur’s leading specialists in Cardiology, Orthopaedics, Neurology, Gynaecology, and more — all under one roof, with minimal waiting.",
    cta: "Book an OPD Slot",
  },
  {
    id: "women-wellness",
    icon: <FiUser className="text-[#4B771E] text-4xl" />,
    title: "SRAJAN Women Wellness",
    description:
      "Garbh Sanskar, prenatal yoga, postnatal recovery, lactation planning, and authentic Ayurveda therapies.",
    cta: "View Motherhood Programs",
  },
  {
    id: "slimming",
    icon: <FiSearch className="text-[#4B771E] text-4xl" />,
    title: "Singla Slimming Centre",
    description:
      "Doctor-led slimming & body transformation programs that deliver visible, safe, and lasting results.",
    cta: "Start Your Slimming Journey",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f9f9ff] py-16 mb-2">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
          Our Services
        </p>
        <h2 className="text-4xl text-gray-900 mt-2 leading-tight">
          Amazing Medical Facilities Just for You
        </h2>

        <div className="mt-12  grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="cursor-pointer bg-white p-8 rounded-xl shadow-sm border border-gray-200 
                         transition-transform duration-300 hover:scale-[1.05] hover:shadow-lg hover:border-[#4B771E] 
                         flex flex-col items-center text-center"
            >
              <div className="bg-[#eaf3e3] w-20 h-20 flex items-center justify-center rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[14px] mt-2 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-4 flex items-center gap-2 text-[#4B771E] hover:gap-3 transition-all">
                {service.cta} <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
