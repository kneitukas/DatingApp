import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  details(id) {
    this.userService.getUser(id).subscribe(
      user => {
        this.user = user;
        this.router.navigate([`/member/${id}`]);
      }
    );
  }

}
