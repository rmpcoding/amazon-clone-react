import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import './App.css';
import { useStateValue } from './StateProvider/StateProvider';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
    'pk_test_51IAma0J94qERnbT35KUYHyVhuQ2fg3rUhVjGJZTosC7OFBFxX4SStPrzyze5RpdVUaBngOf4D01kze4nMdURwzOW00KcW6jAd9'
);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log('THE USER IS -->', authUser);

            if (authUser) {
                // user is logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                // user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="app">
                <Switch>
                    {/* <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route> */}
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>

                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
