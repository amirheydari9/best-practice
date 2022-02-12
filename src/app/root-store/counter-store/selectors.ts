import {createFeatureSelector, createSelector} from '@ngrx/store';
import {counterFeatureKey, State} from './state';

const getCounterState = createFeatureSelector<State>(counterFeatureKey);

export const getCounter = createSelector(
  getCounterState,
  state => state.counter
);

