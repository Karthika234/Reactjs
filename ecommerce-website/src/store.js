import { createStore } from 'redux';

const initialState = {
  products: [],
  cart: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.product] };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
