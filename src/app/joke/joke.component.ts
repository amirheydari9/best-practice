import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '../root-store';
import {JokeStoreActions, JokeStoreSelectors} from '../root-store/joke-store';
import {Observable} from 'rxjs';
import {Joke} from '../models/Joke';
import {Post} from "../models/Post";
import {PostStoreActions, PostStoreSelectors} from "../root-store/post-store";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  jokes$: Observable<Joke[]>;
  posts$: Observable<Post[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(
    private store$: Store<RootStoreState.State>
  ) {
  }

  ngOnInit(): void {

    this.jokes$ = this.store$.select(
      JokeStoreSelectors.selectJokeList
    );

    this.posts$ = this.store$.select(
      PostStoreSelectors.selectPostList
    );

    this.error$ = this.store$.select(
      JokeStoreSelectors.selectJokeError
    );

    this.isLoading$ = this.store$.select(
      JokeStoreSelectors.selectJokeIsLoading
    );

    this.store$.dispatch(new JokeStoreActions.LoadRequestAction());
    this.store$.dispatch(new PostStoreActions.LoadRequestAction());
  }

}
