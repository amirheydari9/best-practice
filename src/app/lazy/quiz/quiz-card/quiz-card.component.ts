import {Component, Input, OnInit, SimpleChanges, EventEmitter, Output, NgModule, OnChanges, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Question} from '../quiz.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnChanges, OnDestroy {

  @Input() question: Question;
  @Output() questionAnswered = new EventEmitter<boolean>();
  destroy$ = new Subject();
  answeredCorrectly: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  answer(selectedAnswer: string) {
    this.answeredCorrectly = selectedAnswer === this.question.correctAnswer;
    this.questionAnswered.next(this.answeredCorrectly);
  }
}

@NgModule({
  declarations: [QuizCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
class QuizCardModule {
}
