import editIcon from '../assets/edit-icon.png'
import {useState} from "react";
import {useSubject} from "../context/SubjectContext.jsx";

export default function SubjectCard({ name, attendedClasses, totalClasses, faculty, dept, credits, _id }) {
    const [attended, setAttended] = useState(attendedClasses);
    const [total, setTotal] = useState(totalClasses);
    const [updating, setUpdating] = useState(false);
    const { updateSubject } = useSubject();

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
            <div className="subject-info">
                <div className="subject-name">Subject Name: {name}</div>
                <div className="event-info">
                    <div className="subject-perc">{total === 0 ? "0 %" : Math.round((attended/total)*100) + " %"}</div>
                    <div className="subject-attended">{attended} / {total}</div>
                </div>
                {faculty && (<div className="subject-faculty">Faculty: {faculty}</div>)}
                {dept && (<div className="subj-dept">Dept: {dept}</div>)}
                {credits && (<div className="subject-credits">Credits: {credits}</div>)}
            </div>
            { updating ? (
                <div className="subject-updating">Updating...</div>
            ) : (
                <div className="subject-actions">
                    <button className="attended" onClick={() => attendClass()}>Attended(+)</button>
                    <button className="attended" onClick={() => missClass()}>Missed(-)</button>
                    <button className="edit-subject"><img src={editIcon} alt="edit" width="20" height="20"/></button>
                </div>
            )}
        </div>
    )
}