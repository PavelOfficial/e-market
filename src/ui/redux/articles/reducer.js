import { reducerBuilder } from '../../../redux/reducerBuilder';

import { addArticles } from './addArticles';
import { clearArticles } from './clearArticles';
import { initialState } from './initialState';

const reducerItems = [
  addArticles,
  clearArticles,
];

export const reducer = reducerBuilder(reducerItems, initialState);

export default reducer;
