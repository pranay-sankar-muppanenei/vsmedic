import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import ConsultationFormModal from "../components/bookconsult";
import { FiChevronDown } from "react-icons/fi"; // added for dropdown arrow

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null); // For desktop dropdowns
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile menu toggle
  const [mobileDropdown, setMobileDropdown] = useState(null); // For mobile dropdowns

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    {
      name: "SERVICES",
      path: "/services",
      dropdown: [
        { name: "SrajanWomenWellness", path: "/srajan" },
        { name: "MultiSpeciality OPD's", path: "/opd" },
        { name: "Singla Slimming Center", path: "/singla" },
      ],
    },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="bg-[#f5f5fd] py-4 border-b border-gray-200 relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-4 border-r border-gray-300 pr-6"
        >
          <img
            src="/logo.png"
            alt="Meddic Logo"
            className="h-[50px] w-[200px] object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.path}
                className="relative flex items-center"
                onMouseEnter={() => setShowDropdown(link.name)}
                onMouseLeave={() => setShowDropdown(null)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#4B771E] font-bold flex items-center gap-1"
                      : "text-gray-500 hover:text-[#4B771E] transition flex items-center gap-1"
                  }
                >
                  {link.name}
                  {/* Dropdown Arrow */}
                  <FiChevronDown
                    className={`transform transition-transform duration-300 ${
                      showDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </NavLink>

                {/* Desktop Dropdown */}
            {showDropdown === link.name && (
  <div
    className="absolute left-0 top-1 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-gray-200
               z-50 overflow-hidden animate-fadeIn scale-95 origin-top transition-transform duration-200"
  >
    {link.dropdown.map((item, i) => (
      <React.Fragment key={item.path}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "block px-5 py-3 text-[#4B771E] text-md font-semibold text-sm bg-[#f0fdf4] transition-colors"
              : "block px-5 py-3 text-gray-700 text-md hover:text-[#4B771E] hover:bg-gray-50 text-sm transition-all duration-150"
          }
        >
          {item.name}
        </NavLink>
        {i !== link.dropdown.length - 1 && (
          <hr className="border-gray-200 mx-4" />
        )}
      </React.Fragment>
    ))}
  </div>
)}

              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4B771E] font-bold"
                    : "text-gray-500 hover:text-[#4B771E] transition"
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-6">
        <a href="tel:+919876543210" className="flex items-center space-x-2 hover:underline">
  <FiPhoneCall className="text-[#4B771E] ml-3 text-lg" />
  <span className="hidden lg:inline text-sm font-semibold text-black">
    Emergency Call
  </span>
</a>

          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-[#4B771E] hover:bg-[#3a5f17] text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg shadow-[0_0_20px_rgba(75,119,30,0.4)] transform hover:scale-105 transition-all duration-200"
          >
            Appointment
          </div>
          <ConsultationFormModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute left-0 w-full z-50">
          <div className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.path}>
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === link.name ? null : link.name
                      )
                    }
                    className="flex justify-between items-center w-full text-left text-gray-700 font-medium"
                  >
                    {link.name}
                    <FiChevronDown
                      className={`transform transition-transform duration-300 ${
                        mobileDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdown === link.name && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-gray-600 hover:text-[#4B771E] text-sm"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 font-medium hover:text-[#4B771E]"
                >
                  {link.name}
                </NavLink>
              )
            )}

            {/* Mobile Actions */}
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                <FiPhoneCall className="text-[#4B771E] text-lg" />
                <span className="text-sm font-semibold text-black">
                  Emergency Call
                </span>
              </div>
              <NavLink
                to="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#4B771E] hover:bg-[#3a5f17] text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg shadow-[0_0_20px_rgba(75,119,30,0.4)] text-center"
              >
                Appointment
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
