import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {counterReducer} from './reducer';
import {counterFeatureKey} from './state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer),
    EffectsModule.forFeature([]),
  ]
})
export class CounterStoreModule {
}
