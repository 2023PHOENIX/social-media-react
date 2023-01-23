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
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'

// styling
import "./styles.scss"
import {DarkModeContext} from './context/darkModeContext';
import {AuthContext} from "./context/AuthContext.jsx";

function App() {
    // NOTE: this is hardcoded user right now

    const {currentUser} = useContext(AuthContext);
    const {darkMode} = useContext(DarkModeContext);

    const queryClient = new QueryClient();


    // const Lorem = async() => {
    //
    //     await axios.get('http://localhost:8000/api/auth/lorem',{
    //         httpOnly : true,
    //         sameSite : "none",
    //         secure : true,
    //     });
    // }
    const Layout = () => {
        const themeClass = darkMode ? "theme-dark" : "theme-light";
        return (
            <QueryClientProvider client={queryClient}>

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
            </QueryClientProvider>
        )
    }

    const PrivateRoute = ({children}) => {


        if (!currentUser) {
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
