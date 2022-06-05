import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewDialogRoutingModule} from './new-dialog-routing.module';
import {NewDialogComponent} from './new-dialog.component';
import {ConfirmDialogModule} from '../ui-kit/confirm-dialog/confirm-dialog.module';
import {DialogWrapperModule} from '../ui-kit/dialog-wrapper/dialog-wrapper.module';
import {ReactiveFormsModule} from '@angular/forms';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { DetailDialogComponent } from './user-dialog/detail-dialog/detail-dialog.component';


@NgModule({
  declarations: [
    NewDialogComponent,
    UserDialogComponent,
    DetailDialogComponent
  ],
  imports: [
    CommonModule,
    NewDialogRoutingModule,
    ConfirmDialogModule,
    DialogWrapperModule,
    ReactiveFormsModule
  ],
})
export class NewDialogModule {
}
