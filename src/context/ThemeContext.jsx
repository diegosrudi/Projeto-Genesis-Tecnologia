import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Inicializa buscando do localStorage ou respeitando a preferência do sistema
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("genesis-theme")
    if (savedTheme) {
      return savedTheme
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  })

  // Sincroniza a classe do <body> e o localStorage sempre que o tema mudar
  useEffect(() => {
    document.body.className = theme
    localStorage.setItem("genesis-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook para consumir o tema de forma limpa em qualquer componente
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme deve ser utilizado dentro de um ThemeProvider")
  }
  return context
}