import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.badge}>
          <span>●</span> Manutenção & Reparo Especializado
        </div>

        <h1 className={styles.title}>
          Restaure a performance do seu equipamento com <span className={styles.highlight}>precisão técnica</span>.
        </h1>

        <p className={styles.subtitle}>
          Diagnóstico especializado em bancada, reparo eletrônico de placas-mãe, 
          soldagem SMD/BGA e manutenção preventiva e corretiva para notebooks, desktops e impressoras.
        </p>

        <div className={styles.actions}>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            Solicitar Diagnóstico
          </a>
          <a href="#servicos" className={styles.secondaryBtn}>
            Ver Especialidades
          </a>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>100%</span>
            <span className={styles.metricLabel}>Foco em Qualidade</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>Bancada</span>
            <span className={styles.metricLabel}>Equipada</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>Garantia</span>
            <span className={styles.metricLabel}>Em todos os reparos</span>
          </div>
        </div>
      </div>
    </section>
  )
}