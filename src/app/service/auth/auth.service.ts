import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponseType } from './types';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
  ) {
  }

  public getToken(): string | undefined {
    if (localStorage.getItem('token')) {
      // @ts-ignore
      return localStorage.getItem('token');
    } else {
      return undefined;
    }
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public login(name: string, password: string): Observable<UserResponseType> {
    return this.http.post<UserResponseType>('http://localhost:3000/auth/login', { name, password });
  }

  public register(name: string, password: string): Observable<UserResponseType> {
    return this.http.post<UserResponseType>('http://localhost:3000/auth/register', { name, password });
  }

  public isAuthorized() {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }
}
