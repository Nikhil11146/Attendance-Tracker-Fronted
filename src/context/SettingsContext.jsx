import {createContext, useContext, useEffect, useState} from "react";

const SettingsContext = createContext(null);

export default function SettingsProvider({ children }) {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const initialTheme = savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(initialTheme);
        document.body.classList.toggle('dark-theme', initialTheme === 'dark');
        document.body.classList.toggle('light-theme', initialTheme === 'light');
    }, []);

    const handleThemeToggle = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
        document.body.classList.toggle('dark-theme', nextTheme === 'dark');
        document.body.classList.toggle('light-theme', nextTheme === 'light');
    };

    return (
        <SettingsContext.Provider value={{theme, handleThemeToggle}}>
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettings = () => useContext(SettingsContext);