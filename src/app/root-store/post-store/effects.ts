import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import * as PostActions from './actions';
import {PostService} from '../../services/post-service.service';

@Injectable()
export class PostStoreEffects {
  constructor(
    private postService: PostService,
    private actions$: Actions) {
  }

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<PostActions.LoadRequestAction>(
      PostActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new PostActions.LoadRequestAction()),
    switchMap(action =>
      this.postService
        .getPosts()
        .pipe(
          map(items => new PostActions.LoadSuccessAction({items})),
          catchError(error =>
            observableOf(new PostActions.LoadFailureAction({error}))
          )
        )
    )
  );
}
