import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collection from '../../components/Collection/Collection';
import Feature from './../../components/Feature/Feature';

const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <Feature />
            <Collection />
        </div>
    );
};

export default Home;