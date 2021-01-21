import React from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    let newKey = 0;

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="Amazon ad"
                    className="checkout__ad"
                />

                <div>
                <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket.map((item) => (
                        <CheckoutProduct
                            key={newKey++}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
