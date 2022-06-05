import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../../dialog/models/dialog-data.model';
import {first} from 'rxjs/operators';
import {DialogWrapperComponent} from './dialog-wrapper.component';

@Injectable()
export class DialogWrapperService {

  private defaultDialogConfig: MatDialogConfig = {
    width: '500px',
    disableClose: false,
    hasBackdrop: false
  };

  constructor(
    private dialog: MatDialog,
  ) {
  }

  dialogRef: MatDialogRef<DialogWrapperComponent>;

  open(dialogData: DialogData, config?: MatDialogConfig): MatDialogRef<DialogWrapperComponent> {
    this.dialogRef = this.dialog.open(DialogWrapperComponent, {
        ...this.defaultDialogConfig,
        ...config,
        data: dialogData
      }
    );
    // this.dialogRef.afterClosed().pipe(first());
    return this.dialogRef;
  }
}
