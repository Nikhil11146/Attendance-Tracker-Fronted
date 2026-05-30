import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from "./context/AuthContext.jsx";
import SubjectProvider from "./context/SubjectContext.jsx";
import SettingsProvider from "./context/SettingsContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <SettingsProvider>
            <AuthProvider>
                <SubjectProvider>
                    <App />
                </SubjectProvider>
            </AuthProvider>
        </SettingsProvider>
    </BrowserRouter>
  </StrictMode>,
)
