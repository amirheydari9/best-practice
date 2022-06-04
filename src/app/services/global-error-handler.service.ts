import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(
    private router: Router
  ) {
  }

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      console.log(error, 'as');
      // this.router.navigate(['/form']);
    } else {
      console.log(error);
      console.error('an error occurred here broo');
    }
  }
}
