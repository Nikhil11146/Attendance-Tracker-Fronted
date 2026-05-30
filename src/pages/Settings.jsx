import {useSettings} from "../context/SettingsContext.jsx";

export default function Settings() {
    const {theme, handleThemeToggle} = useSettings();

    return (
        <div className="settings-page">
            <div className="settings-card">
                <div>
                    <h3>Theme</h3>
                    <p>Switch between light and dark mode</p>
                </div>

                <button
                    className={`theme-toggle-btn ${theme}`}
                    onClick={handleThemeToggle}
                />
            </div>
        </div>
    )
}