import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogRoutingModule} from './dialog-routing.module';
import {WrapperComponent} from './wrapper.component';
import {DialogModule} from './dialog.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    DialogRoutingModule,
    DialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
})
export class DialogWrapperModule {
}
