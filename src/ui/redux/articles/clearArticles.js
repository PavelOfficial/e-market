import { initialState } from './initialState';

const actionType = 'CLEAR_ARTICLES';

const reducer = () => initialState;

const createAction = () => ({
  type: actionType,
});

export const clearArticles = {
  actionType,
  createAction,
  reducer,
};

export default clearArticles;
