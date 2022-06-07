import Axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';

const _addToCart = (data, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      inventory: data.inventory,
      product: data._id,
      quantity,
    },
  };
};

export const addToCart = (productId, quantity) => async (dispatch) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch(_addToCart(data, quantity));
};

const initialState = { cartItems: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
};
