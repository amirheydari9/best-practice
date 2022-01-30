import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './state';
import {jokeFeatureKey} from './reducer';

// Lookup the 'Joke' feature state managed by NgRx
const getJokeState = createFeatureSelector<State>(jokeFeatureKey);

export const selectJokeList = createSelector(
  getJokeState,
  state => state.jokes
);

export const selectJokeError = createSelector(
  getJokeState,
  state => state.error
);

export const selectJokeIsLoading = createSelector(
  getJokeState,
  state => state.isLoading
);

export const selectAppComponentViewModel = createSelector(
  selectJokeList,
  selectJokeError,
  selectJokeIsLoading,
  (jokes, error, loading) => ({
    jokes,
    error,
    loading
  })
);
