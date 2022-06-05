import {Component, Inject, OnDestroy} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../../dialog/models/dialog-data.model';

@Component({
  selector: 'app-dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.scss']
})
export class DialogWrapperComponent implements OnDestroy{

  constructor(
    public dialogRef: MatDialogRef<DialogWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  handleCloseDialog(): void {
    this.dialogRef.close('hi');
  }

  ngOnDestroy() {
    console.log('bye');
  }

}
