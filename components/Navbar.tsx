"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/95 backdrop-blur-md border-b border-gray-100 shadow-sm px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-gray-700 text-2xl font-light flex items-center gap-2"
        >
          <span className="text-white bg-gray-900 px-2 py-1 rounded-md font-light">
            Digital
          </span>
          Dynamo
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 lg:gap-12 text-gray-600 text-lg font-medium">
          <Link
            href="/services"
            className="hover:text-black transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="hover:text-black transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-black transition-colors duration-200"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="hover:text-black transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 pt-4 pb-6 px-4 space-y-6 bg-green-50/95 backdrop-blur-md border-t border-green-100">
          <Link
            href="/services"
            className="block text-center text-lg font-medium text-gray-700 hover:text-black py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block text-center text-lg font-medium text-gray-700 hover:text-black py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="block text-center text-lg font-medium text-gray-700 hover:text-black py-2"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="block text-center text-lg font-medium text-gray-700 hover:text-black py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
