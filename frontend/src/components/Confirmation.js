import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrder } from '../store/orderDetails';
function Confirmation() {
  // const cart = useSelector((state) => state.cart);
  // const { shippingInfo, cartItems } = cart;
  const params = useParams();
  const { id: orderId } = params;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder(orderId));
  }, [dispatch, orderId]);

  return (
    <div>
      {order._id ? (
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
                    {order.shippingInfo.firstName} {order.shippingInfo.lastName}
                  </p>
                  <br />
                  <p>Shipping Address</p>
                  <p>
                    {order.shippingInfo.address}, {order.shippingInfo.city},{' '}
                    {order.shippingInfo.postalCode},{' '}
                    {order.shippingInfo.country}
                  </p>
                </div>
                <div>
                  <p>Payment Method</p>
                  <p>Credit Card</p>
                  <br />
                  <p>Billing Address</p>
                  <p>
                    {order.shippingInfo.address}, {order.shippingInfo.city},{' '}
                    {order.shippingInfo.postalCode},{' '}
                    {order.shippingInfo.country}
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-body border confirmation-card">
              <h2>Order Items</h2>
              <ul>
                {order.orderItems.map((item) => (
                  <li key={item.product}>
                    <div>
                      <div className="row">
                        <div className="row">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          />
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
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default Confirmation;
