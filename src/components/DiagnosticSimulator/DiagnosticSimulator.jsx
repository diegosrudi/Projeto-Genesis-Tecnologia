import { useState } from "react"
import styles from "./DiagnosticSimulator.module.css"

const equipmentOptions = [
  { id: "notebook", label: "💻 Notebook" },
  { id: "desktop", label: "🖥️ Desktop / PC" },
  { id: "impressora", label: "🖨️ Impressora" },
  { id: "especial", label: "🌾 GPS Agrícola / Placa" }
]

const issuesByEquipment = {
  notebook: [
    {
      id: "nao_liga",
      label: "Não liga / Sem sinal",
      complexity: "Alta (Bancada eletrônica)",
      analysis: "Pode envolver curto em linhas de alimentação primária (19V), defeito no circuito de Charger ou BIOS corrompida. Requer análise esquemática."
    },
    {
      id: "carcaca",
      label: "Carcaça ou Dobradiça quebrada",
      complexity: "Média (Mecânica e estrutural)",
      analysis: "Reconstrução com reforço estrutural para travar as porcas de fixação sem risco de partir novamente a moldura da tela."
    },
    {
      id: "aquecimento",
      label: "Superaquecimento / Desligando",
      complexity: "Básica a Média",
      analysis: "Substituição preventiva de pasta térmica ressecada por composto de alta condutividade e desobstrução das aletas do dissipador."
    }
  ],
  desktop: [
    {
      id: "tela_azul",
      label: "Tela azul recorrente / Travamentos",
      complexity: "Média (Diagnóstico de hardware/dados)",
      analysis: "Varredura profunda em setores do disco, teste de estresse de memória RAM e integridade dos trilhos de tensão da fonte."
    },
    {
      id: "lentidao",
      label: "Inicialização e abertura muito lentas",
      complexity: "Básica (Upgrade recomendado)",
      analysis: "Migração e clonagem do sistema operacional para SSD NVMe ou SATA, preservando todos os arquivos e programas sem formatação do zero."
    }
  ],
  impressora: [
    {
      id: "falha_impressao",
      label: "Falhas ou riscos na impressão",
      complexity: "Média (Desobstrução química)",
      analysis: "Pressurização dos dampers e limpeza técnica ultrassônica ou química do cabeçote de impressão para tanques de tinta."
    },
    {
      id: "tracionamento",
      label: "Não puxa ou atola papel",
      complexity: "Média (Mecânica de roletes)",
      analysis: "Substituição do rolete tracionador (pickup roller) ou remoção de resíduos no trajeto mecânico de alimentação."
    }
  ],
  especial: [
    {
      id: "bateria_gps",
      label: "Perda de calibração / Bateria interna",
      complexity: "Alta (Solda especializada)",
      analysis: "Substituição da célula de lítio de alta durabilidade (ex: TL-4986) em receptores GNSS/GPS com recalibração de alimentação."
    },
    {
      id: "curto_placa",
      label: "Curto por sobretensão / Queima",
      complexity: "Alta (Substituição de componentes)",
      analysis: "Rastreamento com câmera térmica e multímetro para substituição de diodos de proteção (TVS), indutores e MOSFETs danificados."
    }
  ]
}

export default function DiagnosticSimulator() {
  const [selectedEquipment, setSelectedEquipment] = useState("notebook")
  const [selectedIssueId, setSelectedIssueId] = useState("nao_liga")

  const handleEquipmentChange = (equipmentId) => {
    setSelectedEquipment(equipmentId)
    // Reseta o sintoma para o primeiro disponível do novo equipamento selecionado
    const firstIssue = issuesByEquipment[equipmentId][0]
    setSelectedIssueId(firstIssue.id)
  }

  const currentIssues = issuesByEquipment[selectedEquipment] || []
  const activeIssue = currentIssues.find((issue) => issue.id === selectedIssueId) || currentIssues[0]
  const currentEquipmentLabel = equipmentOptions.find((eq) => eq.id === selectedEquipment)?.label || ""

  // Montagem da mensagem formatada para WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Olá! Estive no site da Genesis Tecnologia e fiz uma pré-triagem:\n\n` +
    `• Equipamento: ${currentEquipmentLabel}\n` +
    `• Sintoma: ${activeIssue?.label}\n\n` +
    `Gostaria de agendar um diagnóstico em bancada.`
  )

  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`

  return (
    <section id="diagnostico" className={styles.simulatorSection}>
      <header className={styles.header}>
        <span className={styles.tag}>Triagem Online</span>
        <h2 className={styles.title}>Simulador de Diagnóstico Rápido</h2>
        <p className={styles.subtitle}>
          Selecione o tipo de equipamento e o defeito observado para entender o processo de bancada antes de falar conosco.
        </p>
      </header>

      <div className={styles.cardContainer}>
        {/* Passo 1: Seleção de Equipamento */}
        <div className={styles.formGroup}>
          <label className={styles.label}>1. Escolha o tipo de equipamento:</label>
          <div className={styles.buttonGrid}>
            {equipmentOptions.map((eq) => (
              <button
                key={eq.id}
                type="button"
                className={`${styles.optionBtn} ${selectedEquipment === eq.id ? styles.optionBtnActive : ""}`}
                onClick={() => handleEquipmentChange(eq.id)}
              >
                {eq.label}
              </button>
            ))}
          </div>
        </div>

        {/* Passo 2: Seleção do Sintoma */}
        <div className={styles.formGroup}>
          <label className={styles.label}>2. Qual é o sintoma percebido?</label>
          <div className={styles.buttonGrid}>
            {currentIssues.map((issue) => (
              <button
                key={issue.id}
                type="button"
                className={`${styles.optionBtn} ${selectedIssueId === issue.id ? styles.optionBtnActive : ""}`}
                onClick={() => setSelectedIssueId(issue.id)}
              >
                {issue.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resumo Dinâmico do Diagnóstico */}
        {activeIssue && (
          <div className={styles.resultBox}>
            <h3 className={styles.resultTitle}>Pré-avaliação Técnica: {activeIssue.label}</h3>
            <p className={styles.resultDescription}>{activeIssue.analysis}</p>
            
            <div className={styles.resultFooter}>
              <span className={styles.complexityBadge}>
                Complexidade: {activeIssue.complexity}
              </span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                Enviar Detalhes no WhatsApp →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}