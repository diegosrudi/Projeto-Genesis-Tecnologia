import React from "react"
import Navbar from "./components/Navbar/Navbar"

export default function App() {
  return (
    <div>
      <Navbar />
    <main style={{ padding: "2rem", maxWidth: "1200px", margin : "0 auto" }}>
      <h1>Genesis Tecnologia</h1>
      <p>Soluções em manutenção e suporte técnico especializado.</p>
    </main>
    </div>
  )
}