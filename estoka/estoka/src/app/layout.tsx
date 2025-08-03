import './globals.css'
import { Gabarito } from 'next/font/google'
import Sidebar from '../components/Sidebar'

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Estoka',
  description: 'Sistema de controle de estoque',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={gabarito.className}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <main style={{ flex: 1, padding: '2rem' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
