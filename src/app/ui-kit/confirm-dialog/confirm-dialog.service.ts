import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './confirm-dialog.component';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable()
export class ConfirmDialogService {

  constructor(
    private dialog: MatDialog
  ) {
  }

  dialogRef: MatDialogRef<ConfirmDialogComponent>;

  public open(options): void {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText
      }
    });
  }

  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(res => res));
  }
}
