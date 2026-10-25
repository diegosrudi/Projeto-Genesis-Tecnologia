import styles from "./About.module.css"

export default function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.container}>
        <div>
          <span className={styles.tag}>Compromisso com o Cliente</span>
          <h2 className={styles.title}>Diagnóstico transparente e reparo estrutural em nível de componente</h2>
          <p className={styles.text}>
            Em vez de condenar placas e sugerir a troca cara de conjuntos inteiros, investigamos a causa raiz do defeito eletrônico na bancada.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <div className={styles.featureText}>
                <strong>Análise Esquemática e Osciloscópio</strong>
                <p>Identificação precisa de linhas em curto e tensões ausentes.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <div className={styles.featureText}>
                <strong>Reforço Mecânico Definitivo</strong>
                <p>Recuperação de dobradiças e carcaças com reforço para evitar quebras reincidentes.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <div className={styles.featureText}>
                <strong>Sem Taxas Ocultas</strong>
                <p>Orçamento claro antes de qualquer intervenção física no aparelho.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardHighlight}>
          <p className={styles.quote}>
            "A eletrônica e a informática de precisão dependem de rigor metódico: entender a física do circuito antes de ligar o ferro de solda."
          </p>
          <div className={styles.quoteAuthor}>
            <span className={styles.authorName}>Genesis Tecnologia</span>
            <span className={styles.authorRole}>Bancada Especializada em Hardware</span>
          </div>
        </div>
      </div>
    </section>
  )
}