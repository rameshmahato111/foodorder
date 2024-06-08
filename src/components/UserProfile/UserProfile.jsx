// UserProfilePage.jsx
import React, { useState, useEffect } from 'react';
import OrderComponent from '../Order/OrderComponent';

const UserProfilePage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    contact: '',
    address: ''
  });

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user details and orders from backend
    // Example: fetchUserProfile(userId).then(user => setUserDetails(user));
    // Example: fetchUserOrders(userId).then(userOrders => setOrders(userOrders));
    setUserDetails({
      name: 'Ramesh Mahato',
      email: 'ramesh@gmail.com',
      contact: '123-456-7890',
      address: 'Tharu Museum Road, Bachhauli, Chitwan, Nepal'
    });

    setOrders([
      {
        id: 1,
        product: 'Product A',
        quantity: 2,
        price: 50,
        status: 'Processing'
      },
      {
        id: 2,
        product: 'Product B',
        quantity: 1,
        price: 100,
        status: 'Shipped'
      }
    ]);
  }, []);

  return (
    <section className="md:p-10 p-5">
      <h1 className="">User Profile</h1>
      <div className="mt-4">
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Contact:</strong> {userDetails.contact}</p>
        <p><strong>Address:</strong> {userDetails.address}</p>
      </div>
      <h2 className="mt-6">Orders</h2>
      <div  className=''>
        {orders.map(order => (
          <OrderComponent key={order.id} order={order} />
        ))}

      
      </div>

    </section>
  );
};

export default UserProfilePage;
