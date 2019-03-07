import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(data: User) {
   return this.http.post('http://localhost:5000/api/auth/login/', data ).pipe(
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
    return this.http.post('http://localhost:5000/api/auth/register/', data);
  }

  getValues() {
    return this.http.get('http://localhost:5000/api/values');
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return this.jwtHelper.decodeToken(token);
    }
    return;

  }

}
