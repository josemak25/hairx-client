/*
 **************************************************************
 ************************* CART TYPES *************************
 **************************************************************
 */

import { ProductInterface } from '../product/types';

// CART TYPES
export enum CART_TYPES {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}

// TYPESCRIPT TYPES
export type CartInitialState = {
  cart: ProductInterface[]; // cart object interface when product object structure is identified
};

export type CartAction =
  | { type: CART_TYPES.ADD_TO_CART; payload: ProductInterface } // product item, please change this type when product interface is defined
  | { type: CART_TYPES.REMOVE_FROM_CART; payload: string }; // product item, please change this type when product interface is defined
