import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/_models/User';
import { UserService } from '../user.service';
import { AlertifyService } from '../alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberListResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(
  ): User | Observable<User> | Promise<User> {
    return this.userService.getUsers().pipe(
      catchError(
        error => {
          this.alertify.error('Problem retrieving data');
          this.router.createUrlTree(['/home']);
          return of(null);
        }
        )
    );
  }


}
