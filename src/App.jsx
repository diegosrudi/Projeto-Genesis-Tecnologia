import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import DiagnosticSimulator from "./components/DiagnosticSimulator/DiagnosticSimulator"
import OrderTracker from "./components/OrderTracker/OrderTracker"

export default function App() {
  // Recupera o tema salvo ou usa 'dark' por padrão
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("genesis_theme") || "dark"
  })

  // Aplica o atributo data-theme na tag <html> e salva no localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("genesis_theme", theme)
  }, [theme])

  // Função para alternar entre claro e escuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <DiagnosticSimulator />
        <OrderTracker />
        <About />
      </main>
      <Footer />
    </div>
  )
}