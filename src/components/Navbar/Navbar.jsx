import styles from "./Navbar.module.css"
import { useTheme } from "../../context/ThemeContext"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          Genesis <span>Tecnologia</span>
        </div>

        <ul className={styles.navLinks}>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#diagnostico">Diagnóstico</a></li>
          <li><a href="#rastreio">Consultar OS</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <div className={styles.actionsContainer}>
          <button
            type="button"
            className={styles.themeToggleBtn}
            onClick={toggleTheme}
            aria-label="Alternar tema claro e escuro"
            title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaButton}
        >
          Falar no WhatsApp
        </a>
      </div>
     </div>
    </header>
  )
}