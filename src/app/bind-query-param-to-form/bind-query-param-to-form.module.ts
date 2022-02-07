import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BindQueryParamToFormRoutingModule} from './bind-query-param-to-form-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentComponent} from './component.component';
import { BindQueryParamDirective } from './directive/bind-query-param.directive';


@NgModule({
  declarations: [
    ComponentComponent,
    BindQueryParamDirective
  ],
  imports: [
    CommonModule,
    BindQueryParamToFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BindQueryParamToFormModule {
}
