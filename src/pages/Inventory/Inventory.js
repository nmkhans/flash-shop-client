import React, { useState, useEffect } from 'react';
import './Inventory.css';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const [inventoryItem, setInventoryItem] = useState({});
    const { id } = useParams();
    useState(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => setInventoryItem(data));
    }, []);

    const { name, img, description, price, quantity, supplier } = inventoryItem;

    return (
        <div className="Inventory">
            <div className="inner__inventory container">
                <div className="inventory__content">
                    <div className="inventory__content__top">
                        <div className="inventory__feature">
                            <img src={img} alt="" />
                        </div>
                        <div className="inventory__detail">
                            <h3>{name}</h3>
                            <p className="inventory__detail__price">${price}</p>
                            <p className="inventory__detail__stock">In stoke: {quantity}</p>
                            <p className="inventory__detail__brand">Brand: {supplier}</p>
                            <p className="inventory__detail__desc">{description}</p>
                            <div className="inventory__button">
                                <button>Delivered</button>
                                <button>Restock</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;