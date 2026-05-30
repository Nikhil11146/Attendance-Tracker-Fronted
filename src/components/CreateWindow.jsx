import { useForm } from "react-hook-form";
import {useSubject} from "../context/SubjectContext.jsx";

export default function CreateWindow({onClose}) {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const { createSubject } = useSubject();

    async function onSubmit(values) {
        try {
            await createSubject(values)
        } catch(error) {
            console.error(error);
        } finally {
            onClose();
        }
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button className="modal-cancel" onClick={() => onClose()}>X</button>
                <form className="create-subject-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Subject Name..."
                        {...register("name", {
                            required: "Subject Name is required",

                        })}
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                    <input type="number" placeholder="Total Attended Classes..."
                           {...register("totalClasses", {
                               required: "Subject Total Classes is required",
                               valueAsNumber: true
                           })}
                    />
                    {errors.totalClasses && <p className="error-message">{errors.totalClasses.message}</p>}
                    <input type="number" placeholder="Total Classes..."
                           {...register("attendedClasses", {
                               required: "Subject Total Attended Classes is required",
                               valueAsNumber: true
                           })}
                    />
                    {errors.attendedClasses && <p className="error-message">{errors.attendedClasses.message}</p>}
                    <input type="text" placeholder="Faculty Name...(Optional)"
                           {...register("faculty")}
                    />
                    <input type="number" placeholder="Credits...(Optional)"
                           {...register("credits", {
                               valueAsNumber: true
                           })}
                    />
                    <select {...register("dept", { setValueAs: value => value || undefined})}>
                        <option value="">Select Department..(Optional)</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="MECH">MECH</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="BIOTECH">BIOTECH</option>
                        <option value="CHEM">CHEM</option>
                        <option value="PE">PE</option>
                        <option value="Others">Others</option>
                    </select>

                    <button className="submit-create-subject-btn" type='submit' disabled={isSubmitting}>
                        { isSubmitting ? "Submitting..." : "Submit" }
                    </button>
                </form>
            </div>
        </div>
    )

}