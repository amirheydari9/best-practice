import {JokeStoreState} from './joke-store';
import {CounterStoreState} from './counter-store';

export interface State {
  [JokeStoreState.jokeFeatureKey]: JokeStoreState.State;
  [CounterStoreState.counterFeatureKey]: CounterStoreState.State;

}
