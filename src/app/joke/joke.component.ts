import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '../root-store';
import {JokeStoreActions, JokeStoreSelectors} from '../root-store/joke-store';
import {Observable} from 'rxjs';
import {Joke} from '../models/Joke';
import {CounterStoreActions, CounterStoreSelectors} from '../root-store/counter-store';
import {JokeService} from '../services/joke-service.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  jokes$: Observable<Joke[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  counter: Observable<number>;

  constructor(
    private store$: Store<RootStoreState.State>,
    private jokeService: JokeService
  ) {
  }

  ngOnInit(): void {

    this.handleError();

    this.jokes$ = this.store$.select(
      JokeStoreSelectors.selectJokeList
    );

    this.error$ = this.store$.select(
      JokeStoreSelectors.selectJokeError
    );

    this.isLoading$ = this.store$.select(
      JokeStoreSelectors.selectJokeIsLoading
    );

    this.store$.dispatch(JokeStoreActions.fetchJokes());

    this.counter = this.store$.select(CounterStoreSelectors.getCounter);

  }

  handleIncrement(): void {
    this.store$.dispatch(CounterStoreActions.increment());
  }

  handleDecrement(): void {
    this.store$.dispatch(CounterStoreActions.decrement());
  }

  handleCustomIncrement(): void {
    const payload = {counter: 5};
    this.store$.dispatch(CounterStoreActions.customIncrement({payload}));
  }

  handleError() {
    this.jokeService.getError().subscribe();
  }
}
