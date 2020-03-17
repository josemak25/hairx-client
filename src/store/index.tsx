import React, {
  createContext,
  useReducer,
  useContext,
  FunctionComponent
} from 'react';

import useCombinedReducers from '../utils/useCombinedReducers';

import userReducer, { userInitialState } from './user/reducer';
import cartReducer, { cartInitialState } from './cart/reducer';
import productReducer, { productInitialState } from './product/reducer';

import { UserInitialState } from './user/types';
import { CartInitialState } from './cart/types';
import { ProductInitialState } from './product/types';

// We define our type for the context properties right here
export interface ContextProps {
  state: {
    userState: UserInitialState;
    cartState: CartInitialState;
    productState: ProductInitialState;
  };
  dispatch?: any;
}

const StoreContext = createContext<ContextProps>({
  state: {
    userState: userInitialState,
    cartState: cartInitialState,
    productState: productInitialState
  }
});

const StoreProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({
    userState: useReducer(userReducer, userInitialState),
    cartState: useReducer(cartReducer, cartInitialState),
    productState: useReducer(productReducer, productInitialState)
  });

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };
