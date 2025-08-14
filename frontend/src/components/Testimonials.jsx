import { useState, useEffect } from "react";

const testimonials = [
  {
    type: "video",
    src: "/videos/mother-journey.mp4",
    text: "After my postnatal yoga sessions here, I feel healthier and more confident than ever.",
    name: "Anjali Sharma",
    role: "New Mother",
  },
  {
    type: "image",
    before: "/sd1.jpg",
    after: "/sd2.jpg",
    text: "I lost 12kg in 4 months — safely, without crash diets. My energy levels are through the roof!",
    name: "Ravi Mehta",
    role: "Slimming Client",
  },
  {
    type: "video",
    src: "/videos/chronic-patient.mp4",
    text: "After years of joint pain, I can finally walk without discomfort. This care changed my life.",
    name: "Sunita Gupta",
    role: "Chronic Patient",
  },
];

export default function PatientJourneys() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true); // fade-in
      }, 500); // fade-out duration
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="bg-[#f9f9ff] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-md font-semibold text-[#4B771E] tracking-widest uppercase">
          Patient Journeys & Social Proof
        </p>
        <h2 className="text-4xl text-gray-900 mt-2 leading-tight">
          Real Stories. Real Transformations.
        </h2>

        {/* Testimonial Card */}
        <div
          className={`mt-12 bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-8 
                      transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {/* Media */}
          <div className="flex-1">
            {t.type === "video" ? (
              <video
                src={t.src}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg w-full h-auto shadow-md"
              />
            ) : (
              <div className="flex gap-4 justify-center">
                <img
                  src={t.before}
                  alt="Before"
                  className="w-40 h-40 object-cover rounded-lg shadow-md"
                />
                <img
                  src={t.after}
                  alt="After"
                  className="w-40 h-40 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>

          {/* Text */}
          <div className="flex-1 text-left">
            <p className="text-gray-600 italic">"{t.text}"</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-[#4B771E] text-sm">{t.role}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-8 px-6 py-3 bg-[#4B771E] text-white rounded-full shadow-md hover:bg-[#3b5f18] transition">
          See More Success Stories
        </button>
      </div>
    </section>
  );
}
