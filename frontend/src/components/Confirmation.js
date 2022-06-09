import React from 'react';
import { useSelector } from 'react-redux';
function Confirmation() {
  const cart = useSelector((state) => state.cart);
  const { shippingInfo, cartItems } = cart;

  return (
    <div>
      <div className="confirmation-wrapper">
        <h1 className="confirmation-message">
          Thank you for shopping with us!
        </h1>
        <div className="card card-body confirmation-card">
          <h2>Order</h2>
          <p>Your order is confirmed.</p>
          <p>You'll receive an email when your order is ready.</p>
        </div>
        <div className="card card-body confirmation-card">
          <h2>Customer Information</h2>
          <div className="customer-info">
            <div>
              <p>Customer Name</p>
              <p>
                {shippingInfo.firstName} {shippingInfo.lastName}
              </p>
              <br />
              <p>Shipping Address</p>
              <p>
                {shippingInfo.address}, {shippingInfo.city},{' '}
                {shippingInfo.postalCode}, {shippingInfo.country}
              </p>
            </div>
            <div>
              <p>Payment Method</p>
              <p>Credit Card</p>
              <br />
              <p>Billing Address</p>
              <p>
                {shippingInfo.address}, {shippingInfo.city},{' '}
                {shippingInfo.postalCode}, {shippingInfo.country}
              </p>
            </div>
          </div>
        </div>
        <div className="card card-body border confirmation-card">
          <h2>Order Items</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div>
                  <div className="row">
                    <div className="row">
                      <img src={item.image} alt={item.name} className="small" />
                      <p>{item.name}</p>
                    </div>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
