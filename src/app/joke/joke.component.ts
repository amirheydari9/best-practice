import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '../root-store';
import {JokeStoreActions, JokeStoreSelectors} from '../root-store/joke-store';
import {Observable} from 'rxjs';
import {Joke} from '../models/Joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  jokes$: Observable<Joke[]>;
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

    this.error$ = this.store$.select(
      JokeStoreSelectors.selectJokeError
    );

    this.isLoading$ = this.store$.select(
      JokeStoreSelectors.selectJokeIsLoading
    );

    this.store$.dispatch(new JokeStoreActions.LoadRequestAction());
  }

}
