import {Injectable, TemplateRef} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';
import {MyDialogComponent} from './my-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MyDialogService {

  constructor(
    public dialog: MatDialog
  ) {
  }

  private defaultDialogConfig: MatDialogConfig = {
    disableClose: true,
    autoFocus: true,
    height: 'auto',
    width: '70%'
  };

  public open<T>(component: ComponentType<T> | TemplateRef<T>, config?: MatDialogConfig): MatDialogRef<MyDialogComponent> {
    const data = {component, data: config ? config.data : null};
    const conf = {...this.defaultDialogConfig, ...config, data};
    return this.dialog.open(MyDialogComponent, conf);
  }

  // public error<T>(data: any) {
  //   return this.dialog.open(AlertDialogComponent, {panelClass: 'alert-panel', data: data});
  // }
}
