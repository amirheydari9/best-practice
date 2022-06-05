import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss'],
})
export class MyDialogComponent implements OnDestroy, AfterViewInit {

  @ViewChild('target', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

  componentRef: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngAfterViewInit(): void {
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.viewContainerRef.createComponent(factory);
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
