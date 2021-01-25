import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="Product" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="CheckoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span key={rating++}>⭐️</span>
                        ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>
                        Remove from Basket
                    </button>
                )}
            </div>
        </div>
    );
};

export default CheckoutProduct;
