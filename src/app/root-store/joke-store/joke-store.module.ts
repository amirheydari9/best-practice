import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {jokeFeatureKey, jokeReducer} from './reducer';
import {JokeStoreEffects} from './effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(jokeFeatureKey, jokeReducer),
    EffectsModule.forFeature([JokeStoreEffects]),
  ]
})
export class JokeStoreModule {
}
