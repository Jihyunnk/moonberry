import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentInfo, saveShippingInfo } from '../store/cart';

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const session = useSelector((state) => state.session);
  const { userInfo } = session;

  const cart = useSelector((state) => state.cart);
  const { shippingInfo, paymentInfo } = cart;

  const [firstName, setFirstName] = useState(shippingInfo.firstName);
  const [lastName, setLastName] = useState(shippingInfo.lastName);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [country, setCountry] = useState(shippingInfo.country);

  const [fullName, setFullName] = useState(paymentInfo.fullName);
  const [creditCard, setCreditCard] = useState(paymentInfo.creditCard);
  const [expiration, setExpiration] = useState(paymentInfo.expiration);
  const [CVV, setCVV] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingInfo({
        firstName,
        lastName,
        address,
        city,
        postalCode,
        country,
      })
    );
    dispatch(savePaymentInfo({ fullName, creditCard, expiration }));
  };

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <div>
      <ul>
        <li>
          <div className="card card-body">
            <form className="form">
              <div>
                <h2>Shipping Address</h2>
              </div>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                ></input>
              </div>
            </form>
          </div>
        </li>
        <li>
          <div className="card card-body">
            <form className="form">
              <div>
                <h1>Payment</h1>
              </div>
              <div>
                <label htmlFor="fullName">Name on Card</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="creditCard">Credit Card Number</label>
                <input
                  type="text"
                  id="creditCard"
                  value={creditCard}
                  onChange={(e) => setCreditCard(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="expiration">Expiration</label>
                <input
                  type="text"
                  id="expiration"
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="CVV">CVV</label>
                <input
                  type="text"
                  id="CVV"
                  value={CVV}
                  onChange={(e) => setCVV(e.target.value)}
                  required
                ></input>
              </div>
            </form>
          </div>
        </li>
      </ul>
      <div>
        <button type="button" onClick={handleClick} className="primary">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Checkout;
