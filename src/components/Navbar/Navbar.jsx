import { useState } from "react"
import styles from "./Navbar.module.css"

export default function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logótipo / Marca */}
        <a href="#inicio" className={styles.brand} onClick={closeMenu}>
          <span className={styles.brandAccent}>Genesis</span> Tecnologia
        </a>

        {/* Links Desktop */}
        <ul className={styles.navLinks}>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#diagnostico">Diagnóstico</a></li>
          <li><a href="#rastreio">Consultar OS</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        {/* Ações da direita: Botão de Tema e Botão Hambúrguer */}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            type="button"
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ""}`}
            onClick={toggleMenu}
            aria-label="Menu de navegação"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>

      {/* Gaveta / Menu Mobile */}
      <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ""}`}>
        <ul className={styles.mobileLinks}>
          <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
          <li><a href="#servicos" onClick={closeMenu}>Serviços</a></li>
          <li><a href="#diagnostico" onClick={closeMenu}>Diagnóstico</a></li>
          <li><a href="#rastreio" onClick={closeMenu}>Consultar OS</a></li>
          <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}