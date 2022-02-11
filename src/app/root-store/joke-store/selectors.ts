import {createFeatureSelector, createSelector} from '@ngrx/store';
import {jokeFeatureKey, State} from './state';

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
