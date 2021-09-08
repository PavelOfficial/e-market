
export const reducerBuilder = (reducerItems, initialState) => {
  const reducers = reducerItems.reduce((result, reducerItem) => {
    result[reducerItem.actionType] = reducerItem.reducer;

    return result;
  }, {});

  return (state = initialState, action) => {
    const reducer = reducers[action.type];

    if (reducer) {
      return reducer(state, action);
    }

    return state;
  };
};

export default reducerBuilder;
