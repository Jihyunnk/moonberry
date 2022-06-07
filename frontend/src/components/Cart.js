import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { addToCart } from '../store/cart';

function Cart() {
  const params = useParams();
  const { id: productId } = params;

  const { search } = useLocation();
  const quantityInURL = new URLSearchParams(search).get('quantity');
  const quantity = quantityInURL ? Number(quantityInURL) : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  return (
    <div>
      <div>
        <h1>YOUR CART</h1>
      </div>
      <div>Product ID: {productId}</div>
      <div>Qty: {quantity}</div>
    </div>
  );
}

export default Cart;
