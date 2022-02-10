import {JokeStoreState} from './joke-store';
import {CounterStoreState} from './counter-store';

export interface State {
  joke: JokeStoreState.State;
  [CounterStoreState.counterFeatureKey]: CounterStoreState.State;

}
