import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfirmDialogService} from 'src/app/ui-kit/confirm-dialog/confirm-dialog.service';
import {MyDialogService} from '../../ui-kit/dialog-wrapper/my-dialog/my-dialog.service';
import {DetailDialogComponent} from './detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    private fb: FormBuilder,
    private confirmDialogService: ConfirmDialogService,
    private myDialogService: MyDialogService
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
    this.dialogRef.close(this.userForm.value);
  }

  handleOpenDialog() {
    const options = {
      title: 'delete account',
      message: 'are you sure',
      cancelText: 'cancel',
      confirmText: 'confirm '
    };
    this.confirmDialogService.open(options);
    this.confirmDialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        console.log(confirmed);
      }
    });
  }

  handleOpenDetailDialog() {
    this.myDialogService.open(DetailDialogComponent, null, {width: '400px', hasBackdrop: true});
  }
}
