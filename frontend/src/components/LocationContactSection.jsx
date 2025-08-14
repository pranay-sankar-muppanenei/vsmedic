import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function LocationContactSection() {
  return (
    <section className="bg-[#f9f9ff] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* Text Section */}
        <div>
          <p className="text-sm sm:text-md font-semibold text-[#4B771E] tracking-widest uppercase">
            Location & Contact
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mt-2 leading-tight">
            Visit VS MediHUB
          </h2>
          <p className="text-gray-600 mt-4 flex items-start gap-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-[#4B771E] mt-1 flex-shrink-0" />
            Nirman Nagar, Jaipur – Centrally located, easy access & private parking.
          </p>
          <p className="text-gray-600 mt-2 flex items-start gap-2 text-sm sm:text-base">
            🕒 Timings: Mon–Sat, 9 am–1 pm & 5 pm–8 pm.
          </p>

          {/* Quick Links */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-4">
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-[#4B771E] text-white px-4 py-2 rounded-full hover:bg-green-700 hover:scale-105 transition text-sm sm:text-base"
            >
              <FaWhatsapp /> WhatsApp Us Now
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-full hover:bg-[#4B771E] hover:text-white hover:scale-105 transition text-sm sm:text-base"
            >
              <FaPhoneAlt /> Call for Appointment
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 hover:scale-105 transition text-sm sm:text-base"
            >
              <FaMapMarkerAlt /> Get Directions
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="/visit.jpg"
            alt="VS MediHUB Location"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
