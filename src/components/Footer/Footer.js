import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="Footer">
            <div className="inner__footer container">
                <div className="footer__content">
                    <div className="footer__logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="footer__text">
                        <p>© {year} Flash workshop. All Rights Reserved.</p>
                    </div>
                    <div className="footer__social">
                        <ul>
                            <li>
                                <span><FaFacebook /></span>
                            </li>
                            <li>
                                <span><FaTwitter /></span>
                            </li>
                            <li>
                                <span><FaLinkedin  /></span>
                            </li>
                            <li>
                                <span><FaInstagram  /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;