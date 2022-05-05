import React, { useEffect, useState } from 'react';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import './UserItem.css';
import useFirebase from '../../hooks/useFirebase';
import useAlert from './../../hooks/useAlert';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";

const UserItem = () => {
    const { user } = useFirebase();
    const [inventory, setInventory] = useState([]);
    const [item, setItem] = useState(null);
    const [res, setRes] = useState({});
    const { MySwal } = useAlert();
    const [color] = useState("#ff0000");
    const override = css`
        display: block;
        margin: 0 auto;
    `;

    useEffect(() => {
        const url = `http://localhost:5000/useritem?email=${user.email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('access-token'))}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setInventory(data)
                    setItem(true)
                }
            })

    }, [user?.email, res, item])

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
                {
                    (inventory.length === 0) ?
                        (<div className="useritem__content__spinner">
                            <ScaleLoader color={color} size={500} height={100} width={15} radius={2} margin={5} css={override} />
                        </div>) :
                        (<div className="useritem__content">
                            {
                                inventory?.map(item => <InventoryItem key={item._id} item={item} handleDelete={handleDelete} />)
                            }
                        </div>)
                }


            </div>
        </div>
    );
}

export default UserItem;