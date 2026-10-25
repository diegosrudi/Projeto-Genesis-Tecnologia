import styles from "./Navbar.module.css"

export default function Navbar() {
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
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaButton}
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  )
}