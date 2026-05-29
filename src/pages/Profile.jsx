import {useAuth} from "../context/AuthContext.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function Profile() {
    const { isAuthenticated, user, initUser } = useAuth();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if(!user) {
    //         initUser();
    //     }
    // }, []);

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            <div>{JSON.stringify(user)}</div>
        </div>
    )
}