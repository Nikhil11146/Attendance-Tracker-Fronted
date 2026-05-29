import editIcon from '../assets/edit-icon.png'

export default function SubjectCard({ name, attendedClasses, totalClasses, faculty, dept, credits }) {
    return (
        <div className="subject-card">
            <div className="subject-info">
                <div className="subject-name">Subject Name: {name}</div>
                <div className="event-info">
                    <div className="subject-perc">{totalClasses === 0 ? "0 %" : (attendedClasses/totalClasses)*100} %</div>
                    <div className="subject-attended">{attendedClasses} / {totalClasses}</div>
                </div>
                {faculty && (<div className="subject-faculty">Faculty: {faculty}</div>)}
                {dept && (<div className="subj-dept">Dept: {dept}</div>)}
                {credits && (<div className="subject-credits">Credits: {credits}</div>)}
            </div>
            <div className="subject-actions">
                <button className="attended">Attended(+)</button>
                <button className="attended">Missed(-)</button>
                <button className="edit-subject"><img src={editIcon} alt="edit" width="20" height="20"/></button>
            </div>
        </div>
    )
}