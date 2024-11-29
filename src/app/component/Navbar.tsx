'use client'

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4 px-6 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wider">
          My<span className="text-yellow-300">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Home
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            About
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Services
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Contact
          </li>
        </ul>

        {/* Burger Menu Button (Mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none transition duration-300 transform hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 flex flex-col items-center space-y-4 text-lg bg-gradient-to-b from-indigo-600 to-blue-600 p-4 rounded-lg shadow-lg">
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Home
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            About
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Services
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
}
