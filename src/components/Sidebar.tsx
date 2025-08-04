'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [hidden, setHidden] = useState(false)

  if (hidden) return null

  return (
    <aside
      className={`
        bg-teal-500 text-white h-screen transition-all duration-300 p-4 relative
        ${collapsed ? 'w-[50px]' : 'w-[220px]'}
        overflow-hidden
      `}
    >
      {/* Botão de colapsar */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="bg-none border-none text-white cursor-pointer text-base mb-4"
      >
        {collapsed ? '→' : '←'}
      </button>

      {/* Botão de esconder completamente */}
      <button
        onClick={() => setHidden(true)}
        className="bg-none border-none text-white cursor-pointer text-base mb-4"
      >
        ✕
      </button>

      {/* Navegação */}
      {!collapsed && (
        <nav>
          <h2 className="text-xl mb-4 font-semibold">Estoka</h2>
          <ul className="list-none p-0 space-y-2">
            <li>
              <Link href="/dashboard" className="text-white no-underline hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/cadastro" className="text-white no-underline hover:underline">
                Cadastro
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white no-underline hover:underline">
                Inventário
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white no-underline hover:underline">
                Relatórios
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </aside>
  )
}