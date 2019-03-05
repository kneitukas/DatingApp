import { Component, OnInit } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterLinkActive, RouterState, ActivatedRoute, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values;

  constructor(public router: Router, private auth: AuthService) {
    this.values = this.auth.getValues();
  }

  ngOnInit() {
  }
}
