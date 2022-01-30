import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './state';
import {postFeatureKey} from './reducer';

// Lookup the 'Post' feature state managed by NgRx
const getPostState = createFeatureSelector<State>(postFeatureKey);

export const selectPostList = createSelector(
  getPostState,
  state => state.posts
);

export const selectPostError = createSelector(
  getPostState,
  state => state.error
);

export const selectPostIsLoading = createSelector(
  getPostState,
  state => state.loading
);

export const selectAppComponentViewModel = createSelector(
  selectPostList,
  selectPostError,
  selectPostIsLoading,
  (jokes, error, loading) => ({
    jokes,
    error,
    loading
  })
);
