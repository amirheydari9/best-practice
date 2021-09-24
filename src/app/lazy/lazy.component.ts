import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit, OnDestroy {

  message: string;
  private destroy$ = new Subject();

  @ViewChild('greetComp', {read: ViewContainerRef}) private greetComp: ViewContainerRef;

  constructor(
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
  }

  async loadGreetComponent(): Promise<any> {
    this.greetComp.clear();
    const {GreetComponent} = await import('./greet/greet.component');
    const {instance} = this.greetComp.createComponent(
      this.cfr.resolveComponentFactory(GreetComponent)
    );
    instance.greetMessage = Math.random().toString();
    instance.sendMessageEvent.pipe(takeUntil(instance.destroy$)).subscribe(data => this.message = data);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
