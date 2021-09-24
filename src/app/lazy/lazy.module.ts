import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyComponent} from './lazy.component';
import {LazyRoutingModule} from './lazy-routing.module';
import {QuizComponent} from './quiz/quiz.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    LazyComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class LazyModule {
}
