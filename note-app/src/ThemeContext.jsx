import React from 'react'
import { createContext } from 'react-router'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  cosnst [theme, setTheme] = useState('light');

  const handleTheme = () =>{
    setTheme(theme === light ? )
  }

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}

