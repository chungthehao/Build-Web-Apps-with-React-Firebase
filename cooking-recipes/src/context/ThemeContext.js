import { createContext } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // Custom logic

  return (
    <ThemeContext.Provider value={{ color: 'orange' }}>
      {children}
    </ThemeContext.Provider>
  )
}