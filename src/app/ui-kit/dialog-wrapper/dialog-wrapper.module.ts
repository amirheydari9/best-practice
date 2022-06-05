import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogWrapperComponent} from './dialog-wrapper.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogWrapperService} from './dialog-wrapper.service';
import {MyDialogComponent} from './my-dialog/my-dialog.component';
import {MyDialogService} from './my-dialog/my-dialog.service';


@NgModule({
  declarations: [DialogWrapperComponent, MyDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,

  ],
  exports: [DialogWrapperComponent, MyDialogComponent],
  providers: [DialogWrapperService, MyDialogService],
  entryComponents: [DialogWrapperComponent, MyDialogComponent]
})
export class DialogWrapperModule {
}
