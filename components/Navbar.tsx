"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar bar – glass effect */}
      <div className="bg-gray-50/70 backdrop-blur-xl border-b border-gray-200/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo – made bolder & more premium */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-black tracking-[-0.04em] text-gray-950 flex items-baseline gap-0.5"
          >
            Brin
            <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-br from-gray-700 to-gray-500 bg-clip-text text-transparent">
              ova
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {["Services", "About", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-gray-700 font-medium text-base lg:text-lg transition-all duration-300 hover:text-gray-900 group"
              >
                {item}
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-gray-900 rounded-full transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-7 h-6 relative flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "rotate-45 translate-y-1.5 w-5/6" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-75" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-45 -translate-y-1.5 w-5/6" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu – clean, full-width slide down */}
      <div
        className={`md:hidden bg-gray-50/95 backdrop-blur-lg border-b border-gray-200/40 overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 py-6 shadow-lg"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-5 text-lg font-medium">
          {["Services", "About", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-900 transition-colors py-2.5 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
