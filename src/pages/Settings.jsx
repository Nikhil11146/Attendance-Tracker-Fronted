import {useSettings} from "../context/SettingsContext.jsx";

export default function Settings() {
    const {theme, handleThemeToggle} = useSettings();

    return (
        <div className="settings-page">
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
    )
}