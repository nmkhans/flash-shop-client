import React, { useState } from 'react';
import './AddItem.css';
import useFirebase from './../../hooks/useFirebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddItem = () => {
    const { user } = useFirebase();
    const [res, setRes] = useState({});
    const navigate = useNavigate();


    const handleAddItem = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.amount.value;
        const supplier = event.target.brand.value;
        const img = event.target.img.value;
        const description = event.target.desc.value;
        const item = { email, name, price, quantity, supplier, img, description };

        const url = `https://nmk-flashshop.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                setRes(data)
                if (res.acknowledged === true) {
                    toast('Item Succeccfully Added');
                }
            })
        event.target.reset();
        navigate('/manage-inventory')
    }
    return (
        <div className="AddItem">
            <div className="inner__addItem container">
                <div className="addItem__title">
                    <h2>add new Item</h2>
                </div>
                <div className="addItem__content">
                    <form onSubmit={handleAddItem}>
                        <div className="addItem__form">
                            <div className="input__group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Your Email" readOnly defaultValue={user?.email} />
                            </div>
                            <div className="input__group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter Item Name" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="price">Price</label>
                                <input type="number" name="price" id="price" placeholder="Enter Item Price" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" name="amount" id="amount" placeholder="Enter Item Amount" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="brand">Brand</label>
                                <input type="text" name="brand" id="brand" placeholder="Enter Item's Brand" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="img">Image</label>
                                <input type="text" name="img" id="img" placeholder="Enter Item's Image URL" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="desc">Description</label>
                                <textarea name="desc" id="desc" placeholder="Enter Item's Description"></textarea>
                            </div>
                            <div className="input__group">
                                <input type="submit" value="Add" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;