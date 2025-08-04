import Sidebar from "@/components/Sidebar"

export default function Dashboard() {

  return (
    <div className="flex">
          <Sidebar />

      <header>
        <h1>Estoka</h1>
      </header>
      
      <main>
        <section>
          <div>
            <h1>Bem-vindo ao Estoka</h1>
            <p>Essa é a sua área principal de trabalho.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Estoka</p>
      </footer>
    </div>
    
  )
}