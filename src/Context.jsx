import React from 'react'
import App from './App'

export const ThemeContext = React.createContext([{}, ()=>{}])

export const Context = ({children}) => {
   
    const [darkMode, setDarkMode] = React.useState(false)
   
    const toggleFuction = () => {
        setDarkMode(prevMode => !prevMode)
    } 


    return (
        <>
        <ThemeContext.Provider value={[darkMode, setDarkMode]}>
               {children}
        </ThemeContext.Provider>
        </>
    )
}
