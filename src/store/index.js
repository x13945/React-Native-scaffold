import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    createReactNavigationReduxMiddleware(state => state.nav),
    logger,
  ),
);

export default store;
