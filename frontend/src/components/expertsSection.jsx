import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const experts = [
  {
    name: "Dr Vibha Chaturvedi",
    specialty: "Renowned Gynecologist & Laparoscopic Surgeon",
    description:
      "Known for her precision, compassion, and international exposure in women’s healthcare.",
    image: "/sd2.jpg",
  },
  {
    name: "Dr Anuradha Saraswat",
    specialty: "Women Wellness & Garbh Sanskar Specialist",
    description:
      "Helping mothers enjoy safe pregnancies and complete postnatal recovery with holistic care.",
    image: "/sd4.jpg",
  },
  {
    name: "Dr Vibha Chaturvedi",
    specialty: "Renowned Gynecologist & Laparoscopic Surgeon",
    description:
      "Known for her precision, compassion, and international exposure in women’s healthcare.",
    image: "/sd1.jpg",
  },
  
];

export default function ExpertsSection() {
  return (
    <section className="bg-[#f9f9ff] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-md font-semibold text-indigo-600 tracking-widest uppercase">
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
                <div className="absolute inset-0  bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

              {/* Text Section */}
          <div className="flex flex-col flex-grow mt-4">
            <div className="flex items-center  gap-2 flex-wrap">
                <h3 className="text-base font-semibold text-gray-900">
                {expert.name}
                </h3>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-medium">
                {expert.specialty}
                </span>
            </div>

            <p className="text-gray-600 text-sm text-left mt-3 flex-grow">
                {expert.description}
            </p>

  {/* CTA */}
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition self-center">
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
