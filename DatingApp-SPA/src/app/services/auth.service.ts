import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(data: User) {
   return this.http.post(`${this.baseUrl}auth/login/`, data ).pipe(
     map( (response: any) => {
       const user = response;
       if (user) {
         localStorage.setItem('token', user.token);
         this.decodedToken = this.jwtHelper.decodeToken(user.token);
       }
     })
   );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
  }

  register(data: User) {
    return this.http.post(`${this.baseUrl}auth/register/`, data);
  }

  getValues() {
    return this.http.get(`${this.baseUrl}values/`);
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return this.jwtHelper.decodeToken(token);
    }
    return;

  }

}
