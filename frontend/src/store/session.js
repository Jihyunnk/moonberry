import Axios from 'axios';

/* Action Constants */

const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

/* Action Types */

const setUser = (userInfo) => {
  return {
    type: SET_USER,
    payload: userInfo,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

/* Thunks */

export const signup = (name, email, password) => async (dispatch) => {
  const { data } = await Axios.post('/api/users/signup', {
    name,
    email,
    password,
  });
  dispatch(setUser(data));
  localStorage.setItem('userInfo', JSON.stringify(data));
};

export const login = (email, password) => async (dispatch) => {
  const { data } = await Axios.post('/api/users/login', {
    email,
    password,
  });
  dispatch(setUser(data));
  localStorage.setItem('userInfo', JSON.stringify(data));
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingInfo');
  localStorage.removeItem('paymentInfo');
  dispatch(removeUser());
};

/* Session Reducer */

const initialState = {};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { userInfo: action.payload };
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};
