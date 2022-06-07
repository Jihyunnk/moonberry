import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Cart() {
  const params = useParams();
  const { id: productId } = params;

  const { search } = useLocation();
  const quantityInURL = new URLSearchParams(search).get('quantity');
  const quantity = quantityInURL ? Number(quantityInURL) : 1;

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
