import React, { useEffect, useState } from 'react';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import './UserItem.css';
import useFirebase from '../../hooks/useFirebase';
import useAlert from './../../hooks/useAlert';

const UserItem = () => {
    const { user } = useFirebase();
    const [inventory, setInventory] = useState([]);
    const [item, setItem] = useState(null);
    const [res, setRes] = useState({});
    const { MySwal } = useAlert();

    useEffect(() => {
        const url = `http://localhost:5000/useritem?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setInventory(data)
                    setItem(true)
                }
            })

    }, [user.email, res, item])

    const handleDelete = (id) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/inventory/${id}`;
                fetch(url, {
                    method: "Delete"
                })
                    .then(res => res.json())
                    .then(data => setRes(data))
                if (res) {
                    MySwal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            }
        })
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