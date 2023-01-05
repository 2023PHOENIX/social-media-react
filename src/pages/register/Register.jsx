import React from 'react'
import { Link } from 'react-router-dom';
import "./register.scss";

function Register() {
    return (
        <div className='signup'>
            <div className='card'>

                <div className='right'>
                    <h1> Register</h1>
                    <form>
                        <input type='text' placeholder='Username'></input>
                        <input type='password' placeholder='Password'></input>
                        <input type='password' placeholder='confirm Password'></input>
                        <input type='password' placeholder='confirm Password'></input>
                        <button> Signup</button>
                    </form>
                </div>
                <div className='left'>
                    <h1> Hello World</h1>
                    <p> Looks like there is some padding/margin space somewhere creating that. Can't really say where
                        because all you've given us to work off of are image</p>
                    <span> Do you have a account?</span>

                    <Link to='/login'>

                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register;