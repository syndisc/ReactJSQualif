import { createContext } from "react"

export const THEME ={
    light:{
        backgroundColor: "#ffffff",
        accentColor: "#000000"
    },
    dark:{
        backgroundColor: "#000000",
        accentColor: "#ffffff"
    }
}

export const ThemeContext = createContext(THEME.light)