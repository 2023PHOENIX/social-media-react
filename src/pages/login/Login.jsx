import React, { useContext, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import "./login.scss";
import {AuthContext} from "../../context/AuthContext.jsx";
function Login() {
    const {userLogin} = useContext(AuthContext);

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('currentUser')) || null
    );
    const [err, setErr] = useState(null);

    const navigate = useNavigate();


    const handleUserDetails = (e) => {
        setCurrentUser((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleUserDetailsSubmit = async (e) => {


        e.preventDefault();

        try {
            await userLogin(currentUser);

            return navigate("/");

        } catch (e) {
            setErr(e);
        }


    }


    return (
        <div className='login'>
            <div className='card'>

                <div className='left'>
                    <h1> Hello World</h1>
                    <p> Looks like there is some padding/margin space somewhere creating that. Can't really say where
                        because all you've given us to work off of are image</p>
                    <span> Don't you have a account?</span>
                    <Link to="/register">

                        <button>Register</button>
                    </Link>
                </div>
                <div className='right'>
                    <h1> Login</h1>
                    <form>
                        <input type='text' name='username' placeholder='Username' onChange={handleUserDetails}></input>
                        <input type='password' name='password' placeholder='Password'
                               onChange={handleUserDetails}></input>

                        <button type='submit' onClick={handleUserDetailsSubmit}> Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;