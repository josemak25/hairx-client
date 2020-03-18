import React, {
  createContext,
  useReducer,
  useContext,
  FunctionComponent
} from 'react';

import useCombinedReducers from '../libs/useCombineReducer';

// all reducers on store
import userReducer, { userInitialState } from './user/reducer';
import gridSizeReducer, { gridInitialState } from './grid/reducer';

// all reducers initial state interface
import { UserInitialState } from './user/types';
import { ScreenGridStateInterface } from './grid/types';

// We define our type for the context properties right here
export interface ContextProps {
  state: { userState: UserInitialState; grid: ScreenGridStateInterface };
  dispatch?: any;
}

const StoreContext = createContext<ContextProps>({
  state: { userState: userInitialState, grid: gridInitialState }
});

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
