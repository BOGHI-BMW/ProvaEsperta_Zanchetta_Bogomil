"use client";

import React from "react";

const AlboPretorio = () => {
  return (
    <div className="bg-white text-black px-6 md:px-16 py-10 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm mb-6 text-gray-600">
        <span className="font-bold text-black">Home</span> &nbsp;›&nbsp;
        <span className="text-gray-400">I.P.A.B. informa</span> &nbsp;›&nbsp;
        <span className="text-gray-700">Albo pretorio</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">Albo pretorio</h1>

      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <div className="grid grid-cols-4 w-full font-semibold text-sm text-black border-b-2 border-black pb-2">
          <div>Numero pubblicazione</div>
          <div>Numero atto</div>
          <div className="flex items-center gap-1">
            <span>▼</span> Data inizio
          </div>
          <div>Data fine</div>
        </div>
        <div className="flex gap-2 ml-4">
          <button className="px-3 py-1 border text-sm rounded bg-gray-100 hover:bg-gray-200">
            🔍 Cerca
          </button>
          <button className="px-3 py-1 border text-sm rounded bg-gray-100 hover:bg-gray-200">
            🗃️ Storico
          </button>
        </div>
      </div>

      {/* Empty state */}
      <div className="w-full bg-gray-100 py-4 px-4 border border-gray-200 text-black text-sm">
        Nessuna pubblicazione estratta
      </div>

      {/* Blue info box */}
      <div className="bg-blue-100 text-sm text-black px-4 py-3 mt-6 rounded border border-blue-200">
        <p>
          Per leggere i file firmati digitalmente (estensione <code>.p7m</code>) è necessario aver installato il
          software <a href="#" className="text-blue-700 underline">Dike</a> (download)<br />
          Istruzioni per l'apertura di un file con firma digitale
        </p>
      </div>
    </div>
  );
};

export default AlboPretorio;
