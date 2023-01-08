import {useEffect, useState,createContext} from "react";
import {Navigate} from "react-router-dom";
export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {

   
    //IMP:     can't store the object in local storage...
//    console.log(JSON.stringify(dummyUser));
    const [currentUser, setUser] = useState(localStorage.getItem('user') || undefined);

    const Login = () => {

//        setUser({name : "Abhishek"});

        setTimeout({},200);
        console.log(currentUser);
        return  <Navigate to="/"/>
    }

    useEffect(() => {
        localStorage.setItem("user",currentUser);
    }, [currentUser]);

    return <AuthContext.Provider value={{currentUser, Login}}>
        {children}
    </AuthContext.Provider>

}