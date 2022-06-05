import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogWrapperComponent} from './dialog-wrapper.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogWrapperService} from './dialog-wrapper.service';


@NgModule({
  declarations: [DialogWrapperComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [DialogWrapperComponent],
  providers: [DialogWrapperService],
  entryComponents: [DialogWrapperComponent]
})
export class DialogWrapperModule {
}
