import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collection from '../../components/Collection/Collection';
import Feature from './../../components/Feature/Feature';
import Exclusive from './../../components/Exclusive/Exclusive';
import Performence from './../../components/Performence/Performence';

const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <Feature />
            <Collection />
            <Exclusive />
            <Performence />
        </div>
    );
};

export default Home;