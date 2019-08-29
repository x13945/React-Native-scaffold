import {COUNTER_PLUS, COUNTER_MINUS} from '../actions/actionTypes';

const initialState = {
  value: 0,
};
export default function counter(state = initialState, action) {
  switch (action.type) {
    case COUNTER_PLUS: {
      const {value} = state;
      return {value: value + 1};
    }
    case COUNTER_MINUS: {
      const {value} = state;
      return {value: value - 1};
    }
    default:
      return state;
  }
}
