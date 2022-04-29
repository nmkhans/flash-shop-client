import React, {useState, useEffect} from 'react';
import './Collection.css';
import SingleCollection from './../SingleCollection/SingleCollection';
import { Link } from 'react-router-dom';

const Collection = () => {
    const [carsCollection, setCarsCollection] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setCarsCollection(data))
    }, [])

    const newCollection = carsCollection.slice(0, 6);

    return (
        <div className="Collection">
            <div className="inner__collection container">
                <div className="collection__title">
                    <h2>Our collection</h2>
                </div>
                <div className="collection__content">
                    {
                        newCollection.map(collection => <SingleCollection key={collection._id} collection={collection} />)
                    }
                </div>
                <div className="collection__button">
                    <Link to="/manage-inventory">Manage Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default Collection;