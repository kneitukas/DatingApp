import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  values;
  form: FormGroup;
  constructor(private auth: AuthService, fb: FormBuilder, private router: Router, private alertify: AlertifyService) {
    this.form = fb.group({
      username: [''],
      password: ['']
    });
    this.values = this.auth.getValues();
  }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.form.value).subscribe(
      next => {
        this.alertify.success('Registration successfull');
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}
