import { useState } from "react"
import styles from "./OrderTracker.module.css"

const API_URL = import.meta.env.VITE_ORDERS_API_URL

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

  // Função para aplicar máscara automática: transforma qualquer entrada em "OS-XXXX"
  const handleInputChange = (e) => {
    let raw = e.target.value.toUpperCase()

    // Remove qualquer texto que não seja letra ou número
    // Se o utilizador apagar tudo, limpa o campo
    if (!raw) {
      setSearchCode("")
      return
    }

    // Remove o prefixo "OS" e traços existentes para extrair apenas o identificador/número
    let cleaned = raw.replace(/^OS-?/, "").replace(/[^A-Z0-9]/g, "")

    // Limita o tamanho do código numérico (ex: até 5 caracteres)
    cleaned = cleaned.slice(0, 5)

    // Formata com o prefixo padrão
    if (cleaned.length > 0) {
      setSearchCode(`OS-${cleaned}`)
    } else {
      setSearchCode("")
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const sanitizedCode = searchCode.trim().toUpperCase()

    if (!sanitizedCode || sanitizedCode === "OS-") {
      setError("Por favor, introduza o número da sua Ordem de Serviço.")
      setOrder(null)
      return
    }

    setIsLoading(true)
    setError("")
    setOrder(null)

    try {
      if (!API_URL) {
        throw new Error("URL da API não configurado no ficheiro .env.")
      }

      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error("Não foi possível estabelecer ligação à base de dados de ordens.")
      }

      const allOrders = await response.json()
      const foundOrder = allOrders[sanitizedCode]

      if (foundOrder) {
        setOrder(foundOrder)
      } else {
        setError(`A Ordem de Serviço "${sanitizedCode}" não foi encontrada. Verifique o código e tente novamente.`)
      }
    } catch (err) {
      console.error("Erro na consulta:", err)
      setError(err.message || "Ocorreu um erro ao consultar os dados. Tente novamente mais tarde.")
    } finally {
      setIsLoading(false)
    }
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
            placeholder="Ex: 1001 ou OS-1001"
            value={searchCode}
            onChange={handleInputChange}
            maxLength={8}
          />
          <button type="submit" className={styles.searchBtn} disabled={isLoading}>
            {isLoading ? "A consultar..." : "Consultar OS"}
          </button>
        </form>

        <p className={styles.tips}>
          Dica para teste rápido: digite apenas <code>1001</code> e a máscara completará automaticamente.
        </p>

        {error && <div className={styles.errorMessage}>{error}</div>}

        {order && (
          <div className={styles.resultContainer}>
            <div className={styles.orderHeader}>
              <div>
                <h3>{order.device} — {order.code}</h3>
                <p className={styles.clientInfo}>Cliente: {order.client} | Serviço: {order.service}</p>
              </div>
              <span className={`${styles.statusBadge} ${styles[order.statusType] || styles.statusEmBancada}`}>
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