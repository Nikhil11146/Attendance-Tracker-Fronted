import {useAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import SubjectCard from "../components/SubjectCard.jsx";
import {useSubject} from "../context/SubjectContext.jsx";
import CreateWindow from "../components/CreateWindow.jsx";

export default function Home() {
    const navigate = useNavigate();

    const { isAuthenticated } = useAuth();
    const { getSubjects } = useSubject();

    const [subjects, setSubjects] = useState([]);
    const [error, setError] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        if(!isAuthenticated){
            navigate("/auth", { replace: true });
            return;
        }

        async function getData() {
            try {
                const subjects = await getSubjects();
                setSubjects(subjects);
            } catch(err) {
                setError("Something went wrong!");
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [isAuthenticated, navigate, getSubjects]);

    async function createSubjectCard() {
        setIsCreating(true);
    }

    return (
        <div className="home-page">
            {isCreating && (
                <CreateWindow/>
            )}
            <div className="home-page-header">
                <h1 className="heading">Home</h1>
                <button className="create-subject-btn" onClick={() => createSubjectCard()}>Create new subject</button>
            </div>

            <div className="subject-card-container">
                { isLoading ? (
                    <p className="subject-alt-text">Loading Data...</p>
                ) : error ? (
                    <p className="subject-alt-text">{error}</p>
                ) : (
                    subjects.map((subject) => ( <SubjectCard key={subject._id} {...subject}/>))
                )}
            </div>
        </div>
    )
}