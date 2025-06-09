"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar({ menuItems = [], menuDropdowns = {} }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownClick = (dropdownKey) => {
    setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey);
  };

  return (
    <>
      {/* Barra superiore Regione Veneto */}
      <div className="bg-gray-200 text-black text-sm font-semibold px-4 py-2 w-full fixed top-0 left-0 z-50 text-center justify-center">
        Regione Veneto
      </div>

      {/* Navbar principale */}
      <nav className="bg-gradient-to-r from-yellow-500 to-emerald-500 backdrop-blur-lg w-full flex items-center justify-between px-6 py-8 sm:px-8 lg:px-12 fixed top-[36px] z-40 shadow-2xl">
        {/* Logo e scritte statiche */}

        <div className="hidden lg:flex space-x-6 text-black font-semibold text-sm tracking-wide">
          <a href="#">Homepage</a>
          <a href="">SERVIZI</a>
          <a href="#">PERCHE' L'IPAB</a>
          <a href="#">I.P.A.B. informa</a>
          <a href="#">Sostienici</a>
          <a href="#">Accessi riservati</a>
          <a href="#">Extranet</a>
          <a href="#">PRIVACY</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-all duration-300`}
        >
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-8 mt-16">
            <a
              href="#"
              className="text-white text-xl font-medium hover:text-blue-300"
            >
              Homepage
            </a>
            <a
              href=""
              className="text-white text-xl font-medium hover:text-blue-300"
            >
              SERVIZI
            </a>
            <a
              href="#"
              className="text-white text-xl font-medium hover:text-blue-300"
            >
              PERCHE' L'IPAB
            </a>
            <a
              href="#"
              className="text-white text-xl font-medium hover:text-blue-300"
            >
              I.P.A.B. informa
            </a>
            <a
              href="#"
              className="text-white text-xl font-medium hover:text-blue-300"
            >
              Sostienici
            </a>
            <a
              href="#"
              className="text-white text-xl font-medium hover:text-blue-300"
            >
              Accessi riservati
            </a>
            <a
              href="#"
              className="text-white text-xl font-medium hover:text-blue-300"
            >
              Extranet
            </a>
            <a
              href="#"
              className="text-white text-xl font-medium hover:text-blue-300"
            >
              PRIVACY
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
