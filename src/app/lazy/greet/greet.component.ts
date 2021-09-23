import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {

  @Input() greetMessage: string;
  @Output() sendMessageEvent = new EventEmitter();

  message: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  greet(): void {
    this.sendMessageEvent.emit(Math.random().toString());
  }
}

@NgModule({
  declarations: [GreetComponent],
  imports: [FormsModule]
})
class GreetComponentModule {}
