import {Joke} from '../../models/Joke';

export const jokeFeatureKey = 'joke';

export interface State {
  jokes: Joke[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  jokes: [],
  isLoading: false,
  error: null
};
