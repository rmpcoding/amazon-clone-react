import React, { useState, useEffect } from 'react';
import axios from '../Axios/Axios';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { getBasketTotal } from '../Reducer';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        // when basket changes, tell stripe to generate new secret
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in currencies' subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            console.log(response);
            return setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    console.log('THE SECRET IS >>>> ', clientSecret); //7:08:42

    const handleSubmit = async (event) => {
        // Add Stripe functionality here
        event.preventDefault();
        console.log('payment processing');
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                // paymentIntent = payment confirmation
                console.log(paymentIntent);

                setSucceeded(true);
                setError(false);
                setProcessing(false);

                dispatch({
                    type: 'EMPTY_BASKET'
                })                

                history.replace('/orders');
            });

        console.log(payload);
    };

    const handleChange = async (event) => {
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
                                <button
                                    disabled={
                                        processing || disabled || succeeded
                                    }
                                >
                                    <span>
                                        {processing ? (
                                            <p>Processing</p>
                                        ) : (
                                            'Buy Now'
                                        )}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
