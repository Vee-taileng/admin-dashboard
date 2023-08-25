import { React, createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    useProfile: false,
    notification: false,
}


export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03c9d7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSetting, setThemeSetting] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem("themeMode", e.target.value)

        setThemeSetting(false)
    }

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem("colorMode", color)

        setThemeSetting(false)
    }
    
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return (
        <StateContext.Provider
            value={{
                setActiveMenu,
                isClicked,
                setIsClicked,
                activeMenu,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                setCurrentColor,
                currentMode,
                setCurrentMode,
                themeSetting,
                setThemeSetting,
                setMode,
                setColor
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=> useContext(StateContext)