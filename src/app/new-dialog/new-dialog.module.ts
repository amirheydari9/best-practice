import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewDialogRoutingModule} from './new-dialog-routing.module';
import {NewDialogComponent} from './new-dialog.component';
import {ConfirmDialogModule} from '../ui-kit/confirm-dialog/confirm-dialog.module';


@NgModule({
  declarations: [
    NewDialogComponent
  ],
  imports: [
    CommonModule,
    NewDialogRoutingModule,
    ConfirmDialogModule
  ],
})
export class NewDialogModule {
}
