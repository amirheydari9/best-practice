import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export const jokeFeatureKey = 'joke';

export function jokeReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        jokes: [],
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_SUCCESS: {
      return {
        ...state,
        jokes: action.payload.items,
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
