import React, { useState, useEffect } from 'react';
import './Inventory.css';
import { useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {
    const [inventoryItem, setInventoryItem] = useState({});
    const [res, setRes] = useState({});
    const [reStock, setReStock] = useState(false);
    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventoryItem(data));
    }, [id, res]);

    const { name, img, description, price, quantity, supplier } = inventoryItem;

    //? Handle Delivery operation
    const handleDeliver = () => {
        if (quantity > 0) {
            const newQuantity = {
                quantity: (quantity - 1)
            };

            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity),
            })
                .then(res => res.json())
                .then(data => setRes(data));
        }
    }

    //? Handle restock submittion
    const handleForm = (event) => {
        event.preventDefault();
        const amount = parseInt(event.target.amount.value);
        const newQuantity = {
            quantity: (quantity + amount),
        }
        console.log(newQuantity)
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => setRes(data))
    }

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
                            <p className="inventory__detail__stock">In stoke: {(quantity !== 0) ? quantity : "Out of stock"}</p>
                            <p className="inventory__detail__brand">Brand: {supplier}</p>
                            <p className="inventory__detail__desc">{description}</p>
                            <div className="inventory__button">
                                <div className="inventory__button__top">
                                    <button onClick={() => setReStock(!reStock)}>Restock</button>
                                    <button onClick={() => navigate('/manage-inventory')}>Manage Inventory</button>
                                </div>
                                <div className="inventory__button__botttom">
                                    <button onClick={handleDeliver}>Delivered</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {reStock && (
                        <div className="inventory__restock">
                            <form onSubmit={handleForm}>
                                <div className="inventory__restock__field">
                                    <input type="number" name="amount" placeholder="Enter Amount" />
                                </div>
                                <div className="inventory__restock__field">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Inventory;