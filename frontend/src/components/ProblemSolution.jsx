import { FaClinicMedical, FaUserCheck, FaHospitalUser } from "react-icons/fa";

export default function ProblemSolution() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Problems & Solution */}
        <div>
          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl  text-gray-900 leading-snug mb-6">
            Tired of juggling multiple clinics, long waits, and disconnected care?
          </h2>

          {/* Problems List */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <FaClinicMedical className="text-[#4B771E] text-3xl flex-shrink-0" />
              <p className="text-lg text-gray-700 font-medium">Fragmented healthcare experience ?</p>
            </div>
            <div className="flex items-start gap-4">
              <FaUserCheck className="text-[#4B771E] text-3xl flex-shrink-0" />
              <p className="text-lg text-gray-700 font-medium">Lack of personalised attention ?</p>
            </div>
            <div className="flex items-start gap-4">
              <FaHospitalUser className="text-[#4B771E] text-3xl flex-shrink-0" />
              <p className="text-lg text-gray-700 font-medium">Stressful hospital visits ?</p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-md">
            <p className="text-lg text-gray-800 font-semibold mb-4">
              At <span className="text-[#4B771E] font-bold">VS MediHUB</span>, we’ve integrated Jaipur’s top doctors, premium OPD, and holistic wellness care — all in one serene space.
            </p>
            <button className="bg-[#4B771E] hover:bg-[#3b5f18] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all">
              Discover How We Care →
            </button>
          </div>
        </div>

        {/* Right Side - Clinic Image */}
        <div className="relative">
          <img
            src="/visit.jpg"
            alt="VS MediHUB Clinic"
            className="rounded-2xl shadow-lg object-cover w-full h-[500px] brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent rounded-2xl"></div>
        </div>

      </div>
    </section>
  );
}
