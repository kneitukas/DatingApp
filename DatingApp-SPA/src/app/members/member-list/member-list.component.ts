import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { AlertifyService } from '../../services/alertify.service';
import { User } from '../../_models/User';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private alertify: AlertifyService) {
    this.userService.getUsers().subscribe(
      (user: User[]) => {
        this.users = user;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {

  }

}
