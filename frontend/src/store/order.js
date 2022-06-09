import Axios from 'axios';
import { EMPTY_CART } from './cart';

const SET_ORDER = 'SET_ORDER';
export const RESET_ORDER = 'RESET_ORDER';

export const setOrder = (order) => async (dispatch, getState) => {
  const {
    session: { userInfo },
  } = getState();
  const { data } = await Axios.post('/api/confirmation', order, {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  });
  dispatch({
    type: SET_ORDER,
    payload: data.order,
  });
  dispatch({ type: EMPTY_CART });
  localStorage.removeItem('cartItems');
};

const initialState = {};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return { success: true, order: action.payload };
    case RESET_ORDER:
      return {};
    default:
      return state;
  }
};
