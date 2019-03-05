import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: User) {
   return this.http.post('http://localhost:5000/api/auth/login/', data ).pipe(
     map( (response: any) => {
       const user = response;
       if (user) {
         localStorage.setItem('token', user.token);
       }
     })
   );
  }

  register(data: User) {
    return this.http.post('http://localhost:5000/api/auth/register/', data);
  }

  getValues() {
    return this.http.get('http://localhost:5000/api/values');
  }
}
