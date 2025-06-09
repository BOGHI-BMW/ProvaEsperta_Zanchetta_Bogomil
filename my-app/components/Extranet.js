"use client";

import React from "react";

const Extranet = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f0] px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-light text-black border-b border-black pb-2 mb-6">
          Accedi alla extranet
        </h2>

        <form className="space-y-6">
          {/* Utente */}
          <div>
            <label className="block text-black font-bold mb-1">Utente</label>
            <input
              type="text"
              placeholder="Login"
              className="w-full border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-black font-bold mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none"
            />
          </div>

          {/* Rif. pratica */}
          <div>
            <label className="block text-black font-bold mb-1">Rif. pratica</label>
            <input
              type="text"
              placeholder="Riferimento pratica"
              className="w-full border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none"
            />
          </div>

          {/* Bottone */}
          <button
            type="submit"
            className="w-full bg-[#1d1f21] text-white font-bold py-3 uppercase tracking-wider"
          >
            Accedi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Extranet;
