import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from "./context/AuthContext.jsx";
import SubjectProvider from "./context/SubjectContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <AuthProvider>
            <SubjectProvider>
                <App />
            </SubjectProvider>
        </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
