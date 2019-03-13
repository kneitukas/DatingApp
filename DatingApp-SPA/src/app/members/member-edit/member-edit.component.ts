import { Component, OnInit, HostListener } from '@angular/core';
import { User } from 'src/app/_models/User';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  form: FormGroup;
  user: User;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.form.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private alertify: AlertifyService,
    private auth: AuthService
  ) {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
    this.form = fb.group({
      introduction: this.user.introduction,
      lookingFor: this.user.lookingFor,
      interests: this.user.interests,
      city: this.user.city,
      country: this.user.country
    });
  }

  ngOnInit() {}

  updateUser() {
    this.userService
      .updateUser(this.auth.decodedToken.nameid, this.form.value)
      .subscribe(
        next => {
          this.alertify.success('Profile successfully updated!');
          this.form.reset();
        },
        error => {
          this.alertify.error(error);
          this.form.reset(this.form.value);
        }
      );
  }
}
