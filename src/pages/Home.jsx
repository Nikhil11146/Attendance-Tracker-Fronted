import {useAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import SubjectCard from "../components/SubjectCard.jsx";
import {useSubject} from "../context/SubjectContext.jsx";
import CreateWindow from "../components/CreateWindow.jsx"

export default function Home() {
    const navigate = useNavigate();

    const { isAuthenticated } = useAuth();
    const { getSubjects, subjects, setSubjects } = useSubject();
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
                console.log(err)
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [isAuthenticated, navigate]);

    async function createSubjectCard() {
        setIsCreating(true);
    }

    return (
        <div className="home-page">
            {isCreating && (
                <CreateWindow onClose={() => setIsCreating(false)}/>
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
                ) : subjects.length > 0 ? (
                    subjects.map((subject) => ( <SubjectCard key={subject._id} {...subject}/>))
                ) : (
                    <p className="subject-alt-text">No Subjects Being Tracked</p>
                )}
            </div>
        </div>
    )
}