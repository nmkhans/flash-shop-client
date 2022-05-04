import React, { useEffect, useState } from 'react';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import './ManageInventory.css';
import { useNavigate } from 'react-router-dom';
import useAlert from './../../hooks/useAlert';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";

const ManageInventory = () => {
    const [inventory, setInventory] = useState([]);
    const [res, setRes] = useState({});
    const { MySwal } = useAlert();
    const navigate = useNavigate();
    const [color] = useState("#ff0000");
    const override = css`
        display: block;
        margin: 0 auto;
    `;

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [res])

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
        <div className="ManageInventory">
            <div className="inner__manageInventory container">
                <div className="manageInventory__title">
                    <h2>Manage Inventory</h2>
                </div>
                <div className="managInventory__button">
                    <button onClick={() => navigate('/add-item')}>Add new Item</button>
                    <button>Empty Inventory</button>
                </div>

                {
                    (inventory.length === 0) ?
                        (<div className="manageInventory__spinner">
                            <ScaleLoader color={color} size={500} height={100} width={15} radius={2} margin={5} css={override} />
                        </div>) : (<div className="manageInventory__content">
                            {
                                inventory.map(item => <InventoryItem key={item._id} item={item} handleDelete={handleDelete} />)
                            }
                        </div>)
                }
                <div className="">

                </div>

            </div>
        </div>
    );
};

export default ManageInventory;