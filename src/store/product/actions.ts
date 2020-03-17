import { PRODUCT_TYPES, ProductAction, ProductInterface } from './types';

const getProductStarted = (): ProductAction => ({
  type: PRODUCT_TYPES.GET_PRODUCT_STARTED
});

const getProductSuccess = (payload: ProductInterface[]): ProductAction => ({
  type: PRODUCT_TYPES.GET_PRODUCT_SUCCESS,
  payload
});

const getProductError = (error: string): ProductAction => ({
  type: PRODUCT_TYPES.GET_PRODUCT_ERROR,
  payload: error
});

export default function productActions() {
  return (dispatch: any) => {
    // To unsubscribe to these update, just use the functions:
  };
}
