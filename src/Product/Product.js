import React from 'react';
import './Product.css';

const Product = ( { title, image, price, rating }) => {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"></p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <span>⭐️</span>
                    ))}
                </div>
            </div>

            <img
                src={image}
                alt="Product card"
                className="product__image"
            />

            <button>Add to basket</button>
        </div>
    );
};

export default Product;
