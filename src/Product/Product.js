import React from 'react';
import './Product.css';

const Product = () => {
    return (<div className="product">
    
    <div className="product__info">
        <p>This is a product for now</p>
        <p className="product__price"></p>
        <small>$</small>
        <strong>19.99</strong>
        <div className="product__rating">
        <span>⭐️</span>
        <span>⭐️</span>
        <span>⭐️</span>
        <span>⭐️</span>
        <span>⭐️</span>
        </div>

    </div>
    


    <img src="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg" alt="Product card" className="product__image"/>
    
    <button>Add to basket</button>
    
    </div>);
};

export default Product;
