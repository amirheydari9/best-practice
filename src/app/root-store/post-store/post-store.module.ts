import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {PostStoreEffects} from './effects';
import {postFeatureKey, postReducer} from './reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(postFeatureKey, postReducer),
    EffectsModule.forFeature([PostStoreEffects])
  ]
})
export class PostStoreModule {
}
