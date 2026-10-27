import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    function handleClick() {
        setTheme(theme === "light" ? "dark" : "light")
    }
  return (
    <ThemeContext.Provider value={{theme, handleClick}}>{children}</ThemeContext.Provider>
  )
}

