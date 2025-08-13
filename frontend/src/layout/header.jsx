import React from "react";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PAGES", path: "/pages" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="bg-[#f5f5fd] py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4 border-r border-gray-300 pr-6">
          <img src="/meddic.png" alt="Meddic Logo" className="h-12" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold"
                  : "text-gray-500 hover:text-black transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FiPhoneCall className="text-[#4d4dff] text-lg" />
            <span className="text-sm font-semibold text-black">
              Emergency Call
            </span>
          </div>
          <NavLink
            to="/appointment"
            className="bg-[#4d4dff] hover:bg-[#3a3add] text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] transform hover:scale-105 transition-all duration-200"
          >
            Appointment
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
