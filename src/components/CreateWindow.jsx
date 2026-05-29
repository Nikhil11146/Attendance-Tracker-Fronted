import { useForm } from "react-hook-form";

export default function CreateWindow() {

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button className="modal-cancel">X</button>
                <form className="create-subject-form">
                    <input type="text" placeholder="Subject Name..."/>
                    <input type="number" placeholder="Total Attended Classes..."/>
                    <input type="number" placeholder="Total Classes..."/>
                    <input type="text" placeholder="Faculty Name...(Optional)"/>
                    <input type="text" placeholder="Department Name...(Optional)"/>
                    <input type="number" placeholder="Credits...(Optional)"/>
                    <button className="submit-create-subject-btn">Submit</button>
                </form>
            </div>
        </div>
    )

}