import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Counter] increment');
export const decrement = createAction('[Counter] decrement');
export const customIncrement = createAction('[Counter] customIncrement', props<{ payload: { counter: number } }>());
