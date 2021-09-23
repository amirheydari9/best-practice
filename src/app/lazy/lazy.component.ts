import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  message: string;

  @ViewChild('greetComp', {read: ViewContainerRef}) private greetComp: ViewContainerRef;

  constructor(
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
  }

  async loadGreetComponent() {
    this.greetComp.clear();
    const {GreetComponent} = await import('./greet/greet.component');
    const greetComp = this.greetComp.createComponent(
      this.cfr.resolveComponentFactory(GreetComponent)
    );
    greetComp.instance.greetMessage = Math.random().toString();
    greetComp.instance.sendMessageEvent.subscribe(data => this.message = data);
  }

}
