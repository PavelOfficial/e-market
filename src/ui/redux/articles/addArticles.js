const actionType = 'ADD_ARTICLES';

const reducer = (state, action) => {
  state = { ...state };
  state.page += 1;
  state.isLastPage = action.isLastPage;
  state.list = [
    ...state.list,
    ...action.articles,
  ];

  return state;
};

const createAction = (articles, isLastPage) => ({
  type: actionType,
  articles,
  isLastPage,
});

export const addArticles = {
  actionType,
  createAction,
  reducer,
};

export default addArticles;
