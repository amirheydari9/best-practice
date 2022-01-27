import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DatepickerRoutingModule} from './datepicker-routing.module';
import {DatepickerComponent} from './datepicker.component';
import {NgPersianDatepickerModule} from 'ng-persian-datepicker';
import {ReactiveFormsModule} from '@angular/forms';

// import {DpDatePickerModule} from 'ng2-jalali-date-picker';


@NgModule({
  declarations: [DatepickerComponent],
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule
    // DpDatePickerModule

  ]
})
export class DatepickerModule {
}
