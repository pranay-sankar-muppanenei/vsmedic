import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "I personally like the place and its services. The staff here is really helpful...",
    name: "Akansha Negi",
    role: "Google Review",
    image: "/priyanka.png", // 👈 add image
  },
  {
    text: "The Clinic is well managed with quality staff. All the tests and checkups were well coordinated. I am very happy with the hospitality, caring staff. And Speacially Doctor Vibha Mam is very amazing. She is very Supportive and Friendly.",
    name: "Sanjay Yadav",
    role: "Google Review",
    image: "/sanjay.png",
  },
  {
    text: "Best place where I have found the best gyno in jaipur.Thanks to the team for good and easy communication.",
    name: "Ekta Sharma",
    role: "Google Review",
    image: "/nishta.png",
  },
  {
    text: "Dr vibha best doctor & I have ever experienced.. he is so cool and friendly and vs medi hub staff very nice and supportive",
    name: "Abhay Agarwal",
    role: "Google Review",
    image: "/abhay.png",
  },
  {
    text: "I cannot express enough how grateful I am for Dr. Vibha Chaturvedi and the exceptional care my wife received throughout her pregnancy. From the very first appointment, she made us feel comfortable, supported, and listened to. Every step of the way, she provided clear guidance, answered all of our questions, and made sure we were fully informed about options. The professionalism, kindness, and concern they showed truly made the pregnancy journey much smoother. I would highly recommend Dr. Vibha to anyone looking for a knowledgeable, caring, and compassionate doctor. Thank you for everything!",
    name: "Prateek Vyas",
    role: "Google Review",
    image: "/prateek.png",
  },
  {
    text: "Nice and excellent experience with vsmedihub.(dr.vibha chaturvedi )is good giano doctor.staff is very good ,thanks for staff Suman Choudhary ji Good atmosphere",
    name: "Anita Sharma",
    role: "Google Review",
    image: "/reviews/anita.jpg",
  },
  {
    text: "Dr Vibha is Good doctor. He is very simple and gentle in his behavior. He will give sufficient time to each patient. He studies the patient and disease meticulously. We can freely interact with the doctor.VS medi hub staff very nice and supportive.",
    name: "Jitendra Kumar",
    role: "Google Review",
    image: "/reviews/jitendra.jpg",
  },
  {
    text: "Professional behavior of staff and experienced doctor was very helpful...",
    name: "Manish Singh",
    role: "Google Review",
    image: "/manish1.png",
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
      }, 500);
    }, 4000); // auto-switch every 4s
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
  {/* Reviewer Image */}
  <div className="w-24 h-24 flex-shrink-0">
    <img
      src={t.image || "/reviews/default.jpg"} // fallback image
      alt={t.name}
      className="w-24 h-24 object-cover rounded-full shadow-md"
    />
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


      
      </div>
    </section>
  );
}
