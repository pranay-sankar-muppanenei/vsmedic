

import HeroSection from './heroSection';
import AboutSection from './aboutSection';
import ServicesSection from './ServicesSection';
import WhyChooseVsMediHub from './WhyChoose';
import ExpertsSection from './expertsSection';
import LocationContactSection from './LocationContactSection';
import ProblemSolution from './ProblemSolution';
import PatientJourneys  from './Testimonials'; 


function Home() {


  return (
    <>
      <HeroSection/>
        <ProblemSolution/>
      <AboutSection/>
      <WhyChooseVsMediHub/>
      <ServicesSection/>
      <ExpertsSection/>
      <section className="bg-white py-16 px-6">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left: eBook visual */}
    <div className="flex justify-center">
      <img
        src="/images/motherhood-guide-mockup.png"
        alt="Motherhood Wellness Guide"
        className="w-full max-w-sm shadow-lg rounded-lg"
      />
    </div>

    {/* Right: Text + form */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Download Your Free <span className="text-pink-600">Motherhood Wellness Guide</span>
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        7 Days to a <span className="italic">Healthier, Happier Pregnancy</span>.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="tel"
          placeholder="Your WhatsApp"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Download Now
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-4">
        You’ll be redirected to our <span className="font-semibold">Thank You</span> page with your booking prompt.
      </p>
    </div>
  </div>
</section>

      <PatientJourneys/>
      <LocationContactSection/>
      

      {/* Add other components or routes here */}
    </>
  )
}

export default Home
