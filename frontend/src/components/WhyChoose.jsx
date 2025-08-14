// components/WhyChooseVsMediHub.jsx
import { FaUserMd, FaHospitalAlt, FaLeaf, FaClock } from "react-icons/fa";

export default function WhyChooseVsMediHub() {
  const items = [
    {
      icon: <FaUserMd className="text-3xl" />,
      title: "Top Specialists in One Place",
      desc: "From gynaecology to neurology.",
    },
    {
      icon: <FaHospitalAlt className="text-3xl" />,
      title: "Premium Facility",
      desc: "Private, calm, and centrally located.",
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Integrated Wellness",
      desc: "Modern medicine + authentic Ayurveda.",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Minimal Waiting, Maximum Care",
      desc: "Appointment-first system.",
    },
  ];

  return (
    <section className="bg-[#f7f8ff] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Small section title */}
        <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
          Why Choose Us?
        </p>

        {/* Main headline */}
        <h2 className="text-2xl md:text-3xl  text-gray-900 mt-2 leading-snug">
          Because You Deserve Healthcare That Feels Personal
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                group rounded-2xl bg-white p-6 shadow-sm border border-gray-100
                transition-transform duration-300 ease-out
                hover:scale-[1.05] hover:shadow-[0_0_35px_rgba(75,119,30,0.45)]
                hover:border-[#4B771E] flex flex-col items-center text-center
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14 h-14 rounded-xl flex items-center justify-center
                  bg-green-50 text-[#4B771E] mb-4
                  group-hover:bg-[#4B771E] group-hover:text-white transition-colors
                "
              >
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
