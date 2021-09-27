import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadRoutingModule } from './preload-routing.module';
import { PreloadComponent } from './preload.component';


@NgModule({
  declarations: [
    PreloadComponent
  ],
  imports: [
    CommonModule,
    PreloadRoutingModule
  ]
})
export class PreloadModule { }
