import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider/StateProvider';
import './Orders.css';

const Orders = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('create', 'desc')
                .onSnapshot((snapshot) =>
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
                );
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className="orders">
            <h1>Your Orders</h1>
        </div>
    );
};

export default Orders;
