"use client";

import CriarConta from "./criarconta";
import EsqueciSenha from "./esqueciasenha";
import { useState } from "react";

interface EntrarProps {
  onClose: () => void;
}

export default function Entrar({ onClose }: EntrarProps) {
  const [mostrarCriarConta, setMostrarCriarConta] = useState(false);
  const [mostrarEsqueciaSenha, setMostrarEsqueciaSenha] = useState(false);

  if (mostrarCriarConta) {
    return <CriarConta onClose={onClose} />;
  }

   if (mostrarEsqueciaSenha) {
    return <EsqueciSenha onClose={onClose} />;
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
              src="entrar.png"
              alt="Imagem de entrada"
              className="max-w-full h-auto"
            />
          </div>

          {/* Formulário */}
          <div className="w-1x2">
            <h2 className="text-5xl font-extrabold text-orange-950 mb-2">
              Bem vindo de volta!
            </h2>
            <form className="space-y-4 pr-10">
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
            <div className="flex justify-center pt-3 text-sm pr-10">
              <p className="pr-1">Ainda não tem conta?</p>
              <button
                onClick={() => setMostrarCriarConta(true)}
                className="text-teal-600 no-underline hover:underline"
              >
                Criar conta
              </button>
            </div>

            {/* Link para esqueci a senha */}
            <div className="flex justify-center text-sm pb-10 pr-10">
              <button
                onClick={() => setMostrarEsqueciaSenha(true)}
                className="text-teal-600 no-underline hover:underline"
              >
                Esqueceu a senha?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
