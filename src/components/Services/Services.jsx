import ServiceCard from "./ServiceCard"
import styles from "./Services.module.css"

const servicesData = [
  {
    id: 1,
    icon: "⚡",
    title: "Reparo Eletrônico de Placas",
    description: "Diagnóstico avançado com osciloscópio e multímetro. Reparo de circuitos de alimentação, curto-circuito em linhas de alta e substituição de CIs e MOSFETs.",
    tags: ["Solda SMD", "Microeletrônica", "Análise de Esquemas"]
  },
  {
    id: 2,
    icon: "💻",
    title: "Manutenção de Notebooks",
    description: "Reconstrução mecânica estrutural de carcaças e dobradiças danificadas, troca de telas, teclados, upgrades para SSD NVMe e refrigeração térmica de alta performance.",
    tags: ["Reforço Estrutural", "Pasta Térmica de Prata", "Troca de Telas"]
  },
  {
    id: 3,
    icon: "🖥️",
    title: "Desktops & Workstations",
    description: "Montagem, cable management profissional, otimização de fluxo de ar, testes de estresse para estabilidade e upgrades sob medida para produtividade ou uso pesado.",
    tags: ["Setup Customizado", "Benchmarking", "Manutenção Preventiva"]
  },
  {
    id: 4,
    icon: "🖨️",
    title: "Impressoras & Mecânica Fina",
    description: "Desentupimento de cabeçotes de impressão tanque de tinta, substituição de tracionadores de papel, almofadas absorventes e reset operacional completo.",
    tags: ["EcoTank", "Mecânica de Precisão", "Calibração"]
  },
  {
    id: 5,
    icon: "🌾",
    title: "Equipamentos Especiais & GPS",
    description: "Manutenção eletrônica em antenas e módulos de GPS agrícola, troca de baterias internas especiais (ex: TL-4986), recuperação de trilhas e fontes de alimentação dedicadas.",
    tags: ["GPS Agrícola", "Baterias Especiais", "Circuitos Embarcados"]
  },
  {
    id: 6,
    icon: "🛡️",
    title: "Restauração de Sistemas & Dados",
    description: "Clonagem precisa de discos legados para SSDs modernos, eliminação de malwares profundos, configuração de virtualização para sistemas legados e backup preventivo.",
    tags: ["Clonagem Bit-a-Bit", "Virtualização", "Recuperação de SO"]
  }
]

export default function Services() {
  return (
    <section id="servicos" className={styles.servicesSection}>
      <header className={styles.header}>
        <span className={styles.tag}>O que fazemos</span>
        <h2 className={styles.title}>Especialidades Técnicas</h2>
        <p className={styles.description}>
          Atendimento direto em bancada com foco em reparo de componentes reais, sem trocas desnecessárias de placas inteiras.
        </p>
      </header>

      <div className={styles.grid}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            tags={service.tags}
          />
        ))}
      </div>
    </section>
  )
}