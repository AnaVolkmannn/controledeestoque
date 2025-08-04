"use client";

import { useState } from "react";
import Entrar from "@/components/entrar";
import CriarConta from "@/components/criarconta";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCriarConta, setShowCriarConta] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Camada com blur quando qualquer modal estiver ativo */}
      <div className={`${showLogin || showCriarConta ? "blur-sm" : ""} transition-all duration-300`}>
        {/* Cabeçalho */}
        <header className="relative top-3 left-6">
          <img src="estoka-cabecalhov2.png" alt="Cabeçalho Estoka" className="w-60" />
          <div className="absolute top-3 right-25 flex gap-3">
            <button
              onClick={() => setShowCriarConta(true)}
              className="text-teal-500 border-2 border-teal-500 px-4 py-3 rounded hover:bg-gray-300 transition"
            >
              Criar conta
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
            >
              Entrar
            </button>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="flex-grow">
          <section className="pl-30 pt-15">
            <div className="flex">
              <div className="max-w-2xl pt-10">
                <h1 className="text-7xl font-extrabold mb-3 text-orange-950">
                  Seu estoque sempre em mãos de maneira fácil e intuitiva.
                </h1>
                <p className="text-gray-950">
                  Se você procura um controle de estoque online que organiza os produtos, registra movimentações, emite relatórios e facilita a gestão em tempo real...
                </p>
                <p className="text-gray-950 mt-5">Conte com a gente!</p>
                <div className="absolute flex mt-4">
                  <button className="bg-teal-500 text-2xl text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                    Começar a usar
                  </button>
                </div>
              </div>
              <div>
                <img src="img-home.png" alt="Imagem Home" className="w-170 mr-10" />
              </div>
            </div>
          </section>
        </main>

        {/* Rodapé */}
        <footer className="bg-teal-500 text-center py-3 text-gray-100">
          <p>© 2025 Estoka</p>
        </footer>
      </div>

      {/* Modais */}
      {showLogin && <Entrar onClose={() => setShowLogin(false)} />}
      {showCriarConta && <CriarConta onClose={() => setShowCriarConta(false)} />}
    </div>
  );
}