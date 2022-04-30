import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import './UserItem.css';
import useFirebase from '../../hooks/useFirebase';

const UserItem = () => {
    const { user } = useFirebase();
    const [inventory, setInventory] = useState([]);
    const [item, setItem] = useState(null);
    const [res, setRes] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/useritem?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data) {
                    setInventory(data)
                    setItem(true)
                }
            })

    }, [user.email, res, item])

    const handleDelete = (id) => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: "Delete"
        })
        .then(res => res.json())
        .then(data => setRes(data))
    }

    return (
        <div className="Useritem">
            <div className="inner__useritem container">
                <div className="useritem__title">
                    <h2>My Items</h2>
                </div>
                <div className="useritem__content">
                    {
                        inventory.map(item => <InventoryItem key={item._id} item={item} handleDelete={handleDelete} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default UserItem;