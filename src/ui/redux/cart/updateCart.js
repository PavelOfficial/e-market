const actionType = 'UPDATE_CART';

const reducer = (state, action) => {
  state = { ...state };

  if (action.count === 0) {
    delete state[action.id];

    return state;
  }

  state[action.id] = action.count;

  return state;
};

const createAction = (id, count) => ({
  type: actionType,
  id,
  count,
});

export const updateCart = {
  actionType,
  createAction,
  reducer,
};

export default updateCart;
