import React, { useEffect, useState } from 'react';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import './ManageInventory.css';

const ManageInventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventory(data))
    }, [])


    return (
        <div className="ManageInventory">
            <div className="inner__manageInventory container">
                <div className="manageInventory__title">
                    <h2>Manage Inventory</h2>
                </div>
                <div className="manageInventory__content">
                    {
                        inventory.map(item => <InventoryItem key={item._id} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;