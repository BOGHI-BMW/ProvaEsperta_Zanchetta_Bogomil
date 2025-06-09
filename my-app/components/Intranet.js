"use client";

import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#f5f5f0] p-8">
        <h2 className="text-2xl font-normal border-b border-black pb-2 mb-8 text-black">
          Accedi alla intranet
        </h2>

        <form className="space-y-6 text-black">
          {/* Cognome */}
          <div>
            <label htmlFor="surname" className="block font-bold mb-1 text-black">
              Cognome
            </label>
            <input
              type="text"
              id="surname"
              placeholder="Cognome"
              className="w-full border border-gray-400 px-3 py-3 placeholder-gray-500 text-black"
            />
          </div>

          {/* Nome */}
          <div>
            <label htmlFor="name" className="block font-bold mb-1 text-black">
              Nome
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nome"
              className="w-full border border-gray-400 px-3 py-3 placeholder-gray-500 text-black"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block font-bold mb-1 text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border border-gray-400 px-3 py-3 placeholder-gray-500 text-black"
            />
          </div>

          {/* Bottone di accesso */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#1a1c1e] text-white py-3 font-bold hover:opacity-90"
            >
              ACCEDI
            </button>
          </div>
        </form>

        {/* Link Cambia password */}
        <div className="text-right mt-4">
          <a href="#" className="text-black text-sm hover:underline">
            Cambia password
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
