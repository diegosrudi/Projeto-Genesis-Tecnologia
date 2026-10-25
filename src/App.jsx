import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"

export default function App() {
  return (
    <div>
      <Navbar />
    <main>
      <Hero />
      <Services />
      <About />
    </main>
    <Footer />
    </div>
  )
}