import Axios from 'axios';

const GET_PRODUCT = 'GET_PRODUCT';

const _getProduct = (data) => {
  return {
    type: GET_PRODUCT,
    payload: data,
  };
};

export const getProduct = (productId) => async (dispatch) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch(_getProduct(data));
};

const initialState = { product: {} };

export const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { product: action.payload };
    default:
      return state;
  }
};
