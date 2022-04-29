import React from 'react';
import './SingleCollection.css';

const SingleCollection = ({collection}) => {
    const {name, img, description, price, quantity, supplier} = collection;

    return (
        <div className="SingleCollection">
            <div className="singleCollection__feature">
                <img src={img} alt="" />
            </div>
            <div className="singleCollection__detail">
                <h3>{name}</h3>
                <p className="collection__price">${price}</p>
                <p className="collection__stock">In Stock: {quantity}</p>
                <p className="collection__brand">Brand: {supplier}</p>
                <p className="collection__desc">{description}</p>
                <button>Manage</button>
            </div>
        </div>
    );
};

export default SingleCollection;