"use client";

import Entrar from "./entrar";
import { useState } from "react";

interface EntrarProps {
  onClose: () => void;
}

export default function EsqueciSenha({ onClose }: EntrarProps) {
  const [mostrarEntrar, setMostrarEntrar] = useState(false);
  const [mostrarEsqueciaSenha, setMostrarEsqueciaSenha] = useState(false);
  
  if (mostrarEntrar) {
    return <Entrar onClose={onClose} />;
  }

  if (mostrarEsqueciaSenha) {
    return <EsqueciSenha onClose={onClose} />;
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
          <img src="img-esqueciasenha.png" alt="Imagem tela de entrada" className="w-32" />
        </div>

        <h2 className="text-3xl font-extrabold mb-2 text-center text-orange-950">
          Recuperar senha
        </h2>

        <p className="text-center text-gray-500 mb-6">Insira seu endereço de email - você receberá  um link para recuperação de senha. </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition"
          >
            Enviar
          </button>
        </form>

        <div className="flex justify-center pt-3">
          <button
            onClick={() => setMostrarEntrar(true)}
            className="text-teal-600 underline hover:text-teal-800"
          >
            Voltar para tela de login
          </button>
        </div>

      </div>
    </div>
  );
}