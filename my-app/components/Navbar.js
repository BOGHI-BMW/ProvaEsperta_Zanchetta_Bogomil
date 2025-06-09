import React, { useState } from "react";

export default function Navbar({
  lingue,
  emailProfessionale,
  telefonoProfessionale,
  emailEscursioni,
  telefonoEscursioni,
  logoSrc,
  vociMenu,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Barra superiore con lingue e contatti */}
      <div className="bg-[#99006E] text-white text-sm py-2 flex justify-end px-6 z-20 relative">
        <div className="space-x-2 flex items-center">
          {lingue.map((lingua, index) => (
            <span key={index} className="cursor-pointer hover:underline">
              {lingua}
            </span>
          ))}
        </div>
        <div className="text-right whitespace-nowrap ml-6">
          Servizi Professionali:{" "}
          <a href={`mailto:${emailProfessionale}`} className="underline">
            {emailProfessionale}
          </a>{" "}
          - {telefonoProfessionale} | Escursioni Giornaliere:{" "}
          <a href={`mailto:${emailEscursioni}`} className="underline">
            {emailEscursioni}
          </a>{" "}
          / {telefonoEscursioni}
        </div>
      </div>

      {/* Navbar principale con logo e menu */}
      <nav
        className="bg-white shadow-md py-4 px-6 flex items-center justify-between relative z-10"
        aria-label="Navigazione principale"
      >
        <img src={logoSrc} alt="Logo Doge di Venezia" className="h-20 w-20" />

        {/* Icona del menu per mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#99006E] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu desktop */}
        <ul className="hidden lg:flex space-x-6 ml-auto">
          {vociMenu.map((voce) => (
            <li key={voce.nome}>
              <a
                href={voce.href}
                className={`hover:text-[#99006E] ${
                  voce.nome === "Home Page"
                    ? "text-[#99006E] font-bold"
                    : voce.attivo
                    ? "text-[#99006E] font-bold"
                    : "text-gray-700"
                }`}
              >
                {voce.nome}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu mobile (apre da destra e occupa tutta la pagina) */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-full h-full bg-white shadow-md transform transition-transform z-30 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 left-4 text-[#99006E] text-2xl"
        >
          &times;
        </button>
        <ul className="py-4 px-6 space-y-4">
          {vociMenu.map((voce) => (
            <li key={voce.nome}>
              <a
                href={voce.href}
                className={`block text-center hover:text-[#99006E] ${
                  voce.nome === "Home Page"
                    ? "text-[#99006E] font-bold"
                    : voce.attivo
                    ? "text-[#99006E] font-bold"
                    : "text-gray-700"
                }`}
              >
                {voce.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}