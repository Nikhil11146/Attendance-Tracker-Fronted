import {createContext, useContext, useState} from "react";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [ token, setToken ] = useState(localStorage.getItem("accessToken"));
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem("user")));
    const [ isSignUp, setIsSignUpState ] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(token !== null);
    const navigate = useNavigate();

    function setIsSignUp(signUpState) {
        setIsSignUpState(signUpState);
    }

    async function signUp(values) {
        const {data} = await api.post("/auth/sign-up", values);

        if(data.success) {
            setToken(data.data.token);
            setUser(data.data.user)
            setIsAuthenticated(true);
            localStorage.setItem("accessToken", data.data.token);
            localStorage.setItem("user", JSON.stringify(data.data.user));
            navigate("/home", { replace: true });
        }
    }

    async function signIn(values) {
        const {data} = await api.post("/auth/sign-in", values);

        if(data.success) {
            setToken(data.data.token);
            setUser(data.data.user)
            setIsAuthenticated(true);
            localStorage.setItem("accessToken", data.data.token);
            localStorage.setItem("user", JSON.stringify(data.data.user));
            navigate("/home", { replace: true });
        }
    }

    function signOut() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setToken(null);
        setUser(null);
        navigate("/auth", { replace: true });
    }

    async function signOutAll() {
        await api.post("/auth/log-out-all");
        signOut();
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, signUp, signIn, signOut, isSignUp, setIsSignUp, user, signOutAll }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);