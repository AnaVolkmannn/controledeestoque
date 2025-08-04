"use client";

import CriarConta from "./criarconta";
import { useState } from "react";

interface EntrarProps {
  onClose: () => void;
}

export default function Entrar({ onClose }: EntrarProps) {
  const [mostrarCriarConta, setMostrarCriarConta] = useState(false);

  if (mostrarCriarConta) {
    return <CriarConta onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg p-8 w-full max-w-md shadow-lg z-10">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-3xl hover:text-red-500"
        >
          &times;
        </button>

        <img src="estoka-cabecalho.png" alt="Cabeçalho Estoka" className="w-60 mx-auto" />

        <div className="flex justify-center my-4">
          <img src="img-criarconta.png" alt="Imagem tela de entrada" className="w-32" />
        </div>

        <h2 className="text-3xl font-extrabold mb-6 text-center text-orange-950">
          Entrar na sua conta
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition"
          >
            Entrar
          </button>
        </form>

        <div className="flex justify-center pt-3">
          <p className="pr-1">Não tem uma conta?</p>
          <button
            onClick={() => setMostrarCriarConta(true)}
            className="text-teal-600 underline hover:text-teal-800"
          >
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}