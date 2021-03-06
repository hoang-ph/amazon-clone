import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import './Orders.css';
import { db } from '../apis/firebase';
import { useStateValue } from '../StateProvider';
import Order from './Order';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let unsub;
    if (user) {
      const q = query(
        collection(db, 'users', user?.uid, 'orders'),
        orderBy('created', 'desc')
      );
      unsub = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
    return unsub;
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      <div className='orders__order'>
        {orders?.map((order, idx) => (
          <Order key={idx} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
