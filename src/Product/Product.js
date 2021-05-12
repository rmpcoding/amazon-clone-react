import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import { motion } from 'framer-motion';
import './Product.css';

const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch some action
        // dispatch item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        });
    };

    return (
        <motion.div
            className="product"
            whileHover={{ scale: 1.1 }}
        >
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"></p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span key={rating++}>⭐️</span>
                        ))}
                </div>
            </div>

            <img src={image} alt="Product card" className="product__image" />

            <button onClick={addToBasket}>Add to basket</button>
        </motion.div>
    );
};

export default Product;
