import React, {useState} from 'react'
import {Link,useNavigate } from 'react-router-dom';
import "./register.scss";
import axios from "axios";

function Register() {
    const [inputDetails, setInputDetails] = useState({
        username: "",
        email: "",
        password: "",
        name: ""
    });

    const navigate = useNavigate();

    const [err, setErr] = useState(null);

    const handleInputChange = (e) => {
        setInputDetails((prev) => ({...prev, [e.target.name]: e.target.value}));
    }
    const submitInputDetails = async (e) => {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/api/auth/register", inputDetails);
            return navigate('/login');

        } catch (e) {
            setErr(e.response.data);
        }

    }
    return (
        <div className='signup'>
            <div className='card'>

                <div className='right'>
                    <h1> Register</h1>
                    <form>
                        <input type='text' placeholder='Username' name="username" onChange={handleInputChange}></input>
                        <input type='text' placeholder='name' name="name" onChange={handleInputChange}></input>
                        <input type='text' placeholder='email' name="email" onChange={handleInputChange}></input>
                        <input type='password' placeholder='Password' name="password"
                               onChange={handleInputChange}></input>
                        {err && <p>{err}</p>}

                        <button onClick={submitInputDetails}> Signup</button>
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