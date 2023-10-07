import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        {/* Register and Sign-in links on the left */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {/* Add your custom icon here */}
            <path
              fillRule="evenodd"
              d="M10 0a10 10 0 0110 10c0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8z"
            />
          </svg>
          <span className="text-white text-lg font-semibold">MyLogo</span>
        </div>

        {/* Middle navigation links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-4`}
        >
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Right-side logo or icon */}
        <div className="md:flex md:items-center md:space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Sign In
          </a>
        </div>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 9a1 1 0 112 0v6a1 1 0 11-2 0V9zm5-6a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm7 0a1 1 0 10-2 0v12a1 1 0 102 0V4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
