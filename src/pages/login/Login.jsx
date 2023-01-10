import React, {createContext, useContext, useState} from 'react'
import {Link} from 'react-router-dom';
import "./login.scss";
import {AuthContext} from "../../context/AuthContext.jsx";

function Login() {
    const {userLogin} = useContext(AuthContext);

    const [currentUser, setCurrentUser] = useState(
            JSON.parse(localStorage.getItem('currentUser')) || null
    );

    const login = () => {
        userLogin({
            id: 1,
            name: "abhishek",
            profilePicture: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        login();

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
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='username' placeholder='Username'></input>
                        <input type='password' name='password' placeholder='Password'></input>

                        <button type='submit'> Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;