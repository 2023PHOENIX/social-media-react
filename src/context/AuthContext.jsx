import {useEffect, useState, createContext} from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")));

    const userLogin = (user) => {
        setCurrentUser(user);
    }
    useEffect(() => {
//        console.log("hit hit hit...!");
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);

    return <AuthContext.Provider value={{currentUser, userLogin}}>{children}</AuthContext.Provider>
}
