'use client'
import Link from 'next/link' // adicione no topo
import { useState } from 'react'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [hidden, setHidden] = useState(false)

  if (hidden) return null

  return (
    <aside
      className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}
    >
      <button className={styles.toggle} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '→' : '←'}
      </button>
      <button className={styles.hide} onClick={() => setHidden(true)}>
        ✕
      </button>

      {!collapsed && (
        <nav className={styles.nav}>
          <h2>Estoka</h2>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/cadastro">Cadastro</a></li>
            <li><a href="#">Inventário</a></li>
            <li><a href="#">Relatórios</a></li>
          </ul>
        </nav>
      )}
    </aside>
  )
}
