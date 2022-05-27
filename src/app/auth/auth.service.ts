import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // gets access to the current active user
  user = new BehaviorSubject<User>(null);
  private tokenExpTimer: any;

  API_KEY = 'AIzaSyAr0TQUwL5aTqe4vL0J7ES14nuqwCgtwBQ';

  constructor(private http: HttpClient, private router: Router) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.API_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.API_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExp: string
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }
    else {
      const expiration = +userData._tokenExp;
      const loadedUser = new User(userData.email, userData.id, userData._token, expiration);
      if (loadedUser.token) {

        this.user.next(loadedUser);
        this.autoLogout(expiration*1000);
      }
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
    }
    this.tokenExpTimer = null;
  }

  autoLogout(expiration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.logout();
    }, expiration);
  }

  private handleError(errorRes: HttpErrorResponse) {

    console.log(errorRes);

    let errorMessage = 'An unknown error ocurred';
    if (errorRes.error && errorRes.error.error) {
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = "This email already exists";
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = "Wrong email or password";
          break;
        case 'INVALID_PASSWORD':
          errorMessage = "Wrong email or password";
          break;
        case 'USER_DISABLED':
          errorMessage = "This email is disabled";
          break;
        default:
          errorMessage = "An error ocurred: " + errorRes.error.error.message;

      }
    }
    return throwError(errorMessage);
  }

  private handleAuth(email: string, localId: string, token: string, expiresIn: number) {

    const user = new User(email, localId, token, +expiresIn);
    this.user.next(user);
    this.autoLogout(expiresIn*1000);

    localStorage.setItem('userData', JSON.stringify(user));
  }
}
