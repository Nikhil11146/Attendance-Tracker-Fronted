import editIcon from '../assets/edit-icon.png'
import deleteIcon from '../assets/delete-icon.png'
import {useState} from "react";
import {useSubject} from "../context/SubjectContext.jsx";
import EditFunction from "./EditForm.jsx";
import Modal from './Modal.jsx';

export default function SubjectCard({ name, attendedClasses, totalClasses, faculty, dept, credits, _id }) {
    const [attended, setAttended] = useState(attendedClasses);
    const [total, setTotal] = useState(totalClasses);
    const [updating, setUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const { updateSubject, deleteSubject } = useSubject();

    function deletePopUp() {
        setIsDeleting(true);
    }

    async function attendClass() {
        setUpdating(true);
        const nextAttended = attended + 1;
        const nextTotal = total + 1;
        try {
            await updateSubject({"totalClasses": nextTotal, "attendedClasses": nextAttended}, _id);

            setAttended(nextAttended);
            setTotal(nextTotal);
        } catch (error) {
            console.log(error);
        } finally {
            setUpdating(false);
        }
    }

    async function missClass() {
        setUpdating(true);
        const nextAttended = attended;
        const nextTotal = total + 1;
        try {
            await updateSubject({"totalClasses": nextTotal, "attendedClasses": nextAttended}, _id);
            setTotal(nextTotal);
        } catch (error) {
            console.log(error);
        } finally {
            setUpdating(false);
        }
    }

    return (
        <div className="subject-card">
            { isEditing ? (
                <Modal>
                    <EditFunction setIsEditing={setIsEditing} subjectDetails={{ name, attendedClasses, totalClasses, faculty, dept, credits, _id }}/>
                </Modal>    
            ) : (
                <>
                    <div className="subject-info">
                        <div className="subject-name">{name}</div>
                        <div className="event-info">
                            <div className="subject-perc">{total === 0 ? "0 %" : Math.round((attended/total)*100) + " %"}</div>
                            <div className="subject-attended">{attended} / {total}</div>
                        </div>
                        {faculty && (<div className="subject-faculty">Faculty: {faculty}</div>)}
                        {dept && (<div className="subj-dept">Dept: {dept}</div>)}
                        {credits && (<div className="subject-credits">Credits: {credits}</div>)}
                    </div>

                    { isDeleting ? (
                        <Modal>
                            <div className="confirm-dialog">
                                <p className="dialog-text">
                                    Are you sure you want to delete {name}?
                                </p>

                                <div className="confirm-actions">
                                    <button
                                        className="cancel-btn"
                                        onClick={() => setIsDeleting(false)}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        className="confirm-btn"
                                        onClick={() => deleteSubject(_id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : (
                        <div className="subject-actions">
                            <button className="attended" onClick={() => attendClass()} disabled={updating}>
                                {updating ? "Updating..." : "Attended(+)"}
                            </button>
                            <button className="attended" onClick={() => missClass()} disabled={updating}>
                                {updating ? "Updating..." : "Missed(-)"}
                            </button>
                            <button className="edit-subject"  onClick={() => setIsEditing(true)} disabled={updating}>
                                <img src={editIcon} alt="edit" width="20" height="20"/>
                            </button>
                            <button className="edit-subject" onClick={() => deletePopUp(_id)} disabled={updating}>
                                <img src={deleteIcon} alt="delete" width="20" height="15"/>
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}



