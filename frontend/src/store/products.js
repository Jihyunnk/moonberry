import Axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';

const _setProducts = (data) => {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
};

export const setProducts = () => async (dispatch) => {
  const { data } = await Axios.get('/api/products');
  dispatch(_setProducts(data));
};

const initialState = { products: [] };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { products: action.payload };
    default:
      return state;
  }
};
