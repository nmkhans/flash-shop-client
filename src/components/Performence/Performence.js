import React from 'react';
import './Performence.css';
import { Link } from 'react-router-dom';

const Performence = () => {
    return (
        <div className="Performance">
            <div className="inner__performance container">
                <div className="performance__content">
                    <div className="performance__left">
                        <h2>Open Horizons</h2>
                        <h3>Perfomance! Hello Open Cars</h3>
                    </div>
                    <div className="performance__right">
                        <p>We are the best here. The best to provide you the best car service you ever had. Our werehouse is the ocean of car's. Where you can find anything you want the the best rate.</p>
                        <p>Ultra modern, futurastic, super, delux, fast, furious. Any kind of car you can imagin can easily be found here. Thats why we are the best. And the exclusive.</p>
                        <Link to="/manage-inventory">Find Out More</Link>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Performence;