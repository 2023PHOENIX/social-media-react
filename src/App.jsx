import Login from './pages/login/Login'
import Register from "./pages/register/Register";
import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import {Children, useContext} from 'react';
import Home from './pages/home/Home';
import Profile from './pages/Profile/Profile';

// styling
import "./styles.scss"
import {DarkModeContext} from './context/darkModeContext';
function App() {
    // NOTE: this is hardcoded user right now
    const currentUser = true;
    const {darkMode} = useContext(DarkModeContext);

    const Layout = () => {
        const themeClass = darkMode ? "theme-dark" : "theme-light";
        return (
            <div className={themeClass}>
                <NavBar/>
                {/* now for the below part
        it will include 
        | left bar | [ outlet react router ] | right Bar |
         */}
                <div style={{display: "flex"}}>
                    <LeftBar/>
                    <div style={{flex: 6}}>

                        <Outlet/>
                    </div>
                    <RightBar/>
                </div>
            </div>
        )
    }

    const PrivateRoute = ({children}) => {


        if (!currentUser ) {
            return <Navigate to='/login'/>
        }

        return children;
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PrivateRoute><Layout/> </PrivateRoute>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: "/profile/:id",
                    element: <Profile/>
                }
            ]
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        }

    ]);

    return (
        <RouterProvider router={router}/>
    )
}

export default App
