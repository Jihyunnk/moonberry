import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './cart';
import { orderReducer } from './order';
import { productsReducer } from './products';
import { sessionReducer } from './session';
import { singleProductReducer } from './singleProduct';

const initialState = {
  session: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingInfo: localStorage.getItem('shippingInfo')
      ? JSON.parse(localStorage.getItem('shippingInfo'))
      : {},
    paymentInfo: localStorage.getItem('paymentInfo')
      ? JSON.parse(localStorage.getItem('paymentInfo'))
      : {},
  },
};

const reducer = combineReducers({
  session: sessionReducer,
  allProducts: productsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  placeOrder: orderReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
