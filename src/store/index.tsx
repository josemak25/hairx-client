import React, { useReducer, useContext, FunctionComponent } from 'react';

import StoreContext from './types';
import useCombinedReducers from '../libs/useCombineReducer';

// all reducers on store
import userReducer, { userInitialState } from './user/reducer';
import gridSizeReducer, { gridInitialState } from './grid/reducer';

const StoreProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({
    userState: useReducer(userReducer, userInitialState),
    grid: useReducer(gridSizeReducer, gridInitialState)
  });

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };
