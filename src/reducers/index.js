import {combineReducers} from 'redux';
import counter from './counter';
import navState from './nav';

const reducers = combineReducers({
  counter: counter,
  nav: navState,
});

export default reducers;
