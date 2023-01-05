
import Login from './pages/login/Login'
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
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
    <RouterProvider router={router} />
  )
}

export default App
