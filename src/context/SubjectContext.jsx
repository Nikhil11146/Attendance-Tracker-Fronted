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

    return (
        <SubjectContext.Provider value={{ getSubjects }}>
            {children}
        </SubjectContext.Provider>
    )
}

export const useSubject = () => useContext(SubjectContext);