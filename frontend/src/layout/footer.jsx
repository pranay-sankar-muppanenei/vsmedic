import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4B771E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">VS MediHUB</h2>
          <p className="mt-4 text-sm text-green-100">
            Providing trusted medical care with certified professionals and modern facilities.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Address & Contact */}
        <div>
          <h3 className="font-semibold text-lg">Address</h3>
          <p className="text-green-100 text-sm mt-2">
            Nirman Nagar, Jaipur – Centrally located, private parking available.
          </p>
          <h3 className="font-semibold text-lg mt-4">Contact</h3>
          <p className="text-green-100 text-sm mt-2">+91 98765 43210</p>
          <p className="text-green-100 text-sm">contact@vsmedihub.com</p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-lg">Explore</h3>
          <ul className="mt-2 space-y-2 text-sm text-green-100">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg">Resources</h3>
          <ul className="mt-2 space-y-2 text-sm text-green-100">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Press Files</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <h3 className="text-lg font-medium text-center">Subscribe to Our Newsletter</h3>
        <form className="mt-4 flex justify-center gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 bg-white py-2 rounded-full md:w-[300px] text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="border-t flex justify-between p-1 border-green-300 mt-8 py-4 text-center text-sm text-green-100">
        <p>© 2025 VS MediHUB – All rights reserved.</p>
        <p>Medical license & certifications displayed.</p>
        <p className="mt-1">
          Follow us on <a href="#" className="underline">Instagram</a> |{" "}
          <a href="#" className="underline">YouTube</a> |{" "}
          <a href="#" className="underline">Facebook</a>
        </p>
      </div>
    </footer>
  );
}
