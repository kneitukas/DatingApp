import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { AlertifyService } from '../../services/alertify.service';
import { User } from '../../_models/User';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.data.subscribe(
      data => {
        this.users = data.users;
      }
    );
  }

}
