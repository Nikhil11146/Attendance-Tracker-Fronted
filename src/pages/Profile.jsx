import {useAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Profile() {
    const { isAuthenticated, user, signOutAll, validateToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated) navigate("/auth");
        validateToken();
    }, [])

    return (
        <div className="profile-page">
            <h1 className="heading">Profile</h1>
            { user ? (
                <div className="profile-info-container">
                    <div className="profile-name">Name: {user?.name}</div>
                    <div className="profile-role">Role: {user?.role}</div>
                    <div className="profile-createdat">Joined{" "} {new Date(user?.createdAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}</div>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
            <button className="profile-btn logout-btn logoutall-btn" onClick={signOutAll}>log out from all devices</button>

        </div>
    )
}