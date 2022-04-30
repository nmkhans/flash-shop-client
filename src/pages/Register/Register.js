import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {

    const { registerUser } = useFirebase();

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.ConfirmPassword.value;
        if(password === confirmPassword) {
            registerUser(name, img, email, password)
        }
        event.target.reset();
    }
    

    return (
        <div className="Register">
            <div className="inner__register container">
                <div className="register__title">
                    <h2>Register</h2>
                </div>
                <div className="register__content">
                    <form onSubmit={handleRegister}>
                        <div className="register__form">
                            <div className="input__group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter Name" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="img">Image</label>
                                <input type="text" name="img" id="img" placeholder="Live image URL" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="name">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter Email" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter Password" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="ConfirmPassword">Confirm Password</label>
                                <input type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="Confirm Password" />
                            </div>
                            <div className="input__group">
                                <div className="account__login">
                                    <p>Already have an account? <Link to="/login">Login</Link></p>
                                </div>
                                <input type="submit" value="Register" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;