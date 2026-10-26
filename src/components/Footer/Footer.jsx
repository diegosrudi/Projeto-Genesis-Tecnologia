import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Coluna 1: Marca e Resumo */}
        <div className={styles.brandCol}>
          <h3 className={styles.brandTitle}>Genesis Tecnologia</h3>
          <p className={styles.brandDescription}>
            Assistência técnica focada em microeletrônica, recuperação de placas, 
            manutenção preventiva e consultoria em hardware.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className={styles.navCol}>
          <h4 className={styles.colTitle}>Navegação</h4>
          <ul className={styles.navList}>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </div>

        {/* Coluna 3: Atendimento */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Atendimento</h4>
          <p className={styles.schedule}>Segunda a Sexta: 08h às 18h</p>
          <p className={styles.support}>
            Atendimento com agendamento e suporte via WhatsApp.
          </p>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className={styles.copyright}>
        <p>© 2026 Genesis Tecnologia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}