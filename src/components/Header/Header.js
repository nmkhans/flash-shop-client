import React from 'react';
import './Header.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import LinkTo from '../LinkTo/LinkTo';

const Header = () => {
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
                            <div className="header__login__button">
                                <button>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;