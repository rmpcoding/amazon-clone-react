import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { getBasketTotal } from '../Reducer';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = (event) => {
        console.log('hi, submit me');
        // Add Stripe functionality here
    };

    const handleChange = (event) => {
        console.log('hi, you changed me');
        // Listen for changes in the CardElement
        // Display any errors as the customer types their card details

        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout{' '}
                    {<Link to="/checkout">{basket?.length} items</Link>}
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Ave</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe will go here */}

                        <form onSubmit={handleSubmit} action="">
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                Subtotal ({basket.length}{' '}
                                                items):
                                                <strong>{value}</strong>
                                            </p>
                                            <small className="subtotal__gift">
                                                <input type="checkbox" />
                                            </small>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
