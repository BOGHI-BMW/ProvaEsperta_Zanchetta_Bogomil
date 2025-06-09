"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 shadow-inner mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Contatti */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contatti</h3>
            <ul className="space-y-3 text-gray-800">
              <li><span className="font-semibold">Tel:</span> 0421 330807</li>
              <li><span className="font-semibold">PROTOCOLLO:</span> <a href="mailto:info@cdrmonumento.com" className="hover:underline">info@cdrmonumento.com</a></li>
              <li><span className="font-semibold">PRESIDENZA:</span> <a href="mailto:presidente@cdrmonumento.com" className="hover:underline">presidente@cdrmonumento.com</a></li>
              <li><span className="font-semibold">DIREZIONE:</span> <a href="mailto:direttore@cdrmonumento.com" className="hover:underline">direttore@cdrmonumento.com</a></li>
              <li><span className="font-semibold">CONTABILITA' E RETTE:</span> <a href="mailto:contabilita@cdrmonumento.com" className="hover:underline">contabilita@cdrmonumento.com</a></li>
              <li><span className="font-semibold">PEC:</span> <a href="mailto:cdrmonumento@halleypec.it" className="hover:underline">cdrmonumento@halleypec.it</a></li>
            </ul>
          </div>

          {/* Link Utili */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Link Utili</h3>
            <ul className="space-y-3 text-gray-800">
              <li><Link href="#" className="hover:underline">Chi siamo</Link></li>
              <li><Link href="#" className="hover:underline">Servizi</Link></li>
              <li><Link href="#" className="hover:underline">Contatti</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Orari */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Orari Ufficio</h3>
            <ul className="space-y-3 text-gray-800">
              <li>Lunedì - Venerdì: <span className="font-semibold">8:00 - 18:00</span></li>
              <li>Sabato: <span className="font-semibold">9:00 - 12:00</span></li>
              <li>Domenica: <span className="font-semibold">Chiuso</span></li>
            </ul>
          </div>

          {/* Missione */}
          <div>
            <h3 className="text-2xl font-bold mb-6">La Nostra Missione</h3>
            <p className="text-gray-800 leading-relaxed">
              Dedicati a offrire assistenza e cura di qualità, migliorando la
              vita dei nostri anziani con dignità e rispetto.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8 mt-8 text-center text-gray-600 text-sm">
          <p>© 2025 Halley Informatica. Tutti i diritti riservati. Halley EG 041433.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
