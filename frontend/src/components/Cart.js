import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { addToCart } from '../store/cart';

function Cart() {
  const params = useParams();
  const { id: productId } = params;

  const { search } = useLocation();
  const quantityInURL = new URLSearchParams(search).get('quantity');
  const quantity = quantityInURL ? Number(quantityInURL) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  return (
    <div>
      <div>
        <h1 className="cart-header">YOUR CART</h1>
      </div>
      <div>
        <div className="card card-body">
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="min-25">
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>${item.price.toFixed(2)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
