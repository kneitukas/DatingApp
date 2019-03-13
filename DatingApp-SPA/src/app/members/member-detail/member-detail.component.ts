import { Component, OnInit, Input, ViewChildren, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('tab') tab;
  @Input() user: User;
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
    console.log(this.tab)
  }

  loadUser() {
    this.userService.getUser(this.route.snapshot.params.id).subscribe(
      user => {
        this.user = user;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

}
