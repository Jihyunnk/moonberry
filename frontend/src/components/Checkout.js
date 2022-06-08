import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingInfo } from '../store/cart';

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const session = useSelector((state) => state.session);
  const { userInfo } = session;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

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
  };

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <div>
      <div>
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
          <div>
            <button type="button" onClick={handleClick} className="primary">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
