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
      {/* Fundo com blur */}
      <div
        className="absolute inset-0 bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Conteúdo do popup */}
      <div className="relative z-10 bg-white rounded-lg p-8 pt-10 max-w-4xl w-full shadow-2xl shadow-teal-700"> 
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-3xl hover:text-red-500"
        >
          &times;
        </button>

        {/* Logo no topo esquerdo */}
        <div className="absolute top-5 left-15">
          <img src="estoka-cabecalho.png" alt="Estoka Logo" className="w-40" />
        </div>

        {/* Corpo do modal com imagem e formulário lado a lado */}
        <div className="flex gap-8">
          {/* Imagem abaixo do logo */}
          <div className="pt-18 mt-w-1/2 flex justify-center items-start">
            <img
              src="img-criarconta.png"
              alt="Imagem de entrada"
              className="max-w-full h-auto"
            />
          </div>

          {/* Formulário */}
          <div className="w-1x2">
            <h2 className="text-5xl font-extrabold text-orange-950 mb-2 pl-5">
              Criar uma conta
            </h2>
            
            <form className="space-y-4 pr-10">
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
              <div className="flex">
                <div className="pr-3">
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
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition"
              >
                Entrar
              </button>
            </form>

            {/* Link para criar conta */}
            <div className="flex justify-center pt-3 text-sm pb-10 pr-10">
              <p className="pr-1">Já tem uma conta?</p>
              <button
                onClick={() => setMostrarEntrar(true)}
                className="text-teal-600 no-underline hover:underline"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}