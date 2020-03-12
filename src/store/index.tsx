import React, {
  createContext,
  useReducer,
  useContext,
  FunctionComponent
} from 'react';

import useCombinedReducers from '../utils/useCombinedReducers';

import userReducer, { userInitialState } from './user/reducer';
import { UserInitialState } from './user/types';

// We define our type for the context properties right here
export interface ContextProps {
  state: { userState: UserInitialState };
  dispatch?: any;
}

const StoreContext = createContext<ContextProps>({
  state: { userState: userInitialState }
});

const StoreProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({
    userState: useReducer(userReducer, userInitialState)
  });

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };
