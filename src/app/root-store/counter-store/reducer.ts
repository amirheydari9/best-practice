import {increment, decrement, customIncrement} from './actions';
import {initialState, State} from './state';
import {createReducer, on} from '@ngrx/store';

const COUNTER_REDUCER = createReducer(initialState,
  on(increment, (state) => ({
    ...state,
    counter: state.counter + 1
  })),
  on(decrement, (state) => ({
    ...state,
    counter: state.counter - 1
  })),
  on(customIncrement, (state, {payload}) => {
    return {
      ...state,
      counter: state.counter + payload.counter
    };
  }),
);

export function counterReducer(state, action): State {
  return COUNTER_REDUCER(state, action);
}
