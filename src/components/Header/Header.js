import React, { useState } from 'react';
import './Header.css';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';
import LinkTo from '../LinkTo/LinkTo';
import useFirebase from './../../hooks/useFirebase';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const { user, handleSignOut } = useFirebase();
    const navigate = useNavigate();

    return (
        <div className="Header">
            <div className="inner__header container">
                <div className="header__content">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="header__nav">
                        <nav className="header__menu">
                            <ul>
                                <li>
                                    <LinkTo to="/">Home</LinkTo>
                                </li>
                                <li>
                                    <LinkTo to="/about">About</LinkTo>
                                </li>
                                <li>
                                    <LinkTo to="/services">Services</LinkTo>
                                </li>
                                <li>
                                    <LinkTo to="/blogs">Blog</LinkTo>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__account">
                            {
                                user?.uid ? (
                                    <div className="header__profile">
                                        <div onClick={() => setMenu(!menu)} className="profile__button">
                                            <img src={user?.photoURL} alt="" />
                                            {
                                                menu && (
                                                    <div className="profile__menu">
                                                        <ul>
                                                            <li>
                                                                My Item
                                                            </li>
                                                            <li>
                                                                Add Item
                                                            </li>
                                                            <li onClick={() => navigate('/manage-inventory')}>
                                                                Manage Item
                                                            </li>
                                                            <li onClick={handleSignOut}>
                                                                Logout
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                ) : (
                                    <div className="header__login__button">
                                        <button onClick={() => navigate('/login')}>Login</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;