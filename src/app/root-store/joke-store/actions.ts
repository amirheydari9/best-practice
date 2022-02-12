import {createAction, props} from '@ngrx/store';
import {Joke} from '../../models/Joke';

export const fetchJokes = createAction('[Joke] fetchJokes');
export const fetchJokesSuccess = createAction('[Joke] fetchJokesSuccess', props<{ payload: { items: Joke[] } }>());
export const fetchJokesFailure = createAction('[Joke] fetchJokesFailure', props<{ payload: { error: string } }>());

