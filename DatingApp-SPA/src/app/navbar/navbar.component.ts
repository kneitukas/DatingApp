import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  form: FormGroup;
  token;
  constructor(fb: FormBuilder, private auth: AuthService, private alertify: AlertifyService, private router: Router) {
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
      this.router.navigateByUrl('/members');
    },
    error => {
      console.log('error');
    },
    () => {
      console.log('completed');
      // this.router.navigate(['/members']);
    }
  );
  }

  loggedIn() {
    const token = this.auth.loggedIn();
    return !token;
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
    this.alertify.message('Successfuly logged out!');
  }

}
