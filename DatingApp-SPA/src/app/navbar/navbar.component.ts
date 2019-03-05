import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../Models/User';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({
      username: [''],
      password: ['']
    });
   }

  ngOnInit() {
  }

  login() {
  this.auth.login(this.form.value).subscribe(
    next => {
      console.log('Logged in successfully');
    },
    error => {
      console.log('failed to login');
    }
  );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
