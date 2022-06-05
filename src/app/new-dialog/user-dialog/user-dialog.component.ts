import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder
  ) {
  }

  public user = this.data.data;

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: '',
      email: ''
    });
  }

  handleSubmitForm() {

  }
}
