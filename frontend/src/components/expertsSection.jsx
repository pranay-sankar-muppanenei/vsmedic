import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const experts = [
  {
    name: "Dr Vibha Chaturvedi Sharma",
    specialty: "Renowned Gynecologist & Laparoscopic Surgeon",
    description:
      "Expert in women's healthcare, minimally invasive surgeries, infertility, and high-risk pregnancies. Committed to personalized care with empathy and compassion.",
    image: "/vibha.png", // ✅ you can replace with actual image if available
  },
  {
    name: "Dr Nitin Negi",
    specialty: "Consultant Urologist",
    description:
      "Skilled in treating urinary tract issues, kidney stones, prostate health, and male reproductive concerns. Dedicated to latest techniques and patient-centered solutions.",
    image: "/nitin.png",
  },
  {
    name: "Dr Amit Bengani Jain",
    specialty: "General Surgeon",
    description:
      "Specialist in advanced surgical procedures, including laparoscopic surgeries. Focused on patient safety, quick recovery, and comprehensive surgical care.",
    image: "/amit.png",
  },
  {
    name: "Dr Surabhi Mathur",
    specialty: "Consultant Psychiatrist",
    description:
      "Proficient in managing mental health issues such as depression, anxiety, and stress. Committed to holistic and confidential psychiatric treatment.",
    image: "/shurbhi.png",
  },
  {
    name: "Dr Vaibhav Mathur",
    specialty: "Consultant Neurologist",
    description:
      "Expert in diagnosing and treating brain, spine, nerve, and muscle disorders. Known for integrated neurological care and innovative treatment approaches.",
    image: "/vaibhav.png",
  },
  {
    name: "Dr Manish Vaishnav",
    specialty: "Joint Replacement Surgeon",
    description:
      "Specializes in joint replacement, arthroscopy, and sports injuries. Dedicated to helping patients regain mobility and live pain-free lives.",
    image: "/manish.png",
  },
  {
    name: "Dr Anuradha Saraswat",
    specialty: "Women’s Wellness & Garbh Sanskar Specialist",
    description:
      "Promotes healthy pregnancies and safe deliveries. Emphasizes holistic healthcare, positivity, and traditional values for women and unborn child wellbeing.",
    image: "/sars.png",
  },
  {
    name: "Dr Kush Bhagat",
    specialty: "Cardiologist & Electrophysiologist",
    description:
      "Expert in heart health, arrhythmias, cardiac interventions, and preventive cardiology. Known for precision, advanced diagnostics, and compassionate cardiac care.",
    image: "/kush.png",
  },
  {
  name: "Dr Esha Swarnkar",
  specialty: "Ayurvedic Doctor | Nadi Vaidya Specialist",
  description:
    "Dynamic Ayurvedic doctor at VS Medihub, Jaipur, specializing in Nadi Vaidya since 2019. Combines traditional Ayurvedic treatments with holistic health practices. Holds a BAMS degree from Sri Sri College of Ayurvedic Science and Research Centre, Bangalore.",
  image: "/esha.png", // replace with actual image path
}
];


export default function ExpertsSection() {
  return (
    <section className="bg-[#f9f9ff] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
          Meet Our Experts
        </p>
        <h2 className="text-4xl text-gray-900 mt-2 leading-tight">
          Your Health, In Expert Hands
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm p-4 flex flex-col h-full"
            >
              {/* Image container with overlay */}
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-[300px] object-cover rounded-lg transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-transparent bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full hover:bg-[#4B771E] hover:text-white transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full hover:bg-[#4B771E] hover:text-white transition"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full hover:bg-[#4B771E] hover:text-white transition"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

              {/* Text Section */}
              <div className="flex flex-col flex-grow mt-4">
                <div className="flex flex-col  gap-2">
                  <h3 className="text-base font-semibold text-gray-900">
                    {expert.name}
                  </h3>
                  <p className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-medium">
                    {expert.specialty}
                  </p>
                </div>

                <p className="text-gray-600 text-sm text-left mt-3 flex-grow">
                  {expert.description}
                </p>

                {/* CTA */}
                <button className="mt-4 px-4 py-2 bg-[#4B771E] text-white rounded-full hover:bg-[#3b5f18] transition self-center">
                  Book with {expert.name.split(" ")[1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
