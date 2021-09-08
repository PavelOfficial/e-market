import { combineReducers } from 'redux';
import { reducer as articles } from '../ui/redux/articles/reducer';
import { reducer as cart } from '../ui/redux/cart/reducer';

export const appReducer = combineReducers({
  articles,
  cart,
});

export default appReducer;
