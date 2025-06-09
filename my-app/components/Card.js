"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaPhone,
  FaThumbtack,
  FaCompass,
  FaPaypal,
} from "react-icons/fa";

export default function Card({ titolo, descrizione, immagine }) {
  return (
    <div className="container mx-auto mt-20 px-4">
      <Head>
        <title>{titolo}</title>
      </Head>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Card a sinistra */}
        <div className="bg-white rounded-xl shadow-lg w-full lg:max-w-3xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="w-full h-[200px] relative">
              <Image
                src={immagine}
                alt="Immagine escursione"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-2">{titolo}</h2>
              <p className="text-gray-700 text-sm">{descrizione}</p>
            </div>
          </div>
        </div>

        {/* Bottoni a destra */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-sm">
          <button className="flex items-center justify-center gap-2 bg-sky-300 text-black text-lg font-bold py-6 rounded shadow">
            <FaCompass /> Amministrazione trasparente
          </button>
          <button className="flex items-center justify-center gap-2 bg-sky-300 text-black text-lg font-bold py-6 rounded shadow">
            <FaThumbtack /> Albo pretorio online
          </button>
          <button className="flex items-center justify-center gap-2 bg-sky-300 text-black text-lg font-bold py-6 rounded shadow">
            <FaPhone /> Contatti
          </button>
          <button className="flex items-center justify-center gap-2 bg-sky-300 text-black text-lg font-bold py-6 rounded shadow">
            <FaPaypal /> pagoPa
          </button>
        </div>
      </div>
    </div>
  );
}
