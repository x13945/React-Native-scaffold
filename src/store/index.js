import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
