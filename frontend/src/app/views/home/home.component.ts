import { Component, OnInit } from '@angular/core';
import User from 'src/app/components/book/user.model';
import UserService from 'src/app/components/book/user.service';
import { HeaderService, HeaderData } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  headerData: HeaderData = {
    icon: "dashboard",
    title: "Dashboard",
  };

  constructor(private userService: UserService,
              private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.updateHeader(this.headerData);

    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
