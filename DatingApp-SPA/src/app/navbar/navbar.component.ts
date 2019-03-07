import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../Models/User';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  form: FormGroup;
  token;
  constructor(fb: FormBuilder, private auth: AuthService, private alertify: AlertifyService) {
    this.form = fb.group({
      username: [''],
      password: ['']
    });
   }

  ngOnInit() {
    this.token = this.auth.getToken();
  }

  login() {
  this.auth.login(this.form.value).subscribe(
    next => {
      this.token = this.auth.getToken();
      this.alertify.success('Successfuly logged in!');
    },
    error => {
      console.log(error);
    }
  );
  }

  loggedIn() {
    const token = this.auth.loggedIn();
    return !token;
  }

  logout() {
    this.auth.logout();
    this.alertify.message('Successfuly logged out!');
  }

}
