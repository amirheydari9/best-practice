import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyComponent} from './lazy.component';
import {LazyRoutingModule} from './lazy-routing.module';


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class LazyModule {
}
