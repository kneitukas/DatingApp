import { Component, OnInit, OnChanges } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterLinkActive, RouterState, ActivatedRoute, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  constructor(public router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
