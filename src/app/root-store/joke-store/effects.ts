import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {JokeService} from '../../services/joke-service.service';
import {fetchJokes, fetchJokesFailure, fetchJokesSuccess} from './actions';

@Injectable()
export class JokeStoreEffects {
  constructor(
    private jokeService: JokeService,
    private actions$: Actions
  ) {
  }

  fetchJokesEffect$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchJokes),
      switchMap(action =>
        this.jokeService.getJokes().pipe(
          map(items => fetchJokesSuccess({payload: {items}})),
          catchError(error => of(fetchJokesFailure({payload: {error}})))
        )
      )
    );
  });
}
