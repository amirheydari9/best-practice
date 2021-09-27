import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './components/dialog/dialog.component';
import {ButtonComponent} from './components/button/button.component';
import {DialogFactoryService} from './service/dialog-factory.service';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [DialogComponent, ButtonComponent],
  declarations: [DialogComponent, ButtonComponent],
  entryComponents: [DialogComponent],
  providers: [DialogFactoryService]
})
export class DialogModule {
}
