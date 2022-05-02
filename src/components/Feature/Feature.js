import React from 'react';
import './Feature.css';
import { useNavigate } from 'react-router-dom';

const Feature = () => {
    const navigate = useNavigate();
    return (
        <div className="Feature">
            <div className="inner__feature">
                <div className="feature__content">
                    <div className="feature__left">
                        <div className="feature__title">
                            <h3>New Collection</h3>
                            <h2>All The leatest collection in one house.</h2>
                            <div className="feature__text">
                                <p>Countries best and latest model car's are available here. The best place to find your desire car in lot at best deal.</p>
                                <button onClick={() => navigate('/manage-inventory')}>Browser Collection
                                </button>
                            </div>
                        </div>
                        <div className="feature__detail">
                            <div className="feature__detail__img"></div>
                            <div className="feature__detail__desc">
                                <div className="feature__detail__desc__box">
                                    <h3>What We Do</h3>
                                    <p>We have the collection of all kind of cars. We keep variation of cars. You can take your car or add of your own choise.</p>
                                </div>
                                <div className="feature__detail__desc__box">
                                    <h3>The Opportunities</h3>
                                    <p>We're online car management werehouse. Here you can find all kind of cars. If you want you can add car of your own.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feature__right"></div>
                </div>
            </div>
        </div>
    );
};

export default Feature;