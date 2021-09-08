import { initialState } from './initialState';

const actionType = 'CLEAR_CART';

const reducer = () => initialState;

const createAction = () => ({
  type: actionType,
});

export const clearCart = {
  actionType,
  createAction,
  reducer,
};

export default clearCart;
