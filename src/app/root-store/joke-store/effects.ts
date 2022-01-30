import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import * as jokeActions from './actions';
import {JokeService} from '../../services/joke-service.service';

@Injectable()
export class JokeStoreEffects {
  constructor(
    private jokeService: JokeService,
    private actions$: Actions) {
  }

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<jokeActions.LoadRequestAction>(
      jokeActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new jokeActions.LoadRequestAction()),
    switchMap(action =>
      this.jokeService
        .getJokes()
        .pipe(
          map(
            items =>
              new jokeActions.LoadSuccessAction({
                items
              })
          ),
          catchError(error =>
            observableOf(new jokeActions.LoadFailureAction({error}))
          )
        )
    )
  );
}
