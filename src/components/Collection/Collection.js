import React, {useState, useEffect} from 'react';
import './Collection.css';
import SingleCollection from './../SingleCollection/SingleCollection';

const Collection = () => {
    const [carsCollection, setCarsCollection] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
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
            </div>
        </div>
    );
};

export default Collection;