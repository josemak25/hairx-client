import {
  SCREEN_GRID_TYPES,
  ScreenGridStateInterface,
  ScreenGridAction
} from './types';
import { RESPONSIVE_CARD_SIZES } from '../../constants';

export const gridInitialState: ScreenGridStateInterface = RESPONSIVE_CARD_SIZES;

export default function ScreenGridSizeReducer(
  state = gridInitialState,
  action: ScreenGridAction
) {
  switch (action.type) {
    case SCREEN_GRID_TYPES.SET_PHONE_GRID: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
