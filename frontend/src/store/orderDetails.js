import Axios from 'axios';

const GET_ORDER = 'GET_ORDER';

export const getOrder = (orderId) => async (dispatch, getState) => {
  const {
    session: { userInfo },
  } = getState();
  const { data } = await Axios.get(`/api/confirmation/${orderId}`, {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  });
  dispatch({ type: GET_ORDER, payload: data });
};

const initialState = { order: {} };

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return { order: action.payload };
    default:
      return state;
  }
};
