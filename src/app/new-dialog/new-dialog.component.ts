import {Component, OnInit} from '@angular/core';
import {ConfirmDialogService} from '../ui-kit/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss']
})
export class NewDialogComponent implements OnInit {


  constructor(
    private dialogService: ConfirmDialogService
  ) {
  }

  ngOnInit(): void {
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
}
