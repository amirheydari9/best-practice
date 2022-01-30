import {JokeStoreState} from './joke-store';
import {PostStoreState} from './post-store';

export interface State {
  joke: JokeStoreState.State;
  post: PostStoreState.State;
}
