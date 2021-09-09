const actionType = 'ADD_ARTICLES';

const reducer = (state, action) => {
  const { options } = action;

  state = { ...state };
  state.page = options.page;
  state.search = {
    ...state.search,
    query: options.query,
    isInCart: options.isInCart,
  };

  state.isLastPage = action.isLastPage;
  state.list = [
    ...state.list,
    ...action.articles,
  ];

  state.store = state.list.reduce((result, item) => {
    result[item.id] = item;

    return result;
  }, state.store);

  return state;
};

const createAction = (articles, isLastPage, options) => ({
  type: actionType,
  articles,
  isLastPage,
  options,
});

export const addArticles = {
  actionType,
  createAction,
  reducer,
};

export default addArticles;
