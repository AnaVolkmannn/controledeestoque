"use client";

import Entrar from "./entrar";
import { useState } from "react";

interface CriarContaProps {
  onClose: () => void;
}

export default function CriarConta({ onClose }: CriarContaProps) {
  const [mostrarEntrar, setMostrarEntrar] = useState(false);

  if (mostrarEntrar) {
    return <Entrar onClose={onClose} />;
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
          Criar uma conta
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
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
          <div>
            <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700">
              Repita a senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition"
          >
            Criar conta
          </button>
        </form>

        <div className="flex justify-center pt-3">
          <p className="pr-1">Já tem uma conta?</p>
          <button
            onClick={() => setMostrarEntrar(true)}
            className="text-teal-600 underline hover:text-teal-800"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}