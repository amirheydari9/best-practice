import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  NgModule,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FirstChildComponent} from './first-child/first-child.component';
import {CommonModule} from '@angular/common';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit, OnDestroy {

  @Input() greetMessage: string;
  @Output() sendMessageEvent = new EventEmitter();

  message: string;
  destroy$ = new Subject();

  constructor(
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    this.vcref.clear();
    import('./second-child/second-child.component').then(({SecondChildComponent}) => {
      this.vcref.createComponent(
        this.cfr.resolveComponentFactory(SecondChildComponent)
      );
    });

    this.vcref.createComponent(
      this.cfr.resolveComponentFactory(FirstChildComponent)
    );
  }

  greet(): void {
    this.sendMessageEvent.emit(Math.random().toString());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

@NgModule({
  declarations: [GreetComponent],
  imports: [CommonModule, FormsModule]
})
class GreetComponentModule {
}
