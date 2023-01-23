import {useEffect, useState, createContext} from "react";
import axios from "axios";

export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null);

    const userLogin = async (inputs) => {

        const response = await axios.post("http://localhost:8000/api/auth/login",inputs,{
            withCredentials : true,
            useCredentials : true,
        })

        console.log(response.data)
        setCurrentUser(response.data);
        // console.log(JSON.parse(localStorage.getItem("currentUser")))

    }
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);

    return <AuthContext.Provider value={{currentUser, userLogin}}>{children}</AuthContext.Provider>
}
