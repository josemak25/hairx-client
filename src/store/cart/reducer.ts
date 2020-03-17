import { CART_TYPES, CartAction, CartInitialState } from './types';

export const cartInitialState: CartInitialState = {
  cart: []
};

export default function cartReducer(
  state = cartInitialState,
  action: CartAction
) {
  switch (action.type) {
    case CART_TYPES.ADD_TO_CART: {
      return [...state.cart, action.payload];
    }

    case CART_TYPES.REMOVE_FROM_CART: {
      const newProduct = state.cart.filter(({ id }) => id !== action.payload);
      return [...newProduct];
    }

    default:
      return state;
  }
}
