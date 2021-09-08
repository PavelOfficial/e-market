import { reducerBuilder } from '../../../redux/reducerBuilder';

import { updateCart } from './updateCart';
import { clearCart } from './clearCart';
import { initialState } from './initialState';

const reducerItems = [
  updateCart,
  clearCart,
];

export const reducer = reducerBuilder(reducerItems, initialState);

export default reducer;
