import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad, CanActivate {

  // همیشه باید از هر دو اینترفیس استفاده کنینم چون ممکنه کاربر لاگین نباشه ولی به خاطر لود ماژول به کامپوننت ها دسترسی داشته باشه
  // https://www.concretepage.com/angular/angular-canload-guard-example
  isUserLoggedIn = true;

  constructor(private router: Router) {
  }

  canLoad(route: Route): boolean {
    const url: string = route.path;
    console.log('Url:' + url);
    if (this.isUserLoggedIn) {
      return true;
    }
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  // canLoad(route: Route): boolean {
  //   const url = route.path;
  //   console.log('Url:' + url);
  //   if (this.authService.isUserLoggedIn()) {
  //     return true;
  //   }
  //   this.authService.setRedirectUrl(url);
  //   this.router.navigate([this.authService.getLoginUrl()]);
  //   return false;
  // }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   const url: string = state.url;
  //   console.log('Url:' + url);
  //   if (this.authService.isUserLoggedIn()) {
  //     return true;
  //   }
  //   this.authService.setRedirectUrl(url);
  //   this.router.navigate([this.authService.getLoginUrl()]);
  //   return false;
  // }
}
