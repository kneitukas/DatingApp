import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AlertifyService } from '../alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const loggedIn = this.auth.loggedIn();
    const url = this.router.createUrlTree(['/']);
    if (!loggedIn) {
      return true;
    } else {
      this.alertify.error('You shall not pass!!!');
      return url;
    }
  }
}
