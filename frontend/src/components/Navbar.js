import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../store/session';

function Navbar() {
  const session = useSelector((state) => state.session);
  const { userInfo } = session;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(signout());
  };

  return (
    <>
      <div>
        <Link to="/" className="logo">
          MOONBERRY
        </Link>
      </div>
      <div>
        <Link to="/products">SHOP</Link>
        <Link to="/cart">CART</Link>
        {userInfo ? (
          <Link to="/" onClick={handleClick}>
            SIGN OUT
          </Link>
        ) : (
          <>
            <Link to="/login">LOGIN</Link>
            <Link to="/signup">SIGN UP</Link>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
