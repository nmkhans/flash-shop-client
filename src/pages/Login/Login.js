import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import useFirebase from './../../hooks/useFirebase';
import {FaGoogle} from 'react-icons/fa';

const Login = () => {
    const { loginUser, googleSignIn } = useFirebase();

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        loginUser(email, password);

        fetch('http://localhost:5000/auth', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: email})
        })
        .then(res => res.json())
        .then(data => localStorage.setItem('access-token', JSON.stringify(data.token)))
    }

    const handleGoogle = (event) => {
        event.preventDefault();
        googleSignIn();
    }
    return (
        <div className="Login">
            <div className="inner__login container">
                <div className="login__title">
                    <h2>login</h2>
                </div>
                <div className="login__content">
                    <form onSubmit={handleLogin}>
                        <div className="login__form">
                            <div className="input__group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter Email" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter Password" />
                            </div>
                            <div className="input__group">
                                <div className="account__login">
                                    <p>New user here? <Link to="/register">Register</Link></p>
                                </div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="google__login">
                                <h4>OR</h4>
                                <button onClick={handleGoogle}>Continue With Google <FaGoogle /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;