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
      {/* Fundo com blur */}
      <div
        className="absolute inset-0 bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Conteúdo do popup */}
      <div className="relative z-10 bg-white rounded-lg p-6 shadow-lg max-w-4xl w-full">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-3xl hover:text-red-500"
        >
          &times;
        </button>

        {/* Logo no topo esquerdo */}
        <div className="absolute top-4 left-4">
          <img src="estoka-cabecalho.png" alt="Estoka Logo" className="w-40" />
        </div>

        {/* Corpo do modal com imagem e formulário lado a lado */}
        <div className="mt-20 flex gap-8">
          {/* Imagem abaixo do logo */}
          <div className="w-1/2 flex justify-center items-start">
            <img
              src="entrar.png"
              alt="Imagem de entrada"
              className="max-w-full h-auto"
            />
          </div>

          {/* Formulário */}
          <div className="w-1/2">
            <h2 className="text-3xl font-extrabold text-orange-950 mb-6">
              Entrar na sua conta
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="senha"
                  className="block text-sm font-medium text-gray-700"
                >
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

            {/* Link para criar conta */}
            <div className="flex pt-3 text-sm">
              <p className="pr-1">Ainda não tem conta?</p>
              <button
                onClick={() => setMostrarCriarConta(true)}
                  // Aqui você chama a função que abre o popup de criar conta
                  // Pode ser passado via props se necessário
                className="text-teal-600 no-underline hover:underline"
              >
                Criar conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
