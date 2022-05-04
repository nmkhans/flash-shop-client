import React, { useState, useEffect } from 'react';
import './Collection.css';
import SingleCollection from './../SingleCollection/SingleCollection';
import { Link } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";

const Collection = () => {
    const [carsCollection, setCarsCollection] = useState([]);
    let [color] = useState("#ff0000");
    const override = css`
        display: block;
        margin: 0 auto;
    `;
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setCarsCollection(data))
    }, [])

    const newCollection = carsCollection.slice(0, 6);
    console.log(newCollection.length)

    return (
        <div className="Collection">
            <div className="inner__collection container">
                <div className="collection__title">
                    <h2>Our collection</h2>
                </div>
                {
                    (newCollection.length === 0) ?
                        (<div className="collection__spinner">
                            <ScaleLoader color={color} size={500} height={100} width={15} radius={2} margin={5} css={override} />
                        </div>) : (<div className="collection__content">
                            {
                                newCollection.map(collection => <SingleCollection key={collection._id} collection={collection} />)
                            }
                        </div>)
                }


                <div className="collection__button">
                    <Link to="/manage-inventory">Manage Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default Collection;