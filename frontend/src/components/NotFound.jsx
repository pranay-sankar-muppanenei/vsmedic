// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f6ff] text-center px-4">
      <h2 className="text-blue-500 font-medium tracking-widest text-sm mb-2">
        ERROR PAGE
      </h2>
      <h1 className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-200 drop-shadow-md leading-none">
        404
      </h1>
      <h3 className="text-2xl font-semibold text-gray-900 mt-4">
        Oops, page not found!
      </h3>
      <p className="text-gray-500 mt-2 max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-blue-300 hover:shadow-md"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
