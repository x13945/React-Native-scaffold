import {COUNTER_PLUS, COUNTER_MINUS} from './actionTypes';

export function minus() {
  return {type: COUNTER_MINUS};
}
export function plus() {
  return {type: COUNTER_PLUS};
}

export function plusAsync() {
  return dispatch => {
    setTimeout(() => dispatch(plus()), 3 * 1000);
  };
}
