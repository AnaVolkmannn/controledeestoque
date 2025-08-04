export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho com imagem e botões no canto superior direito */}
      <header className="relative top-3 left-6">
        <img src="estoka-cabecalhov2.png" alt="Cabeçalho Estoka" className="w-60" />
        <div className="absolute top-3 right-25 flex gap-3">
          <button className="text-teal-500 border-2 border-teal-500 px-4 py-3 rounded hover:bg-gray-300 transition">
            Criar conta
          </button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
            Entrar
          </button>
        </div>
      </header>

      {/* Conteúdo principal com texto e imagem lado a lado */}
      <main className="flex-grow">
        <section className="pl-30 pt-15">
          <div className="flex">
            {/* Texto à esquerda */}
            <div className="max-w-2xl pt-10">
              <h1 className="text-7xl font-extrabold mb-3 text-orange-950">Seu estoque sempre em mãos de maneira fácil e intuitiva.</h1>
              <p className="text-gray-950">Se você procura um controle de estoque online que organiza os produtos, registra movimentações, emite relatórios e facilita a gestão em tempo real...</p>
              <p className="text-gray-950 mt-5">Conte com a gente!</p>
              <div className="absolute flex mt-4">
                <button className="bg-teal-500 text-2xl text-white px-4 py-2 rounded hover:bg-teal-600 transition">Começar a usar</button>
              </div>
            </div>

            {/* Imagem à direita */}
            <div>
              <img src="img-home.png" alt="Imagem Home" className="w-170 mr-10"/>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-teal-500 text-center py-3 text-gray-100">
        <p>© 2025 Estoka</p>
      </footer>
    </div>
  );
}
