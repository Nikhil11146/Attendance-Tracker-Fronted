import { useForm } from "react-hook-form";
import {useState} from "react";
import {useAuth} from "../context/AuthContext.jsx";

export default function Auth() {
    const { register, handleSubmit, formState: { errors, isSubmitting  }} = useForm();
    const [ isSignUp, setIsSignUp ] = useState(false);
    const [ apiError, setApiError ] = useState(null);
    const { signIn, signUp } = useAuth();

    const onSubmit = async (values) => {
        setApiError(null);
        try {
            if(isSignUp) await signUp(values);
            else await signIn(values);
        } catch(error) {
            setApiError(error.response?.data?.message ||
                "Something went wrong");
        }
    }

    return (
        <div className="auth-page">
            <h1 className="heading">{isSignUp ? "Sign Up" : "Sign In"}</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        autoComplete="username"
                        placeholder="Name..."
                        className="name-input"
                        {...register("name",{
                            required: "Name is required",
                            minLength: {
                                value: 5,
                                message: "Minimum 5 characters",
                            },
                            maxLength: {
                                value: 20,
                                message: "Maximum 20 characters",
                            }
                        })}
                    />

                    {errors.name && <p className="error-message">{errors.name.message}</p>}

                    <input
                        autoComplete={isSignUp ? "new-password" : "current-password"}
                        placeholder="Password..."
                        type="password"
                        className="password-input"
                        {...register("password",{
                            required: "Password is required",
                            minLength: {
                                value: 5,
                                message: "Minimum 5 characters",
                            },
                        })}
                    />

                    {errors.password && <p className="error-message">{errors.password.message}</p>}

                    {apiError && <p className="error-message">{apiError}</p>}

                    <button type="submit" className="login-button" disabled={isSubmitting}>
                        { isSubmitting ? "Please wait..." : (isSignUp ? "Sign Up" : "Login") }
                    </button>
                </form>
                <div className="auth-switch">
                    { isSignUp ? (
                        <p>
                            Already have an account?{" "}
                            <span className="auth-link" onClick={() => {
                                setIsSignUp(false);
                                setApiError(null);
                            }}>
                                Sign In
                            </span>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?{" "}
                            <span className="auth-link" onClick={() => {
                                setIsSignUp(true);
                                setApiError(null);
                            }}>
                                Sign Up, Now!!
                            </span>
                        </p>
                    )
                    }
                </div>
            </div>

        </div>
    )
}