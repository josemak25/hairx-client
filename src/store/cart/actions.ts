import { CART_TYPES, CartAction } from './types';
import { ProductInterface } from '../product/types';

const addToCart = (payload: ProductInterface): CartAction => ({
  type: CART_TYPES.ADD_TO_CART,
  payload
});

const removeFromCart = (productId: string): CartAction => ({
  type: CART_TYPES.REMOVE_FROM_CART,
  payload: productId
});

export default function cartActions() {
  return (dispatch: any) => {
    // To unsubscribe to these update, just use the functions:
  };
}
