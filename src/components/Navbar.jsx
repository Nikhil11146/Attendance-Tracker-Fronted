import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from "../context/AuthContext.jsx";

export default function Navbar() {
    const { isAuthenticated, signOut, setIsSignUp, user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <nav>
                <div className="main-logo">
                    <Link to="/">
                        Attendance Tracker
                    </Link>
                </div>
                <div className="navbar-links">
                    <div className="navbar-app-links navbar-links-section">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-auth-links navbar-links-section">
                        {isAuthenticated ? (
                            <div className="user-profile-container">
                                <p className="user-profile-navbar-heading">Hello, {user?.name}</p>
                                <button className="profile-btn" onClick={() => navigate('/profile')}>Profile</button>
                                <button className="profile-btn" onClick={() => navigate('/settings')}>Settings</button>
                                <button className="profile-btn logout-btn" onClick={signOut}>log out</button>
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