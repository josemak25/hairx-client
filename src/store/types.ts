import { createContext } from 'react';

// all reducers on store
import { userInitialState } from './user/reducer';
import { gridInitialState } from './grid/reducer';

// all reducers initial state interface
import { UserInitialState } from './user/types';
import { ScreenGridStateInterface } from './grid/types';

// We define our type for the context properties right here
interface ContextProps {
  state: { userState: UserInitialState; grid: ScreenGridStateInterface };
  dispatch?: any;
}

const StoreContext = createContext<ContextProps>({
  state: { userState: userInitialState, grid: gridInitialState }
});

export default StoreContext;
