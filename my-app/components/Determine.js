"use client";

import React from "react";

const determine = [
  {
    unita: "DETERMINAZIONE",
    numero: 4,
    data: "29/03/2024",
    oggetto:
      "AFFIDAMENTO DIRETTO PER ELABORAZIONE CEDOLINI AMMINISTRATORI E ADEMPIMENTI OBBLIGATORI",
  },
  {
    unita: "DETERMINAZIONE",
    numero: 3,
    data: "29/03/2024",
    oggetto:
      "PROROGA DEL SERVIZIO DI ASSISTENZA SOCIALE PRESSO LO SPORTELLO ASSISTENTI FAMILIARI FI...",
  },
  {
    unita: "DETERMINAZIONE",
    numero: 2,
    data: "19/02/2024",
    oggetto:
      "PRESA D'ATTO DIFFIDA VIOLAZIONI FORMALI IN CUMULO MATERIALE",
  },
  {
    unita: "DETERMINAZIONE",
    numero: 1,
    data: "05/02/2024",
    oggetto:
      "AFFIDAMENTO DIRETTO PER RINNOVO CONTRATTO ANNUALE DI MANUTENZIONE ED ASSISTENZA...",
  },
  {
    unita: "DETERMINAZIONE",
    numero: 45,
    data: "21/12/2023",
    oggetto:
      "PROROGA DEL SERVIZIO DI ASSISTENZA SOCIALE PRESSO LO SPORTELLO ASSISTENTI FAMILIARI FI...",
  },
];

const Determine = () => {
  return (
    <div className="bg-white text-black px-6 md:px-16 py-10 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">Atti amministrativi</h1>
      <h2 className="text-2xl font-bold mb-8">Determine</h2>

      {/* Buttons */}
      <div className="flex justify-end gap-2 mb-4">
        <button className="px-3 py-1 border text-sm rounded bg-gray-100 hover:bg-gray-200">
          🔍 Cerca
        </button>
        <button className="px-3 py-1 border text-sm rounded bg-gray-100 hover:bg-gray-200">
          📄 CSV
        </button>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-4 font-semibold text-sm border-b-2 border-black pb-2 mb-1">
        <div className="flex items-center gap-1">⇅ Unità organizzativa</div>
        <div className="flex items-center gap-1">⇅ Reg.Gen.</div>
        <div className="flex items-center gap-1">⇅ Data Reg. Gen.</div>
        <div>Oggetto</div>
      </div>

      {/* Table rows */}
      {determine.map((item, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-4 text-sm py-3 px-2 ${
            idx % 2 === 0 ? "bg-gray-100" : "bg-white"
          } border-b border-gray-200`}
        >
          <div>{item.unita}</div>
          <div>{item.numero}</div>
          <div>{item.data}</div>
          <div className="truncate">{item.oggetto}</div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button className="text-xl text-black hover:text-gray-600">❮</button>
        <button className="bg-gray-300 px-4 py-2 rounded text-black font-medium">1</button>
        <button className="text-black hover:text-gray-700">2</button>
        <button className="text-black hover:text-gray-700">3</button>
        <span className="text-gray-400">…</span>
        <button className="text-black hover:text-gray-700">28</button>
        <button className="text-xl text-black hover:text-gray-600">❯</button>
      </div>
    </div>
  );
};

export default Determine;
