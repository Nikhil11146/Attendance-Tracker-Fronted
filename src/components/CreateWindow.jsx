import { useForm } from "react-hook-form";
import {useSubject} from "../context/SubjectContext.jsx";
import Modal from './Modal.jsx'

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
        <Modal>
            <h2 className="modal-title">
                Create Subject
            </h2>
            <form className="create-subject-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Subject Name..."
                    {...register("name", {
                        required: "Subject Name is required",

                    })}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
                <input type="number" placeholder="Total Classes..."
                        {...register("totalClasses", {
                            required: "Subject Total Classes is required",
                            valueAsNumber: true
                        })}
                />
                {errors.totalClasses && <p className="error-message">{errors.totalClasses.message}</p>}
                <input type="number" placeholder="Total Attended Classes..."
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

                { isSubmitting ? (
                    <p className="submitting-text">Creating Subject...</p>
                ) : (
                    <div className="modal-actions">
                        <button type="button" className="modal-close-btn" onClick={() => onClose()} disabled={isSubmitting}>
                            Cancel
                        </button>
                        <button className="submit-create-subject-btn" type='submit' disabled={isSubmitting}>
                            Create Subject
                        </button>
                    </div>
                )}
            </form>
        </Modal>
    )

}