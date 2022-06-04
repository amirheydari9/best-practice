import {Component, TemplateRef, ViewChild} from '@angular/core';
import {DialogService} from './service/dialog.service';
import {DialogFactoryService} from './service/dialog-factory.service';
import {DialogData} from './models/dialog-data.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

  title = 'dialog-example';

  dialog: DialogService;
  
  @ViewChild('firstDialogTemplate')
  firstDialogTemplate: TemplateRef<any>;

  @ViewChild('secondDialogTemplate')
  secondDialogTemplate: TemplateRef<any>;

  @ViewChild('loaderDialogTemplate')
  loaderDialogTemplate: TemplateRef<any>;

  constructor(private dialogFactoryService: DialogFactoryService) {
  }

  dispatchDialog() {
    this.openDialog({
      headerText: 'Here is our dialog',
      template: this.firstDialogTemplate
    });
  }

  changeDialogTemplate(template: TemplateRef<any>) {
    this.dialog.setTemplate(this.loaderDialogTemplate);
    setTimeout(() => {
      this.dialog.setTemplate(template);
    }, 3000);
  }

  closeDialog() {
    this.dialog.close();
  }

  private openDialog(dialogData: DialogData): void {
    this.dialog = this.dialogFactoryService.open(dialogData);
  }

}
