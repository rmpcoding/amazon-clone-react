import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';
import './Subtotal.css';

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>
                                {basket.length}
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to checkout</button>
        </div>
    );
};

export default Subtotal;
