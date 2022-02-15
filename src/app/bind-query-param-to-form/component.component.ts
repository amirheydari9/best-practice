import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      searchTerm: new FormControl(''),
      category: new FormControl('one'),
    });

    this.form.valueChanges.subscribe((value) => {
      console.log('fetch data with new value', value);
    });
  }

}
