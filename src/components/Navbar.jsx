import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {useAuth} from "../context/AuthContext.jsx";
import mainLogo from '../assets/app-logo-main-v2.png'

export default function Navbar() {
    const { isAuthenticated, signOut } = useAuth();
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
        <div className="navbar">
            <nav>
                <div className="main-logo">
                    <Link to="/">
                        <img src={mainLogo} width="100" height="100" alt="logo"/>
                    </Link>
                </div>
                <div className="navbar-links">
                    <div className="navbar-app-links">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-auth-links">
                        {isAuthenticated ? (
                            <button className="logout-btn" onClick={signOut}>Log Out</button>
                        ): (
                            <ul>
                                <li className="link-signup">
                                    <Link to="/auth">Sign In</Link>
                                </li>
                                <li className="link-signin">
                                    <Link to="/auth">Sign Up</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="navbar-theme-toggle">
                        <button
                            type="button"
                            className={`theme-toggle-btn ${theme}`}
                            onClick={handleThemeToggle}
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            <span className="sr-only">{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}