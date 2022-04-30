import React, { useEffect, useState } from 'react';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import './ManageInventory.css';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [inventory, setInventory] = useState([]);
    const [res, setRes] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [res])

    const handleDelete = (id) => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: "Delete"
        })
        .then(res => res.json())
        .then(data => setRes(data))
    }

    return (
        <div className="ManageInventory">
            <div className="inner__manageInventory container">
                <div className="manageInventory__title">
                    <h2>Manage Inventory</h2>
                </div>
                <div className="managInventory__button">
                    <button onClick={() => navigate('/add-item')}>Add new Item</button>
                    <button>Empty Inventory</button>
                </div>
                <div className="manageInventory__content">
                    {
                        inventory.map(item => <InventoryItem key={item._id} item={item} handleDelete={handleDelete} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;