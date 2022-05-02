import React from 'react';
import './Exclusive.css';
import { useNavigate } from 'react-router-dom';

const Exclusive = () => {
    const navigate = useNavigate();
    return (
        <div className="Exclusive">
            <div className="inner__exclisive__area container">
                <div className="exclusive__content">
                    <div className="exclusive__box">
                        <div onClick={() => navigate('/my-item')} className="exclusive__text">
                        <h4>Hot Collection</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;