import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../store/cart';

function Cart() {
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;

  const session = useSelector((state) => state.session);
  const { userInfo } = session;

  const { search } = useLocation();
  const quantityInURL = new URLSearchParams(search).get('quantity');
  const quantity = quantityInURL ? Number(quantityInURL) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const toPrice = (num) => Number(num.toFixed(2));
  const itemsPrice = toPrice(
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
  );
  const shippingPrice = itemsPrice > 100 ? toPrice(0) : 14.25;
  const taxPrice = toPrice(0.15 * itemsPrice);
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const handleClick = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkout = () => {
    if (!userInfo) {
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div>
      <div>
        <h1 className="cart-header">YOUR CART</h1>
      </div>
      {cartItems.length === 0 ? (
        <div className="card card-body cart-wrapper">
          <div className="empty-cart">
            <img src="/empty-cart.webp" alt="empty-cart" />
          </div>
          <div className="cart-message">
            <h2>Your cart is empty!</h2>
            <p>Looks like you haven't added anything to your cart yet</p>
          </div>
          <div>
            <button className="shop" onClick={() => navigate('/products')}>
              Continue shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-2">
            <div className="card card-body item-wrapper">
              <ul>
                {cartItems.map((item) => (
                  <li key={item.product}>
                    <div className="row item-content">
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="small"
                        />
                      </div>
                      <div className="min-25">
                        <Link to={`/products/${item.product}`}>
                          {item.name}
                        </Link>
                      </div>
                      <div className="row item-details">
                        <div>
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                        <div>${item.price.toFixed(2)}</div>
                        <div>
                          <button
                            type="button"
                            onClick={() => handleClick(item.product)}
                            className="remove"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-1 order-summary-wrapper">
            <div className="card card-body order-summary">
              <ul>
                <li>
                  <p>Order Summary</p>
                </li>
                <li>
                  <div className="row">
                    <div>Subtotal</div>
                    <div>${itemsPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Estimated Shipping</div>
                    <div>${shippingPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Estimated Tax</div>
                    <div>${taxPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="total">Total</div>
                    <div>${totalPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={checkout}
                    className="checkout"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
