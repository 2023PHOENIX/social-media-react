import React from 'react'
import { Link } from 'react-router-dom';
import "./login.scss"
function Login() {
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
                        <input type='text' placeholder='Username'></input>
                        <input type='password' placeholder='Password'></input>
                        
                        <button> Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;