import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//makign an array so we can add multiple later in project
const middlewares = [logger];

//single store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;