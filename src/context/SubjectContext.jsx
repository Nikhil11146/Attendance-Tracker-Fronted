import {createContext, useContext, useState} from "react";
import api from "../api/axios.js";

const SubjectContext = createContext(null);

export default function SubjectProvider({ children }) {
    const [subjects, setSubjects] = useState([]);
    async function getSubjects() {
        const { data } = await api.get('/subjects');

        if(data.success) {
            return data.data;
        }
    }

    async function updateSubject(values, _id) {
        const {data} = await api.put(`/subjects/${_id}`, values);

        setSubjects(prev => prev.map(subject => subject._id === _id ? values : subject))
    }

    async function createSubject(values) {
        const { data } = await api.post("/subjects", values)

        if(data.success) {
            setSubjects(prev => [ ...prev, data.data]);
        }
    }

    async function deleteSubject(_id) {
        const { data } = await api.delete(`/subjects/${_id}`);

        if(data.success) {
            setSubjects(prev => prev.filter(subject => subject._id !== _id));
        }
    }

    return (
        <SubjectContext.Provider value={{ getSubjects, updateSubject, createSubject, subjects, setSubjects, deleteSubject }}>
            {children}
        </SubjectContext.Provider>
    )
}

export const useSubject = () => useContext(SubjectContext);