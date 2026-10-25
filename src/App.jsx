import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import DiagnosticSimulator from "./components/DiagnosticSimulator/DiagnosticSimulator"
import OrderTracker from "./components/OrderTracker/OrderTracker"

export default function App() {
  return (
    <div>
      <Navbar />
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