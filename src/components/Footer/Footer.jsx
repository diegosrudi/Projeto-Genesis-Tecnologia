import styles from "./Footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brandCol}>
          <h3>Genesis Tecnologia</h3>
          <p>
            Assistência técnica focada em microeletrônica, recuperação de placas, manutenção preventiva e consultoria em hardware.
          </p>
        </div>

        <div className={styles.linksCol}>
          <h4>Navegação</h4>
          <ul className={styles.linksList}>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h4>Atendimento</h4>
          <p className={styles.contactText}>Segunda a Sexta: 08h às 18h</p>
          <p className={styles.contactText}>Atendimento com agendamento e suporte via WhatsApp.</p>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {currentYear} Genesis Tecnologia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}