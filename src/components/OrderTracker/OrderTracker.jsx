import { useState } from "react"
import styles from "./OrderTracker.module.css"

// Base de dados simulada de Ordens de Serviço
const MOCK_ORDERS = {
  "OS-1001": {
    code: "OS-1001",
    client: "Carlos Eduardo",
    device: "Dell Vostro 3500",
    service: "Reparo no circuito de carga (Charger) e troca de bateria",
    currentStep: 2, // 1: Recebido, 2: Em Bancada, 3: Testes de Stress, 4: Pronto
    statusLabel: "Em Bancada",
    statusType: "statusEmBancada",
    report: "Curto identificado na linha de entrada de 19V e mosfet de alta substituído. Equipamento atualmente na bancada a carregar a nova bateria para testes térmicos."
  },
  "OS-1002": {
    code: "OS-1002",
    client: "Mariana Souza",
    device: "Epson EcoTank L1250",
    service: "Desobstrução de cabeça de impressão e substituição de almofadas",
    currentStep: 4,
    statusLabel: "Pronto para Levantamento",
    statusType: "statusConcluido",
    report: "Despressurização concluída com sucesso. Alinhamento de jatos a 100% e reset lógico executado. Pronto para retirada pelo cliente."
  },
  "OS-1003": {
    code: "OS-1003",
    client: "AgroTech Serviços",
    device: "Receptor GPS Topcon AGI-4",
    service: "Troca de bateria interna e análise de sinal GNSS",
    currentStep: 1,
    statusLabel: "Aguardando Peça",
    statusType: "statusAguardando",
    report: "Bateria original sem retenção de carga. Encomenda de célula de lítio especializada TL-4986 efetuada com fornecedor parceiro."
  }
}

const STEPS = [
  { id: 1, label: "Recebido" },
  { id: 2, label: "Em Bancada" },
  { id: 3, label: "Testes" },
  { id: 4, label: "Pronto" }
]

export default function OrderTracker() {
  const [searchCode, setSearchCode] = useState("")
  const [order, setOrder] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    const sanitizedCode = searchCode.trim().toUpperCase()

    if (!sanitizedCode) {
      setError("Por favor, introduza o número da sua Ordem de Serviço.")
      setOrder(null)
      return
    }

    setIsLoading(true)
    setError("")
    setOrder(null)

    // Simula uma resposta de API assíncrona com atraso de 800ms
    setTimeout(() => {
      const foundOrder = MOCK_ORDERS[sanitizedCode]

      if (foundOrder) {
        setOrder(foundOrder)
      } else {
        setError(`A Ordem de Serviço "${sanitizedCode}" não foi encontrada. Verifique o código e tente novamente.`)
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <section id="rastreio" className={styles.trackerSection}>
      <header className={styles.header}>
        <span className={styles.tag}>Transparência em Tempo Real</span>
        <h2 className={styles.title}>Consulta de Ordem de Serviço</h2>
        <p className={styles.subtitle}>
          Acompanhe o estado de reparação do seu equipamento diretamente na nossa bancada.
        </p>
      </header>

      <div className={styles.searchCard}>
        <form onSubmit={handleSearch} className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Ex: OS-1001"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
          />
          <button type="submit" className={styles.searchBtn} disabled={isLoading}>
            {isLoading ? "A consultar..." : "Consultar OS"}
          </button>
        </form>

        <p className={styles.tips}>
          Dica para teste rápido: tente consultar <code>OS-1001</code>, <code>OS-1002</code> ou <code>OS-1003</code>.
        </p>

        {error && <div className={styles.errorMessage}>{error}</div>}

        {order && (
          <div className={styles.resultContainer}>
            <div className={styles.orderHeader}>
              <div>
                <h3>{order.device} — {order.code}</h3>
                <p className={styles.clientInfo}>Cliente: {order.client} | Serviço: {order.service}</p>
              </div>
              <span className={`${styles.statusBadge} ${styles[order.statusType]}`}>
                {order.statusLabel}
              </span>
            </div>

            {/* Linha temporal */}
            <div className={styles.timeline}>
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className={`${styles.step} ${order.currentStep >= step.id ? styles.stepActive : ""}`}
                >
                  <div className={styles.stepDot}>
                    {order.currentStep >= step.id ? "✓" : step.id}
                  </div>
                  <span className={styles.stepLabel}>{step.label}</span>
                </div>
              ))}
            </div>

            {/* Relatório Técnico */}
            <div className={styles.technicalReport}>
              <h4>Última Atualização Técnica de Bancada:</h4>
              <p>{order.report}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}