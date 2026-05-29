import { Link } from 'react-router-dom'
import {useAuth} from "../context/AuthContext.jsx";

export default function Navbar() {
    const { isAuthenticated, signOut } = useAuth();

    return (
        <div className="navbar">
            <nav>
                <div className="main-logo">
                    <Link to="/">
                        <img src="../assets/app-logo-main.png" alt="logo"/>
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
                </div>
            </nav>
        </div>
    );
}