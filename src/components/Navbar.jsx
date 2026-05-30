import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from "../context/AuthContext.jsx";
import mainLogo from '../assets/app-logo-main-v2.png'
import settingsIcon from '../assets/settings.jpg'
import profileIcon from '../assets/test-account.jpg'

export default function Navbar() {
    const { isAuthenticated, signOut, setIsSignUp } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <nav>
                <div className="main-logo">
                    <Link to="/">
                        <img src={mainLogo} alt="logo"/>
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
                            <div className="user-profile-container">
                                <p className="user-profile-navbar-heading">Hello, user</p>
                                <button className="profile-btn" onClick={() => navigate('/profile')}><img src={profileIcon} alt="profile"/></button>
                                <button className="profile-btn" onClick={() => navigate('/settings')}><img src={settingsIcon} alt="settings"/></button>
                                <button className="profile-btn" onClick={signOut}>log out</button>
                            </div>
                        ): (
                            <ul>
                                <li className="link-signup">
                                    <Link to="/auth" onClick={() => setIsSignUp(true)}>Sign In</Link>
                                </li>
                                <li className="link-signin">
                                    <Link to="/auth"  onClick={() => setIsSignUp(false)}>Sign Up</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}