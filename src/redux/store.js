import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import middlewareThunk from 'redux-thunk';

import rootReducer from './reducer';

const middlewares = [
  middlewareThunk,
];

export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;
