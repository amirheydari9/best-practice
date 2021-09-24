import {Component, ComponentFactoryResolver, Injector, OnDestroy, OnInit, SimpleChange, ViewChild, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {QuizService} from './quiz.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {

  @ViewChild('quizContainer', {read: ViewContainerRef}) quizContainer: ViewContainerRef;
  quizStarted = false;
  private destroy$ = new Subject();

  constructor(
    private quizService: QuizService,
    private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async showNewQuestion() {
    this.lazyLoadQuizCard();
  }

  async startQuiz() {
    await this.lazyLoadQuizCard();
    this.quizStarted = true;
  }

  private async lazyLoadQuizCard() {
    const newQuestion = this.quizService.getNextQuestion();
    if (newQuestion) {
      const {QuizCardComponent} = await import('./quiz-card/quiz-card.component');
      const quizCardFactory = this.cfr.resolveComponentFactory(QuizCardComponent);
      const {instance} = this.quizContainer.createComponent(quizCardFactory, null, this.injector);
      instance.question = newQuestion;
      instance.questionAnswered.pipe(
        takeUntil(instance.destroy$)
      ).subscribe(() => this.showNewQuestion());
      (instance as any).ngOnChanges({
        question: new SimpleChange(null, instance.question, true)
      });
    }
  }
}
