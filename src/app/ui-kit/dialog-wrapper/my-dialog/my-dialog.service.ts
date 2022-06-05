import {Injectable, TemplateRef} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';
import {MyDialogComponent} from './my-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MyDialogService {

  constructor(public dialog: MatDialog) {
  }

  private conf = {autoFocus: true};

  private mediumConf = {height: 'auto', width: '70%', ...this.conf};

  public open<T>(component: ComponentType<T> | TemplateRef<T>, data?: any, config?: MatDialogConfig) {
    this.mediumConf['data'] = {component, data};
    const conf = {...this.mediumConf, ...config};
    return this.dialog.open(MyDialogComponent, conf);
  }

  // public error<T>(data: any) {
  //   return this.dialog.open(AlertDialogComponent, {panelClass: 'alert-panel', data: data});
  // }
}
