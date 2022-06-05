import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ConfirmDialogService} from '../ui-kit/confirm-dialog/confirm-dialog.service';
import {DialogWrapperService} from '../ui-kit/dialog-wrapper/dialog-wrapper.service';
import {MatDialogRef} from '@angular/material/dialog';
import {DialogWrapperComponent} from '../ui-kit/dialog-wrapper/dialog-wrapper.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MyDialogService} from '../ui-kit/dialog-wrapper/my-dialog/my-dialog.service';
import {UserDialogComponent} from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss']
})
export class NewDialogComponent implements OnInit {

  @ViewChild('firstDialogTemplate')
  firstDialogTemplate: TemplateRef<any>;

  @ViewChild('secondDialogTemplate')
  secondDialogTemplate: TemplateRef<any>;

  dialogRef1: MatDialogRef<DialogWrapperComponent>;

  userForm: FormGroup;


  constructor(
    private dialogService: ConfirmDialogService,
    private dialogWrapperService: DialogWrapperService,
    private fb: FormBuilder,
    private myDialogService: MyDialogService
  ) {
  }


  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: '',
      email: ''
    });
  }

  handleOpenConfirmDialog(): void {
    const options = {
      title: 'delete account',
      message: 'are you sure',
      cancelText: 'cancel',
      confirmText: 'confirm '
    };
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        console.log(confirmed);
      }
    });
  }

  dispatchDialog1(): void {
    this.dialogRef1 = this.dialogWrapperService.open({
      headerText: 'Here is our dialog',
      template: this.firstDialogTemplate
    });
    this.dialogRef1.afterClosed().subscribe((data) => console.log(data));

    // this.openDialog({
    //   headerText: 'Here is our dialog1',
    //   template: this.firstDialogTemplate
    // });
  }

  // dispatchDialog2(): void {
  //   this.openDialog({
  //     headerText: 'Here is our dialog2',
  //     template: this.secondDialogTemplate
  //   });
  // }

  // private openDialog(dialogData: DialogData): void {
  //   this.dialogRef = this.dialogWrapperService.open(dialogData);
  //   this.dialogRef.beforeClosed().subscribe((data) => console.log(data));
  // }

  handleCloseDialog1() {
    this.dialogRef1.close('aaaaaa');
  }

  handleSubmitForm() {
    const formValue = this.userForm.value;
    this.dialogRef1.close(formValue);
    this.userForm.reset();
  }

  openUserDialog() {
    this.myDialogService.open(UserDialogComponent);
  }
}

