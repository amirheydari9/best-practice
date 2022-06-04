import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewDialogComponent} from './new-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: NewDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDialogRoutingModule {
}
