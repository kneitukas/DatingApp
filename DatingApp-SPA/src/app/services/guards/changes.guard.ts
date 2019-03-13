import { Injectable } from '@angular/core';
import { MemberEditComponent } from 'src/app/members/member-edit/member-edit.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangesGuard implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
      if (component.form.dirty) {
        return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
      }
      return true;
  }
}
