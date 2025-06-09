"use client";

import React from "react";

const data = [
  {
    tipo: "Delibera Di Consiglio",
    numero: 19,
    data: "10/10/2024",
    oggetto: "PRESA D'ATTO DIMISSIONI CONSIGLIERE MORETTO ROBERTA",
  },
  {
    tipo: "Delibera Di Consiglio",
    numero: 18,
    data: "27/08/2024",
    oggetto: "INCARICO DI SUPPORTO AL SEGRETARIO DIRETTORE",
  },
  {
    tipo: "Delibera Di Consiglio",
    numero: 17,
    data: "27/08/2024",
    oggetto: "PRESA D'ATTO DIMISSIONI CONSIGLIERE MIROGLIO CINZIA",
  },
  {
    tipo: "Delibera Di Consiglio",
    numero: 16,
    data: "15/07/2024",
    oggetto: "APPROVAZIONE DEL BILANCIO DI ESERCIZIO 2023 E RELATIVI ALLEGATI",
  },
  {
    tipo: "Delibera Di Consiglio",
    numero: 15,
    data: "17/04/2024",
    oggetto:
      'GESTIONE DEL SERVIZIO CENTRO DIURNO "ANCHISE": ULTERIORI DETERMINAZIONI.',
  },
];

const Delibere = () => {
  return (
    <div className="bg-white text-black px-6 md:px-16 py-10 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">Atti amministrativi</h1>
      <h2 className="text-2xl font-bold mb-8">Delibere</h2>

      {/* Search and CSV Buttons */}
      <div className="flex justify-end gap-2 mb-4">
        <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 text-sm">
          🔍 Cerca
        </button>
        <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 text-sm">
          🧾 CSV
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 font-semibold text-sm text-black border-b-2 border-black pb-2">
        <div className="flex items-center gap-1">⇅ Tipo atto</div>
        <div className="flex items-center gap-1">⇅ N.</div>
        <div className="flex items-center gap-1">⇅ Data</div>
        <div>Oggetto</div>
      </div>

      {/* Rows */}
      {data.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-4 py-3 px-1 text-sm ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <div>{row.tipo}</div>
          <div>{row.numero}</div>
          <div>{row.data}</div>
          <div>{row.oggetto}</div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-8 text-black">
        <button className="text-xl px-2">&#x276E;</button>
        <button className="w-10 h-10 bg-gray-300 rounded text-lg">1</button>
        <button className="w-10 h-10 hover:bg-gray-200 rounded">2</button>
        <button className="w-10 h-10 hover:bg-gray-200 rounded">3</button>
        <span className="text-xl">…</span>
        <button className="w-10 h-10 hover:bg-gray-200 rounded">25</button>
        <button className="text-xl px-2">&#x276F;</button>
      </div>
    </div>
  );
};

export default Delibere;
