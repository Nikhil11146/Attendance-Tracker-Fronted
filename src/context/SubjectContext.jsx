import {createContext, useContext} from "react";
import api from "../api/axios.js";

const SubjectContext = createContext(null);

export default function SubjectProvider({ children }) {
    async function getSubjects() {
        const { data } = await api.get('/subjects');

        if(data.success) {
            return data.data;
        }
    }

    async function updateSubject(values, _id) {
        await api.put(`/subjects/${_id}`, values);
    }

    return (
        <SubjectContext.Provider value={{ getSubjects, updateSubject }}>
            {children}
        </SubjectContext.Provider>
    )
}

export const useSubject = () => useContext(SubjectContext);