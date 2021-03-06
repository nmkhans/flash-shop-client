import React from 'react';
import './IntentoryItem.css';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({ item, handleDelete }) => {
    const { name, img, price, quantity, supplier, _id } = item;
    const navigate = useNavigate();
    const toManage = (id) => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className="InventoryItem">
            <div className="inventoryItem__content">
                <div className="inventoryItem__feature">
                    <img src={img} alt="" />
                </div>
                <div className="inventoryItem__detail">
                    <div className="inventoryItem__description">
                        <span className="inventoryItem__title">
                            <h4>{name}</h4>
                        </span>
                        <span className="inventoryItem__stock">
                            <p>In Stock: {quantity}</p>
                        </span>
                        <span className="inventoryItem__price">
                            <p>${price}</p>
                        </span>
                        <span className="inventoryItem__price">
                            <p>Brand: {supplier}</p>
                        </span>
                    </div>
                    <div className="inventoryItem__button">
                        <button onClick={() => toManage(_id)}>Manage</button>
                        <button onClick={() => handleDelete(_id)}><span>Delete</span><span><FaTrashAlt /></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;