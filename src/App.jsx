import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"

export default function App() {
  return (
    <div>
      <Navbar />
    <main>
      <Hero />
      <Services />
    </main>
    </div>
  )
}