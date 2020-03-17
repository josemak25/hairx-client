/*
 **************************************************************
 ************************* PRODUCT TYPES **********************
 **************************************************************
 */

// PRODUCT TYPES
export enum PRODUCT_TYPES {
  GET_PRODUCT_STARTED = 'GET_PRODUCT_STARTED',
  GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS',
  GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR'
}

export interface ProductInterface {
  id: string;
  price: string;
  product_id: string;
  quantity: number;
  title: string;
  vendor_id: string;
  vendor_title: string;
  name: string;
  description: string;
  total_discount: string;
  images: string[];
}

// TYPESCRIPT TYPES
export type ProductInitialState = {
  isLoading: boolean;
  error?: string | null;
  products: ProductInterface[]; // cart object interface when product object structure is identified
};

export type ProductAction =
  | { type: PRODUCT_TYPES.GET_PRODUCT_STARTED } // product item, please change this type when product interface is defined
  | { type: PRODUCT_TYPES.GET_PRODUCT_SUCCESS; payload: ProductInterface[] } // product item, please change this type when product interface is defined
  | { type: PRODUCT_TYPES.GET_PRODUCT_ERROR; payload: string }; // product item, please change this type when product interface is defined
