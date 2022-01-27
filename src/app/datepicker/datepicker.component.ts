import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      date1: ['1398-01-05'],
      date2: ['1398-01-05'],
    });

    this.date1.valueChanges.subscribe(val => console.log(val));
    this.date2.valueChanges.subscribe(val => console.log(val));
  }

  get date1(): FormControl {
    return this.form.get('date1') as FormControl;
  }
  get date2(): FormControl {
    return this.form.get('date2') as FormControl;
  }
}
