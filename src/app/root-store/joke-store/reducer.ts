import {initialState, State} from './state';
import {createReducer, on} from '@ngrx/store';
import {fetchJokes, fetchJokesFailure, fetchJokesSuccess} from './actions';

const JOKE_REDUCER = createReducer(initialState,
  on(fetchJokes, state => {
    return {
      ...state,
      jokes: [],
      isLoading: true,
      error: null
    };
  }),
  on(fetchJokesSuccess, (state, {payload}) => {
    return {
      ...state,
      jokes: payload.items,
      isLoading: false,
      error: null
    };
  }),
  on(fetchJokesFailure, (state, {payload}) => {
    return {
      ...state,
      jokes: [],
      isLoading: false,
      error: payload.error
    };
  }),
);

export function jokeReducer(state, action): State {
  return JOKE_REDUCER(state, action);
}
