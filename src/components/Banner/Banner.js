import React from 'react';
import './Banner.css';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

const Banner = () => {
    return (
        <div className="Banner">
            <div className="inner__banner__area container">
                <div className="banner__content">
                    <h1>Best cars werehouse in the plannet.</h1>
                    <p>Weh have the best cars collection. This is the place to find your desire cars combination. The cars haven.</p>
                    <button>Discover More</button>

                    <div className="banner__scroll">
                        <p>Scroll Down</p>
                        <span><HiOutlineArrowNarrowDown className="banner__icon" /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;