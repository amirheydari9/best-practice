import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadComponent} from './preload.component';
import {PreloadRoutingModule} from './preload-routing.module';


@NgModule({
  declarations: [PreloadComponent],
  imports: [CommonModule, PreloadRoutingModule]
})

export class PreloadModule {
}
