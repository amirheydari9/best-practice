import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  TOKEN_KEY = 'auth-token';
  REFRESH_TOKEN_KEY = 'auth-refresh-token';
  USER_KEY = 'auth-user';

  constructor() {
  }

  public signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
    const user = this.getUser();
    if (user.id) {
      this.saveUser({...user, accessToken: token});
    }
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  public saveRefreshToken(refreshToken: string): void {
    window.sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
    window.sessionStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
  }

  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
}
