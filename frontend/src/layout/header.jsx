import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(null); // null | "services" | "pages"

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    {
      name: "SERVICES",
      path: "/services",
      dropdown: [
        { name: "Services", path: "/services" },
        { name: "Service Detail", path: "/service-detail" },
      ],
    },
    {
      name: "PAGES",
      path: "/pages",
      dropdown: [
        { name: "Doctors", path: "/doctors" },
        { name: "Page 2", path: "/pages/page2" },
      ],
    },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="bg-[#f5f5fd] py-4 border-b border-gray-200 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4 border-r border-gray-300 pr-6">
          <img src="/logo.png" alt="Meddic Logo" className="h-[50px] w-[200px]" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => setShowDropdown(link.name)}
                onMouseLeave={() => setShowDropdown(null)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#4B771E] font-bold"
                      : "text-gray-500 hover:text-[#4B771E] transition"
                  }
                >
                  {link.name}
                </NavLink>

                {/* Dropdown */}
                {showDropdown === link.name && (
                  <div className="absolute top-2 left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50 p-4">
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "block text-[#4B771E] font-medium text-sm py-1"
                            : "block text-gray-600 hover:text-[#4B771E] text-sm py-1 transition"
                        }
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
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FiPhoneCall className="text-[#4B771E] text-lg" />
            <span className="text-sm font-semibold text-black">
              Emergency Call
            </span>
          </div>
          <NavLink
            to="/appointment"
            className="bg-[#4B771E] hover:bg-[#3a5f17] text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg shadow-[0_0_20px_rgba(75,119,30,0.4)] transform hover:scale-105 transition-all duration-200"
          >
            Appointment
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
