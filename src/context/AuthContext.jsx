import {createContext, useContext, useState} from "react";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [ token, setToken ] = useState(localStorage.getItem("accessToken"));
    const [isAuthenticated, setIsAuthenticated] = useState(token !== null);
    const navigate = useNavigate();

    async function signUp(values) {
        const {data} = await api.post("/auth/sign-up", values);

        if(data.success) {
            setToken(data.data.token);
            setIsAuthenticated(true);
            localStorage.setItem("accessToken", data.data.token);
            navigate("/home", { replace: true });
        }
    }

    async function signIn(values) {
        const {data} = await api.post("/auth/sign-in", values);

        if(data.success) {
            setToken(data.data.token);
            setIsAuthenticated(true);
            localStorage.setItem("accessToken", data.data.token);
            navigate("/home", { replace: true });
        }
    }

    function signOut() {
        localStorage.removeItem("accessToken");
        setIsAuthenticated(false);
        setToken(null);
        navigate("/", { replace: true });
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);