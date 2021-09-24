import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LazyComponent} from './lazy.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {
}
